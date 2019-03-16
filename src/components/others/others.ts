import { Component } from '@angular/core';

/**
 * Generated class for the OthersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'others',
  templateUrl: 'others.html'
})
export class OthersComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
