import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public bookList!:Book[];
  constructor(private httpClient : HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>('./assets/book-list.json');
  }
}
