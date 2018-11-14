import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Wine } from '../model/wine';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  //mock api to get wine data
  private urlWine = "api/wines";

  constructor(
    private httpCliente: HttpClient
  ) { }

  //observable to get the list of wines from api
  getWines(): Observable<Wine[]> {
    return this.httpCliente.get<Wine[]>(this.urlWine);
  }

  addWine(wine: Wine): Observable<Wine> {
    return this.httpCliente.post<Wine>(this.urlWine, wine);
  }

  //Service to search wine by term
  searchWine(term: string): Observable<Wine[]> {
    if (!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }
    return this.httpCliente.get<Wine[]>(`${this.urlWine}/?name=${term}`);
  }

}
