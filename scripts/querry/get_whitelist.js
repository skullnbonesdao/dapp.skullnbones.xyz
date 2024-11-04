const fetch = require('node-fetch');
const BufferLayout = require('buffer-layout');
const { PublicKey } = require('@solana/web3.js');

const url =
  'https://mainnet.helius-rpc.com/?api-key=bb83334b-9b37-4080-a11e-789a40aa74fe';
const data = {
  method: 'getProgramAccounts',
  jsonrpc: '2.0',
  params: [
    'whi5uDPWK4rAE9Sus6hdxdHwsG1hjDBn6kXM6pyqwTn',
    {
      encoding: 'base64',
      commitment: 'confirmed',
      filters: [
        {
          memcmp: {
            offset: 0,
            bytes: '9aSeey4EaH3',
          },
        },
      ],
    },
  ],
  id: '4b3051cb-40a4-4286-b5d3-e2e0b5c9ac16',
};

const publicKeyLayout = (property = 'publicKey') =>
  BufferLayout.blob(32, property); // PublicKey is 32 bytes

const whitelistEntryLayout = BufferLayout.struct([
  BufferLayout.blob(8, 'offset'), // UTF-8 string
  publicKeyLayout('parent'), // PublicKey type
  publicKeyLayout('whitelisted'), // PublicKey type
]);

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((responseData) => {
    responseData.result.forEach((r) => {
      const accountData = Buffer.from(r.account.data[0], 'base64');
      let decoded_data = whitelistEntryLayout.decode(accountData);
      console.log(
        `Pubkey: ${r.pubkey},
        > ParentList: ${new PublicKey(decoded_data.parent)}
        > Wallet: ${new PublicKey(decoded_data.whitelisted)}`,
      );
    });
    // Handle the response data
  })
  .catch((error) => {
    console.error('Error:', error);
    // Handle the error
  });
