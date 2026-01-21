import { Component } from '@angular/core';
import { Myservice } from '../myservice';

@Component({
  selector: 'app-new-cmp',
  imports: [],
  templateUrl: './new-cmp.html',
  styleUrl: './new-cmp.css',
  standalone: true,
})
export class NewCmp {
  todaydate;
  newcomponent = 'entered in new component'
  componentproperty;
    constructor(private myservice:Myservice){
      this.todaydate = this.myservice.showTodayDate()
      this.myservice.serviceproperty = 'Component Created'
      this.componentproperty = this.myservice.serviceproperty;
    }
  }

