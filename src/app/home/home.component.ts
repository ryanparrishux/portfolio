import { Component, OnInit, } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isSmall:boolean = false;
  isTablet:boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

this.breakpointObserver
.observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
.subscribe((state:BreakpointState) =>{
this.isSmall = state.matches;
});

this.breakpointObserver
.observe([Breakpoints.Tablet, Breakpoints.HandsetPortrait])
.subscribe((state:BreakpointState) =>{
this.isSmall = state.matches;
});

  }


}
