const assert = require("assert");
const deletePlugin = require("../dist/hacss-plugin-delete.umd.js");

const keepDecls = {
  "padding-x": "10px",
};

const input = {
  "margin-x": "20px",
  "margin-y": "30px",
  ...keepDecls,
};

const spec = ["margin-x", "margin-y"];

const [del, properties] = deletePlugin(spec);

const test = (actual, expected) => {
  console.log(`${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  assert.deepEqual(actual, expected);
};

test(del(input), keepDecls);
test(properties, spec);

console.log("All tests passed.");
