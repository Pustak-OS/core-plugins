import Router from "koa-router";
import { PluginContext } from "./PluginContext";

export async function firstTimeSetup(ctx: PluginContext) {
  console.log("firstTimeSetup");
}

export function registerRoutes(ctx: PluginContext) {
  const router = new Router();
  router.get("/", (ctx) => {
    ctx.body = "Hello World";
  });
  ctx.use(router.routes());
  ctx.use(router.allowedMethods());
  return router;
}
