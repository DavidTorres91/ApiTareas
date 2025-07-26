import {Entity, model, property} from '@loopback/repository';

@model()
export class Tarea extends Entity {
  @property({
    type: 'any',
    id: true,
    generated: true,
  })
  Id?: any;

  @property({
    type: 'string',
    required: true,
  })
  Titulo: string;

  @property({
    type: 'string',
  })
  Descripcion?: string;

  @property({
    type: 'date',
  })
  FechaVencimiento?: string;

  @property({
    type: 'string',
  })
  Prioridad?: string;

  @property({
    type: 'string',
  })
  Estado?: string;


  constructor(data?: Partial<Tarea>) {
    super(data);
  }
}

export interface TareaRelations {
  // describe navigational properties here
}

export type TareaWithRelations = Tarea & TareaRelations;
