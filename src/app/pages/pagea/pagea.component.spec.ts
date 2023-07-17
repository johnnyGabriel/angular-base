import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaComponent } from './pagea.component';
import { By } from '@angular/platform-browser';

describe('PageaComponent', () => {
  let component: PageaComponent;
  let fixture: ComponentFixture<PageaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show message when button clicked', () => {
    const btnEl = fixture.debugElement.query(By.css('button'));
    btnEl.triggerEventHandler('click', null);
    
    fixture.detectChanges();

    const pEl = fixture.debugElement.query(By.css('p'));

    expect(pEl).toBeTruthy();
  });
  
});
