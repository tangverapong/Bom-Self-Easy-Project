import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { commonGraphicData } from '../commonData';
import { graphicParameter } from '../won-panel/wonModel';

@Component({
  selector: 'app-common-graphic-panel',
  templateUrl: './common-graphic-panel.component.html',
  styleUrls: ['./common-graphic-panel.component.scss']
})
export class CommonGraphicPanelComponent implements OnInit {

  displayedColumns = ['id', 'name',];
  commonGraphicSource: CommonGraphicData[] = commonGraphicData;
  @Output() rowClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateParameterPanel(commonObj:CommonGraphicData) {
    this.rowClick.emit(commonObj)
  }

}

export interface CommonGraphicData {
  id: string;
  name: string;
  parameters: graphicParameter[];
}
