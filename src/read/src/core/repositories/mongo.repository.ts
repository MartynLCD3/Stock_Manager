import ProductInterface from "../domain/interface/ProductInterface";

export default interface MongoRepository {
  readProductsFromMongoDB(): Promise<ProductInterface[] | []>;
}
