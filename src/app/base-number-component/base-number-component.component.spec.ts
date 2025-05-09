import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNumberComponentComponent } from './base-number-component.component';

describe('BaseNumberComponentComponent', () => {
  let component: BaseNumberComponentComponent;
  let fixture: ComponentFixture<BaseNumberComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseNumberComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseNumberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
