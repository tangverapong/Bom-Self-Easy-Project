import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WonModel } from './wonModel';
import { WON_DATA } from '../wonData'

@Component({
  selector: 'app-won-panel',
  templateUrl: './won-panel.component.html',
  styleUrls: ['./won-panel.component.scss']
})
export class WonPanelComponent implements OnInit {

  wonTableColumns = ['requestedAt', 'name', 'created', 'user'];
  wonDataSource: WonModel[] = WON_DATA;
  @Output() rowClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateParameterPanel(wonObj:WonModel) {
    this.rowClick.emit(wonObj)
  }

}
