export default interface MongoRepository {
  readProductFromMongoDB(provider: string): Promise<boolean>;
  deleteProductOnMongoDB(provider: string): Promise<boolean>;
}
