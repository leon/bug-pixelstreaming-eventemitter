# Reproduction for event emitter bug

When using v0.3.2 of @epicgames-ps/lib-pixelstreamingfrontend-ue5.5 it will fail because @epicgames-ps+lib-pixelstreamingcommon-ue5.5 is getting included in frontend code

```bash
pnpm install
pnpm build
```

```bash
vite v5.4.11 building for production...
[plugin:vite:resolve] [plugin vite:resolve] Module "events" has been externalized for browser compatibility, imported by "/Users/leon/bug/node_modules/.pnpm/@epicgames-ps+lib-pixelstreamingcommon-ue5.5@0.1.1/node_modules/@epicgames-ps/lib-pixelstreamingcommon-ue5.5/build/esm/Protocol/SignallingProtocol.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "events" has been externalized for browser compatibility, imported by "/Users/leon/bug/node_modules/.pnpm/@epicgames-ps+lib-pixelstreamingcommon-ue5.5@0.1.1/node_modules/@epicgames-ps/lib-pixelstreamingcommon-ue5.5/build/esm/Transport/WebSocketTransportNJS.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "events" has been externalized for browser compatibility, imported by "/Users/leon/bug/node_modules/.pnpm/@epicgames-ps+lib-pixelstreamingcommon-ue5.5@0.1.1/node_modules/@epicgames-ps/lib-pixelstreamingcommon-ue5.5/build/esm/Transport/WebSocketTransport.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
✓ 98 modules transformed.
x Build failed in 391ms
error during build:
node_modules/.pnpm/@epicgames-ps+lib-pixelstreamingcommon-ue5.5@0.1.1/node_modules/@epicgames-ps/lib-pixelstreamingcommon-ue5.5/build/esm/Transport/WebSocketTransport.js (3:9): "EventEmitter" is not exported by "__vite-browser-external", imported by "node_modules/.pnpm/@epicgames-ps+lib-pixelstreamingcommon-ue5.5@0.1.1/node_modules/@epicgames-ps/lib-pixelstreamingcommon-ue5.5/build/esm/Transport/WebSocketTransport.js".
file: /Users/leon/bug/node_modules/.pnpm/@epicgames-ps+lib-pixelstreamingcommon-ue5.5@0.1.1/node_modules/@epicgames-ps/lib-pixelstreamingcommon-ue5.5/build/esm/Transport/WebSocketTransport.js:3:9

1: // Copyright Epic Games, Inc. All Rights Reserved.
2: import { Logger } from '../Logger/Logger';
3: import { EventEmitter } from 'events';
            ^
4: /**
5:  * The controller for the WebSocket and all associated methods

    at getRollupError (file:///Users/leon/bug/node_modules/.pnpm/rollup@4.27.4/node_modules/rollup/dist/es/shared/parseAst.js:396:41)
    at error (file:///Users/leon/bug/node_modules/.pnpm/rollup@4.27.4/node_modules/rollup/dist/es/shared/parseAst.js:392:42)
    at Module.error (file:///Users/leon/bug/node_modules/.pnpm/rollup@4.27.4/node_modules/rollup/dist/es/shared/node-entry.js:15593:16)
    at Module.traceVariable (file:///Users/leon/bug/node_modules/.pnpm/rollup@4.27.4/node_modules/rollup/dist/es/shared/node-entry.js:16042:29)
    at ModuleScope.findVariable (file:///Users/leon/bug/node_modules/.pnpm/rollup@4.27.4/node_modules/rollup/dist/es/shared/node-entry.js:13825:39)
    at ChildScope.findVariable (file:///Users/leon/bug/node_modules/.pnpm/rollup@4.27.4/node_modules/rollup/dist/es/shared/node-entry.js:5288:38)
    at Identifier.bind (file:///Users/leon/bug/node_modules/.pnpm/rollup@4.27.4/node_modules/rollup/dist/es/shared/node-entry.js:5071:40)
    at ClassDeclaration.bind (file:///Users/leon/bug/node_modules/.pnpm/rollup@4.27.4/node_modules/rollup/dist/es/shared/node-entry.js:2658:23)
    at ExportNamedDeclaration.bind (file:///Users/leon/bug/node_modules/.pnpm/rollup@4.27.4/node_modules/rollup/dist/es/shared/node-entry.js:11739:27)
    at Program.bind (file:///Users/leon/bug/node_modules/.pnpm/rollup@4.27.4/node_modules/rollup/dist/es/shared/node-entry.js:2654:28)
 ELIFECYCLE  Command failed with exit code 1.
```
