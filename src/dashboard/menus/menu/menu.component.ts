import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/dashboard/services/menu.service';

@Component({
  selector: 'corona-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
