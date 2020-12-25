import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id!: number;
  book!: Book;

  constructor(private route: ActivatedRoute,private router: Router,
              private bookService: BookService) { }

  ngOnInit() {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];

    this.bookService.getBook(this.id)
      .subscribe(data => {
        console.log(data)
        this.book = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['books']);
  }

}
