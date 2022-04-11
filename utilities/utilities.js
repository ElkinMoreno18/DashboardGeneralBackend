function areNotTheParameters(parameters) {
  if (!Array.isArray(parameters)) return new Error("Invalid parameters");
  return parameters.some(function (value) {
    //At least one item meets the condition
    if (typeof value === "string") {
      let val = value.replace(/ /g, "");
      return value.length === 0;
    }
    return value === undefined || value === null;
  });
}

module.exports = {
  areNotTheParameters,
};
