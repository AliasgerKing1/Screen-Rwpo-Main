import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  constructor(private _http: HttpClient) {}

  apiUrl: String = 'http://localhost:3000/api/screenShot';

  upload(file: File, data: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('data', JSON.stringify(data));
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

  getImages() {
    return this._http.get<any>(this.apiUrl + '/files');
  }
  getImagesById(id: any) {
    return this._http.get<any>(this.apiUrl + '/files/' + id);
  }
  deleteImages(id: any) {
    return this._http.delete<any>(this.apiUrl + '/' + id);
  }
  deleteMultiImages(id: any) {
    return this._http.delete<any>(this.apiUrl + '/multi/' + id);
  }
  getMultiImages(id: any) {
    return this._http.get<any>(this.apiUrl + '/multi/' + id);
  }

  getComp(comp: any) {
    return this._http.get<any>(this.apiUrl + '/files/data/' + comp);
  }
  updateTypeInImages(id: any, obj: any) {
    return this._http.put<any>(this.apiUrl + '/addtype/' + id, obj);
  }
}
