import * as MongoDB from 'mongodb'
import * as conf from './conf'
import * as schema from './schema'

const uri = `${conf.MONGO_PROTOCOL}://${conf.MONGO_USER}:${conf.MONGO_PWD}@${conf.MONGO_HOST}/test?retryWrites=true&w=majority`
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

export async function connect () {
  const client = await MongoDB.MongoClient.connect(uri, option)
  const db = await client.db(schema.DBNAME)

  await db.collection<schema.Vote>('vote').insertOne({ by_name: 'foo', target_name: 'bar' })
  client.close()
};

/***
 * how to get timestamp
let ObjectId = require('mongodb').ObjectID
let docObjID = new ObjectId(<Your document _id>)
console.log(docObjID.getTimestamp())
 */
