import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromedioPage } from './promedio.page';

describe('PromedioPage', () => {
  let component: PromedioPage;
  let fixture: ComponentFixture<PromedioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PromedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
