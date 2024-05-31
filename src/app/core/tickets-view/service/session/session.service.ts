import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Session } from '../../../../models/session/session.model';
import { CreateSession } from '../../../../models/session/session-create.model';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  addSession(model: CreateSession): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/sesssions`, model);
  }

  getSessions(id?: string | null): Observable<Session[]>{
    return this.http.get<Session[]>(`${environment.apiBaseUrl}/api/sessions/${id}`);
  }
}