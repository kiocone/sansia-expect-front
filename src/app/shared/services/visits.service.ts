import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {
  private apiUrl = 'https://sansia-spect-api-171622999427.us-central1.run.app/visits';

  constructor(private http: HttpClient) {}

  obtenerVisitas(): Observable<{ visitas: number }> {
    return this.http.get<{visitas: number}>(this.apiUrl);
  }
}