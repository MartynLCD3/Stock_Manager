import Product from "../core/domain/model/product";
import MongoRepository from "../core/repositories/mongo.repository";
import MongoDBManager from "./manager/products.mongodb";

export default class MongoDS implements MongoRepository {
  async readProductFromMongoDB(_id: string): Promise<boolean> {
    try {
      const process = new MongoDBManager();
      const product = await process.read(_id);
      return product ? true : false;
    } catch {
      return false;
    }
  }

  async updateProductOnMongoDB(_productToUpdate: Product): Promise<boolean> {
    try {
      const process = new MongoDBManager();
      const response = await process.update(_productToUpdate);
      return response ? true : false;
    } catch {
      return false;
    }
  }
}
