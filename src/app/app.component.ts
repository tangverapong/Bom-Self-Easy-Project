import { Component, VERSION } from "@angular/core";
import { WonModel } from './won-panel/wonModel';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  activeWonObj: WonModel = {
    previewHash: "--",
    user: "--",
    date: "--",
    time: "",
    email: "--",
    aspectRatio: "--",
    id: "--",
    name: "--",
    channel: "--",
    requestedAt: "--",
    parameters: []
};

  updateParameterPanel(wonObj: WonModel) {
    this.activeWonObj = wonObj;
  }
}
