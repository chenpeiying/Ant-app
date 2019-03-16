import { Component } from '@angular/core';

/**
 * Generated class for the LifeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'life',
  templateUrl: 'life.html'
})
export class LifeComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
