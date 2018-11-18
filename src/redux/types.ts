export interface Action<T> {
  type: T;
}
export interface PayloadedAction<T, P> {
  type: T;
  payload: P;
}
