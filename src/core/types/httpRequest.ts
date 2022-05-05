export type RequestGet = RequestInit
export type RequestDelete = RequestInit
export type RequestPut = RequestInit & { data: any }
export type RequestPost = RequestInit & { data: any }
export type RequestPatch = RequestInit & { data?: any }
