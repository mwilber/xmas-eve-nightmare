import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxAuthComponent } from './flux-auth.component';

describe('FluxAuthComponent', () => {
  let component: FluxAuthComponent;
  let fixture: ComponentFixture<FluxAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
