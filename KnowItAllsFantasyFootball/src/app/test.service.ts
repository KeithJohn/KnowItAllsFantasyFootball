import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

}
