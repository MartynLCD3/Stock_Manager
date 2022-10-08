import readProduct from "./readProduct.interactor";
import updateProduct from "./updateProduct.interactor";
import MongoDS from "../../datasource/mongo.datasource";

const mongoRepository = new MongoDS();

const _readProductFromMongoDB = readProduct(mongoRepository);
const _updateProductOnMongoDB = updateProduct(mongoRepository);

export { _readProductFromMongoDB, _updateProductOnMongoDB };
