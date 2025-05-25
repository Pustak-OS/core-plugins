import Koa from "koa";
import Router from "koa-router";

export interface PluginContext {
  app: Koa;
  router: Router;
}
