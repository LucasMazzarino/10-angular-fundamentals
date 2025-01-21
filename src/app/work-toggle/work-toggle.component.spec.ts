import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkToggleComponent } from './work-toggle.component';

describe('WorkToggleComponent', () => {
  let component: WorkToggleComponent;
  let fixture: ComponentFixture<WorkToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
