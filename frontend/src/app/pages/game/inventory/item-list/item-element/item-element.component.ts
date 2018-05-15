import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from '../../../../../models/item.model';

@Component({
  selector: 'app-item-element',
  templateUrl: './item-element.component.html',
  styleUrls: ['./item-element.component.css']
})
export class ItemElementComponent implements OnInit {
  @Input() item: ItemModel;
  constructor() { }

  ngOnInit() {
  }

}
