export interface PluginContext {
  use: (middleware: any) => void;
  body: any;
}
