/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ClassesService } from "../classes.service";
import { ClassesCreateInput } from "./ClassesCreateInput";
import { Classes } from "./Classes";
import { ClassesFindManyArgs } from "./ClassesFindManyArgs";
import { ClassesWhereUniqueInput } from "./ClassesWhereUniqueInput";
import { ClassesUpdateInput } from "./ClassesUpdateInput";

export class ClassesControllerBase {
  constructor(protected readonly service: ClassesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Classes })
  async createClasses(
    @common.Body() data: ClassesCreateInput
  ): Promise<Classes> {
    return await this.service.createClasses({
      data: data,
      select: {
        className: true,
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Classes] })
  @ApiNestedQuery(ClassesFindManyArgs)
  async classesItems(@common.Req() request: Request): Promise<Classes[]> {
    const args = plainToClass(ClassesFindManyArgs, request.query);
    return this.service.classesItems({
      ...args,
      select: {
        className: true,
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Classes })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async classes(
    @common.Param() params: ClassesWhereUniqueInput
  ): Promise<Classes | null> {
    const result = await this.service.classes({
      where: params,
      select: {
        className: true,
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Classes })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateClasses(
    @common.Param() params: ClassesWhereUniqueInput,
    @common.Body() data: ClassesUpdateInput
  ): Promise<Classes | null> {
    try {
      return await this.service.updateClasses({
        where: params,
        data: data,
        select: {
          className: true,
          createdAt: true,
          description: true,
          endDate: true,
          id: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Classes })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteClasses(
    @common.Param() params: ClassesWhereUniqueInput
  ): Promise<Classes | null> {
    try {
      return await this.service.deleteClasses({
        where: params,
        select: {
          className: true,
          createdAt: true,
          description: true,
          endDate: true,
          id: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}