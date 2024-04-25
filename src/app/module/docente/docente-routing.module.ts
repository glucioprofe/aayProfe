import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { ExtintoresComponent } from './extintores/extintores.component';

const routes: Routes = [
  { path: '', component: ListadoComponent },
  { path: 'extintores', component: ExtintoresComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
