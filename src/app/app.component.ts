import { Component } from '@angular/core';
import { getUrlScheme } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'winega';
  
  getUrl(){
    return "url('../assets/images/back-image.jpg');"
  }
}
