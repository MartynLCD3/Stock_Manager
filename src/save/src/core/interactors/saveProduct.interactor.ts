import Product from "../domain/model/product";
import MongoRepository from "../repositories/mongo.repository";

export default (mongoRepository: MongoRepository) => {
  return async (_product: Product): Promise<string | boolean> => {
    return await mongoRepository.saveProductOnMongoDB(_product);
  };
};
