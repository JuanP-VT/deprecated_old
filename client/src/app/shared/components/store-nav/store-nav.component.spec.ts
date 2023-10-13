import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNavComponent } from './store-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('StoreNavComponent', () => {
  let component: StoreNavComponent;
  let fixture: ComponentFixture<StoreNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreNavComponent],
      imports: [MatToolbarModule],
    });
    fixture = TestBed.createComponent(StoreNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
