import { MongoClient } from "mongodb";

class MongoDB {
  resourceType = "mongodb";
  client: MongoClient;
  dbName: any;
  private static instance: { [k: string]: MongoDB } = {};

  private constructor() {
    try {
      this.client = new MongoClient(
        `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DBNAME}`
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  public static getInstance(_resName: string) {
    if (!MongoDB.instance[_resName]) {
      MongoDB.instance[_resName] = new MongoDB();
    }
    return MongoDB.instance[_resName];
  }

  async insertOne(collection: string, data: any) {
    const client = await this.client.connect();
    const response = await client
      .db(this.dbName)
      .collection(collection)
      .insertOne(data);

    return response.insertedId;
  }
}

export default MongoDB;
