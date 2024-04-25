import { PreguntasService } from './../../../services/preguntas.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownConfig, CountdownEvent, CountdownComponent } from "ngx-countdown";


import { Alumno } from 'src/app/models/alumno';
import { Pregunta } from 'src/app/models/pregunta';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {
  @ViewChild('cd', { static: false })
  public countdown!: CountdownComponent;
  config: CountdownConfig = { leftTime: 0, format: 'ss.S' };
  notify = '';
  time = 0;
  _left = 0;
  isSpinning: boolean = false;
  preguntas: Pregunta[] = [];
  alumnos: Alumno[] = [];
  selectedAlumno: Alumno | undefined;
  selectedPregunta: Pregunta | undefined;
  ofuscar: boolean = true;
  constructor(private alumnosService: AlumnosService, private preguntasService: PreguntasService) { }

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe({
      next: (data) => {
        this.alumnos = data;

        this.preguntasService.getPreguntas().subscribe({
          next: (data) => {
            this.preguntas = data;
          },
          error: (err) => console.error('Error al cargar las preguntas:', err)
        });



      },
      error: (err) => console.error('Error al cargar los alumnos:', err)
    });
  }

  handleEvent(e: CountdownEvent) {
    this.notify = e.action.toUpperCase();
    this._left = e.left
    if (e.action === 'notify') {
      this.notify += ` - ${e.left} ms`;
    }
  }
  onIniciar(){
    this.time = 5
    this.config = {leftTime: this.time, format: 'ss.S'};
    this.spin()

  }
  spin() {
    this.isSpinning = true;
    let iterations = Math.floor(Math.random() * 50) + 50;  // entre 50 y 100 iteraciones
    let currentIndex = 0;

    const spinInterval = setInterval(() => {

      const randomAlumnoIndex = Math.floor(Math.random() * this.alumnos.length);
      this.selectedAlumno = this.alumnos[randomAlumnoIndex];
      const randomPreguntaIndex = Math.floor(Math.random() * this.preguntas.length);
      this.selectedPregunta = this.preguntas[randomPreguntaIndex];

      if (Number(this.countdown.i.value) <= 0) {
        clearInterval(spinInterval);
        this.isSpinning = false;
      }
    }, 200);  // Cada 100ms cambiamos el item, puedes ajustar esto para cambiar la velocidad
  }

  toggleOfuscado() {
    this.ofuscar = !this.ofuscar;
  }

  ofuscado(texto: string | undefined): string {
      return texto ? '*'.repeat(texto.length) : '';
  }
}
