import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaombolaGameComponent } from './taombola-game.component';

describe('TaombolaGameComponent', () => {
  let component: TaombolaGameComponent;
  let fixture: ComponentFixture<TaombolaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaombolaGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaombolaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
