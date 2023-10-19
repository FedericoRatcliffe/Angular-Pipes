import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'federico';
  public nameUpper: string = 'FEDERICO';
  public fullName: string = 'FeDeRiCo RATcLiFFe';

  
  public customDate: Date = new Date();



}
