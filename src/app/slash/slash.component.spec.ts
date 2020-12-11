import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlashComponent } from './slash.component';

describe('SlashComponent', () => {
  let component: SlashComponent;
  let fixture: ComponentFixture<SlashComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
