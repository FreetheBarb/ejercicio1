import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Feriado } from './feriado';
import { FeriadosService } from './feriados.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  
  title = 'ejercicio1';
  view: string = 'month';
  viewDate: Date = new Date();
  events : [];
  feriados : Feriado[];

  constructor(private feriadosService: FeriadosService){
    
  }
  
  ngOnInit() {
    this.getFeriados();
  }

  getFeriados(): void {
    
    this.feriadosService.getFeriados();
        .subscribe (feriados => this.feriados = feriados);
  }

/*events: CalendarEvent[] = [
    {
      title: 'An event',
      start: new Date(),
    }
  ];
*/

}
