import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { customers } from '../models/customer';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public indexEmployees(page: number, perPage: number): Observable<customers> {

    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.http.get<customers>(
      `${environment.backendBaseUrl}/api/v1/employees`, { params });
  }
}
