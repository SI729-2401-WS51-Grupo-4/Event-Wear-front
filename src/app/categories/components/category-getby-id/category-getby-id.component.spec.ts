import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGetbyIdComponent } from './category-getby-id.component';

describe('CategoryGetbyIdComponent', () => {
  let component: CategoryGetbyIdComponent;
  let fixture: ComponentFixture<CategoryGetbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryGetbyIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryGetbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
