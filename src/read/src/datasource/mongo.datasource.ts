import ProductInterface from "../core/domain/interface/ProductInterface";
import MongoRepository from "../core/repositories/mongo.repository";
import MongoDBManager from "./manager/products.mongodb";

export default class MongoDS implements MongoRepository {
  public async readProductsFromMongoDB(): Promise<ProductInterface[] | []> {
    try {
      const process = new MongoDBManager();
      const productsList = await process.read();
      return productsList;
    } catch {
      return [];
    }
  }
}
