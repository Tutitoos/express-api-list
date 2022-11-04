import getAllRoutes from "../utils/routes.js";
const getHelpApi = (app, router) => (request, response) => {
    const routes = getAllRoutes(app, router);
    response.status(200).json({
        message: "This is a list of all the api endpoints.",
        routes,
    });
};
export default getHelpApi;
