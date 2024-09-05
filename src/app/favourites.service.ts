import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private storageKey = 'favouriteUniversities';

  constructor() { }

  getFavourites(): any[] {
    const favourites = localStorage.getItem(this.storageKey);
    return favourites ? JSON.parse(favourites) : [];
  }

  addFavourite(university: any): void {
    const favourites = this.getFavourites();
    if (!favourites.some(fav => fav.name === university.name)) {
      favourites.push(university);
      localStorage.setItem(this.storageKey, JSON.stringify(favourites));
    }
  }

  removeFavourite(university: any): void {
    const favourites = this.getFavourites();
    const updatedFavourites = favourites.filter(fav => fav.name !== university.name);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedFavourites));
  }
}
