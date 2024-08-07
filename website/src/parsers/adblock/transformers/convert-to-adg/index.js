import compileModule from '../../../utils/compileModule';
import pkg from 'agtree-v2/package.json';

const ID = '@adguard/agtree';

export default {
  id: ID,
  displayName: ID + ' (convert to AdGuard)',
  version: pkg.version,
  homepage: pkg.homepage,

  defaultParserID: ID,

  loadTransformer(callback) {
    require(['../../../transpilers/babel', 'agtree-v2'], (transpile, agtree) => {
      callback({ transpile: transpile.default, agtree });
    });
  },

  transform({ transpile, agtree }, transformCode, code) {
    transformCode = transpile(transformCode);
    let transformer = compileModule(transformCode).default;
    return transformer(code, agtree);
  },
};
