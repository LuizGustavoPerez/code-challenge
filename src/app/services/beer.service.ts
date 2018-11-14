import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Beer } from '../model/beer';

@Injectable({
  providedIn: 'root'
})

export class BeerService {

  //mock api to get wine data
  private beerUrl = 'api/beers';

  constructor(
    private http: HttpClient
  ) { }

  //observable to get the list of wines from api
  getBeers(): Observable<Beer[]>{
    return this.http.get<Beer[]>(this.beerUrl)
  }

  //observable to add a beer
  addBeer(beer: Beer): Observable<Beer>{
    return this.http.post<Beer>(this.beerUrl, beer);
  }

  
}
