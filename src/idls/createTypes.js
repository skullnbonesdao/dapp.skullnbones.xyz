const fs = require('fs');

const files = [
  {
    name: 'Whitelist',
    fileName: 'whitelist.0.30.1.json',
  },
  {
    name: 'Raffle',
    fileName: 'raffle.0.30.1.json',
  },
  {
    name: 'LockedVoter',
    fileName: 'locked_voter.0.30.1.json',
  },
  {
    name: 'ProxyRewarder',
    fileName: 'proxy_rewarder.0.30.1.json',
  },
  {
    name: 'Snapshot',
    fileName: 'snapshots.0.30.1.json',
  },
];

files.forEach((file) => {
  let data = fs.readFileSync('./' + file.fileName, 'utf8');

  data = `export type ${file.name} = ` + data;

  fs.writeFileSync('./types/' + file.name.toLowerCase() + '.ts', data, 'utf8');
});
