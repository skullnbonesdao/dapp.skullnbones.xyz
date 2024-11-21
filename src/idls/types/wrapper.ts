/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/wrapper_factory.json`.
 */
export type WrapperFactory = {
  address: 'wrprFD8nubz7iB3pKfuMiUjcydQNoCL5eWnEPMbG1F6';
  metadata: {
    name: 'wrapperFactory';
    version: '0.1.0';
    spec: '0.1.0';
    description: 'Created with Anchor';
  };
  instructions: [
    {
      name: 'close';
      discriminator: [98, 165, 201, 177, 108, 65, 206, 96];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'wrapper';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [119, 114, 97, 112, 112, 101, 114];
              },
              {
                kind: 'account';
                path: 'mintUnwrapped';
              },
              {
                kind: 'account';
                path: 'wrapper.admin';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintWrapped';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'account';
                path: 'wrapper.seed';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintUnwrapped';
        },
        {
          name: 'vaultWrapped';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'account';
                path: 'mintUnwrapped';
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [];
    },
    {
      name: 'closeGroup';
      discriminator: [40, 187, 201, 187, 18, 194, 122, 232];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'group';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  103,
                  114,
                  111,
                  117,
                  112,
                ];
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [];
    },
    {
      name: 'createVault';
      discriminator: [29, 237, 247, 208, 193, 82, 54, 135];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'wrapper';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [119, 114, 97, 112, 112, 101, 114];
              },
              {
                kind: 'account';
                path: 'wrapper.mint_unwrapped';
                account: 'wrapper';
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'mintUnwrapped';
        },
        {
          name: 'vaultWrapped';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'account';
                path: 'wrapper.mint_unwrapped';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [];
    },
    {
      name: 'edit';
      discriminator: [15, 183, 33, 86, 87, 28, 151, 145];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'wrapper';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [119, 114, 97, 112, 112, 101, 114];
              },
              {
                kind: 'account';
                path: 'mintUnwrapped';
              },
              {
                kind: 'account';
                path: 'wrapper.admin';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintWrapped';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'account';
                path: 'wrapper.seed';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintUnwrapped';
        },
        {
          name: 'whitelist';
          optional: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'editParams';
            };
          };
        },
      ];
    },
    {
      name: 'initialize';
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'wrapper';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [119, 114, 97, 112, 112, 101, 114];
              },
              {
                kind: 'account';
                path: 'mintUnwrapped';
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'mintWrapped';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'arg';
                path: 'params.seed';
              },
            ];
          };
        },
        {
          name: 'mintUnwrapped';
        },
        {
          name: 'group';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'initPrams';
            };
          };
        },
      ];
    },
    {
      name: 'initializeGroup';
      discriminator: [191, 73, 34, 229, 233, 213, 189, 173];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'group';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  103,
                  114,
                  111,
                  117,
                  112,
                ];
              },
              {
                kind: 'account';
                path: 'signer';
              },
            ];
          };
        },
        {
          name: 'fee';
          writable: true;
          address: 'subA4tNLV18htV8xACaZyMMKkAm1AQS4EhiPYPV4zbH';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'name';
          type: 'string';
        },
      ];
    },
    {
      name: 'metadataCreate';
      discriminator: [79, 112, 145, 162, 26, 151, 102, 135];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'wrapper';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [119, 114, 97, 112, 112, 101, 114];
              },
              {
                kind: 'account';
                path: 'mintUnwrapped';
              },
              {
                kind: 'account';
                path: 'wrapper.admin';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintWrapped';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'account';
                path: 'wrapper.seed';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintUnwrapped';
        },
        {
          name: 'metadata';
          writable: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'tokenMetadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'metadata';
          type: {
            defined: {
              name: 'metadataParams';
            };
          };
        },
      ];
    },
    {
      name: 'metadataUpdate';
      discriminator: [227, 88, 37, 234, 30, 248, 12, 51];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'wrapper';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [119, 114, 97, 112, 112, 101, 114];
              },
              {
                kind: 'account';
                path: 'mintUnwrapped';
              },
              {
                kind: 'account';
                path: 'wrapper.admin';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintWrapped';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'account';
                path: 'wrapper.seed';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintUnwrapped';
        },
        {
          name: 'metadata';
          writable: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'tokenMetadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'metadata';
          type: {
            defined: {
              name: 'metadataParams';
            };
          };
        },
      ];
    },
    {
      name: 'transferVault';
      discriminator: [15, 245, 182, 67, 227, 160, 170, 213];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'wrapper';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [119, 114, 97, 112, 112, 101, 114];
              },
              {
                kind: 'account';
                path: 'mintUnwrapped';
              },
              {
                kind: 'account';
                path: 'wrapper.admin';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintWrapped';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'account';
                path: 'wrapper.seed';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintUnwrapped';
        },
        {
          name: 'ataUnwrappedSigner';
          writable: true;
        },
        {
          name: 'ataUnwrappedVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'account';
                path: 'mintUnwrapped';
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
        },
      ];
      args: [
        {
          name: 'amountUnwrapped';
          type: 'u64';
        },
      ];
    },
    {
      name: 'unwrap';
      discriminator: [126, 175, 198, 14, 212, 69, 50, 44];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'wrapper';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [119, 114, 97, 112, 112, 101, 114];
              },
              {
                kind: 'account';
                path: 'mintUnwrapped';
              },
              {
                kind: 'account';
                path: 'wrapper.admin';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintWrapped';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'account';
                path: 'wrapper.seed';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintUnwrapped';
        },
        {
          name: 'signerWrapped';
          writable: true;
        },
        {
          name: 'signerUnwrapped';
          writable: true;
        },
        {
          name: 'vaultUnwrapped';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'account';
                path: 'mintUnwrapped';
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'whitelist';
          writable: true;
          optional: true;
        },
        {
          name: 'whitelistEntry';
          writable: true;
          optional: true;
        },
        {
          name: 'whitelistProgram';
          optional: true;
          address: 'whi5uDPWK4rAE9Sus6hdxdHwsG1hjDBn6kXM6pyqwTn';
        },
      ];
      args: [
        {
          name: 'amountUnwrapped';
          type: 'u64';
        },
      ];
    },
    {
      name: 'wrap';
      discriminator: [178, 40, 10, 189, 228, 129, 186, 140];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'wrapper';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [119, 114, 97, 112, 112, 101, 114];
              },
              {
                kind: 'account';
                path: 'mintUnwrapped';
              },
              {
                kind: 'account';
                path: 'wrapper.admin';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintWrapped';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'account';
                path: 'wrapper.seed';
                account: 'wrapper';
              },
            ];
          };
        },
        {
          name: 'mintUnwrapped';
        },
        {
          name: 'signerUnwrapped';
          writable: true;
        },
        {
          name: 'signerWrapped';
          writable: true;
        },
        {
          name: 'vaultUnwrapped';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  119,
                  114,
                  97,
                  112,
                  112,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116,
                ];
              },
              {
                kind: 'account';
                path: 'wrapper';
              },
              {
                kind: 'account';
                path: 'mintUnwrapped';
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'whitelist';
          writable: true;
          optional: true;
        },
        {
          name: 'whitelistEntry';
          writable: true;
          optional: true;
        },
        {
          name: 'whitelistProgram';
          optional: true;
          address: 'whi5uDPWK4rAE9Sus6hdxdHwsG1hjDBn6kXM6pyqwTn';
        },
      ];
      args: [
        {
          name: 'amountUnwrapped';
          type: 'u64';
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'group';
      discriminator: [209, 249, 208, 63, 182, 89, 186, 254];
    },
    {
      name: 'whitelist';
      discriminator: [204, 176, 52, 79, 146, 121, 54, 247];
    },
    {
      name: 'whitelistEntry';
      discriminator: [51, 70, 173, 81, 219, 192, 234, 62];
    },
    {
      name: 'wrapper';
      discriminator: [161, 11, 109, 119, 86, 61, 163, 136];
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'zeroError';
      msg: 'Input is zero';
    },
    {
      code: 6001;
      name: 'signerError';
      msg: 'Invalid Signer';
    },
    {
      code: 6002;
      name: 'amountMismatch';
      msg: 'Incorrect amounts for unwrapped/wrapped';
    },
    {
      code: 6003;
      name: 'permissionIncorrect';
      msg: 'Permission incorrect';
    },
    {
      code: 6004;
      name: 'limitReached';
      msg: 'Wrap limit reached';
    },
    {
      code: 6005;
      name: 'noGroupMatch';
      msg: 'No group match';
    },
  ];
  types: [
    {
      name: 'editParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'allowWrap';
            type: 'bool';
          },
          {
            name: 'allowUnwrap';
            type: 'bool';
          },
          {
            name: 'useLimit';
            type: 'bool';
          },
          {
            name: 'amountAbleToWrap';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'onlyCreatorCanUnwrap';
            type: {
              option: 'bool';
            };
          },
          {
            name: 'useWhitelist';
            type: {
              option: 'bool';
            };
          },
          {
            name: 'admin';
            type: {
              option: 'pubkey';
            };
          },
          {
            name: 'ratio';
            type: {
              option: {
                array: ['u64', 2];
              };
            };
          },
        ];
      };
    },
    {
      name: 'group';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'name';
            type: 'string';
          },
          {
            name: 'owner';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'initPrams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ratio';
            type: {
              array: ['u64', 2];
            };
          },
          {
            name: 'onlyCreatorCanUnwrap';
            type: 'bool';
          },
          {
            name: 'wrappedDecimals';
            type: 'u8';
          },
          {
            name: 'seed';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'metadataParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'name';
            type: 'string';
          },
          {
            name: 'symbol';
            type: 'string';
          },
          {
            name: 'uri';
            type: 'string';
          },
        ];
      };
    },
    {
      name: 'whitelist';
      docs: ['Account: Whitelist'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'pubkey';
          },
          {
            name: 'name';
            type: 'string';
          },
          {
            name: 'hasChilds';
            type: 'bool';
          },
          {
            name: 'accessCount';
            type: 'u32';
          },
        ];
      };
    },
    {
      name: 'whitelistEntry';
      docs: ['Account: WhitelistEntry'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'parent';
            type: 'pubkey';
          },
          {
            name: 'whitelisted';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'wrapper';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'seed';
            type: 'u64';
          },
          {
            name: 'group';
            type: 'pubkey';
          },
          {
            name: 'admin';
            type: 'pubkey';
          },
          {
            name: 'onlyCreatorCanUnwrap';
            type: 'bool';
          },
          {
            name: 'mintUnwrapped';
            type: 'pubkey';
          },
          {
            name: 'mintWrapped';
            type: 'pubkey';
          },
          {
            name: 'wrappedDecimals';
            type: 'u8';
          },
          {
            name: 'allowWrap';
            type: 'bool';
          },
          {
            name: 'allowUnwrap';
            type: 'bool';
          },
          {
            name: 'useLimit';
            type: 'bool';
          },
          {
            name: 'amountAbleToWrap';
            type: 'u64';
          },
          {
            name: 'ratio';
            type: {
              array: ['u64', 2];
            };
          },
          {
            name: 'useWhitelist';
            type: 'bool';
          },
          {
            name: 'whitelist';
            type: 'pubkey';
          },
        ];
      };
    },
  ];
  constants: [
    {
      name: 'feeAccount';
      type: 'pubkey';
      value: 'subA4tNLV18htV8xACaZyMMKkAm1AQS4EhiPYPV4zbH';
    },
  ];
};
