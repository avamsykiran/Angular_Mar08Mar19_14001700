import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsFormComponent } from './emps-form.component';

describe('EmpsFormComponent', () => {
  let component: EmpsFormComponent;
  let fixture: ComponentFixture<EmpsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
