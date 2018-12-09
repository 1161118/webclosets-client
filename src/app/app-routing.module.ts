import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdutoComponent} from './produto/produto.component';
import {AggregationComponent} from './aggregation/aggregation.component';
import {DimensionComponent} from './dimension/dimension.component';
import {CatalogmanagerComponent} from './catalogmanager/catalogmanager.component';
import {ItemComponent} from './item/item.component';
import {ClientComponent} from './client/client.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutoComponent},
  { path: 'aggregation', component: AggregationComponent},
  { path: 'dimension', component: DimensionComponent},
  { path: 'catalogManager', component: CatalogmanagerComponent},
  { path: 'client', component: ClientComponent},
  { path: 'items', component: ItemComponent},
  {path: '' , redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
