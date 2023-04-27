import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookService } from '../../services/book.service';
import { MessageBox } from 'src/app/model/messageBox';
import { GenericService } from 'src/app/services/generic.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss'],
})
export class BookAddComponent implements OnInit {
  bookForm!: FormGroup;
  privatemMessage: MessageBox = {
    title: 'Successfully',
    message: this.data.book_Id ? 'Book Updated!': 'Book Added!',
    path: '',
    actionName: 'close',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data: Book,
    private fb: FormBuilder,
    private bookService: BookService,
    private genericService: GenericService
  ) {}

  ngOnInit(): void {
    this.onConfigForm();

    if (this.data.book_Id) {
      this.bookForm.patchValue({
        bookName: this.data.title,
        authorName: this.data.author,
        purchasedDate: this.data.published_Date,
        bookPrice: this.data.price,
        bookId: this.data.book_Id,
      });
    }
  }
  onConfigForm() {
    this.bookForm = this.fb.group({
      bookName: new FormControl('', [Validators.required]),
      authorName: new FormControl('', [Validators.required]),
      purchasedDate: new FormControl('', [Validators.required]),
      bookPrice: new FormControl('', [Validators.required]),
      bookId: new FormControl(),
    });
  }

  isFieldValid(field: string) {
    return (
      !this.bookForm.get(field)?.valid && this.bookForm.get(field)?.touched
    );
  }

  onPushBook(bookForm: any) {   
    const productData = this.bookForm.value;

    const book: Book = {
      book_Id: (this.data.book_Id ? this.data.book_Id : `B${Math.floor(Math.random()*100)}`),
      title: productData.bookName,
      author: productData.authorName,
      published_Date: productData.purchasedDate,
      price: productData.bookPrice,
    };
    if(this.data.book_Id){
       this.bookService.bookList.forEach((elemnt)=>{          
          if(this.data.book_Id === elemnt.book_Id){
              elemnt.book_Id= this.data.book_Id,
              elemnt.title= productData.bookName,
              elemnt.author= productData.authorName,
              elemnt.published_Date= productData.purchasedDate,
              elemnt.price= productData.bookPrice
          } 
       });
    }else{
      this.bookService.bookList.push(book);
    }
    this.genericService.openMessage(this.privatemMessage);
  }
}
