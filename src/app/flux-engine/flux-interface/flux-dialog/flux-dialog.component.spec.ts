import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxDialogComponent } from './flux-dialog.component';

describe('FluxDialogComponent', () => {
  let component: FluxDialogComponent;
  let fixture: ComponentFixture<FluxDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
