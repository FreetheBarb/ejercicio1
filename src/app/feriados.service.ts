import { Injectable } from '@angular/core';
import { Feriado } from './feriado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  private feriadosUrl = 'http://nolaborables.com.ar/api/v2/feriados/2019';

  constructor(private http: HttpClient) { }

  getFeriados(): Observable<Feriado[]> {
    return this.http.get<Feriado[]>(this.feriadosUrl)
}

}
