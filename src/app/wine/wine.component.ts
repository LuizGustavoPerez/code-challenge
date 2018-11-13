import { PagerService } from './../services/pager-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { WineService } from '../services/wine.service';
import { Wine } from '../model/wine';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})

export class WineComponent implements OnInit {

  private wines: Wine[];
  private show: boolean = false;
  private form: FormGroup;

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private wineService: WineService,
    private formBuilder: FormBuilder,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getWines();

    //create the form to add a Wine
    this.form = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      vineyard: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      year: [null, Validators.required],
      price: [null, Validators.required]
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  getWines() {
    this.wineService.getWines().subscribe(wines => {
      this.wines = wines;
      // set items to json response
      this.allItems = wines;

      // initialize to page 1
      this.setPage(1);
    });
  }

  collapseInput() {
    this.show = !this.show;
  }

  addWine(wineData) {
    if (!wineData.valid) {
      alert("Form invalid!");
      return
    }
    let newWine = new Wine();
    newWine.name = wineData.value.name;
    newWine.price = wineData.value.price;
    newWine.vineyard = wineData.value.vineyard;
    newWine.year = wineData.value.year;

    this.wineService.addWine(newWine)
      .subscribe(wine => {
        this.wines.push(wine);
        // set items to json response
        this.allItems = this.wines;

        //set the page
        this.setPage(this.pager.endPage);
      });
  }
}