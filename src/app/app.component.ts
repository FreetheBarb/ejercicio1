import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Feriado } from './feriado';
import { FeriadosService } from './feriados.service';
import { CalendarEvent } from 'angular-calendar';
import { Evento } from './evento';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  
  evento = new Evento;
  title = 'ejercicio1';
  view: string = 'month';
  viewDate: Date = new Date();
  feriados : Feriado[] = [];
  diaPrueba : Date = new Date();
  events: CalendarEvent[] = [];


  constructor(private feriadosService: FeriadosService){
    
  }
  
  ngOnInit() {
    this.getFeriados();
  }

  getFeriados(): void {
    this.feriadosService.getFeriados()
        .subscribe ((data : Feriado []) => {this.feriados=data;
          console.log(this.feriados);
          for (let index = 0; index < this.feriados.length; index++) {
              var evento = new Evento();
              var dia : Date = new Date();
            dia.setFullYear(2019, this.feriados[index].mes - 1, this.feriados[index].dia);
            evento.setStart(dia);
            evento.setTitle(this.feriados[index].motivo);
            this.events.push(evento);
          }
          console.log(this.events);
        });
  }
}

/*
getFeriados(): void {
    console.log("hola");
    this.feriadosService.getFeriados()
        .subscribe ((data : Feriado []) => {this.feriados=data;
          console.log(this.feriados);
          for (let index = 0; index < this.feriados.length; index++) {
            this.diaPrueba.setFullYear(2019, this.feriados[index].mes - 1, this.feriados[index].dia);
            this.evento.setStart(this.diaPrueba);
            this.evento.setTitle(this.feriados[index].motivo);
            this.events.push(this.evento);
          }
          console.log(this.events);
        });
  }
*/