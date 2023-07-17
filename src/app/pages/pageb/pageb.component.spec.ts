import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PagebComponent } from './pageb.component';
import { By } from '@angular/platform-browser';

describe('PagebComponent', () => {
  let component: PagebComponent;
  let fixture: ComponentFixture<PagebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagebComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show message when button clicked', async () => {

    const btnEl = fixture.debugElement.query(By.css('button'));
    btnEl.triggerEventHandler('click', {});
    
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const pEl = fixture.debugElement.query(By.css('p'));

    expect(pEl).toBeTruthy();
  });
  
});
