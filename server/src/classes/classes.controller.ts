import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClassesService } from "./classes.service";
import { ClassesControllerBase } from "./base/classes.controller.base";

@swagger.ApiTags("classes")
@common.Controller("classes")
export class ClassesController extends ClassesControllerBase {
  constructor(protected readonly service: ClassesService) {
    super(service);
  }
}
