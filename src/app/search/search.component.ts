
import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';
import { FavouritesService } from '../favourites.service';
import { countries } from '../shared/components/store/country-data-store';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  countries:any = countries
  universities: any[] = [];
  filteredUniversities: any[] = [];
  selectedCountry = 'Canada';
  searchTerm = '';
  loading = false;
  apiStatus: number | null = null;
  apiDuration: number | null = null;
  errorMessage: string | null = null;

  constructor(private universityService: UniversityService, private favouritesService: FavouritesService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetchUniversities();
  }

  fetchUniversities(): void {
    this.loading = true;
    this.universityService.getUniversities(this.selectedCountry).subscribe(
      result => {
        this.universities = result.data;
        this.filteredUniversities = this.universities;
        this.apiStatus = result.statusCode;
        this.apiDuration = result.duration;
        this.loading = false;
      },
      error => {
        this.errorMessage = error.error;
        this.apiStatus = error.statusCode;
        this.apiDuration = error.duration;
        this.loading = false;
      }
    );
  }

  applyFilters(): void {
    this.filteredUniversities = this.universities.filter(u =>
      u.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  clearFilters(): void {
    this.selectedCountry = 'Canada';
    this.searchTerm = '';
    this.fetchUniversities();
  }
  toggleFavourite(university: any): void {
    if (this.isFavourite(university)) {
      this.favouritesService.removeFavourite(university);
    } else {
      this.favouritesService.addFavourite(university);
    }
    const message = this.isFavourite(university) ? 'Added to favourites!' : 'Removed from favourites!';
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  isFavourite(university: any): boolean {
    return this.favouritesService.getFavourites().some(fav => fav.name === university.name);
  }
}

