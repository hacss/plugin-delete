const { expect } = require("chai");
const deletePlugin = require("../index.js");

describe("delete plugin", () => {
  const keepDecls = {
    "padding-x": "10px",
  };

  const input = {
    "margin-x": "20px",
    "margin-y": "30px",
    ...keepDecls,
  };

  const spec = ["margin-x", "margin-y"];

  const [ del, properties ] = deletePlugin(spec);

  it("deletes specified properties", () => {
    expect(del(input)).to.deep.equal(keepDecls);
  });

  it("adds the keys from the spec to the list of recognized properties", () => {
    expect(properties).to.deep.equal(spec);
  });
});
