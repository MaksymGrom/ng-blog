import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NestedTreeNode} from '../store/admin-menu.reducer';

@Injectable({
  providedIn: 'root'
})
export class AdminMenuService {

  constructor(private httpClient: HttpClient) { }

  getMenu() {
    return this.httpClient.get<NestedTreeNode[]>('http://localhost:3000/menu');
  }
}
