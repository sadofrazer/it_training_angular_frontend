import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateFormationComponent } from './create-update-formation.component';

describe('CreateUpdateFormationComponent', () => {
  let component: CreateUpdateFormationComponent;
  let fixture: ComponentFixture<CreateUpdateFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
