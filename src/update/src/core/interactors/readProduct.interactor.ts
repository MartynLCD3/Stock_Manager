import MongoRepository from "../repositories/mongo.repository";

export default (mongoRespository: MongoRepository) => {
  return async (_id: string): Promise<boolean> => {
    return await mongoRespository.readProductFromMongoDB(_id);
  };
};
