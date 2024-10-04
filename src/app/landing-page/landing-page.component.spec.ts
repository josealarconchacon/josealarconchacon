import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let mockActivatedRoute;

  beforeEach(async () => {
    mockActivatedRoute = {
      queryParams: of({ showOxalate: 'true' }),
    };

    await TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });
  });
});
