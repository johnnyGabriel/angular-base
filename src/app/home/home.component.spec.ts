import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Button: action 1', () => {

    let btnEl: DebugElement;
    
    beforeEach(() => {
      btnEl = fixture.debugElement.query(By.css('button#act1'));
    });

    it('should have button', () => {
      expect(btnEl).not.toBeFalsy();
    });

    it('should show message when btn is clicked', () => {
      btnEl.nativeElement.click();

      fixture.detectChanges();

      const messageEl = fixture.debugElement.query(By.css('span'));
      expect(messageEl.nativeElement.innerText).toEqual('action 1 done');
    });
    
  });

  describe('Button: action 2', () => {

    let btnEl: DebugElement;

    beforeEach(() => {
      btnEl = fixture.debugElement.query(By.css('button#act2'));
    });

    it('should have action 2 button', () => {
      expect(btnEl).not.toBeFalsy();
    });

    it('should show message when btn is clicked', () => {
      btnEl.nativeElement.click();

      fixture.detectChanges();

      const message = fixture.debugElement.query(By.css('span'));
      expect(message.nativeElement.innerText).toEqual('action 2 done');
    });

  });
  
});
