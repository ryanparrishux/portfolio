import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as _ from 'lodash';
import {AboutService} from './about.service';
import {ButterData} from './about.models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  posts:ButterData;

  constructor(private http:HttpClient, private aboutService:AboutService) {
  }

  ngOnInit() {

    this.GetButterData();

  }

  GetButterData():void{

this.aboutService.GetPosts().subscribe((data:ButterData) =>{
this.posts = data;
});

  }
}
  



