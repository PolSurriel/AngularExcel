import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedwarningComponent } from './fixedwarning.component';

describe('FixedwarningComponent', () => {
  let component: FixedwarningComponent;
  let fixture: ComponentFixture<FixedwarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedwarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedwarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
