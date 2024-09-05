import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../favourites.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites: any[] = [];

  constructor(private favouritesService: FavouritesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadFavourites();
  }

  loadFavourites(): void {
    this.favourites = this.favouritesService.getFavourites();
  }

  removeFavourite(university: any): void {
    this.favouritesService.removeFavourite(university);
    const message =  'Removed from favourites!';
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
    this.loadFavourites();
  }
}
