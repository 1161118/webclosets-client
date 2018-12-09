import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AggregationComponent } from './aggregation/aggregation.component';
import { DimensionComponent } from './dimension/dimension.component';
import { CatalogmanagerComponent } from './catalogmanager/catalogmanager.component';
import { ItemComponent } from './item/item.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    AggregationComponent,
    DimensionComponent,
    CatalogmanagerComponent,
    ItemComponent,
    ClientComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

    , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
