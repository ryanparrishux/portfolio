import { Injectable } from '@angular/core';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsSmallService {

  private isSmallSubject = new BehaviorSubject<boolean>(false);
  
  get isSmallObservable():Observable<boolean>{
    return this.isSmallSubject.asObservable();
  }

  constructor(private breakpointObserver: BreakpointObserver) { }

IsSmall():void{
  this.breakpointObserver
  .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
  .subscribe((state:BreakpointState) =>{
  this.isSmallSubject.next(state.matches);
  });
}

}
