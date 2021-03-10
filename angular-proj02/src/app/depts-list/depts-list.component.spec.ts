import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptsListComponent } from './depts-list.component';

describe('DeptsListComponent', () => {
  let component: DeptsListComponent;
  let fixture: ComponentFixture<DeptsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
