import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { MainComponent } from './main/main.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'newauthor',component: AddAuthorComponent },
  { path: 'Edit/:id',component: EditAuthorComponent },
  { path: 'main',component: MainComponent },
  
  { path: '', pathMatch: 'full', redirectTo: '/main' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }