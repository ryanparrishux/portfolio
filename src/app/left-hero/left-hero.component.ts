import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-left-hero',
  templateUrl: './left-hero.component.html',
  styleUrls: ['./left-hero.component.css']
})
export class LeftHeroComponent implements OnInit {

  isSmall:boolean = false;
  
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    
  this.breakpointObserver
  .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
  .subscribe((state:BreakpointState) =>{
  this.isSmall = state.matches;
  });
}
  //move the page to the middle section.
  GoToWorkSection():void{

    //find the middle.
   const middle:HTMLElement = document.getElementById("middle");
   
   //if found scroll into view.
   if(middle){ 
     middle.scrollIntoView({behavior:"smooth"});
    }
  }
  //move the page to the contact section.
  GoToContactSection():void{

    //find the middle.
   const contact:HTMLElement = document.getElementById("contact");
   
   //if found scroll into view.
   if(contact){ 
     contact.scrollIntoView({behavior:"smooth"});
    }
  }
 
}
