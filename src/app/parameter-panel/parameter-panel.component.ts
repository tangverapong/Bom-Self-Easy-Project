import { Component, OnInit, Input } from '@angular/core';
import { WonModel } from '../won-panel/wonModel';

@Component({
  selector: 'app-parameter-panel',
  templateUrl: './parameter-panel.component.html',
  styleUrls: ['./parameter-panel.component.scss']
})
export class ParameterPanelComponent implements OnInit {

  @Input() wonObj: WonModel
  constructor() { }

  ngOnInit(): void {
  }

}
