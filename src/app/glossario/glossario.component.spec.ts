import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossarioComponent } from './glossario.component';

describe('GlossarioComponent', () => {
  let component: GlossarioComponent;
  let fixture: ComponentFixture<GlossarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlossarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlossarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
