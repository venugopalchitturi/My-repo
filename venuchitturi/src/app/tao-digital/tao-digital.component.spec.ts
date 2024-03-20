import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoDigitalComponent } from './tao-digital.component';

describe('TaoDigitalComponent', () => {
  let component: TaoDigitalComponent;
  let fixture: ComponentFixture<TaoDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaoDigitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaoDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
