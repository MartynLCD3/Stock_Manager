import { MongoClient, ObjectId } from "mongodb";

export default class DataBase {
  client: MongoClient;
  dbName: any;
  private static instance: { [k: string]: DataBase } = {};

  private constructor() {
    try {
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

  async readOne(collection: string, id: string) {
    const client = await this.client.connect();
    const search = client
      .db(this.dbName)
      .collection(collection)
      .find({ _id: new ObjectId(id) });
    return await search.toArray();
  }

  async deleteOne(collection: string, id: string) {
    const client = await this.client.connect();
    return await client
      .db(this.dbName)
      .collection(collection)
      .deleteOne({ _id: new ObjectId(id) });
  }
}
