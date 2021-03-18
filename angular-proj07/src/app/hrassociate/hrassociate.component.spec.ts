import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrassociateComponent } from './hrassociate.component';

describe('HrassociateComponent', () => {
  let component: HrassociateComponent;
  let fixture: ComponentFixture<HrassociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrassociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrassociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
