import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualesComponent } from './visuales.component';

describe('VisualesComponent', () => {
  let component: VisualesComponent;
  let fixture: ComponentFixture<VisualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
