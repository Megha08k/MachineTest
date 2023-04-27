import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookAddComponent } from './components/book-add/book-add.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes : Routes = [
  {path: '', component: BookListComponent},
  {path: 'home', component: DashboardComponent},


]

@NgModule({
  declarations: [
    BookListComponent,
    BookAddComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class BooksModule { }
