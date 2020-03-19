import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
    public http: HttpClient
  ) { }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
