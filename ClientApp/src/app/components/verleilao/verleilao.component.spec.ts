import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerleilaoComponent } from './verleilao.component';

describe('VerleilaoComponent', () => {
  let component: VerleilaoComponent;
  let fixture: ComponentFixture<VerleilaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerleilaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerleilaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
