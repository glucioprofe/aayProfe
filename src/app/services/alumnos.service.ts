import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private jsonUrl = 'assets/alumnos.json';

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<any[]>(this.jsonUrl)
    .pipe(
      map(data => data.map(item => new Alumno(
        item.nombre,
        item.apellidos,
        item.nmerodeid,
        item.correoelectrnico,
      )))
      );
  }
}

