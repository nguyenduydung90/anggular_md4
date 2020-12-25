import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {Router} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book();
  submitted = false;

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
  }

  newBook(): void {
    this.submitted = false;
    this.book = new Book();
  }

  save() {
    this.bookService
      .createBook(this.book).subscribe((data: any) => {
        // console.log(data)
        this.book = new Book();
        this.gotoList();
      },
      (error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/books']);
  }

}
