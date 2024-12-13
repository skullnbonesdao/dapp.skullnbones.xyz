const fs = require('fs');
const path = require('node:path');
const { id } = require('chalk');

const idls = [
  {
    idl: require('./staratlas/locker/polis/proxy_rewarder.0.30.1.json'),
    name: 'proxy_rewarder',
    path: 'staratlas/locker/polis/types',
  },
  {
    idl: require('./staratlas/locker/polis/locked_voter.0.30.1.json'),
    name: 'locked_voter',
    path: 'staratlas/locker/polis/types',
  },
  {
    idl: require('./staratlas/locker/atlas/atlas-locker.0.30.1.json'),
    name: 'atlas_locker',
    path: 'staratlas/locker/atlas/types',
  },
]; // Load your JSON IDL file

console.log('> Started...');

idls.forEach((idl) => {
  let output = "import { PublicKey } from '@solana/web3.js';\n\n";

  output += generate(idl.idl);

  console.log(output);
  const dir = path.join(__dirname, idl.path, `types_${idl.name}.ts`);
  fs.writeFileSync(dir, output);
});

function generate(idl) {
  const types = [];

  // Generate types for "types" section
  if (idl.types) {
    idl.types.forEach((type) => {
      const { name, type: typeDefinition } = type;
      if (typeDefinition.kind === 'struct') {
        const fields = typeDefinition.fields
          .map(
            (field) =>
              `${field.name.replace(/_([a-z])/g, (_, letter) =>
                letter.toUpperCase(),
              )}: ${mapType(field.type)};`,
          )
          .join('\n  ');
        types.push(`export type ${name} = {\n  ${fields}\n};`);
      }
    });
  }
  return types.join('\n\n');
}

function mapType(type) {
  if (typeof type === 'string') {
    return mapPrimitive(type);
  } else if (type.array) {
    return `${mapPrimitive(type.array[0])}[]`;
  } else if (type.kind === 'struct') {
    return `{ ${type.fields
      .map((f) => `${f.name}: ${mapType(f.type)}`)
      .join('; ')} }`;
  } else {
    return 'any';
  }
}

function mapPrimitive(primitive) {
  switch (primitive) {
    case 'u8':
    case 'u16':
    case 'u32':
    case 'u64':
    case 'i8':
    case 'i16':
    case 'i32':
    case 'i64':
      return 'number';
    case 'bool':
      return 'boolean';
    case 'pubkey':
      return 'PublicKey'; // Assuming PubKey is string
    default:
      return 'any';
  }
}
