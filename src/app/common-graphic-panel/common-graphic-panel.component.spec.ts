import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonGraphicPanelComponent } from './common-graphic-panel.component';

describe('CommonGraphicPanelComponent', () => {
  let component: CommonGraphicPanelComponent;
  let fixture: ComponentFixture<CommonGraphicPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonGraphicPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonGraphicPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
