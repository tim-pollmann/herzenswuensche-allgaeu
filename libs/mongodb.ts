import { MongoClient, Db, ServerApiVersion } from 'mongodb';

const { DB_URI } = process.env;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export default async function connectToDb() {
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  if (!DB_URI) {
    throw new Error('Define the DB_URI environmental variable');
  }

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  };

  const client = new MongoClient(DB_URI, options);
  await client.connect();
  const db = client.db('herzenswuensche-allgaeu');

  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
