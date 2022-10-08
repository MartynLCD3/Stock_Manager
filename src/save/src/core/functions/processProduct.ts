import { _saveProductOnMongoDB } from "../interactors";
import Product from "../domain/model/product";
import ResponseInterface from "../domain/interface/ResponseInterface";

export default async (data: any): Promise<ResponseInterface> => {
  let response = { code: 404, data: "error to save" };
  const process = new Product();
  process.dataToObject(data);
  const validData = process.validationProcess();
  if (validData) {
    const newProduct: any = process.generateNewProduct();
    const productSaved = await _saveProductOnMongoDB(newProduct);
    if (productSaved) {
      response = { code: 201, data: `${productSaved}` };
    }
  }
  return response;
};
