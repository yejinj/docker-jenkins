(()=>{"use strict";var e={874:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"cd",description:"Change the shell working directory",args:{name:"folder",template:"folders",suggestions:[{name:"-",description:"Switch to the last used folder",hidden:!0},{name:"~",description:"Switch to the home directory",hidden:!0}]}}},334:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s={...i(n(8)).default,name:"code-insiders"};t.default=s},8:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n={name:"code",description:"Visual Studio Code",args:{template:["filepaths","folders"],isVariadic:!0},options:[{name:"-",description:"Read from stdin (e.g. 'ps aux | grep code | code -')"},{name:["-d","--diff"],description:"Compare two files with each other",args:[{name:"file",template:"filepaths"},{name:"file",template:"filepaths"}]},{name:["-m","--merge"],description:"Perform a three-way merge by providing paths for two modified versions of a file, the common origin of both modified versions and the output file to save merge results",args:[{name:"path1",template:"filepaths"},{name:"path2",template:"filepaths"},{name:"base",template:"filepaths"},{name:"result",template:"filepaths"}]},{name:["-a","--add"],description:"Add folder(s) to the last active window",args:{name:"folder",template:"folders",isVariadic:!0}},{name:["-g","--goto"],description:"Open a file at the path on the specified line and character position",args:{name:"file:line[:character]",template:"filepaths"}},{name:["-n","--new-window"],description:"Force to open a new window"},{name:["-r","--reuse-window"],description:"Force to open a file or folder in an already opened window"},{name:["-w","--wait"],description:"Wait for the files to be closed before returning"},{name:"--locale",description:"The locale to use (e.g. en-US or zh-TW)",args:{name:"locale",suggestions:[{name:"en",icon:"🇺🇸",description:"English (US)"},{name:"zh-CN",icon:"🇨🇳",description:"Simplified Chinese"},{name:"zh-TW",icon:"🇹🇼",description:"Traditional Chinese"},{name:"fr",icon:"🇫🇷",description:"French"},{name:"de",icon:"🇩🇪",description:"German"},{name:"it",icon:"🇮🇹",description:"Italian"},{name:"es",icon:"🇪🇸",description:"Spanish"},{name:"ja",icon:"🇯🇵",description:"Japanese"},{name:"ko",icon:"🇰🇷",description:"Korean"},{name:"ru",icon:"🇷🇺",description:"Russian"},{name:"bg",icon:"🇧🇬",description:"Bulgarian"},{name:"hu",icon:"🇭🇺",description:"Hungarian"},{name:"pt-br",icon:"🇧🇷",description:"Portuguese (Brazil)"},{name:"tr",icon:"🇹🇷",description:"Turkish"}]}},{name:"--user-data-dir",description:"Specifies the directory that user data is kept in. Can be used to open multiple distinct instances of Code",args:{name:"dir",template:"folders"}},{name:"--profile",description:"Opens the provided folder or workspace with the given profile and associates the profile with the workspace. If the profile does not exist, a new empty one is created. A folder or workspace must be provided for the profile to take effect",args:{name:"settingsProfileName"}},{name:["-h","--help"],description:"Print usage"},{name:"--extensions-dir",description:"Set the root path for extensions",args:{name:"dir",template:"folders"}},{name:"--list-extensions",description:"List the installed extensions"},{name:"--show-versions",description:"Show versions of installed extensions, when using --list-extensions"},{name:"--category",description:"Filters installed extensions by provided category, when using --list-extensions",args:{name:"category",suggestions:["azure","data science","debuggers","extension packs","education","formatters","keymaps","language packs","linters","machine learning","notebooks","programming languages","scm providers","snippets","testing","themes","visualization","other"]}},{name:"--install-extension",description:"Installs or updates an extension. The argument is either an extension id or a path to a VSIX. The identifier of an extension is '${ publisher }.${ name }'. Use '--force' argument to update to latest version. To install a specific version provide '@${version}'. For example: 'vscode.csharp@1.2.3'",args:{name:"extension-id[@version] | path-to-vsix"}},{name:"--pre-release",description:"Installs the pre-release version of the extension, when using --install-extension"},{name:"--uninstall-extension",description:"Uninstalls an extension",args:{name:"extension-id"}},{name:"--enable-proposed-api",description:"Enables proposed API features for extensions. Can receive one or more extension IDs to enable individually"},{name:["-v","--version"],description:"Print version"},{name:"--verbose",description:"Print verbose output (implies --wait)"},{name:"--log",description:"Log level to use. Default is 'info' when unspecified",args:{name:"level",default:"info",suggestions:["critical","error","warn","info","debug","trace","off"]}},{name:["-s","--status"],description:"Print process usage and diagnostics information"},{name:"--prof-startup",description:"Run CPU profiler during startup"},{name:"--disable-extensions",description:"Disable all installed extensions"},{name:"--disable-extension",description:"Disable an extension",args:{name:"extension-id"}},{name:"--sync",description:"Turn sync on or off",args:{name:"sync",description:"Whether to enable sync",suggestions:["on","off"]}},{name:"--inspect-extensions",description:"Allow debugging and profiling of extensions. Check the developer tools for the connection URI",args:{name:"port"}},{name:"--inspect-brk-extensions",description:"Allow debugging and profiling of extensions with the extension host being paused after start. Check the developer tools for the connection URI",args:{name:"port"}},{name:"--disable-gpu",description:"Disable GPU hardware acceleration"},{name:"--max-memory",description:"Max memory size for a window (in Mbytes)",args:{name:"memory",description:"Memory in megabytes"}},{name:"--telemetry",description:"Shows all telemetry events which VS code collects"}]};t.default=n},830:function(e,t,n){var i,s=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var s=Object.getOwnPropertyDescriptor(t,n);s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,s)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||(i=function(e){return i=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},i(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n=i(e),r=0;r<n.length;r++)"default"!==n[r]&&s(t,e,n[r]);return o(t,e),t}),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.availableSpecs=void 0,t.activate=async function(e){e.subscriptions.push(c.window.registerTerminalCompletionProvider({id:"terminal-suggest",async provideTerminalCompletions(e,n,i){if(i.isCancellationRequested)return;const s=("shellPath"in e.creationOptions?e.creationOptions.shellPath:void 0)??c.env.shell;if(!s)return;const o=await async function(){if(g)return g;const e=S()?process.env.PATH?.split(";"):process.env.PATH?.split(":");if(!e)return;const t=new Set;for(const n of e)try{if(!await d.stat(n).then((e=>e.isDirectory())).catch((()=>!1)))continue;const e=await c.workspace.fs.readDirectory(c.Uri.file(n));for(const[n,i]of e)i!==c.FileType.File&&i!==c.FileType.SymbolicLink||t.add(n)}catch(e){continue}return g=t,t}(),r=function(e){try{const t=f.basename(e,f.extname(e)),n=undefined;if(n)return n;const i=e=>e,s={encoding:"utf-8",shell:e};switch(t){case"bash":{const e=(0,p.execSync)("compgen -b",s).split("\n").filter(i);if(e.length)return e;break}case"zsh":{const e=(0,p.execSync)('printf "%s\\n" ${(k)builtins}',s).split("\n").filter(i);if(e.length)return e}case"fish":{const e=(0,p.execSync)("functions -n",s).split(", ").filter(i);if(e.length)return e;break}case"pwsh":return[]}return}catch(e){return void console.error("Error fetching builtin commands:",e)}}(s);if(!o||!r)return;const a=[...o,...r],l=function(e,t){if(""===e.trim())return"";if(t<e.length&&/\S/.test(e[t]))return"";const n=e.slice(0,t).match(/(\S+)\s*$/);return n?n[0]:""}(n.commandLine,n.cursorPosition),u=await x(t.availableSpecs,n,a,l,e.shellIntegration?.cwd,i);return u.cwd&&(u.filesRequested||u.foldersRequested)?new c.TerminalCompletionList(u.items,{filesRequested:u.filesRequested,foldersRequested:u.foldersRequested,cwd:u.cwd,pathSeparator:S()?"\\":"/"}):u.items}},"/","\\"))},t.resolveCwdFromPrefix=v,t.asArray=y,t.getCompletionItemsFromSpecs=x;const c=r(n(398)),l=r(n(857)),d=r(n(943)),f=r(n(928)),p=n(317),u=a(n(334)),m=a(n(8)),h=a(n(874));let g;async function v(e,t){if(t){try{let n;S()?(n=e.lastIndexOf("\\"),-1===n&&(n=e.lastIndexOf("/"))):n=e.lastIndexOf("/");const i=-1===n?"":e.slice(0,n),s=f.resolve(t?.fsPath,i);if((await d.stat(s)).isDirectory())return t.with({path:s})}catch{}return t}}function w(e){return"string"==typeof e?[e]:"string"==typeof e.name?[e.name]:Array.isArray(e.name)&&0!==e.name.length?e.name:void 0}function b(e,t,n,i,s,o){return{label:i,detail:s??"",replacementIndex:e.length-n.length>=0?e.length-n.length:" "===e[t-1]?t:t-1,replacementLength:n.length,kind:o??c.TerminalCompletionItemKind.Method}}function y(e){return Array.isArray(e)?e:[e]}async function x(e,t,n,i,s,o){const r=[];let a=!1,l=!1,d=!1;const f=function(e){const t=e.split(" ");let n=t[0];return t.length>1?n=void 0:0===t.length&&(n=e),n}(t.commandLine);for(const p of e){const e=w(p);if(e)for(const u of e){if(!n.includes(u)||o&&o?.isCancellationRequested)continue;if((!t.commandLine||f&&u.startsWith(f))&&r.push(b(t.commandLine,t.cursorPosition,i,u)),!t.commandLine.startsWith(u))continue;const e=t.commandLine.slice(0,t.cursorPosition+1);if("options"in p&&p.options)for(const n of p.options){const o=w(n);if(o)for(const f of o){(!r.find((e=>e.label===f))&&f.startsWith(i)||i.length>u.length&&i.trim()===u)&&r.push(b(t.commandLine,t.cursorPosition,i,f,n.description,c.TerminalCompletionItemKind.Flag));const o=`${u} ${f} `;if(!e.includes(o))continue;const p=t.commandLine.lastIndexOf(o),m=e.slice(p+o.length),h=P(n.args,m,t);if(!h)continue;d=!0;const g=h.items;let w;return l=l||h.foldersRequested,a=a||h.filesRequested,s&&(a||l)&&(w=await v(i,s)??s),d=h.specificSuggestionsProvided,{items:g,filesRequested:a,foldersRequested:l,cwd:w}}}if("args"in p&&y(p.args)){const n=`${u} `;if(!e.includes(n))continue;const i=t.commandLine.lastIndexOf(n),s=e.slice(i+n.length),o=P(p.args,s,t);if(!o)continue;r.push(...o.items),d=o.specificSuggestionsProvided,a=a||o.filesRequested,l=l||o.foldersRequested}}}if(!d&&a===l)for(const e of n)(!t.commandLine.trim()||f&&e.startsWith(f))&&!r.find((t=>t.label===e))&&r.push(b(t.commandLine,t.cursorPosition,i,e));let p;return(0===t.commandLine.trim().length||!r?.length||r.length&&r.every((e=>[".",".."].includes(e.label))))&&!a&&!l&&(a=!0,l=!0),s&&(a||l)&&(p=await v(i,s)??s),{items:r,filesRequested:a,foldersRequested:l,cwd:p}}function P(e,t,n){if(!e)return;let i=[],s=!1,o=!1;for(const r of y(e))if(r&&(r.template&&("filepaths"===r.template?s=!0:"folders"===r.template&&(o=!0)),r.suggestions?.length)){i=[];for(const e of r.suggestions){const a=w(e);if(!a)continue;const l=n.commandLine.slice(0,n.cursorPosition).split(" ").at(-2),d=n.commandLine.slice(0,n.cursorPosition).split(" ").at(-1);for(const f of a)if(!i.find((e=>e.label===f))){if(!r.isVariadic&&l===f&&""===d?.trim())return{items:[],filesRequested:s,foldersRequested:o,specificSuggestionsProvided:!1};if(f&&f.startsWith(t.trim())){const t="string"!=typeof e?e.description:"";i.push(b(n.commandLine,n.cursorPosition,d??"",f,t,c.TerminalCompletionItemKind.Argument))}}}if(i.length)return{items:i,filesRequested:s,foldersRequested:o,specificSuggestionsProvided:!0}}return{items:i,filesRequested:s,foldersRequested:o,specificSuggestionsProvided:!1}}function S(){return"win32"===l.platform()}t.availableSpecs=[m.default,u.default,h.default]},398:e=>{e.exports=require("vscode")},317:e=>{e.exports=require("child_process")},943:e=>{e.exports=require("fs/promises")},857:e=>{e.exports=require("os")},928:e=>{e.exports=require("path")}},t={},n=function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}(830),i=exports;for(var s in n)i[s]=n[s];n.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();
//# sourceMappingURL=https://cursor-sourcemaps.s3.amazonaws.com/sourcemaps/73dd83bb6f8e3a3704ad8078a8e455ac6d4260d0/extensions/terminal-suggest/dist/terminalSuggestMain.js.map