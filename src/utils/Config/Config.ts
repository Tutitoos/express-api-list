import type { ConfigTypes, RouteStructur } from "./types";

class Config {
  private mode: ConfigTypes;
  private description: string;
  private routes: RouteStructur[];

  constructor() {
    this.initialConfig();
  }

  initialConfig() {
    this.mode = 0;
    this.description = "";
    this.routes = [];
  }

  setMode(mode: ConfigTypes) {
    if (mode === 0 || ![1, 2].includes(mode)) {
      throw new Error("Mode invalid");
    }

    this.mode = mode;
  }

  getMode() {
    return this.mode;
  }

  setDescription(text: string) {
    if (!text || text.length < 0) {
      throw new Error("Description invalid");
    }

    this.description = text;
  }

  getDescription() {
    return this.description;
  }

  setRoutes(routes: RouteStructur[]) {
    this.routes = routes;
  }

  getRoutes() {
    return this.routes;
  }
}

export default Config;
