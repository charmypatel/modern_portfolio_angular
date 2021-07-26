import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { IndexComponent } from './index/index.component';
// import { AboutComponent } from './about/about.component';
// import { WorkComponent } from './work/work.component';
// import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, routingComponents, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
