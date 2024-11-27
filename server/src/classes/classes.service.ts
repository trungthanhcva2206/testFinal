import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClassesServiceBase } from "./base/classes.service.base";

@Injectable()
export class ClassesService extends ClassesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
