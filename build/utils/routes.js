const getRouterRoutes = (router) => router.stack
    .filter(({ route }) => route)
    .map(({ route }) => `${Object.keys(route.methods)[0].toUpperCase().padEnd(7).trim()} ${route.path}`);
const getAppRoutes = (app) => app._router.stack
    .filter(({ route }) => route)
    .map(({ route }) => `${Object.keys(route.methods)[0].toUpperCase().padEnd(7).trim()} ${route.path}`);
const getAllRoutes = (app, router) => {
    const appRoutes = getAppRoutes(app);
    const routerRoutes = router ? getRouterRoutes(router) : [];
    return [...appRoutes, ...routerRoutes];
};
export default getAllRoutes;
