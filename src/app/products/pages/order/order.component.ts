import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {



  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Lenny',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Iron Man',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Green Lantern',
      canFly: false,
      color: Color.green,
    },
  ]



  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }


  changeOrder( value: keyof Hero ) {
    this.orderBy = value;
  }






}
