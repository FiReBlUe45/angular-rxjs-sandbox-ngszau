import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LoggerService } from './services/logger.service';
import { HttpClientModule } from '@angular/common/http';

export const routes: any = [];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
