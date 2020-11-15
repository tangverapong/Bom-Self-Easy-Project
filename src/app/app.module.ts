import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AllGraphicPanelComponent } from './all-graphic-panel/all-graphic-panel.component';
import { RequestedGraphicPanelComponent } from './requested-graphic-panel/requested-graphic-panel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTabsModule,
    BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, AllGraphicPanelComponent, RequestedGraphicPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
