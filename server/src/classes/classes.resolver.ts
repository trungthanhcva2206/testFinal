import * as graphql from "@nestjs/graphql";
import { ClassesResolverBase } from "./base/classes.resolver.base";
import { Classes } from "./base/Classes";
import { ClassesService } from "./classes.service";

@graphql.Resolver(() => Classes)
export class ClassesResolver extends ClassesResolverBase {
  constructor(protected readonly service: ClassesService) {
    super(service);
  }
}
