import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mycalculator';

  toShow:string = '';

  writeToInput(value:string):void{
    this.toShow+=value;
  }

  clear():void{
    this.toShow='';
  }

  equals():void{
    this.toShow = eval(this.toShow);
  }

  back():void{
    this.toShow = this.toShow.slice(0,-1);
  }

  calcValue(value:string):void{
    this.toShow = eval(value);
  }
}
