import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSideNavComponent } from './custom-sidenav.component';

describe('SidebarComponent', () => {
  let component: CustomSideNavComponent;
  let fixture: ComponentFixture<CustomSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSideNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
