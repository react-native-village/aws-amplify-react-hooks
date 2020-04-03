// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Job, Message } = initSchema(schema);

export {
  Job,
  Message
};