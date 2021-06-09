import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';import { CommonModule } from '@angular/common';import { RegisterComponent } from './register/register.component';
import { RegisterService } from './services/register.service';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegisterComponent],
  imports: [RegisterRoutingModule, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [ RegisterService ],
  exports: [RegisterComponent]
})
export class RegisterModule { }