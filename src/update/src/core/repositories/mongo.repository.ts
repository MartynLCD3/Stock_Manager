import Product from "../domain/model/product";

export default interface MongoRepository {
  readProductFromMongoDB(provider: string): Promise<boolean>;
  updateProductOnMongoDB(provider: Product): Promise<boolean>;
}
