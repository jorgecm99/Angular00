import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomePageService } from './services/home-page.service';



@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, HttpClientModule, CommonModule],
  providers: [HomePageService],
})
export class HomeModule { }