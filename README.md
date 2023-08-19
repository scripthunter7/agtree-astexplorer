# AST Explorer for AGTree

Demo is available at https://scripthunter7.github.io/agtree-astexplorer/

To use it, please select `Adblock Filter List` language from the top menu:

![image](https://github.com/scripthunter7/agtree-astexplorer/assets/57285466/b7c58a62-b4ed-4500-b297-a6cf345abad1)

## What is this?

This project uses [AST Explorer][astexplorer] as a base to provide a demo for [AGTree][agtree] parser. You can find AST Explorer's original README [here][original-readme].

## How to update AGTree

1. Clone the repository
1. Update AGTree package in the `website` folder (you should use `yarn` to install dependencies)
1. If necessary, update the parser configuration in `website/src/parsers/adblock/agtree.js`
1. Commit changes (`package.json` and `yarn.lock`)
1. Push changes to GitHub
1. Deploy workflow will be triggered automatically by the push on `master` branch
1. Wait for the deployment to finish, then check the AST Explorer website on [GitHub Pages][gh-pages]

## Files modified compared to the original AST Explorer

- `.github/workflows/deploy-to-gh-pages.yml` - GitHub Actions workflow to deploy the website to GitHub Pages
- `website/package.json` - AGTree package is added as a dependency
- `website/yarn.lock` - AGTree package is added as a dependency
- `website/src/parsers/adblock/*` - AGTree parser configuration & example filter list

[agtree]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/agtree
[astexplorer]: https://github.com/fkling/astexplorer
[gh-pages]: https://scripthunter7.github.io/agtree-astexplorer/
[original-readme]: https://github.com/fkling/astexplorer/blob/master/README.md
