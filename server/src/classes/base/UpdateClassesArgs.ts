/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClassesWhereUniqueInput } from "./ClassesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ClassesUpdateInput } from "./ClassesUpdateInput";

@ArgsType()
class UpdateClassesArgs {
  @ApiProperty({
    required: true,
    type: () => ClassesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClassesWhereUniqueInput)
  @Field(() => ClassesWhereUniqueInput, { nullable: false })
  where!: ClassesWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ClassesUpdateInput,
  })
  @ValidateNested()
  @Type(() => ClassesUpdateInput)
  @Field(() => ClassesUpdateInput, { nullable: false })
  data!: ClassesUpdateInput;
}

export { UpdateClassesArgs as UpdateClassesArgs };