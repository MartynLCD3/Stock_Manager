import readProducts from "./readProducts.interactor";
import MongoDS from "../../datasource/mongo.datasource";

const mongoRepository = new MongoDS();
const _readProductsFromMongoDB = readProducts(mongoRepository);

export { _readProductsFromMongoDB };
