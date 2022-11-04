import responseTime from "response-time";
const fontColor = {
    black: "30",
    red: "31",
    green: "32",
    yellow: "33",
    blue: "34",
    magneta: "35",
    cyan: "36",
    white: "37",
};
const getStatus = (code) => {
    if (code >= 500)
        return `\x1b[${fontColor.red}m${code}\x1b[0m`;
    if (code >= 400)
        return `\x1b[${fontColor.yellow}m${code}\x1b[0m`;
    if (code >= 300)
        return `\x1b[${fontColor.cyan}m${code}\x1b[0m`;
    return `\x1b[${fontColor.green}m${code}\x1b[0m`;
};
const getMethod = (method) => {
    switch (method) {
        case "POST":
            return `\x1b[${fontColor.blue}m${method}\x1b[0m`;
        case "PUT":
            return `\x1b[${fontColor.magneta}m${method}\x1b[0m`;
        case "DELETE":
            return `\x1b[${fontColor.red}m${method}\x1b[0m`;
        case "PATCH":
            return `\x1b[${fontColor.yellow}m${method}\x1b[0m`;
        case "GET":
        default:
            return `\x1b[${fontColor.green}m${method}\x1b[0m`;
    }
};
const middleware = responseTime((request, response, time) => {
    const { method: methodAction, url } = request;
    const { statusCode: statusCodeAction } = response;
    const statusCode = getStatus(statusCodeAction);
    const method = getMethod(methodAction);
    console.log(`${method} ${statusCode} ${url} ${time.toFixed(3)} ms`);
});
export default middleware;
