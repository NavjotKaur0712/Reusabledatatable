import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Posts } from '../models/Posts';
// import postList from '../mockData/postList';
import postList from '../mockData/postList.json';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  data: Array<object> = postList.lists;
  constructor(private http: HttpClient) { }

  getPosts() {
    // return this.http.get<Posts[]>("https://jsonplaceholder.typicode.com/posts");
    return of(this.data);
  }
}

