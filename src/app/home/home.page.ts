import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  my_name: string = "Yaroslav!"
  press_me(){
  this.my_name = this.my_name + "!"
  }
  books: string[]=["Стрелок","Метро 2033","Остров сокровищ"]
}
