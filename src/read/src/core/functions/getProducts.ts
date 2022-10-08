import ProductInterface from "../domain/interface/ProductInterface";
import { _readProductsFromMongoDB } from "../interactors";
import ResponseInterface from "../domain/interface/ResponseInterface";

export default async (): Promise<ResponseInterface> => {
  const response: ProductInterface[] | [] = await _readProductsFromMongoDB();
  return response.length > 0
    ? { code: 200, data: response }
    : { code: 404, data: response };
};
