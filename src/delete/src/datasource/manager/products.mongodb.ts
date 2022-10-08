import Database from "../../lib/database";

export default class MongoDBManager {
  private collectionName: any = process.env.MONGODB_COLLNAME;
  private db = Database.getInstance;
  private resource: any = process.env.MONGODB_RESOURCE;

  public async read(_id: string) {
    try {
      const client = this.db(this.resource);
      const response = await client.readOne(this.collectionName, _id);
      return response.length ? true : false;
    } catch {
      return false;
    }
  }

  public async delete(_id: any) {
    try {
      const client = this.db(this.resource);
      await client.deleteOne(this.collectionName, _id);
      return true;
    } catch {
      return false;
    }
  }
}
