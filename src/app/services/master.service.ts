import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../../model/Posts';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Posts[]>('http://localhost:3000/posts');
  }
}
