import { Classes as TClasses } from "../api/classes/Classes";

export const CLASSES_TITLE_FIELD = "className";

export const ClassesTitle = (record: TClasses): string => {
  return record.className?.toString() || String(record.id);
};
