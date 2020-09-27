import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ButterData } from './about.models';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }

  GetPosts():Observable<ButterData>{
   return this.http.get<ButterData>('https://api.buttercms.com/v2/pages/*/about/?auth_token=dbf24ca9da50673e28561d116f5df9f6bdd05a2a');
  }
}
