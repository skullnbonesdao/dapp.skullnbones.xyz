import { createFromIdls } from '@metaplex-foundation/kinobi';
import * as path from 'path'; // Instantiate Kinobi.

// Instantiate Kinobi.
const kinobi = createFromIdls([
  path.join(__dirname, 'idls', 'my_idl.json'),
  path.join(__dirname, 'idls', 'my_other_idl.json'),
]);

// Update the Kinobi tree using visitors...

// Render JavaScript.
const jsDir = path.join(__dirname, 'clients', 'js', 'src', 'generated');
