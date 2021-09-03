import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor(private http: HttpClient) {}

  getArticle(id) {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  getUser(userId) {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
