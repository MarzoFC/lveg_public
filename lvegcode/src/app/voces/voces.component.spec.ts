import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocesComponent } from './voces.component';

describe('VocesComponent', () => {
  let component: VocesComponent;
  let fixture: ComponentFixture<VocesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
