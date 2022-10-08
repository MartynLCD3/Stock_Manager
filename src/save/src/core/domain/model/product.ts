import ProductInterface from "../interface/ProductInterface";

export default class Product implements ProductInterface {
  name: string;
  price: string;
  stock: boolean;
  created: Date;

  constructor(
    name: string | undefined = "",
    price: string | undefined = "",
    stock: boolean,
    created: Date
  ) {
    this.assignValues(name, price, stock, created);
  }

  private assignValues(
    name: string,
    price: string,
    stock: boolean,
    created: Date
  ) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.created = created;
  }

  dataToObject(data: any) {
    this.name = data.name;
    this.price = data.price;
    this.stock = data.stock;
    this.created = data.created;
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
      this.validateName(),
      this.validatePrice(),
      this.validateCreated(),
    ];
    return validation.every((condition: boolean) => condition === true);
  }

  generateNewProduct() {
    return {
      name: this.name,
      price: this.price,
      stock: this.stock,
      created: this.created,
    };
  }
}
