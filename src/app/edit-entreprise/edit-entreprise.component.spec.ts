import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntrepriseComponent } from './edit-entreprise.component';

describe('EditEntrepriseComponent', () => {
  let component: EditEntrepriseComponent;
  let fixture: ComponentFixture<EditEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
