declare module 'GlobalTypes' {
  export type Services = typeof import('./index').default;
}
