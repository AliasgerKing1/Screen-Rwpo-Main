import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _http: HttpClient) {}
  apiUrl = 'http://localhost:3000/api/admin/login/';
  getAdmin() {
    return this._http.get<any>(this.apiUrl);
  }
  addAdmin(obj: any) {
    return this._http.post<any>(this.apiUrl, obj);
  }
}
