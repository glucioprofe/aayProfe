import { Injectable } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  private jsonUrl = 'assets/preguntas.json';

  constructor(private http: HttpClient) { }

  getPreguntas(): Observable<Pregunta[]> {
    return this.http.get<any[]>(this.jsonUrl)
    .pipe(
      map(data => data.map(item => new Pregunta(
        item.descripcion
      )))
      );
  }
}
