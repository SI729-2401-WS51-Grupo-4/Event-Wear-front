import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGetFavoritesComponent } from './category-get-favorites.component';

describe('CategoryGetFavoritesComponent', () => {
  let component: CategoryGetFavoritesComponent;
  let fixture: ComponentFixture<CategoryGetFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryGetFavoritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryGetFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
