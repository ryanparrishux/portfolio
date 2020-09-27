import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightHeroComponent } from './right-hero.component';

describe('RightHeroComponent', () => {
  let component: RightHeroComponent;
  let fixture: ComponentFixture<RightHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
