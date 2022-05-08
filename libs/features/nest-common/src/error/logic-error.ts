import { NotFoundException, NotImplementedException } from "@nestjs/common";

export class FunctionNotImplement extends NotImplementedException {
  constructor(functionName: string) {
    super(undefined, `Function ${functionName} is not implement`);
  }
}

export class EntityNotFoundError extends NotFoundException {
  constructor(entityName: string, entityId: string) {
    super(undefined, `Entity ${entityName} id ${entityId} not found!`);
  }
}
