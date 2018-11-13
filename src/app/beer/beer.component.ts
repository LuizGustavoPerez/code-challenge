import { Component, OnInit } from '@angular/core';

import { BeerService } from '../services/beer.service';
import { Beer } from '../model/beer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  beers: Beer[];
  private show:boolean = false;
  private formBeer: FormGroup;

  constructor(
    private beerService: BeerService, 
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getBeers();

    //create the form to add a Beer
    this.formBeer = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      brand: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      type: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      year: [null, Validators.required],
      price: [null, Validators.required]
    });
  }

  getBeers(){
    this.beerService.getBeers().subscribe(beers => this.beers = beers);
  }

  collapseInput(){
    this.show = !this.show;
  }

  //this function create a beer object to set all values from form and pass to the service to add a new beer.
  addBeer(beerData){
    console.log(beerData);
    if(!beerData.valid){
      alert("Form invalid!");
      return
    }
    let newBeer = new Beer();
    newBeer.name = beerData.value.name;
    newBeer.brand = beerData.value.brand;
    newBeer.type = beerData.value.type;
    newBeer.price = beerData.value.price;
    newBeer.year = beerData.value.year;

    //service to add beer
    this.beerService.addBeer(newBeer)
      .subscribe(beer => {
        this.beers.push(beer);
      });
  }
  
}
