import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MongoDB',
  connector: 'mongodb',
  url: 'mongodb+srv://APITareas:VUjWqSys2TNkq6lr@cluster0.jvly0ip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  host: 'cluster0.jvly0ip.mongodb.net',
  port: 20717,
  user: 'APITareas',
  password: 'VUjWqSys2TNkq6lr',
  database: 'Tarea',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MongoDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MongoDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
