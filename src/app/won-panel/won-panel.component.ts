import { Component, OnInit } from '@angular/core';
import { WonData } from './wonData';

@Component({
  selector: 'app-won-panel',
  templateUrl: './won-panel.component.html',
  styleUrls: ['./won-panel.component.scss']
})
export class WonPanelComponent implements OnInit {

  wonTableColumns = ['txDate', 'name', 'created', 'user'];
  wonDatasource: WonData[] = [
    {TxDate: new Date('2020-11-1'), Name: 'Hydrogen', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Helium', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Lithium', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Beryllium', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Boron', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Carbon', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Nitrogen', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Oxygen', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Fluorine', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Neon', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Hydrogen', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Helium', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Lithium', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Beryllium', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Boron', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Carbon', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Nitrogen', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Oxygen', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Fluorine', Created: new Date('2020-11-1') , User: 'H'},
    {TxDate: new Date('2020-11-1'), Name: 'Neon', Created: new Date('2020-11-1') , User: 'H'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
