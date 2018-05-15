import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../../../models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: ItemModel[] = [
    new ItemModel(1, 'Item 1', 352, 1, true),
    new ItemModel(2, 'Item 2', 35532, 2, true),
    new ItemModel(3, 'Item 3', 12352, 5, true),
    new ItemModel(4, 'Item 4', 7352, 6, true),
    new ItemModel(5, 'Item 5', 8352, 7, true),
  ];
  constructor() {}

  ngOnInit() {}
}
