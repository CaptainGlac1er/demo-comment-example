import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import {FormsModule} from "@angular/forms";
import { MaxHeightDirective } from './comment/max-height.directive';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    MaxHeightDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
