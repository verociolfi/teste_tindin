import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLoggedComponent } from './search-logged.component';

describe('SearchLoggedComponent', () => {
  let component: SearchLoggedComponent;
  let fixture: ComponentFixture<SearchLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
