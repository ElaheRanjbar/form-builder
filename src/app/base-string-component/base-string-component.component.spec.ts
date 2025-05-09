import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStringComponentComponent } from './base-string-component.component';

describe('BaseStringComponentComponent', () => {
  let component: BaseStringComponentComponent;
  let fixture: ComponentFixture<BaseStringComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseStringComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseStringComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
