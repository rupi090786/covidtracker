import { Injectable } from '@angular/core';


export interface ConfigurationServiceSettings{
  showlanguageSelector?: boolean,
  showUserControls?: boolean,
  showstatusBarBreakpoint?: number,

}
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {


showUserControls= true;
showStatusBar=true;
showstatusBarBreakpoint = 0;

configure(settings: ConfigurationServiceSettings) : void {
Object.assign(this, settings);
}


  }

