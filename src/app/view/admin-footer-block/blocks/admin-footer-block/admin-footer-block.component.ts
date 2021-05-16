import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-footer-block',
  templateUrl: './admin-footer-block.component.html',
  styleUrls: ['./admin-footer-block.component.scss']
})
export class AdminFooterBlockComponent {
  date = new Date();
}
