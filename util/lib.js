convertCamelToSnake = (camel) => {
    return camel.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
}
