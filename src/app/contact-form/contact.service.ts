import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AirtableData } from './contact.models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  //Create HTTP Client Observable 

PostForm():Observable<AirtableData>{
   return this.http.post<AirtableData>('https://api.airtable.com/v0/appczYik55k1acHEi/Contact%20Form?api_key=keyXJaDEIrVA6knai');
   
}
}
