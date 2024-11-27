import { Module } from "@nestjs/common";
import { ClassesModuleBase } from "./base/classes.module.base";
import { ClassesService } from "./classes.service";
import { ClassesController } from "./classes.controller";
import { ClassesResolver } from "./classes.resolver";

@Module({
  imports: [ClassesModuleBase],
  controllers: [ClassesController],
  providers: [ClassesService, ClassesResolver],
  exports: [ClassesService],
})
export class ClassesModule {}
