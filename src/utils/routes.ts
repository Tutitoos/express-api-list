import type { Express, Router } from "express";
import type AppExpress from "../types/express.js";
import type { RouteStructur } from "./Config/types.js";

const getRoutesApi = (
  base: AppExpress | Router
): Array<{
  route: Record<string, unknown>;
}> => {
  if ((base as Router).stack) {
    return base.stack as Array<{
      route: Record<string, unknown>;
    }>;
  }

  return (base as AppExpress)._router.stack as Array<{
    route: Record<string, unknown>;
  }>;
};

const getRoutes = (
  base: AppExpress | Router,
  format: number
): RouteStructur[] => {
  const routes = getRoutesApi(base);
  return routes
    .filter(({ route }) => route)
    .map(({ route }) =>
      format === 1
        ? `${Object.keys(route.methods)[0].toUpperCase().padEnd(7).trim()} ${
            route.path as string
          }`
        : {
            route: route.path as string,
            type: Object.keys(route.methods)[0].toUpperCase().padEnd(7).trim(),
          }
    );
};

const getAllRoutes = (format: number, app: Express, router?: Router) => {
  const appRoutes = getRoutes(app as AppExpress, format);
  const routerRoutes = router ? getRoutes(router, format) : [];
  return [...appRoutes, ...routerRoutes];
};

export default getAllRoutes;
