import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const BASE_URL = 'http://0.0.0.0:3000/widgets/';
const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class WidgetsService {

  constructor(private http:Http) { }

  loadWidgets() {
      return this.http.get(`${BASE_URL}`)
      .map(res => res.json());
  }

}
