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
  
  feriados : Feriado[];
  diaPrueba : Date = new Date();
 

  events: CalendarEvent[] = [
    {
      title: 'An event',
      start: this.diaPrueba,
    }
  ];


  constructor(private feriadosService: FeriadosService){
    
  }
  
  ngOnInit() {
    this.getFeriados();
    //this.diaPrueba.setFullYear(2019,3,1);
    this.evento.setStart(this.diaPrueba);
    this.evento.setTitle('a');
    this.events.push(this.evento);
    
    this.feriados.forEach(this.ponerLosFeriados);
  }

  getFeriados(): void {
    
    this.feriadosService.getFeriados()
        .subscribe (feriados => this.feriados = feriados)
  }

  ponerLosFeriados(): void{
    this.events.push(this.evento)
  }


}
