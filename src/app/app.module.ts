import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { LeftHeroComponent } from './left-hero/left-hero.component';
import { RightHeroComponent } from './right-hero/right-hero.component';
import {MatButtonModule} from '@angular/material/button';
import { MiddleComponent } from './middle/middle.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ContactFormComponent } from './contact-form/contact-form.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    LeftHeroComponent,
    RightHeroComponent,
    MiddleComponent,
    ContactSectionComponent,
    ContactFormComponent

  ],
  imports: [
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
