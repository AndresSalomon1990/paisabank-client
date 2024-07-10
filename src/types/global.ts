export interface RequestError {
  success: boolean;
  message: string;
}

export type FilterCondition<T> = (dataItem: T) => boolean;
