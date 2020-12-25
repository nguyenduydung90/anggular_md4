import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {BookService} from "../book.service";
import {count} from "rxjs/operators";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books!: Observable<Book[]>;
  count:number =0
  constructor(private bookService: BookService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.books = this.bookService.getBookList();
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bookDetail(id: number){
    this.router.navigate(['details', id]);
  }
  updateBook(id: number){
    this.router.navigate(['update', id]);
  }

  add(){
    this.router.navigate(['add'])
  }

}
