import { Response } from './../Response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Momento } from '../Momento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MomentoService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  createMomento(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  getMomentos(): Observable<Response<Momento[]>> {
    return this.http.get<Response<Momento[]>>(this.apiUrl);
  }

  getMomento(id: number): Observable<Response<Momento>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Momento>>(url);
  }

  removeMoment(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateMoment(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}
