import { Injectable } from "@angular/core";

export interface MenuItem{


text: String,
icon: String,
route: String,
submenu: Array<MenuItem>
}

@Injectable()
export class MenuService{

    items:Array<MenuItem>;
}