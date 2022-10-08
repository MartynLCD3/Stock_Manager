import ProductInterface from "../interface/ProductInterface";

export default class Product implements ProductInterface {
  _id: string;
  name: string;
  price: string;
  stock: boolean;
  created: Date;

  constructor(
    _id: string | undefined = "",
    name: string | undefined = "",
    price: string | undefined = "",
    stock: boolean,
    created: Date
  ) {
    this.assignValues(_id, name, price, stock, created);
  }

  private assignValues(
    _id: string,
    name: string,
    price: string,
    stock: boolean,
    created: Date
  ) {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.created = created;
  }

  dataToObject(data: any) {
    this._id = data._id;
    this.name = data.name;
    this.price = data.price;
    this.stock = data.stock;
    this.created = data.created;
  }

  validateId() {
    return this._id ? true : false;
  }

  validateName() {
    return this.name ? true : false;
  }

  validatePrice() {
    return this.price ? true : false;
  }

  validateCreated() {
    return this.created ? true : false;
  }

  validationProcess() {
    const validation = [
      this.validateId(),
      this.validateName(),
      this.validatePrice(),
      this.validateCreated(),
    ];
    return validation.every((condition: boolean) => condition === true);
  }

  generateProduct() {
    return {
      _id: this._id,
      name: this.name,
      price: this.price,
      stock: this.stock,
      created: this.created,
    };
  }
}
