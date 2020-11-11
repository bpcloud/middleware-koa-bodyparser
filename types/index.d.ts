/// <reference types="node" />

interface BpframeworkMiddleware {
  type: string,
  name: string,
  afterRoute: (app:any)=>Promise<boolean>,
  beforeRoute: (app:any)=>Promise<boolean>,
  initiator: (app:any)=>void,
}

export const name: string;

export function middleware(cfg: {
  onErrorBodyParser: (err: any, ctx: any)=> void
}): BpframeworkMiddleware;