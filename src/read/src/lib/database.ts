import { MongoClient } from "mongodb";

export default class DataBase {
  client: MongoClient;
  dbName: any;
  private static instance: { [k: string]: DataBase } = {};

  private constructor() {
    try {
      this.dbName = process.env.MONGODB_DBNAME;
      this.client = new MongoClient(
        `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DBNAME}`
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  static getInstance(_resName: string) {
    if (!DataBase.instance[_resName]) {
      DataBase.instance[_resName] = new DataBase();
    }
    return DataBase.instance[_resName];
  }

  async read(collection: string, filters: any = {}) {
    const client = await this.client.connect();
    const find = client.db(this.dbName).collection(collection).find(filters);

    return await find.toArray();
  }
}
