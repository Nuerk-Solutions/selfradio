import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ListenComponent } from './listen/listen.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EditComponent } from './edit/edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MusicbarComponent } from './shared/musicbar/musicbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListenComponent,
    NavbarComponent,
    EditComponent,
    MusicbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
