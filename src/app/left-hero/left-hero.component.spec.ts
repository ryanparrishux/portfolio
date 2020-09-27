import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftHeroComponent } from './left-hero.component';

describe('LeftHeroComponent', () => {
  let component: LeftHeroComponent;
  let fixture: ComponentFixture<LeftHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
