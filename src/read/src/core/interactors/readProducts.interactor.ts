import ProductInterface from "../domain/interface/ProductInterface";
import MongoRepository from "../repositories/mongo.repository";

export default (mongoRepository: MongoRepository) => {
  return async (): Promise<ProductInterface[] | []> => {
    return await mongoRepository.readProductsFromMongoDB();
  };
};
