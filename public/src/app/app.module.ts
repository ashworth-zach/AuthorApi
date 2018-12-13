import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { MainComponent } from './main/main.component';
import { AddquoteComponent } from './addquote/addquote.component';

@NgModule({
  declarations: [
    AppComponent,
    EditAuthorComponent,
    AddAuthorComponent,
    MainComponent,
    AddquoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
