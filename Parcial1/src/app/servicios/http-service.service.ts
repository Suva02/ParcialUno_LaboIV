import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService 
{
  private apiUrl = 'https://api.github.com/users/suva02';
  http = inject(HttpClient);

  constructor() { }

  getApi() {
    return this.http.get<any>(this.apiUrl);
  }
}
