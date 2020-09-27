import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.css']
})
export class MobilemenuComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void { }
  goAbout(){
    this.router.navigate(['/about']);
  }
  goWork() {
    this.router.navigate(['/work']);
  }
  goContact() {
    this.router.navigate(['/Contact']);
  }
}
