import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogmanagerComponent } from './catalogmanager.component';

describe('CatalogmanagerComponent', () => {
  let component: CatalogmanagerComponent;
  let fixture: ComponentFixture<CatalogmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
