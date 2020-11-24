import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WonPanelComponent } from './won-panel/won-panel.component';
import { CommonGraphicPanelComponent } from './common-graphic-panel/common-graphic-panel.component';
import { ParameterPanelComponent } from './parameter-panel/parameter-panel.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    
    MatTabsModule,
    MatTableModule,
    BrowserAnimationsModule ],
  declarations: [ AppComponent, WonPanelComponent, CommonGraphicPanelComponent, ParameterPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
