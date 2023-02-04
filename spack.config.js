const { config } = require("@swc/core/spack"); // eslint-disable-line

module.exports = config({
  target: "node",
  entry: {
    client: __dirname + "/src/client/index.ts",
    // server: __dirname + "/src/server/index.ts",
  },
  output: {
    path: __dirname + "/dist",
  },
  module: {},
});
