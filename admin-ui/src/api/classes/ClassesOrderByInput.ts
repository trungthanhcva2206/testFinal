import { SortOrder } from "../../util/SortOrder";

export type ClassesOrderByInput = {
  className?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
