import type { Express, Router } from "express";
import type AppExpress from "../types/express.js";

const getRouterRoutes = (router: Router): string[] =>
  router.stack
    .filter(({ route }) => route)
    .map(
      ({ route }) =>
        `${Object.keys(route.methods)[0].toUpperCase().padEnd(7).trim()} ${
          route.path as string
        }`
    );

const getAppRoutes = (app: AppExpress): string[] =>
  (
    app._router as {
      stack: Array<{
        route: Record<string, unknown>;
      }>;
    }
  ).stack
    .filter(({ route }) => route)
    .map(
      ({ route }) =>
        `${Object.keys(route.methods)[0].toUpperCase().padEnd(7).trim()} ${
          route.path as string
        }`
    );

const getAllRoutes = (app: Express, router?: Router) => {
  const appRoutes = getAppRoutes(app as AppExpress);
  const routerRoutes = router ? getRouterRoutes(router) : [];
  return [...appRoutes, ...routerRoutes];
};

export default getAllRoutes;
