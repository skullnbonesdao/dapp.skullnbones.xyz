export type ProxyRewarder = {
  "address": "gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2",
  "metadata": {
    "name": "proxy_rewarder",
    "version": "0.5.6",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "register_locker",
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
          "name": "registered_locker",
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
                "account": "Locker"
              }
            ]
          }
        },
        {
          "name": "token_mint",
          "docs": [
            "The token mint that matches the Locker token mint (ie POLIS)"
          ]
        },
        {
          "name": "treasury_token_account",
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
                "account": "Locker"
              }
            ]
          }
        },
        {
          "name": "treasury_authority",
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
                "account": "Locker"
              }
            ]
          }
        },
        {
          "name": "token_program"
        },
        {
          "name": "system_program"
        },
        {
          "name": "rent"
        }
      ],
      "args": []
    },
    {
      "name": "update_registered_locker",
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
          "name": "registered_locker",
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
                "account": "Locker"
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
          "name": "period_reward_amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "new_proxy_escrow",
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
          "name": "escrow_owner",
          "docs": [
            "[Owner]."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "proxy_escrow",
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
                "path": "escrow_owner"
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
          "name": "system_program",
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
      "name": "new_proxy",
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
          "name": "proxy_escrow",
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
                "path": "proxy_escrow",
                "account": "ProxyEscrow"
              },
              {
                "kind": "account",
                "path": "proxy_owner"
              }
            ]
          }
        },
        {
          "name": "token_mint",
          "docs": [
            "Mint of the token that can be used to join the [LockedVoter::Locker]."
          ]
        },
        {
          "name": "proxy_owner",
          "docs": [
            "Authority of the [Proxy] to be created."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "system_program",
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
      "name": "proxy_lock",
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
          "name": "user_token_account",
          "docs": [
            "The source of deposited tokens."
          ],
          "writable": true
        },
        {
          "name": "proxy_token_account",
          "docs": [
            "Token account used to transfer governance tokens into [locked_voter::lock] escrow"
          ],
          "writable": true
        },
        {
          "name": "escrow_token_account",
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
                "account": "Proxy"
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
          "name": "locked_voter_program",
          "docs": [
            "The [LockedVoter] program."
          ]
        },
        {
          "name": "token_program",
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "instructions_sysvar"
        },
        {
          "name": "whitelist_entry",
          "docs": [
            "Whitelist entry."
          ]
        },
        {
          "name": "registered_locker"
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
      "name": "proxy_exit",
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
                "account": "Proxy"
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "escrow_token_account",
          "docs": [
            "Tokens locked up in the [locked_voter::Escrow]."
          ],
          "writable": true
        },
        {
          "name": "proxy_token_account",
          "docs": [
            "Destination for the tokens to unlock."
          ],
          "writable": true
        },
        {
          "name": "user_token_account",
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
          "name": "locked_voter_program",
          "docs": [
            "The [LockedVoter] program."
          ]
        },
        {
          "name": "token_program",
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "registered_locker"
        }
      ],
      "args": []
    },
    {
      "name": "claim_rewards",
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
          "name": "proxy_escrow",
          "docs": [
            "[proxy_rewarder::proxy_escrow]."
          ],
          "writable": true
        },
        {
          "name": "escrow_history",
          "docs": [
            "The [snapshots::escrow_history] to read and validate."
          ]
        },
        {
          "name": "locker_history",
          "docs": [
            "The [snapshots::locker_history] to read and validate."
          ]
        },
        {
          "name": "treasury_token_account",
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
                "account": "Locker"
              }
            ]
          }
        },
        {
          "name": "registered_locker",
          "docs": [
            "RegisteredLocker account"
          ]
        },
        {
          "name": "treasury_authority",
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
                "account": "Locker"
              }
            ]
          }
        },
        {
          "name": "user_token_account",
          "docs": [
            "Final destination for the tokens to unlock."
          ],
          "writable": true
        },
        {
          "name": "escrow_owner",
          "docs": [
            "[Owner]"
          ],
          "signer": true
        },
        {
          "name": "token_program",
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
      "name": "Proxy",
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
      "name": "ProxyEscrow",
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
      "name": "RegisteredLocker",
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
      "name": "TreasuryAuthority",
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
      "name": "ClaimRewardsEvent",
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
      "name": "NewProxyEscrowEvent",
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
      "name": "NewProxyEvent",
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
      "name": "ProxyExitEscrowEvent",
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
      "name": "ProxyLockEvent",
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
      "name": "ProgramNotWhitelisted",
      "msg": "CPI caller not whitelisted to invoke lock instruction."
    },
    {
      "code": 6001,
      "name": "LockupDurationTooShort",
      "msg": "Lockup duration must at least be the min stake duration."
    },
    {
      "code": 6002,
      "name": "LockupDurationTooLong",
      "msg": "Lockup duration must at most be the max stake duration."
    },
    {
      "code": 6003,
      "name": "RefreshCannotShorten",
      "msg": "A voting escrow refresh cannot shorten the escrow time remaining."
    },
    {
      "code": 6004,
      "name": "EscrowNotEnded",
      "msg": "Escrow has not ended."
    },
    {
      "code": 6005,
      "name": "MustProvideWhitelist",
      "msg": "Program whitelist enabled; please provide whitelist entry and instructions sysvar"
    },
    {
      "code": 6006,
      "name": "EscrowOwnerNotWhitelisted",
      "msg": "CPI caller not whitelisted for escrow owner to invoke lock instruction."
    },
    {
      "code": 6007,
      "name": "InvalidMint",
      "msg": "Invalid SPL Token mint"
    },
    {
      "code": 6008,
      "name": "InvalidTokenAccount",
      "msg": "Invalid SPL Token account"
    },
    {
      "code": 6009,
      "name": "NumericalOverflowError",
      "msg": "Numerical overflow error"
    },
    {
      "code": 6010,
      "name": "UninitializedTokenAccount",
      "msg": "Uninitialized Token Account"
    },
    {
      "code": 6011,
      "name": "EraMismatch",
      "msg": "Era mismatch."
    },
    {
      "code": 6012,
      "name": "WrongPDA",
      "msg": "Wrong PDA proxy exit."
    },
    {
      "code": 6013,
      "name": "YouHaveNoPendingRewards",
      "msg": "You have no claimable rewards."
    },
    {
      "code": 6014,
      "name": "MustCallProxyLockWithWhitelist",
      "msg": "Must call `proxy_lock_with_whitelist` to lock via CPI."
    },
    {
      "code": 6015,
      "name": "RewardsNotReady",
      "msg": "rewards_last_claimed_at > now"
    },
    {
      "code": 6016,
      "name": "InvalidAdmin",
      "msg": "locker.base != to the admin signer"
    }
  ],
  "types": [
    {
      "name": "Proxy",
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
            "name": "token_mint",
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
            "name": "proxy_token_account",
            "docs": [
              "The token account holding the proxy tokens."
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "ProxyEscrow",
      "docs": [
        "records rewards state on a user."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "escrow_owner",
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
            "name": "escrow_started_at",
            "docs": [
              "When the [proxy_escrow::escrow_owner] started their escrow."
            ],
            "type": "i64"
          },
          {
            "name": "escrow_ends_at",
            "docs": [
              "When the escrow unlocks; i.e. the [proxy_escrow::escrow_owner] is scheduled to be allowed to withdraw their governance tokens."
            ],
            "type": "i64"
          },
          {
            "name": "rewards_last_claimed_at",
            "docs": [
              "When the [proxy_escrow::escrow_owner] last claimed rewards from [Treasury]."
            ],
            "type": "i64"
          },
          {
            "name": "amount_claimed",
            "docs": [
              "Amount of tokens claimed."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "RegisteredLocker",
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
            "name": "token_mint",
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
            "name": "reward_amount_paid_per_period_era0",
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
            "name": "reward_amount_paid_per_period_era1",
            "type": {
              "array": [
                "u64",
                256
              ]
            }
          },
          {
            "name": "reward_amount_paid_per_period_era2",
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
      "name": "TreasuryAuthority",
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
      "name": "ClaimRewardsEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "escrow_owner",
            "type": "pubkey"
          },
          {
            "name": "locker",
            "type": "pubkey"
          },
          {
            "name": "token_mint",
            "type": "pubkey"
          },
          {
            "name": "amount_claimed",
            "type": "u64"
          },
          {
            "name": "prev_rewards_last_claimed_at",
            "type": "i64"
          },
          {
            "name": "rewards_last_claimed_at",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "NewProxyEscrowEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proxy_escrow",
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
      "name": "NewProxyEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proxy",
            "type": "pubkey"
          },
          {
            "name": "proxy_owner",
            "type": "pubkey"
          },
          {
            "name": "proxy_escrow",
            "type": "pubkey"
          },
          {
            "name": "token_mint",
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
      "name": "ProxyExitEscrowEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "escrow_owner",
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
            "name": "locker_supply",
            "type": "u64"
          },
          {
            "name": "released_amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ProxyLockEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "locker",
            "type": "pubkey"
          },
          {
            "name": "escrow_owner",
            "type": "pubkey"
          },
          {
            "name": "token_mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "locker_supply",
            "type": "u64"
          },
          {
            "name": "duration",
            "type": "i64"
          },
          {
            "name": "prev_escrow_ends_at",
            "type": "i64"
          },
          {
            "name": "next_escrow_ends_at",
            "type": "i64"
          },
          {
            "name": "next_escrow_started_at",
            "type": "i64"
          }
        ]
      }
    }
  ]
}