import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  template: `<div class="row">
  <p>Растояние которое проедите</p>
  <input type="number" [(ngModel)]="example" name="example" x-moz-errormessage="Please specify a valid email address.">
  <p>Раход топлива на 100км</p>
  <input type="number" [(ngModel)]="example1" name="example1" x-moz-errormessage="Please specify a valid email address.">
  <p>Загруженость машини</p>
  <input type="number" [(ngModel)]="example2" name="example2" x-moz-errormessage="Please specify a valid email address.">
  <td class="text-center">
      <button type="button" (click)="commingSoon()">Invite</button>
    </td>
</div>`
})
export class SecondComponent {
  example: number=0;
  example1: number=0;
  example2: number=0;
  example3: number=0;
  commingSoon(){
    
    alert( this.example/(this.example1+this.example2))
  }
}
