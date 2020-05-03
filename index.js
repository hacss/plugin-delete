module.exports = function(spec) {
  return [
    function(decls) {
      for (var i = 0; i < spec.length; i++) {
        delete decls[spec[i]];
      }
      return decls;
    },
    spec,
  ];
};
