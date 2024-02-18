import { activateLanguage, addGrammar } from 'codemirror-textmate';
import { loadWASM } from 'onigasm';
import onigasm from 'onigasm/lib/onigasm.wasm';

export const loadTMLanguage = async () => {
  if (!('WebAssembly' in window)) {
    console.error('WebAssembly not supported');
    return false;
  }

  try {
    await loadWASM(onigasm);

    const grammars = {
      'text.adblock': {
        loader: () => import('./Adblock.tmLanguage.json'),
        language: 'adblock',
        priority: 'now',
      },
      'source.js': {
        loader: () => import('./JavaScript.tmLanguage.json'),
        language: 'javascript',
        priority: 'now',
      },
    };

    await Promise.all(
      Object.keys(grammars).map(async (scopeName) => {
        const { loader, language, priority } = grammars[scopeName];

        addGrammar(scopeName, loader);

        if (language) {
          const prom = activateLanguage(scopeName, language, priority);
          if (priority === 'now') {
            await prom;
          }
          return;
        }
      })
    );
  } catch (e) {
    return false;
  }

  return true;
};
