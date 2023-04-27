import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'book', pathMatch:'full'},
  { path:'sign-in', loadChildren: () => import('./containers/auth/auth.module').then((module) => module.AuthModule) },
  { path:'book', canActivate:[AuthGuard], loadChildren: () => import('./containers/books/books.module').then((module) => module.BooksModule) },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
