use one command to install cli module written in ts (module is located in git repo)

it needs `npx tsc` in the `prepare` step

but `npm i git+ssh: ... ` fails with 
>  'tsc' is not recognized as an internal or external command


trying to install with `npm install -g git@github.com:aovchinn/test-ssh-git-npm-install.git`

Error: 
```
PS C:\Users\xxxx\code\test-ssh-git-npm-install> npm install -g git@github.com:aovchinn/test-ssh-git-npm-install.git
npm ERR! code 1
npm ERR! git dep preparation failed timing reifyNode:node_modules/test-ssh-git-n
npm ERR! command C:\Program Files\nodejs\node.exe C:\Users\xxxx\AppData\Roaming\npm\node_modules\npm\bin\npm-cli.js install --force --cache=C:\Users\xxxx\AppData\Local\npm-cache --prefer-offline=false --prefer-online=false --offline=false --no-progress --no-save --no-audit --include=dev --include=peer --include=optional --no-package-lock-only --no-dry-run
npm ERR! npm WARN using --force Recommended protections disabled.
npm ERR! npm ERR! code 1
npm ERR! npm ERR! path C:\Users\xxxx\AppData\Local\npm-cache\_cacache\tmp\git-cloneXzSIOZ
npm ERR! npm ERR! command failed
npm ERR! npm ERR! command C:\Windows\system32\cmd.exe /d /s /c npx tsc
npm ERR! npm ERR! npm WARN using --force Recommended protections disabled.
npm ERR! npm ERR! npm WARN using --force Recommended protections disabled.
npm ERR! npm ERR! npm WARN exec The following package was not found and will be installed: tsc@2.0.4
npm ERR! npm ERR! 'tsc' is not recognized as an internal or external command,
npm ERR! npm ERR! operable program or batch file.
npm ERR!
npm ERR! npm ERR! A complete log of this run can be found in:
```
---
* node version = v16.20.0
* npm version = 9.6.6