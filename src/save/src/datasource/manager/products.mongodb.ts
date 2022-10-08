import Database from "../../lib/database";

export default class MongoDBManager {
  private collectionName: any = process.env.MONGODB_COLLNAME;
  private db = Database.getInstance;
  private resource: any = process.env.MONGODB_RESOURCE;

  public async save(product: any) {
    try {
      const client = this.db(this.resource);
      const _id: any = await client.insertOne(this.collectionName, product);
      return _id;
    } catch {
      return [];
    }
  }
}
