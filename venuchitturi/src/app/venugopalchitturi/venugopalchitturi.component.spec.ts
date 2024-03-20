import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenugopalchitturiComponent } from './venugopalchitturi.component';

describe('VenugopalchitturiComponent', () => {
  let component: VenugopalchitturiComponent;
  let fixture: ComponentFixture<VenugopalchitturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenugopalchitturiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenugopalchitturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
