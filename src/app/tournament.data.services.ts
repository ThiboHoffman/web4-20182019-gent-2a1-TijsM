import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { Match } from './match.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentDataService {
  constructor(private http: HttpClient) {}

  get users$(): Observable<User[]> {
    return this.http
      .get(`${environment.apiUrl}/Users/`)
      .pipe(map((list: any[]): User[] => list.map(User.fromJSON)));
  }

  getUserById$(id: number): Observable<User> {
    return this.http
      .get(`${environment.apiUrl}/Users/${id}`)
      .pipe(map(User.fromJSON));
  }

  getMatchesFromUser$(id: number): Observable<Match[]> {
    return this.http
      .get(`${environment.apiUrl}/Match/GetMatchesVanSpeler/${id}`)
      .pipe(map((list: any[]): Match[] => list.map(Match.fromJSON)));
  }
}
