import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] //Array of Css
  styles: [`
  h3{
    color: dodgerblue;
  }`] //Array of styles directly
})
export class AppComponent {
  name = 'name';
}
