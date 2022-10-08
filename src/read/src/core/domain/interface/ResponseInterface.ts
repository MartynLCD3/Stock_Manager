import ProductInterface from "./ProductInterface";

export default interface ResponseInterface {
  code: number;
  data: ProductInterface[] | [];
}
