import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  // PUBLIC_KEY = '2e2fdec760c42885d25b505e3e3c2e9d';
  // HASH = '';
  URL_API = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e2fdec760c42885d25b505e3e3c2e9d&hash=d468064455ef6b77933e4050d84d7a76`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
}
