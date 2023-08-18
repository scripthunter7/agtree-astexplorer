# AST Explorer for AGTree

This project uses [AST Explorer][astexplorer] as a base to provide a demo for [AGTree][agtree] parser.

Original README is available [here][original-readme].

## How to update AGTree

1. Clone the repository
1. Update AGTree package in the `website` folder (you should use `yarn` to install dependencies)
1. Commit changes (`package.json` and `yarn.lock`)
1. Push changes to GitHub
1. Deploy workflow will be triggered automatically with a `master` push

[agtree]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/agtree
[astexplorer]: https://github.com/fkling/astexplorer
[original-readme]: https://github.com/fkling/astexplorer/blob/master/README.md
