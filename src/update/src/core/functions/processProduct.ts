import {
  _readProductFromMongoDB,
  _updateProductOnMongoDB,
} from "../interactors";
import Product from "../domain/model/product";
import ResponseInterface from "../domain/interface/ResponseInterface";

export default async (data: any, id: any): Promise<ResponseInterface> => {
  let response = { code: 404, data: "error to update" };
  const process = new Product();
  process.dataToObject(data);
  process._id = id;
  const validatedData: boolean = process.validationProcess();
  const product: any = process.generateProduct();
  if (validatedData) {
    const existingProduct = await _readProductFromMongoDB(id);
    if (existingProduct) {
      const update = await _updateProductOnMongoDB(product);
      if (update) {
        response = { code: 200, data: "successful update" };
      }
    }
  }
  return response;
};
