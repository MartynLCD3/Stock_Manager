import readProduct from "./readProduct.interactor";
import deleteProduct from "./deleteProduct.interactor";
import MongoDS from "../../datasource/mongo.datasource";

const mongoRepository = new MongoDS();

const _readProductFromMongoDB = readProduct(mongoRepository);
const _deleteProductOnMongoDB = deleteProduct(mongoRepository);

export { _readProductFromMongoDB, _deleteProductOnMongoDB };
