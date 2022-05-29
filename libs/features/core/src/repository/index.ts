export interface IRepository<E>{
  getAll(): Promise<E[]>;
  getById(id: string): Promise<E>;
  create(entity: E): Promise<E>;
  update(id: string, entity: E): Promise<E>;
  delete(id: string): Promise<E>;
}
