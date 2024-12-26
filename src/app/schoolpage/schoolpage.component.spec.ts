import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolpageComponent } from './schoolpage.component';

describe('SchoolpageComponent', () => {
  let component: SchoolpageComponent;
  let fixture: ComponentFixture<SchoolpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
