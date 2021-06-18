import { Component, OnInit } from '@angular/core';
import {NestedTreeNode} from '../../models/nested-tree-node';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

const TREE_DATA: NestedTreeNode[] = [
  {
    name: 'Contents',
    children: [
      {
        name: 'Pages',
        href: '/admin/grid/content/pages'
      },
      {
        name: 'Posts',
        href: '/admin/grid/content/posts'
      },
      {
        name: 'Comments',
        href: '/admin/grid/content/comments'
      },
    ]
  }, {
    name: 'Accounts',
    icon: 'perm_identity',
    children: [
      {
        name: 'Admins',
        icon: 'manage_accounts',
        href: '/admin/grid/account/admins'
      }, {
        name: 'Users',
        icon: 'face',
        href: '/admin/grid/account/users'
      },
    ]
  }, {
    name: 'Settings',
    icon: 'settings',
    children: [
      {
        name: 'General',
        href: '/admin/form/settings/general'
      }, {
        name: 'Catalog',
        href: '/admin/form/settings/catalog'
      },
    ]
  }
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
