import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { MenuService } from './services/menu.service';
import { ConfigurationService } from './services/configuration.service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { FormsModule} from '@angular/forms';
import { PanelComponent } from './panel/panel/panel.component';




@NgModule({
  declarations: [DashboardComponent, ContentComponent, TitleBarComponent, StatusBarComponent, MenuComponent, MenuItemComponent, TopBarComponent, SignInComponent, PanelComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers:[
    MenuService,
    ConfigurationService,
    
  ],
  exports: [
    DashboardComponent,
    TitleBarComponent,
    StatusBarComponent,
    ContentComponent,
    MenuComponent,
    MenuItemComponent, 
    TopBarComponent, 
    SignInComponent,
    PanelComponent
  ]
})
export class DashboardModule { }
