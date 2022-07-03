export interface IRepository<T>{
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T>;
  create(payload: Partial<T>): Promise<T>;
  createBulk(payloads: Partial<T>[]): Promise<boolean>;
  update(payload: Partial<T>): Promise<T>;
  updateBulk(payloads: Partial<T>[]): Promise<boolean>;
  delete(id: string): Promise<boolean>;
  deleteBulk(ids: string[]): Promise<boolean>;
}
