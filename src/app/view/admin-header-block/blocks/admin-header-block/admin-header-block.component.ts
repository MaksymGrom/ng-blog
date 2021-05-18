import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {logout} from '../../../../store/admin-auth-store/store/admin-auth.actions';

@Component({
  selector: 'app-admin-header-block',
  templateUrl: './admin-header-block.component.html',
  styleUrls: ['./admin-header-block.component.scss']
})
export class AdminHeaderBlockComponent {

  constructor(private store$: Store) { }
  onLogout() {
    this.store$.dispatch(logout());
  }

}
