import { ValueObject } from "@core";

interface GenreNameProps {
  value: string
}

/**
 * @class GenreName
 * @description The genre name class is a Value Object that encapsulates
 * the validation logic required to specify the name of a Genre.
 * @see Genre entity
 */

export class GenreName extends ValueObject<GenreNameProps> {
  private constuctor (props: GenreNameProps) {
    super(props);
  }

  public static create (name: string) : Result<GenreName> {
    const guardResult = Guard.againstNullOrUndefined(name, 'name');

    if (!guardResult.isSuccess) {
      return Result.fail<GenreName>(guardResult.error);
    }

    if (name.length <= 2 || name.length > 100) {
      return Result.fail<GenreName>(
        new Error('Name must be greater than 2 chars and less than 100.')
      )
    }

    return Result.ok<GenreName>(new Name({ value: name }));
  }
}
