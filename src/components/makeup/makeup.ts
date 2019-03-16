import { Component } from '@angular/core';

/**
 * Generated class for the MakeupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'makeup',
  templateUrl: 'makeup.html'
})
export class MakeupComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
