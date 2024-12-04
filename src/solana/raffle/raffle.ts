/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/raffle.json`.
 */
export type Raffle = {
  "address": "rafxXxjw9fkAuQhCJ1A4gmX1oqgvRrSeXyRPUE9K2Yx",
  "metadata": {
    "name": "raffle",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "buyTickets",
      "discriminator": [
        48,
        16,
        122,
        137,
        24,
        214,
        198,
        58
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "entrant"
        },
        {
          "name": "raffle",
          "writable": true
        },
        {
          "name": "tickets",
          "writable": true,
          "relations": [
            "raffle"
          ]
        },
        {
          "name": "ticketsAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  84,
                  105,
                  99,
                  107,
                  101,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "raffle"
              }
            ]
          }
        },
        {
          "name": "ticketsMint"
        },
        {
          "name": "from",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "whitelist",
          "docs": [
            "Checks"
          ],
          "writable": true,
          "optional": true
        },
        {
          "name": "whitelistEntry",
          "writable": true,
          "optional": true
        },
        {
          "name": "whitelistProgram",
          "optional": true,
          "address": "whi5uDPWK4rAE9Sus6hdxdHwsG1hjDBn6kXM6pyqwTn"
        },
        {
          "name": "feeAccount",
          "writable": true,
          "address": "feeW4D5WBZQEk6QtoSrw2KjZF45d7LBK9oCGuczKW2G"
        }
      ],
      "args": [
        {
          "name": "ticketAmount",
          "type": "u32"
        }
      ]
    },
    {
      "name": "claimPrize",
      "discriminator": [
        157,
        233,
        139,
        121,
        246,
        62,
        234,
        235
      ],
      "accounts": [
        {
          "name": "raffle",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  102,
                  102,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "raffle.name",
                "account": "raffle"
              },
              {
                "kind": "account",
                "path": "raffle.seed",
                "account": "raffle"
              }
            ]
          }
        },
        {
          "name": "tickets",
          "relations": [
            "raffle"
          ]
        },
        {
          "name": "prizeVault",
          "writable": true
        },
        {
          "name": "prizeMint"
        },
        {
          "name": "to",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "claimTickets",
      "discriminator": [
        115,
        177,
        141,
        142,
        7,
        255,
        105,
        60
      ],
      "accounts": [
        {
          "name": "creator",
          "signer": true
        },
        {
          "name": "raffle",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  102,
                  102,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "raffle.name",
                "account": "raffle"
              },
              {
                "kind": "account",
                "path": "raffle.seed",
                "account": "raffle"
              }
            ]
          }
        },
        {
          "name": "ticketsAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  84,
                  105,
                  99,
                  107,
                  101,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "raffle"
              }
            ]
          }
        },
        {
          "name": "ticketsMint"
        },
        {
          "name": "to",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "close",
      "discriminator": [
        98,
        165,
        201,
        177,
        108,
        65,
        206,
        96
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "raffle",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  102,
                  102,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "raffle.name",
                "account": "raffle"
              },
              {
                "kind": "account",
                "path": "raffle.seed",
                "account": "raffle"
              }
            ]
          }
        },
        {
          "name": "tickets",
          "writable": true
        },
        {
          "name": "ticketsVault",
          "writable": true
        },
        {
          "name": "prizeVault",
          "writable": true,
          "optional": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "disable",
      "discriminator": [
        185,
        173,
        187,
        90,
        216,
        15,
        238,
        233
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "raffle",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  102,
                  102,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "raffle.name",
                "account": "raffle"
              },
              {
                "kind": "account",
                "path": "raffle.seed",
                "account": "raffle"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "edit",
      "discriminator": [
        15,
        183,
        33,
        86,
        87,
        28,
        151,
        145
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "raffle",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  102,
                  102,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "raffle.name",
                "account": "raffle"
              },
              {
                "kind": "account",
                "path": "raffle.seed",
                "account": "raffle"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ]
    },
    {
      "name": "enable",
      "discriminator": [
        159,
        34,
        127,
        41,
        193,
        53,
        124,
        27
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "raffle",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  102,
                  102,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "raffle.name",
                "account": "raffle"
              },
              {
                "kind": "account",
                "path": "raffle.seed",
                "account": "raffle"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
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
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "raffle",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  102,
                  102,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "name"
              },
              {
                "kind": "arg",
                "path": "seed"
              }
            ]
          }
        },
        {
          "name": "tickets",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  105,
                  99,
                  107,
                  101,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "raffle"
              }
            ]
          }
        },
        {
          "name": "ticketsAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  84,
                  105,
                  99,
                  107,
                  101,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "raffle"
              }
            ]
          }
        },
        {
          "name": "ticketsMint"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "whitelist",
          "optional": true
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "ticketPrice",
          "type": "u64"
        },
        {
          "name": "ticketAmount",
          "type": "u32"
        },
        {
          "name": "seed",
          "type": "u64"
        }
      ]
    },
    {
      "name": "prepare",
      "discriminator": [
        121,
        155,
        156,
        90,
        164,
        252,
        220,
        109
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "raffle",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  102,
                  102,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "raffle.name",
                "account": "raffle"
              },
              {
                "kind": "account",
                "path": "raffle.seed",
                "account": "raffle"
              }
            ]
          }
        },
        {
          "name": "from",
          "writable": true
        },
        {
          "name": "prizeVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  80,
                  114,
                  105,
                  122,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "raffle"
              }
            ]
          }
        },
        {
          "name": "prizeMint"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "feeAccount",
          "writable": true,
          "address": "feeW4D5WBZQEk6QtoSrw2KjZF45d7LBK9oCGuczKW2G"
        }
      ],
      "args": [
        {
          "name": "ticketsAmount",
          "type": "u64"
        },
        {
          "name": "url",
          "type": "string"
        }
      ]
    },
    {
      "name": "revealWinners",
      "discriminator": [
        24,
        167,
        123,
        197,
        91,
        200,
        146,
        3
      ],
      "accounts": [
        {
          "name": "raffle",
          "writable": true
        },
        {
          "name": "tickets",
          "writable": true
        },
        {
          "name": "recentBlockHashes"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "raffle",
      "discriminator": [
        143,
        133,
        63,
        173,
        138,
        10,
        142,
        200
      ]
    },
    {
      "name": "tickets",
      "discriminator": [
        48,
        222,
        91,
        92,
        162,
        98,
        123,
        167
      ]
    },
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
  "events": [
    {
      "name": "eventBuyTicket",
      "discriminator": [
        28,
        55,
        128,
        125,
        63,
        1,
        97,
        202
      ]
    },
    {
      "name": "eventEnable",
      "discriminator": [
        212,
        141,
        123,
        0,
        71,
        109,
        134,
        133
      ]
    },
    {
      "name": "eventWinner",
      "discriminator": [
        131,
        37,
        67,
        234,
        53,
        172,
        160,
        241
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "insufficientFundsForTransaction",
      "msg": "You have not enough sol !"
    },
    {
      "code": 6001,
      "name": "actionNotAllowed",
      "msg": "You are not allowed to create a Raffle!"
    },
    {
      "code": 6002,
      "name": "signerIsNotCreator",
      "msg": "The Signer is not the creator!"
    },
    {
      "code": 6003,
      "name": "noRandomness",
      "msg": "Error no randomness!"
    },
    {
      "code": 6004,
      "name": "entrantsAccountTooSmallForMaxEntrants",
      "msg": "Entrants account too small for max entrants"
    },
    {
      "code": 6005,
      "name": "invalidPrizeIndex",
      "msg": "Invalid prize index"
    },
    {
      "code": 6006,
      "name": "notClaimed",
      "msg": "Raffle is not Claimed"
    },
    {
      "code": 6007,
      "name": "invalidTicketCount",
      "msg": "Amount of sold tickets is not fulfilled"
    },
    {
      "code": 6008,
      "name": "noPrize",
      "msg": "Error ticket count invalid!"
    },
    {
      "code": 6009,
      "name": "raffleIsNotRunning",
      "msg": "Error raffle is not running"
    },
    {
      "code": 6010,
      "name": "raffleIsRunning",
      "msg": "Error raffle is still running"
    },
    {
      "code": 6011,
      "name": "invalidCalculation",
      "msg": "Invalid calculation"
    },
    {
      "code": 6012,
      "name": "notEnoughTicketsLeft",
      "msg": "Not enough tickets left"
    },
    {
      "code": 6013,
      "name": "raffleStillRunning",
      "msg": "Raffle is still running"
    },
    {
      "code": 6014,
      "name": "winnersAlreadyDrawn",
      "msg": "Winner already drawn"
    },
    {
      "code": 6015,
      "name": "winnerNotDrawn",
      "msg": "Winner not drawn"
    },
    {
      "code": 6016,
      "name": "invalidRevealedData",
      "msg": "Invalid revealed data"
    },
    {
      "code": 6017,
      "name": "tokenAccountNotOwnedByWinner",
      "msg": "Ticket account not owned by winner"
    },
    {
      "code": 6018,
      "name": "ticketHasNotWon",
      "msg": "Ticket has not won"
    },
    {
      "code": 6019,
      "name": "unclaimedPrizes",
      "msg": "Unclaimed prizes"
    },
    {
      "code": 6020,
      "name": "invalidRecentBlockhashes",
      "msg": "Invalid recent blockhashes"
    },
    {
      "code": 6021,
      "name": "onlyCreatorCanClaimNoEntrantRafflePrizes",
      "msg": "Only the creator can calin no entrant raffle prizes"
    },
    {
      "code": 6022,
      "name": "invalidTreasuryTokenAccountOwner",
      "msg": "Invalid treasury token account owner"
    },
    {
      "code": 6023,
      "name": "accountMismatch",
      "msg": "accountMismatch"
    },
    {
      "code": 6024,
      "name": "stateMismatch",
      "msg": "stateMismatch"
    }
  ],
  "types": [
    {
      "name": "eventBuyTicket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "prizeMint",
            "type": "pubkey"
          },
          {
            "name": "ticketMint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u32"
          },
          {
            "name": "sold",
            "type": "u32"
          },
          {
            "name": "total",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "eventEnable",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "prizeMint",
            "type": "pubkey"
          },
          {
            "name": "ticketMint",
            "type": "pubkey"
          },
          {
            "name": "pricePerTicket",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "eventWinner",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "prizeMint",
            "type": "pubkey"
          },
          {
            "name": "ticketMint",
            "type": "pubkey"
          },
          {
            "name": "winner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "raffle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "state",
            "type": {
              "defined": {
                "name": "raffleState"
              }
            }
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "url",
            "type": "string"
          },
          {
            "name": "ticketMint",
            "type": "pubkey"
          },
          {
            "name": "ticketPrice",
            "type": "u64"
          },
          {
            "name": "ticketDecimals",
            "type": "u8"
          },
          {
            "name": "prizeMint",
            "type": "pubkey"
          },
          {
            "name": "prizeVaultCount",
            "type": "u64"
          },
          {
            "name": "prizeDecimals",
            "type": "u8"
          },
          {
            "name": "tickets",
            "type": "pubkey"
          },
          {
            "name": "winner",
            "type": "pubkey"
          },
          {
            "name": "randomness",
            "type": {
              "option": {
                "array": [
                  "u8",
                  32
                ]
              }
            }
          },
          {
            "name": "useWhitelist",
            "type": "bool"
          },
          {
            "name": "whitelist",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "raffleState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "created"
          },
          {
            "name": "ready"
          },
          {
            "name": "running"
          },
          {
            "name": "paused"
          },
          {
            "name": "full"
          },
          {
            "name": "claimprize"
          },
          {
            "name": "claimtickets"
          },
          {
            "name": "done"
          }
        ]
      }
    },
    {
      "name": "tickets",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sold",
            "type": "u32"
          },
          {
            "name": "total",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "whitelist",
      "docs": [
        "Account: Whitelist"
      ],
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
      "docs": [
        "Account: WhitelistEntry"
      ],
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
  ],
  "constants": [
    {
      "name": "raffle",
      "type": "bytes",
      "value": "[114, 97, 102, 102, 108, 101]"
    }
  ]
};

