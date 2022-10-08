import saveProduct from "./saveProduct.interactor";
import MongoDS from "../../datasource/mongo.datasource";

const mongoRepository = new MongoDS();

const _saveProductOnMongoDB = saveProduct(mongoRepository);

export { _saveProductOnMongoDB };
