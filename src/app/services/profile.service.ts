import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.interface';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private http = inject(HttpClient);
  private readonly PROFILE_URL = '/profile.json';
  
  private profileCache$?: Observable<Profile>;

  getProfile(): Observable<Profile> {
    if (!this.profileCache$) {
      this.profileCache$ = this.http.get<Profile>(this.PROFILE_URL).pipe(
        shareReplay(1)
      );
    }
    return this.profileCache$;
  }
}
