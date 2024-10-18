import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { customers } from '../models/customer';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { showCustomer } from '../models/showCustomer';
import { storeCustomer } from '../models/storeCustomer';

@Injectable({
  providedIn: 'root'
})
  
export class CustomerService {

  constructor(private http: HttpClient) { }

  public indexCustomer(page: number, perPage: number): Observable<customers> {

    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.http.get<customers>(
      `${environment.backendBaseUrl}/api/v1/customers`, { params });
  }

  public showCustomer(id: Number): Observable<showCustomer>{
    return this.http.get<showCustomer>(
      `${environment.backendBaseUrl}/api/v1/customers/${id}`
    )
  }

  public storeCustomer(customerData: storeCustomer): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${environment.backendBaseUrl}/api/v1/customers`,
      customerData
    )
  }

  public deleteCustomer(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${environment.backendBaseUrl}/api/v1/customers/${id}`
    );
  }
}