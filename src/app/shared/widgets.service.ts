import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Widget } from './widget.model';

const BASE_URL = 'http://0.0.0.0:3000/widgets/';
const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class WidgetsService {

  constructor(private http:Http) { }

  loadWidgets() {
      return this.http.get(`${BASE_URL}`)
      .map(res => res.json());
  }

  load(id) {
    return this.http.get(`${BASE_URL}${id}`)
      .map(res => res.json());
  }

  create(widget: Widget) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(widget), HEADER)
      .map(res => res.json());
  }

  update(widget: Widget) {
    return this.http.patch(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER)
      .map(res => res.json());
  }

  delete(widget: Widget) {
    return this.http.delete(`${BASE_URL}${widget.id}`)
      .map(res => res.json());
  }
}
