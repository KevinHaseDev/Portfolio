import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SkillSet } from './skill-set';

describe('SkillSet', () => {
  let component: SkillSet;
  let fixture: ComponentFixture<SkillSet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSet],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillSet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
