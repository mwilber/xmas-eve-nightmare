import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxEditConversationComponent } from './flux-edit-conversation.component';

describe('FluxEditConversationComponent', () => {
  let component: FluxEditConversationComponent;
  let fixture: ComponentFixture<FluxEditConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxEditConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxEditConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
