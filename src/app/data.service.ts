import { Injectable } from '@angular/core';

//httpclient module for making requests
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

//for observables
import { Observable, of } from 'rxjs';
//rxjs operators
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {

  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  }),

  params: new HttpParams().
  set('title', 'foo').
  set('body', 'bar').
  set('userId', '1')

};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //create instance of httpclient module in order to use it (this is done through DI)
  constructor(private http: HttpClient) { }

  //method for users
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  //method for posts
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  //method for posts
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  //method for posts (currently making options and post request)
  sendPost() {
    
    // 1. return this.http.post('https://jsonplaceholder.typicode.com/posts/1')
    // 2. Observable<Response> ob = this.http.post(this.url, book, options); 
    
    return this.http.post('http://jsonplaceholder.typicode.com/posts', httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  



  /**
   * nice way (not making request)
   */

  

  // sendPost (): Observable<any> {
  //   return this.http.post<any>('https://jsonplaceholder.typicode.com/posts/1', httpOptions)
  //     .pipe(
  //       // catchError(this.handleError('addHero'))
  //     );
  // }


  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
   
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
   
  //     // TODO: better job of transforming error for user consumption
  //     //this.log(`${operation} failed: ${error.message}`);
   
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }


  /**
   * OTHER
   */

  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
  //     tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }


}
