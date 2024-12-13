/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/proxy_rewarder.json`.
 */
export type ProxyRewarder = {
  "address": "gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2",
  "metadata": {
    "name": "proxyRewarder",
    "version": "0.5.6",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "registerLocker",
      "docs": [
        "Registers a Locker from the locked_voter program"
      ],
      "discriminator": [
        86,
        165,
        215,
        222,
        1,
        31,
        88,
        95
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin key"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "locker",
          "docs": [
            "[locked_voter::Locker]."
          ]
        },
        {
          "name": "registeredLocker",
          "docs": [
            "New RegisteredLocker account"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  82,
                  101,
                  103,
                  105,
                  115,
                  116,
                  101,
                  114,
                  101,
                  100,
                  76,
                  111,
                  99,
                  107,
                  101,
                  114,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "locker",
                "account": "locker"
              }
            ]
          }
        },
        {
          "name": "tokenMint",
          "docs": [
            "The token mint that matches the Locker token mint (ie POLIS)"
          ]
        },
        {
          "name": "treasuryTokenAccount",
          "docs": [
            "The treasury token account holding all tokens to reward users"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  84,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121,
                  84,
                  111,
                  107,
                  101,
                  110,
                  65,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "locker",
                "account": "locker"
              }
            ]
          }
        },
        {
          "name": "treasuryAuthority",
          "docs": [
            "The treasury authority PDA     /// CHECK: pda token account authority"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  84,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121,
                  65,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "locker",
                "account": "locker"
              }
            ]
          }
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": []
    },
    {
      "name": "updateRegisteredLocker",
      "docs": [
        "Updates `rewards` arrays in registered_locker [proxy_rewarder::registered_locker]."
      ],
      "discriminator": [
        134,
        107,
        193,
        117,
        188,
        70,
        189,
        92
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin key"
          ],
          "signer": true
        },
        {
          "name": "locker",
          "docs": [
            "The [locked_voter::locker] being exited from."
          ]
        },
        {
          "name": "registeredLocker",
          "docs": [
            "RegisteredLocker account"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  82,
                  101,
                  103,
                  105,
                  115,
                  116,
                  101,
                  114,
                  101,
                  100,
                  76,
                  111,
                  99,
                  107,
                  101,
                  114,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "locker",
                "account": "locker"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "era",
          "type": "u16"
        },
        {
          "name": "index",
          "type": "u16"
        },
        {
          "name": "periodRewardAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "newProxyEscrow",
      "discriminator": [
        126,
        117,
        27,
        234,
        107,
        233,
        37,
        162
      ],
      "accounts": [
        {
          "name": "escrowOwner",
          "docs": [
            "[Owner]."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "proxyEscrow",
          "docs": [
            "[Escrow]."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  80,
                  114,
                  111,
                  120,
                  121,
                  69,
                  115,
                  99,
                  114,
                  111,
                  119,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "escrowOwner"
              }
            ]
          }
        },
        {
          "name": "payer",
          "docs": [
            "Payer of the initialization."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "newProxy",
      "docs": [
        "Creates a new [Proxy] for an account.",
        "",
        "A Reward Escrow, or [Escrow] for short, is an agreement between a users=>proxy (known as the `authority`) and the Reward Program to",
        "reward POLIS over specific periods of time. (curve)",
        "proportional to the amount of stakers."
      ],
      "discriminator": [
        158,
        43,
        152,
        240,
        31,
        181,
        251,
        32
      ],
      "accounts": [
        {
          "name": "proxyEscrow",
          "docs": [
            "[ProxyEscrow]."
          ],
          "writable": true
        },
        {
          "name": "proxy",
          "docs": [
            "[Proxy]."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  80,
                  114,
                  111,
                  120,
                  121,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "proxyEscrow",
                "account": "proxyEscrow"
              },
              {
                "kind": "account",
                "path": "proxyOwner"
              }
            ]
          }
        },
        {
          "name": "tokenMint",
          "docs": [
            "Mint of the token that can be used to join the [LockedVoter::Locker]."
          ]
        },
        {
          "name": "proxyOwner",
          "docs": [
            "Authority of the [Proxy] to be created."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "proxyLock",
      "docs": [
        "Locks `amount` of POLIS into the [LockedVoter::Escrow]."
      ],
      "discriminator": [
        18,
        232,
        74,
        146,
        141,
        98,
        190,
        148
      ],
      "accounts": [
        {
          "name": "locker",
          "docs": [
            "[locked_voter::Locker]."
          ],
          "writable": true
        },
        {
          "name": "escrow",
          "writable": true
        },
        {
          "name": "userTokenAccount",
          "docs": [
            "The source of deposited tokens."
          ],
          "writable": true
        },
        {
          "name": "proxyTokenAccount",
          "docs": [
            "Token account used to transfer governance tokens into [locked_voter::lock] escrow"
          ],
          "writable": true
        },
        {
          "name": "escrowTokenAccount",
          "docs": [
            "Token account held by the [locked_voter::Escrow]."
          ],
          "writable": true
        },
        {
          "name": "proxy",
          "docs": [
            "Authority of the [locked_voter::escrow]."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  80,
                  114,
                  111,
                  120,
                  121,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "proxy.escrow",
                "account": "proxy"
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "payer",
          "docs": [
            "Payer of the initialization."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "lockedVoterProgram",
          "docs": [
            "The [LockedVoter] program."
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "registeredLocker"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "duration",
          "type": "i64"
        }
      ]
    },
    {
      "name": "proxyExit",
      "docs": [
        "Exits the POLIS DAO; i.e., withdraws all staked tokens in an [Escrow] if the [Escrow] is unlocked."
      ],
      "discriminator": [
        205,
        235,
        156,
        190,
        11,
        93,
        98,
        70
      ],
      "accounts": [
        {
          "name": "locker",
          "docs": [
            "The [locked_voter::locker] being exited from."
          ],
          "writable": true
        },
        {
          "name": "escrow",
          "docs": [
            "The [locked_voter::Escrow] that is being closed."
          ],
          "writable": true
        },
        {
          "name": "proxy",
          "docs": [
            "Authority of the [locked_voter::Escrow]."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  80,
                  114,
                  111,
                  120,
                  121,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "proxy.escrow",
                "account": "proxy"
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "escrowTokenAccount",
          "docs": [
            "Tokens locked up in the [locked_voter::Escrow]."
          ],
          "writable": true
        },
        {
          "name": "proxyTokenAccount",
          "docs": [
            "Destination for the tokens to unlock."
          ],
          "writable": true
        },
        {
          "name": "userTokenAccount",
          "docs": [
            "Final destination for the tokens to unlock."
          ],
          "writable": true
        },
        {
          "name": "payer",
          "docs": [
            "The payer to receive the rent refund."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "lockedVoterProgram",
          "docs": [
            "The [LockedVoter] program."
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "registeredLocker"
        }
      ],
      "args": []
    },
    {
      "name": "claimRewards",
      "docs": [
        "Proxy Activates a proposal.",
        "Proxy Casts a vote.",
        "Claims POLIS Rewards; i.e., withdraws reward tokens from a treasury if the [snapshots::escrow_history] is confirmed."
      ],
      "discriminator": [
        4,
        144,
        132,
        71,
        116,
        23,
        151,
        80
      ],
      "accounts": [
        {
          "name": "escrow",
          "docs": [
            "The [locked_voter::Escrow] being validated from."
          ]
        },
        {
          "name": "locker",
          "docs": [
            "The [locked_voter::locker] being exited from."
          ]
        },
        {
          "name": "proxy",
          "docs": [
            "Authority of the [locked_voter::Escrow]."
          ]
        },
        {
          "name": "proxyEscrow",
          "docs": [
            "[proxy_rewarder::proxy_escrow]."
          ],
          "writable": true
        },
        {
          "name": "escrowHistory",
          "docs": [
            "The [snapshots::escrow_history] to read and validate."
          ]
        },
        {
          "name": "lockerHistory",
          "docs": [
            "The [snapshots::locker_history] to read and validate."
          ]
        },
        {
          "name": "treasuryTokenAccount",
          "docs": [
            "Treasury tokens in the [proxy_rewarder::treasury_token_account]. The treasury token account holding all tokens to reward users"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  84,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121,
                  84,
                  111,
                  107,
                  101,
                  110,
                  65,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "locker",
                "account": "locker"
              }
            ]
          }
        },
        {
          "name": "registeredLocker",
          "docs": [
            "RegisteredLocker account"
          ]
        },
        {
          "name": "treasuryAuthority",
          "docs": [
            "The treasury authority PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  84,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121,
                  65,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "locker",
                "account": "locker"
              }
            ]
          }
        },
        {
          "name": "userTokenAccount",
          "docs": [
            "Final destination for the tokens to unlock."
          ],
          "writable": true
        },
        {
          "name": "escrowOwner",
          "docs": [
            "[Owner]"
          ],
          "signer": true
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "proxy",
      "discriminator": [
        36,
        36,
        123,
        35,
        158,
        89,
        75,
        41
      ]
    },
    {
      "name": "proxyEscrow",
      "discriminator": [
        59,
        236,
        59,
        197,
        113,
        229,
        79,
        237
      ]
    },
    {
      "name": "registeredLocker",
      "discriminator": [
        162,
        172,
        212,
        210,
        238,
        88,
        154,
        49
      ]
    },
    {
      "name": "treasuryAuthority",
      "discriminator": [
        56,
        251,
        232,
        94,
        128,
        197,
        59,
        150
      ]
    }
  ],
  "events": [
    {
      "name": "claimRewardsEvent",
      "discriminator": [
        224,
        197,
        51,
        113,
        233,
        72,
        117,
        183
      ]
    },
    {
      "name": "newProxyEscrowEvent",
      "discriminator": [
        62,
        120,
        232,
        226,
        20,
        20,
        141,
        59
      ]
    },
    {
      "name": "newProxyEvent",
      "discriminator": [
        100,
        47,
        251,
        206,
        217,
        186,
        138,
        152
      ]
    },
    {
      "name": "proxyExitEscrowEvent",
      "discriminator": [
        24,
        75,
        75,
        133,
        134,
        198,
        192,
        15
      ]
    },
    {
      "name": "proxyLockEvent",
      "discriminator": [
        185,
        168,
        219,
        105,
        4,
        76,
        9,
        104
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "programNotWhitelisted",
      "msg": "CPI caller not whitelisted to invoke lock instruction."
    },
    {
      "code": 6001,
      "name": "lockupDurationTooShort",
      "msg": "Lockup duration must at least be the min stake duration."
    },
    {
      "code": 6002,
      "name": "lockupDurationTooLong",
      "msg": "Lockup duration must at most be the max stake duration."
    },
    {
      "code": 6003,
      "name": "refreshCannotShorten",
      "msg": "A voting escrow refresh cannot shorten the escrow time remaining."
    },
    {
      "code": 6004,
      "name": "escrowNotEnded",
      "msg": "Escrow has not ended."
    },
    {
      "code": 6005,
      "name": "mustProvideWhitelist",
      "msg": "Program whitelist enabled; please provide whitelist entry and instructions sysvar"
    },
    {
      "code": 6006,
      "name": "escrowOwnerNotWhitelisted",
      "msg": "CPI caller not whitelisted for escrow owner to invoke lock instruction."
    },
    {
      "code": 6007,
      "name": "invalidMint",
      "msg": "Invalid SPL Token mint"
    },
    {
      "code": 6008,
      "name": "invalidTokenAccount",
      "msg": "Invalid SPL Token account"
    },
    {
      "code": 6009,
      "name": "numericalOverflowError",
      "msg": "Numerical overflow error"
    },
    {
      "code": 6010,
      "name": "uninitializedTokenAccount",
      "msg": "Uninitialized Token Account"
    },
    {
      "code": 6011,
      "name": "eraMismatch",
      "msg": "Era mismatch."
    },
    {
      "code": 6012,
      "name": "wrongPda",
      "msg": "Wrong PDA proxy exit."
    },
    {
      "code": 6013,
      "name": "youHaveNoPendingRewards",
      "msg": "You have no claimable rewards."
    },
    {
      "code": 6014,
      "name": "mustCallProxyLockWithWhitelist",
      "msg": "Must call `proxy_lock_with_whitelist` to lock via CPI."
    },
    {
      "code": 6015,
      "name": "rewardsNotReady",
      "msg": "rewards_last_claimed_at > now"
    },
    {
      "code": 6016,
      "name": "invalidAdmin",
      "msg": "locker.base != to the admin signer"
    }
  ],
  "types": [
    {
      "name": "proxy",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "escrow",
            "docs": [
              "The [Escrow] that this [Proxy] is part of."
            ],
            "type": "pubkey"
          },
          {
            "name": "owner",
            "docs": [
              "The key of the account that is authorized to cpi via this [Proxy]."
            ],
            "type": "pubkey"
          },
          {
            "name": "tokenMint",
            "docs": [
              "Mint of the token that must be locked in the [LockedVoter::Locker]."
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed."
            ],
            "type": "u8"
          },
          {
            "name": "proxyTokenAccount",
            "docs": [
              "The token account holding the proxy tokens."
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "proxyEscrow",
      "docs": [
        "records rewards state on a user."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "escrowOwner",
            "docs": [
              "The key of the account that is authorized to withdraw from the [Treasury]."
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed."
            ],
            "type": "u8"
          },
          {
            "name": "amount",
            "docs": [
              "Amount of tokens staked."
            ],
            "type": "u64"
          },
          {
            "name": "escrowStartedAt",
            "docs": [
              "When the [proxy_escrow::escrow_owner] started their escrow."
            ],
            "type": "i64"
          },
          {
            "name": "escrowEndsAt",
            "docs": [
              "When the escrow unlocks; i.e. the [proxy_escrow::escrow_owner] is scheduled to be allowed to withdraw their governance tokens."
            ],
            "type": "i64"
          },
          {
            "name": "rewardsLastClaimedAt",
            "docs": [
              "When the [proxy_escrow::escrow_owner] last claimed rewards from [Treasury]."
            ],
            "type": "i64"
          },
          {
            "name": "amountClaimed",
            "docs": [
              "Amount of tokens claimed."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "registeredLocker",
      "docs": [
        "Registered locker - needs to be created to earn rewards",
        "PDA unique to [\"RegisteredLocker\", locker.key]",
        "reprc- pack"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "docs": [
              "The key of the admin account that is managing the registered locker"
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed."
            ],
            "type": "u8"
          },
          {
            "name": "tokenMint",
            "docs": [
              "The token mint aligned with the locker and for rewards paid to users"
            ],
            "type": "pubkey"
          },
          {
            "name": "locker",
            "docs": [
              "The locker account on the locked_voter program being registered"
            ],
            "type": "pubkey"
          },
          {
            "name": "padding",
            "docs": [
              "Padding for aligning the struct to an 8-byte boundary."
            ],
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "rewardAmountPaidPerPeriodEra0",
            "docs": [
              "All tracked historical reward rate totals per period per era allocated to users."
            ],
            "type": {
              "array": [
                "u64",
                256
              ]
            }
          },
          {
            "name": "rewardAmountPaidPerPeriodEra1",
            "type": {
              "array": [
                "u64",
                256
              ]
            }
          },
          {
            "name": "rewardAmountPaidPerPeriodEra2",
            "type": {
              "array": [
                "u64",
                256
              ]
            }
          }
        ]
      }
    },
    {
      "name": "treasuryAuthority",
      "docs": [
        "Treasury Authority - PDA who has authority to withdraw rewards from the treasury."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "locker",
            "docs": [
              "The locker account on the locked_voter program being registered"
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed."
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "claimRewardsEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "escrowOwner",
            "type": "pubkey"
          },
          {
            "name": "locker",
            "type": "pubkey"
          },
          {
            "name": "tokenMint",
            "type": "pubkey"
          },
          {
            "name": "amountClaimed",
            "type": "u64"
          },
          {
            "name": "prevRewardsLastClaimedAt",
            "type": "i64"
          },
          {
            "name": "rewardsLastClaimedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "newProxyEscrowEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proxyEscrow",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "newProxyEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proxy",
            "type": "pubkey"
          },
          {
            "name": "proxyOwner",
            "type": "pubkey"
          },
          {
            "name": "proxyEscrow",
            "type": "pubkey"
          },
          {
            "name": "tokenMint",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "proxyExitEscrowEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "escrowOwner",
            "type": "pubkey"
          },
          {
            "name": "locker",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "lockerSupply",
            "type": "u64"
          },
          {
            "name": "releasedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "proxyLockEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "locker",
            "type": "pubkey"
          },
          {
            "name": "escrowOwner",
            "type": "pubkey"
          },
          {
            "name": "tokenMint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "lockerSupply",
            "type": "u64"
          },
          {
            "name": "duration",
            "type": "i64"
          },
          {
            "name": "prevEscrowEndsAt",
            "type": "i64"
          },
          {
            "name": "nextEscrowEndsAt",
            "type": "i64"
          },
          {
            "name": "nextEscrowStartedAt",
            "type": "i64"
          }
        ]
      }
    }
  ]
};

