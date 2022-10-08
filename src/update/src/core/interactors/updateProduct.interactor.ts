import Product from "../domain/model/product";
import MongoRepository from "../repositories/mongo.repository";

export default (mongoRepository: MongoRepository) => {
  return async (_product: Product): Promise<boolean> =>
    await mongoRepository.updateProductOnMongoDB(_product);
};
