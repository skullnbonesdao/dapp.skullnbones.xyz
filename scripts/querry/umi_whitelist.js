const {
  createFromIdls,
  RenderJavaScriptVisitor,
} = require('@metaplex-foundation/kinobi');
const path = require('path');

// Instantiate Kinobi.
const kinobi = createFromIdls([path.join(__dirname, 'idls', 'whitelist.json')]);

const jsDir = path.join(__dirname, 'clients', 'js', 'src', 'generated');

// Render JavaScript
kinobi.accept(new RenderJavaScriptVisitor(jsDir));
