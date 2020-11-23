import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonPanelComponent } from './won-panel.component';

describe('RequestedGraphicPanelComponent', () => {
  let component: WonPanelComponent;
  let fixture: ComponentFixture<WonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WonPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
