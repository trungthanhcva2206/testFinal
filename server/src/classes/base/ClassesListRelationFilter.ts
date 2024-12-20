/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClassesWhereInput } from "./ClassesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClassesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ClassesWhereInput,
  })
  @ValidateNested()
  @Type(() => ClassesWhereInput)
  @IsOptional()
  @Field(() => ClassesWhereInput, {
    nullable: true,
  })
  every?: ClassesWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClassesWhereInput,
  })
  @ValidateNested()
  @Type(() => ClassesWhereInput)
  @IsOptional()
  @Field(() => ClassesWhereInput, {
    nullable: true,
  })
  some?: ClassesWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClassesWhereInput,
  })
  @ValidateNested()
  @Type(() => ClassesWhereInput)
  @IsOptional()
  @Field(() => ClassesWhereInput, {
    nullable: true,
  })
  none?: ClassesWhereInput;
}
export { ClassesListRelationFilter as ClassesListRelationFilter };
