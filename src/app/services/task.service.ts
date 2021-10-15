import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskList(): Observable<any>{ 
    return  this.http.get('https://localhost:44381/weatherforecast');
  }
}
