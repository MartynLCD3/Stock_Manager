import Product from "../domain/model/product";

export default interface MongoRepository {
  saveProductOnMongoDB(provider: Product): Promise<string | boolean>;
}
