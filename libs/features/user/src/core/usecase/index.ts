export interface IUseCase<In, Out> {
  execute(request?: In): Promise<Out> | Out;
}
