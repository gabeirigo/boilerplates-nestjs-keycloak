const parametersGroupedByCategory = (parameters) => {
    return parameters.reduce((acc, parameter) => {
        const category = parameter.parameter_definition.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(parameter);
        return acc;
    }, {});
};

export default parametersGroupedByCategory;
