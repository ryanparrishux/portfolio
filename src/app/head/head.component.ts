import { Component, OnInit } from '@angular/core';
import { IsSmallService } from '../services/issmall.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

isSmall:boolean=false;

constructor(private isSmallService: IsSmallService) { 

    isSmallService.isSmallObservable.subscribe((value:boolean) => {
      this.isSmall = value;
    });

  }

  //Breakpointobserver for mobile menu 
  ngOnInit(): void {

   
 
  }

}
