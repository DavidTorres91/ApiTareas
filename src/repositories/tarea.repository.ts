import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Tarea, TareaRelations} from '../models';

export class TareaRepository extends DefaultCrudRepository<
  Tarea,
  typeof Tarea.prototype.Id,
  TareaRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Tarea, dataSource);
  }
}
