import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxInterfaceComponent } from './flux-interface.component';

describe('InterfaceComponent', () => {
  let component: FluxInterfaceComponent;
  let fixture: ComponentFixture<FluxInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
