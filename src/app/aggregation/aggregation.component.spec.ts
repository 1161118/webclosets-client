import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AggregationComponent} from './aggregation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ProdutoComponent} from '../produto/produto.component';
import {DimensionComponent} from '../dimension/dimension.component';
import {CatalogmanagerComponent} from '../catalogmanager/catalogmanager.component';
import {ItemComponent} from '../item/item.component';
import {ClientComponent} from '../client/client.component';
import {AggregationService} from '../aggregation.service';
import {Aggregation} from '../aggregation';



describe('AggregationComponent', () => {
  let component: AggregationComponent;
  let fixture: ComponentFixture<AggregationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AggregationComponent,
        ProdutoComponent,
        AggregationComponent,
        DimensionComponent,
        CatalogmanagerComponent,
        ItemComponent,
        ClientComponent],
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule, HttpClientModule]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AggregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAggregations', () => {
    let service;
    service = TestBed.get(AggregationService);
    expect(service.getAggregations().subscribe(value => expect(value).toBe(Aggregation)));
    }
  );

  it('getAggregation', () => {
    let service;
    service = TestBed.get(AggregationService);
    const id = '1';
      expect(service.getAggregation(id).subscribe(value => expect(value).toBe(Aggregation)));
    }
  );

  afterEach(() => {
    TestBed.resetTestingModule();
  });

});
