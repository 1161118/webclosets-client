import {Dimensions} from './dimensions';


export class Produto {
  id: number;
  name: string;
  parentProductId: number;
  childProductsIds: number;
  materialsIds: number;
  categoryId: number;
  dimensions: Dimensions;
}
