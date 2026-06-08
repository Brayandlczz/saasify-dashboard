export type ApiErrorResponse = {
  error: string;
  message: string;
};

export type ApiListResponse<T> = {
  items: T[];
};