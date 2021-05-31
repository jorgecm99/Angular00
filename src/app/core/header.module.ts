import { NgModule } from '@angular/core';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [HeaderRoutingModule],
  providers: [],
})
export class AppModule { }