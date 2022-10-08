import {
  _readProductFromMongoDB,
  _deleteProductOnMongoDB,
} from "../interactors";
import ProductID from "../domain/model/productID";
import ResponseInterface from "../domain/interface/ResponseInterface";

export default async (data: any): Promise<ResponseInterface> => {
  let response = { code: 404, data: "error to delete" };
  const process = new ProductID();
  process.dataToObject(data);
  const _id: any = process.generateID();
  const existingProduct = await _readProductFromMongoDB(_id);
  if (existingProduct) {
    const deleteProduct = await _deleteProductOnMongoDB(_id);
    if (deleteProduct) {
      response = { code: 200, data: "successful delete" };
    }
  }
  return response;
};
