import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path: '', component: BookListComponent}
]

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BooksModule { }
