import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Job {
  readonly id: string;
  readonly position: string;
  readonly rate: number;
  readonly description: string;
  readonly owner?: string;
  constructor(init: ModelInit<Job>);
  static copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}

export declare class Message {
  readonly id: string;
  readonly title: string;
  readonly color?: string;
  readonly image?: string;
  readonly createdAt?: string;
  readonly owner?: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}