import { Component, OnInit } from '@angular/core';
import {AggregationService} from '../aggregation.service';
import {Aggregation} from '../aggregation';

@Component({
  selector: 'app-aggregation',
  templateUrl: './aggregation.component.html',
  styleUrls: ['./aggregation.component.css']
})
export class AggregationComponent implements OnInit {

  aggregations: Aggregation[];
  aggregation: Aggregation;
  delAggreg: Aggregation;
  postAggreg: Aggregation;
  putAggreg: Aggregation;

  parentAggreg: string;
  childProductId: string;
  optional: string;

  parentPutAggreg: string;
  childPutId: string;
  optionalPut: string;

  idGetAggregation: number;
  idDeleteAggregation: number;
  idPutAggreg: number;

  constructor(private aggregationService: AggregationService) { }

  ngOnInit() {
  }

  getAggregations(): void {
    this.aggregationService.getAggregations().subscribe(aggregations => this.aggregations = aggregations);
  }

  getAggregation(): void {

    this.aggregationService.getAggregation(this.idGetAggregation).subscribe(aggregation => this.aggregation = aggregation);
  }

  deleteAggregation() {
    this.aggregationService.deleteAggregation(this.idDeleteAggregation).subscribe(delAggreg => this.delAggreg = delAggreg);
  }

  postAggregation(): void {

    if (this.optional == null) {
      this.optional = 'false';
    }
    // tslint:disable-next-line:max-line-length
    const aggregString = '{ "parentproductid": ' + this.parentAggreg + ', "childproductid":' +  this.childProductId + ', "optional":' + this.optional + ' }';
    const aggregJSON = JSON.parse(aggregString);
    this.aggregationService.postAggregation(aggregJSON).subscribe(postAggreg => this.postAggreg = postAggreg);
  }

  putAggregation(): void {

    if (this.optionalPut == null) {
      this.optionalPut = 'false';
    }
    // tslint:disable-next-line:max-line-length
    const aggregString = '{ "parentproductid": ' + this.parentPutAggreg + ', "childproductid":' +  this.childPutId + ', "optional":' + this.optionalPut + ' }';
    console.log(aggregString);
    const aggregJSON = JSON.parse(aggregString);
    this.aggregationService.putAggregation(this.idPutAggreg, aggregJSON).subscribe(putAggreg => this.putAggreg = putAggreg);
  }

}
