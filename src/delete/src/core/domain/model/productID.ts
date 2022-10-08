import ProdIdInterface from "../interface/ProdIdInterface";

export default class ProductID implements ProdIdInterface {
  _id: string;

  constructor(_id: string | undefined = "") {
    this.assignValues(_id);
  }

  private assignValues(_id: string) {
    this._id = _id;
  }

  dataToObject(data: any) {
    this._id = data._id;
  }

  validateID() {
    return this._id ? true : false;
  }

  generateID() {
    return this._id;
  }
}
