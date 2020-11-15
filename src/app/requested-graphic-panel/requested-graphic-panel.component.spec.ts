import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedGraphicPanelComponent } from './requested-graphic-panel.component';

describe('RequestedGraphicPanelComponent', () => {
  let component: RequestedGraphicPanelComponent;
  let fixture: ComponentFixture<RequestedGraphicPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedGraphicPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedGraphicPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
