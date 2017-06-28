convertCamelToSnake = (camel) => {
    return camel.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
}

function snakeToCamel(s){
    return s.replace(/(_\w)/g, function(m){return m[1].toUpperCase();});
}
