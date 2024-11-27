import { ClassesWhereInput } from "./ClassesWhereInput";
import { ClassesOrderByInput } from "./ClassesOrderByInput";

export type ClassesFindManyArgs = {
  where?: ClassesWhereInput;
  orderBy?: Array<ClassesOrderByInput>;
  skip?: number;
  take?: number;
};
