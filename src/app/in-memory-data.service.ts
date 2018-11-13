import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Wine } from './model/wine';
import { Beer } from './model/beer';

@Injectable({
  providedIn: 'root',
})

//All this class configuration was copy from angular.io documentation, 
//and I just made some changes to use as my need.
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let beers = [
      { id: 1, name: "Beer1", brand: "Brand1", type: "type1", year: 2011, price: 5.10 },
      { id: 2, name: "Beer2", brand: "Brand2", type: "type2", year: 2015, price: 5.20 },
      { id: 3, name: "Beer3", brand: "Brand3", type: "type3", year: 2016, price: 2.70 },
      { id: 4, name: "Beer4", brand: "Brand4", type: "type4", year: 2017, price: 3.60 },
      { id: 5, name: "Beer5", brand: "Brand5", type: "type5", year: 2017, price: 6.30 },
      { id: 6, name: "Beer6", brand: "Brand6", type: "type6", year: 2016, price: 0.50 },
      { id: 7, name: "Beer7", brand: "Brand7", type: "type7", year: 2013, price: 1.99 },
      { id: 8, name: "Beer8", brand: "Brand8", type: "type8", year: 2012, price: 5 },
      { id: 9, name: "Beer9", brand: "Brand9", type: "type9", year: 2012, price: 6 },
      { id: 10, name: "Beer10", brand: "Brand10", type: "type10", year: 2010, price: 4.99 }
    ];
    
    let wines = [
      { id: 1, name: 'Wine1', vineyard: "vine1", year: 2012, price: 13.99 },
      { id: 2, name: 'Wine2', vineyard: "vine2", year: 2013, price: 25 },
      { id: 3, name: 'Wine3', vineyard: "vine3", year: 2010, price: 33.20 },
      { id: 4, name: 'Wine4', vineyard: "vine4", year: 2011, price: 15.99 },
      { id: 5, name: 'Wine5', vineyard: "vine5", year: 2016, price: 14.50 },
      { id: 6, name: 'Wine6', vineyard: "vine6", year: 2015, price: 11.80 },
      { id: 7, name: 'Wine7', vineyard: "vine7", year: 2014, price: 10.99 },
      { id: 8, name: 'Wine8', vineyard: "vine8", year: 2018, price: 9.99 },
      { id: 9, name: 'Wine9', vineyard: "vine9", year: 2017, price: 7.56 },
    ];

    return { beers , wines };
  }

  genIdBeer(beers: Beer[]): number {
    return beers.length > 0 ? Math.max(...beers.map(beer => beer.id)) + 1 : 1;
  }

  genIdWine(wines: Wine[]): number {
    return wines.length > 0 ? Math.max(...wines.map(wine => wine.id)) + 1 : 1;
  }
}