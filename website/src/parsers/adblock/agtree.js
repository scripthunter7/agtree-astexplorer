import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from '@adguard/agtree/package.json';

const ID = '@adguard/agtree';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage || 'https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/agtree',
  locationProps: new Set(['loc']),

  loadParser(callback) {
    require(['@adguard/agtree'], callback);
  },

  parse(agtree, code) {
    return agtree.FilterListParser.parse(code);
  },

  nodeToRange({ loc }) {
    if (loc && loc.start && loc.end) {
      return [loc.start.offset, loc.end.offset];
    }
  },

  opensByDefault(node, key) {
    return key === 'children';
  },
};
