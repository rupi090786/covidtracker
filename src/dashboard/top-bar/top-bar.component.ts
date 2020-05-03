import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from '../services/configuration.service';
import { UserApi } from '../users/users-api';

@Component({
  selector: 'corona-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {

  constructor(public configurationServices: ConfigurationService, public userApi: UserApi) { }

  ngOnInit(): void {
  }

  signOut() {
    this.userApi.signOut();
    this.userApi.access=false;
    
  }
}
