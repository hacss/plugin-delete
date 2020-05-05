export default (spec) => {
  return [
    (decls) => {
      spec.forEach((key) => delete decls[key]);
      return decls;
    },
    spec,
  ];
};
