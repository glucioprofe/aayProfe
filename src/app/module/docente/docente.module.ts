import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';


import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente.component';
import { ListadoComponent } from './listado/listado.component';
import { ExtintoresComponent } from './extintores/extintores.component';


@NgModule({
  declarations: [
    DocenteComponent,
    ListadoComponent,
    ExtintoresComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    CountdownModule
  ]
})
export class DocenteModule { }
