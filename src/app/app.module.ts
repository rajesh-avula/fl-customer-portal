import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerCardComponent } from './customer/customer-card/customer-card.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { HeaderComponent } from './customer/header/header.component';
import { FooterComponent } from './customer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCardComponent,
    CustomerListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
