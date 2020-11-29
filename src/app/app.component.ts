import { Component, VERSION } from "@angular/core";
import { CommonGraphicPanelComponent } from './common-graphic-panel/common-graphic-panel.component';
import { WonModel } from './won-panel/wonModel';
import { CommonGraphicData } from './common-graphic-panel/common-graphic-panel.component';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  activeDataObj: WonModel | CommonGraphicData;

  updateParameterPanel(dataListObj) {
    this.activeDataObj = dataListObj;
  }
}
