export interface UserCase<Request, Response> {
  execute(request?: Request): Promise<Response> | Response;
}
