import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/dashboard/services/menu.service';



@Component({
  selector: 'corona-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})

export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  constructor() { }

  ngOnInit(): void {
  }

}
