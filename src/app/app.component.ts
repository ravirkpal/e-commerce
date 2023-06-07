import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'add-to-cart';

 showHeader:boolean=true;

 constructor(private router:Router) {

  router.events.subscribe(
  (val)=>{
  if(val instanceof NavigationEnd){
  if(val.url=='/' ){
     this.showHeader=false
  }else{
    this.showHeader=true
  }
  }})

}}
