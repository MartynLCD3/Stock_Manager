import MongoRepository from "../repositories/mongo.repository";

export default (mongoRepository: MongoRepository) => {
  return async (_id: string): Promise<boolean> =>
    await mongoRepository.deleteProductOnMongoDB(_id);
};
