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

  async deleteProductOnMongoDB(_id: string): Promise<boolean> {
    try {
      const process = new MongoDBManager();
      const response = await process.delete(_id);
      return response ? true : false;
    } catch {
      return false;
    }
  }
}
