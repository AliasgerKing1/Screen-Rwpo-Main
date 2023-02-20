import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private _http: HttpClient) {}

  apiUrl = 'http://localhost:3000/api/screenShot/';

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.apiUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this._http.request(req);
  }

  getFiles(): Observable<any> {
    return this._http.get(`${this.apiUrl}/files`);
  }

  // addSs(obj: any) {
  //   return this._http.post<any>(this.apiUrl, obj);
  // }
  // getSs() {
  //   let token = localStorage.getItem('token');
  //   let head = new HttpHeaders().set('Authorization', JSON.stringify(token));
  //   return this._http.get<any>(this.apiUrl, { headers: head });
  // }
  // deletetSs(id: any) {
  //   return this._http.delete<any>(this.apiUrl + id);
  // }
  // getSsById(id: any) {
  //   return this._http.get<any>(this.apiUrl + id);
  // }
  // updateSs(id: any, obj: any) {
  //   return this._http.put<any>(this.apiUrl + id, obj);
  // }
}
