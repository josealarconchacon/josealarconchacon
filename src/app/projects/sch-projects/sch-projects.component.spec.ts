import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchProjectsComponent } from './sch-projects.component';

describe('SchProjectsComponent', () => {
  let component: SchProjectsComponent;
  let fixture: ComponentFixture<SchProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchProjectsComponent]
    });
    fixture = TestBed.createComponent(SchProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
