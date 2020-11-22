import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RequestedGraphicPanelComponent } from './requested-graphic-panel/requested-graphic-panel.component';
import { CommonGraphicPanelComponent } from './common-graphic-panel/common-graphic-panel.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    
    MatTabsModule,
    BrowserAnimationsModule ],
  declarations: [ AppComponent, RequestedGraphicPanelComponent, CommonGraphicPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
