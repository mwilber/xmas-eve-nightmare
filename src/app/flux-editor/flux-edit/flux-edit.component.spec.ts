import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxEditComponent } from './flux-edit.component';

describe('FluxEditComponent', () => {
  let component: FluxEditComponent;
  let fixture: ComponentFixture<FluxEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
