import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterPanelComponent } from './parameter-panel.component';

describe('ParameterPanelComponent', () => {
  let component: ParameterPanelComponent;
  let fixture: ComponentFixture<ParameterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
