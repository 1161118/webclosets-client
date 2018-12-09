import { Component, OnInit } from '@angular/core';
import {Aggregation} from '../aggregation';
import {AggregationService} from '../aggregation.service';
import {Dimensions} from '../dimensions';
import {DimensionService} from '../dimension.service';

@Component({
  selector: 'app-dimension',
  templateUrl: './dimension.component.html',
  styleUrls: ['./dimension.component.css']
})
export class DimensionComponent implements OnInit {

  dimensions: Dimensions[];
  dimension: Dimensions;
  delDimension: Dimensions;
  posDimension: Dimensions;
  putDimensions: Dimensions;

  discreteValueHeight: string;
  discreteValueWidth: string;
  discreteValueDepth: string;

  discreteValueHeightPut: string;
  discreteValueWidthPut: string;
  discreteValueDepthPut: string;

  idGetDimensions: number;
  idDeleteDimensions: number;
  idPutDimensions: number;

  constructor(private dimensionService: DimensionService) { }

  ngOnInit() {
  }

  getDimensions(): void {
    this.dimensionService.getDimensions().subscribe(dimensions => this.dimensions = dimensions);
  }

  getDimension(): void {

    this.dimensionService.getDimension(this.idGetDimensions).subscribe(dimension => this.dimension = dimension);
  }

  deleteDimensions(): void {
    this.dimensionService.deleteDimension(this.idDeleteDimensions).subscribe(delDimension => this.delDimension = delDimension);
  }

  postDimension(): void {
    // tslint:disable-next-line:max-line-length
    const dimString = '{ "height": { "discretevalue": [' + this.discreteValueHeight +  '] }, "width": { "discretevalue": [' + this.discreteValueWidth + '] }, "depth": { "discretevalue": [' + this.discreteValueDepth + '] } }';
    const dimJSON = JSON.parse(dimString);
    this.dimensionService.postDimension(dimJSON).subscribe(posDimension => this.posDimension = posDimension);

  }

  putDimension(): void {
    // tslint:disable-next-line:max-line-length
    const dimString = '{ "heightid": ' + this.discreteValueHeightPut + ', "widthid": ' + this.discreteValueWidthPut + ', "depthid": ' + this.discreteValueDepthPut + ' }';
    console.log(dimString);
    const dimJSON = JSON.parse(dimString);
    this.dimensionService.putDimension(this.idPutDimensions, dimJSON).subscribe(putDimensions => this.putDimensions = putDimensions);
  }

}
