import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxEditLocationComponent } from './flux-edit-location.component';

describe('FluxEditLocationComponent', () => {
  let component: FluxEditLocationComponent;
  let fixture: ComponentFixture<FluxEditLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxEditLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxEditLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
