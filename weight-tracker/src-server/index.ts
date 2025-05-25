import { PluginContext } from "./PluginContext";
import { sendSuccess } from "./response";

export async function firstTimeSetup(ctx: PluginContext) {
  console.log("From weight-tracker, firstTimeSetup success");
}

export function registerRoutes(ctx: PluginContext) {
  ctx.router.get("/hello", (ctx) => {
    sendSuccess(ctx, "Hello World");
  });
}
