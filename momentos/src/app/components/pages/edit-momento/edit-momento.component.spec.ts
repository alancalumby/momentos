import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMomentoComponent } from './edit-momento.component';

describe('EditMomentoComponent', () => {
  let component: EditMomentoComponent;
  let fixture: ComponentFixture<EditMomentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMomentoComponent]
    });
    fixture = TestBed.createComponent(EditMomentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
