/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/whitelist.json`.
 */
export type Whitelist = {
  "address": "whi5uDPWK4rAE9Sus6hdxdHwsG1hjDBn6kXM6pyqwTn",
  "metadata": {
    "name": "whitelist",
    "version": "0.1.0",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "whitelist",
          "writable": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "the account sending (and signing) this transaction"
          ]
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "addToWhitelist",
      "discriminator": [
        157,
        211,
        52,
        54,
        144,
        81,
        5,
        55
      ],
      "accounts": [
        {
          "name": "entry",
          "writable": true
        },
        {
          "name": "whitelist",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "accountToAdd",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "removeFromWhitelist",
      "discriminator": [
        7,
        144,
        216,
        239,
        243,
        236,
        193,
        235
      ],
      "accounts": [
        {
          "name": "entry",
          "writable": true
        },
        {
          "name": "whitelist",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "accountToDelete",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "deleteWhitelist",
      "discriminator": [
        229,
        26,
        200,
        168,
        119,
        177,
        128,
        19
      ],
      "accounts": [
        {
          "name": "whitelist",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "checkWhitelist",
      "discriminator": [
        202,
        135,
        140,
        249,
        143,
        1,
        201,
        143
      ],
      "accounts": [
        {
          "name": "whitelist"
        }
      ],
      "args": [
        {
          "name": "owner",
          "type": "pubkey"
        },
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "checkWhitelisted",
      "discriminator": [
        55,
        32,
        174,
        31,
        5,
        246,
        187,
        13
      ],
      "accounts": [
        {
          "name": "entry"
        },
        {
          "name": "whitelist"
        }
      ],
      "args": [
        {
          "name": "accountToCheck",
          "type": "pubkey"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "whitelist",
      "discriminator": [
        204,
        176,
        52,
        79,
        146,
        121,
        54,
        247
      ]
    },
    {
      "name": "whitelistEntry",
      "discriminator": [
        51,
        70,
        173,
        81,
        219,
        192,
        234,
        62
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "whitelistStillHasChilds",
      "msg": "The whitelist still has childs"
    },
    {
      "code": 6001,
      "name": "accountsNoRemovable",
      "msg": "Can not remove the specified account"
    }
  ],
  "types": [
    {
      "name": "whitelist",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "hasChilds",
            "type": "bool"
          },
          {
            "name": "accessCount",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "whitelistEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "parent",
            "type": "pubkey"
          },
          {
            "name": "whitelisted",
            "type": "pubkey"
          }
        ]
      }
    }
  ]
};

