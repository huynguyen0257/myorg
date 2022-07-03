export abstract class Entity<T> {
  private _id: string;
  private _props: T;

  protected constructor(id?: string, props?: T) {
    if (id === undefined || props === undefined) {
      this._props = {} as any;
      return;
    }
    this._id = id;
    this._props = props;
  }
}
