import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxEditDialogComponent } from './flux-edit-dialog.component';

describe('FluxEditDialogComponent', () => {
  let component: FluxEditDialogComponent;
  let fixture: ComponentFixture<FluxEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
