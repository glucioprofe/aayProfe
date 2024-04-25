import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';

const routes: Routes = [
  { path: '', loadChildren: () => import('./module/docente/docente.module').then( m => m.DocenteModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
