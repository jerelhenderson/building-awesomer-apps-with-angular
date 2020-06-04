import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  title = 'Reviews';
  ratings = [5, 4, 3, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
