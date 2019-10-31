import { Component } from '@angular/core';
import { FirstserviceService } from './firstservice.service';
import { timer } from 'rxjs';
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  subscription: any;
  data;
  details: any;
  h: any;
  author: any;
  selected: any;
  selected1: any;

constructor(private service:FirstserviceService){}
ngOnInit(){

  this.subscription=timer(0,10000).pipe(
    switchMap(()=>this.service.gettabledata())
  ).subscribe(resp=>{console.log(resp,"table data");
  this.data=resp;
  this.details=this.data.hits;
console.log(this.details,"final details of TABLE");

  })
}



modalMethod(data){
this.h=data;
this.selected1 = this.h.url;
console.log("errtter",this.selected1);

}
}
