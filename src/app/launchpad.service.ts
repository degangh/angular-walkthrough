import { Injectable } from '@angular/core';
import { Launchpad } from './launchpad';
import { HttpClient, HttpHeaders}  from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService} from './message.service';
import { catchError , map, tap } from 'rxjs/operators';

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
}
