import { Component, OnInit } from '@angular/core';
import { commonGraphicData } from '../animationData';

@Component({
  selector: 'app-common-graphic-panel',
  templateUrl: './common-graphic-panel.component.html',
  styleUrls: ['./common-graphic-panel.component.scss']
})
export class CommonGraphicPanelComponent implements OnInit {

  displayedColumns = ['id', 'name',];
  commonGraphicSource: CommonGraphicData[] = commonGraphicData;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface CommonGraphicData {
  id: string;
  name: string;
}
