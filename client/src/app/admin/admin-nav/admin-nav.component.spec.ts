import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavComponent } from './admin-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AdminNavComponent', () => {
  let component: AdminNavComponent;
  let fixture: ComponentFixture<AdminNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNavComponent],
      imports: [BrowserAnimationsModule, MatSidenavModule, MatIconModule],
    });
    fixture = TestBed.createComponent(AdminNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
