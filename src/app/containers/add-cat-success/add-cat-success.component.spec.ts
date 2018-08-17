import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatSuccessComponent } from './add-cat-success.component';

describe('AddCatSuccessComponent', () => {
  let component: AddCatSuccessComponent;
  let fixture: ComponentFixture<AddCatSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCatSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
