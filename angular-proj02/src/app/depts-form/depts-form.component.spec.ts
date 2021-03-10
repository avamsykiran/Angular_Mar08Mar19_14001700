import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptsFormComponent } from './depts-form.component';

describe('DeptsFormComponent', () => {
  let component: DeptsFormComponent;
  let fixture: ComponentFixture<DeptsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
