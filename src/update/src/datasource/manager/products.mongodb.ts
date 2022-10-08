import Database from "../../lib/database";

export default class MongoDBManager {
  private collectionName: any = process.env.MONGODB_COLLNAME;
  private db = Database.getInstance;
  private resource: any = process.env.MONGODB_RESOURCE;

  public async read(_id: string) {
    try {
      const client = this.db(this.resource);
      const response = await client.readOne(this.collectionName, _id);
      return response ? true : false;
    } catch {
      return false;
    }
  }

  public async update(product: any) {
    try {
      const client = this.db(this.resource);
      const { _id, ...data } = product;
      const result = await client.updateOne(this.collectionName, _id, data);
      return result ? true : false;
    } catch {
      return false;
    }
  }
}
