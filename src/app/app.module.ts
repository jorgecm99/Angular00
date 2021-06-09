//MODULES//
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//COMPONENTES//
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';

//SERVICES//
import { HomeService } from './pages/services/home-services/home.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
