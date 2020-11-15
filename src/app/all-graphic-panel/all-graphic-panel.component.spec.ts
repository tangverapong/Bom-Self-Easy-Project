import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGraphicPanelComponent } from './all-graphic-panel.component';

describe('AllGraphicPanelComponent', () => {
  let component: AllGraphicPanelComponent;
  let fixture: ComponentFixture<AllGraphicPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGraphicPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGraphicPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
