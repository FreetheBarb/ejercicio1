import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEventTitleFormatter } from 'angular-calendar';
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
  events = [];

/*events: CalendarEvent[] = [
    {
      title: 'An event',
      start: new Date(),
    }
  ];
*/

}
