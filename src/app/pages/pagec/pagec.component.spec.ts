import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PagecComponent } from './pagec.component';
import { By } from '@angular/platform-browser';

describe('PagecComponent', () => {
  let component: PagecComponent;
  let fixture: ComponentFixture<PagecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show message when button clicked', fakeAsync(() => {
      const btnEl = fixture.debugElement.query(By.css('button'));
      btnEl.triggerEventHandler('click', {});
      
      tick(2000);
  
      fixture.detectChanges();
  
      const pEl = fixture.debugElement.query(By.css('p'));
  
      expect(pEl).toBeTruthy();
    }));
  
});
