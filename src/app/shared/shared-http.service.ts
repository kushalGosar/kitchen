import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SharedHttpService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  url: any = environment.url;

  constructor(private _http: HttpClient) { }

  public get(endpoint, params = null) {
    const queryString = params ? this._objectToQueryString(params) : '';
    endpoint = endpoint + (queryString ? '?' + queryString : '');
    return this._http.get(this.url + endpoint, { headers: this.headers })
  }


  post(endpoint, params = null, data) {
    const queryString = params ? this._objectToQueryString(params) : '';
    endpoint = endpoint + (queryString ? '?' + queryString : '');
    return this._http.post(this.url + endpoint, data, { headers: this.headers })
  }

  put(endpoint, params = null, data) {
    const queryString = params ? this._objectToQueryString(params) : '';
    endpoint = endpoint + (queryString ? '?' + queryString : '');
    return this._http.put(this.url + endpoint, data, { headers: this.headers })
  }

  delete(endpoint, params = null) {
    const queryString = params ? this._objectToQueryString(params) : '';
    endpoint = endpoint + (queryString ? '?' + queryString : '');
    return this._http.delete(this.url + endpoint, { headers: this.headers })
  }

  _objectToQueryString(object) {
    return Object.keys(object).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`).join('&');
  }

  successMessage(){
    alert('Record added Successfully');
  }

  errorMessage(msg=null){
    alert(msg || 'Something went wrong Please try again later');
  }
}
