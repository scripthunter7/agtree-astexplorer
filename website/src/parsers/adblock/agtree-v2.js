import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from 'agtree-v2/package.json';

const ID = '@adguard/agtree-v2';

const isUndefined = (value) => typeof value === 'undefined';

export default {
  ...defaultParserInterface,
  id: ID,
  displayName: ID.replace('-', ' '),
  version: pkg.version,
  homepage: pkg.homepage || 'https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/agtree',
  locationProps: new Set(['start', 'end']),

  loadParser(callback) {
    require(['agtree-v2'], callback);
  },

  parse(agtree, code, options) {
    return agtree.FilterListParser.parse(code, {
      tolerant: true,
      isLocIncluded: true,
      ...options,
    });
  },

  nodeToRange({ start, end }) {
    if (!isUndefined(start) && !isUndefined(end)) {
      return [start, end];
    }
  },

  opensByDefault(node, key) {
    return key === 'children';
  },

  getDefaultOptions() {
    return {
      parseAbpSpecificRules: true,
      parseUboSpecificRules: true,
      includeRaws: false,
      ignoreComments: false,
      parseHostRules: false,
    };
  },

  _getSettingsConfiguration() {
    return {
      fields: [
        'parseAbpSpecificRules',
        'parseUboSpecificRules',
        'includeRaws',
        'ignoreComments',
        'parseHostRules',
      ],
    };
  },
};
