import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { EncryptionDecriptionComponent } from './encryption-decription/encryption-decription.component';
import * as cryptojs from 'crypto-js';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EncryptionDecriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    cryptojs
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
