import type { Express, Request, Response, Router } from "express";
import Config from "../utils/Config/Config.js";
import getAllRoutes from "../utils/routes.js";

const getHelpApi =
  (
    configData: (config: Config) => Config,
    app: Express,
    router?: Router
  ): ((request: Request, response: Response) => void) =>
  (request: Request, response: Response) => {
    const config = configData(new Config());

    const mode = config.getMode();

    if (mode === 0) throw new Error("No valid mode");

    const routes = getAllRoutes(mode, app, router);

    config.setRoutes(routes);

    response.status(200).json({
      description: config.getDescription(),
      routes: config.getRoutes(),
    });
  };

export default getHelpApi;
