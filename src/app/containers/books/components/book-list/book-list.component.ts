import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/model/book';
import { GenericService } from 'src/app/services/generic.service';
import { MessageBox } from 'src/app/model/messageBox';
import { MatDialog } from '@angular/material/dialog';
import { BookAddComponent } from '../book-add/book-add.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public book: Book = {author: '', price: 0, published_Date: '', book_Id: '', title: ''};
  private removedMessage:MessageBox = {title: 'Successfully', message : 'Book removed!', path: '', actionName:'close'};

  constructor(public bookService: BookService, private genericService: GenericService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(res => {
      console.log(res);
      this.bookService.bookList = res;
    },(error)=>{

    });
  }

  onAddBook(data:Book){
    this.dialog.open(BookAddComponent, {
      data: data,
      width:'600px'
    });
  }

  onRemove(i:any){
    this.bookService.bookList.splice(i, 1);
    this.genericService.openMessage(this.removedMessage);
  }

}
