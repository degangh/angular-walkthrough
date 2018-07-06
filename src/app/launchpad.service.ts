import { Injectable } from '@angular/core';
import { Launchpad } from './launchpad';
import { HttpClient, HttpHeaders}  from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService} from './message.service';
import { catchError , map, tap } from 'rxjs/operators';
import { Http } from '@angular/http';
import { createChangeDetectorRef } from '@angular/core/src/view/refs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class LaunchpadService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  private LaunchpadUrl = 'api/launchpads';

  getPads(): Observable<Launchpad[]> {

    this.messageService.add('Fetched data ...');
    return this.http.get<Launchpad[]>(this.LaunchpadUrl)
    .pipe(
      tap(launchpads => this.log(`fetch launchpads`)),
      catchError(this.handleError('getPads', []))
    )

  }

  getPad(id: number): Observable<Launchpad>{
    const url = `${this.LaunchpadUrl}/${id}`;
    return this.http.get<Launchpad>(url).pipe(
      tap(_ => this.log(`fetch launchpad id = ${id}`)),
      catchError(this.handleError<Launchpad>(`getPad id = ${id}`))
    )
  }

  private handleError<T> (operation = 'operation' , result?: T){
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`)

      return of(result as T)
    }
  }

  private log(message: string)
  {
    this.messageService.add('launchpad.service: ' + message)
  }

  updateLaunchpad (launchpad: Launchpad): Observable<any> {
    return this.http.put(this.LaunchpadUrl, launchpad, httpOptions).pipe(
      tap(_=> this.log(`update launchpad id = ${launchpad.id}`)),
      catchError(this.handleError<any>('updateLaunchpad'))
    )
  }

  addPad (launchpad: Launchpad): Observable<Launchpad>{
    return this.http.post<Launchpad>(this.LaunchpadUrl, launchpad, httpOptions).pipe(
      tap((launchpad: Launchpad)=>this.log(`add new launchpad with id = ${launchpad.id}`)),
      catchError(this.handleError<Launchpad>(`addPad`))
    )
  }

  deletePad(launchpad: Launchpad | number): Observable<Launchpad> {
    const id = typeof launchpad === 'number' ? launchpad : launchpad.id;
    const url = `${this.LaunchpadUrl}/${id}`;

    return this.http.delete<Launchpad>(url, httpOptions).pipe(
      tap(_=>this.log(`deleted launchpad id =${id}`)),
      catchError(this.handleError<Launchpad>('deletePad'))
    )
  }
}
