import { Component, OnInit } from '@angular/core';
import {NestedTreeNode} from '../../models/nested-tree-node';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

const TREE_DATA: NestedTreeNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-admin-nav-block',
  templateUrl: './admin-nav-block.component.html',
  styleUrls: ['./admin-nav-block.component.scss']
})
export class AdminNavBlockComponent implements OnInit {

  data = of<NestedTreeNode[]>(TREE_DATA).pipe(
    delay(500)
  );

  constructor() { }

  ngOnInit(): void {
  }

}
