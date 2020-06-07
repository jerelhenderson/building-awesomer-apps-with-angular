import { Component, OnInit } from '@angular/core';
import { ItemsService, CaffeineService } from '../shared';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  items: Item[];
  sources;
  myStatus = 'active';

  constructor(private itemsService: ItemsService, private caffeineService: CaffeineService) { }

  logout($event) {
    this.myStatus = 'LOGGED OUT';
  }

  ngOnInit() {
    this.getItems();
    this.sources = this.caffeineService.sources;
  }

  getItems() {
    this.itemsService.all()
      .subscribe(items => this.items = items);
  }

  handleResults(items) {
    this.items = items;
  }
}
