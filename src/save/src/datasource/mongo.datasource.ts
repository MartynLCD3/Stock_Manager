import Product from "../core/domain/model/product";
import MongoRepository from "../core/repositories/mongo.repository";
import MongoDBManager from "./manager/products.mongodb";

export default class MongoDS implements MongoRepository {
  async saveProductOnMongoDB(_newProduct: Product): Promise<string | boolean> {
    try {
      const process = new MongoDBManager();
      const productsList = await process.save(_newProduct);
      return productsList;
    } catch {
      return false;
    }
  }
}
