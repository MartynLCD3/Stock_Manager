import Database from "../../lib/database";

export default class MongoDBManager {
  private collectionName: any = process.env.MONGODB_COLLNAME;
  private db = Database.getInstance;
  private resource: any = process.env.MONGODB_RESOURCE;

  public async read() {
    try {
      const client = this.db(this.resource);
      const productsList: any = await client.read(this.collectionName);
      return productsList;
    } catch {
      return [];
    }
  }
}
