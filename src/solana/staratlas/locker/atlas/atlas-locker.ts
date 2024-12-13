/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/atlas_staking.json`.
 */
export type AtlasStaking = {
  "address": "ATLocKpzDbTokxgvnLew3d7drZkEzLzDpzwgrgWKDbmc",
  "metadata": {
    "name": "atlasStaking",
    "version": "0.1.0",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "cancelUnstake",
      "discriminator": [
        64,
        65,
        53,
        227,
        125,
        153,
        3,
        167
      ],
      "accounts": [
        {
          "name": "user",
          "docs": [
            "The user calling this instruction"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "registeredStake",
          "docs": [
            "A [RegisteredStake] account"
          ]
        },
        {
          "name": "stakingAccount",
          "docs": [
            "An initialized [StakingAccount] owned by the user"
          ],
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "createStakingAccount",
      "discriminator": [
        245,
        124,
        219,
        13,
        173,
        255,
        155,
        235
      ],
      "accounts": [
        {
          "name": "user",
          "docs": [
            "The user calling this instruction"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "registeredStake",
          "docs": [
            "A [RegisteredStake] account"
          ]
        },
        {
          "name": "stakingAccount",
          "docs": [
            "An initialized [StakingAccount] owned by the user"
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The solana system program"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "harvest",
      "discriminator": [
        228,
        241,
        31,
        182,
        53,
        169,
        59,
        199
      ],
      "accounts": [
        {
          "name": "user",
          "docs": [
            "The user calling this instruction"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "rewardMint",
          "docs": [
            "The mint account for the token being awarded"
          ]
        },
        {
          "name": "registeredStake",
          "docs": [
            "A [RegisteredStake] account"
          ]
        },
        {
          "name": "stakingAccount",
          "docs": [
            "An initialized [StakingAccount] owned by the user"
          ],
          "writable": true
        },
        {
          "name": "userRewardAccount",
          "docs": [
            "The user's `RewardMint` token account"
          ],
          "writable": true
        },
        {
          "name": "rewardAta",
          "docs": [
            "The `RewardPda` associated with the [RegisteredStake]"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The token program"
          ]
        },
        {
          "name": "rent",
          "docs": [
            "The rent sysvar"
          ]
        },
        {
          "name": "associatedTokenProgram",
          "docs": [
            "The associated token program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The system program"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "initializeStaking",
      "discriminator": [
        184,
        41,
        251,
        154,
        146,
        145,
        197,
        77
      ],
      "accounts": [
        {
          "name": "updateAuthorityAccount",
          "writable": true,
          "signer": true
        },
        {
          "name": "stakingVarsAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": []
    },
    {
      "name": "registerStake",
      "discriminator": [
        187,
        115,
        68,
        116,
        83,
        152,
        238,
        21
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority on the [RegisteredStake] account"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "stakingVarsAccount",
          "docs": [
            "The [StakingVars] account"
          ]
        },
        {
          "name": "stakeMint",
          "docs": [
            "The mint account for the token being staked"
          ]
        },
        {
          "name": "rewardMint",
          "docs": [
            "The mint account for the token being awarded"
          ]
        },
        {
          "name": "registeredStake",
          "docs": [
            "A [RegisteredStake] account"
          ],
          "writable": true
        },
        {
          "name": "rewardAta",
          "docs": [
            "An reward mint vault owned by the program"
          ],
          "writable": true
        },
        {
          "name": "rent",
          "docs": [
            "The solana rent sysvar"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The solana system program"
          ]
        },
        {
          "name": "associatedTokenProgram"
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The solana token program"
          ]
        }
      ],
      "args": [
        {
          "name": "rewardMultiplier",
          "type": "u64"
        },
        {
          "name": "cooldownPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "settle",
      "discriminator": [
        175,
        42,
        185,
        87,
        144,
        131,
        102,
        212
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority on the [RegisteredStake] account"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "registeredStake",
          "docs": [
            "A [RegisteredStake] account"
          ]
        },
        {
          "name": "stakingAccount",
          "docs": [
            "A [StakingAccount] for the given user"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "updatedStakingPeriod",
          "type": "u16"
        }
      ]
    },
    {
      "name": "stakeTokens",
      "discriminator": [
        136,
        126,
        91,
        162,
        40,
        131,
        13,
        127
      ],
      "accounts": [
        {
          "name": "user",
          "docs": [
            "The user calling this instruction"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "stakeMint",
          "docs": [
            "The mint account for the token being staked"
          ]
        },
        {
          "name": "tokenSource",
          "docs": [
            "The user's `StakeMint` token account"
          ],
          "writable": true
        },
        {
          "name": "registeredStake",
          "docs": [
            "A [RegisteredStake] account"
          ]
        },
        {
          "name": "stakingAccount",
          "docs": [
            "An initialized [StakingAccount] owned by the user"
          ],
          "writable": true
        },
        {
          "name": "tokenEscrow",
          "docs": [
            "A PDA token escrow account associated with the user and [RegisteredStake]"
          ],
          "writable": true
        },
        {
          "name": "rent",
          "docs": [
            "The rent system var"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The token program"
          ]
        },
        {
          "name": "associatedTokenProgram",
          "docs": [
            "The associated token program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The solana system program"
          ]
        }
      ],
      "args": [
        {
          "name": "stakeAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstakeTokens",
      "discriminator": [
        58,
        119,
        215,
        143,
        203,
        223,
        32,
        86
      ],
      "accounts": [
        {
          "name": "user",
          "docs": [
            "The user calling this instruction"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "rewardMint",
          "docs": [
            "The mint account for the token being awarded"
          ]
        },
        {
          "name": "registeredStake",
          "docs": [
            "A [RegisteredStake] account"
          ]
        },
        {
          "name": "stakingAccount",
          "docs": [
            "An initialized [StakingAccount] owned by the user"
          ],
          "writable": true
        },
        {
          "name": "userRewardAccount",
          "docs": [
            "The user's `RewardMint` token account"
          ],
          "writable": true
        },
        {
          "name": "rewardAta",
          "docs": [
            "The `RewardPda` associated with the [RegisteredStake]"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The token program"
          ]
        },
        {
          "name": "rent",
          "docs": [
            "The rent sysvar"
          ]
        },
        {
          "name": "associatedTokenProgram",
          "docs": [
            "The associated token program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The system program"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "updateCooldownPeriod",
      "discriminator": [
        150,
        64,
        36,
        192,
        83,
        8,
        73,
        57
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority on the [RegisteredStake] account"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "registeredStake",
          "docs": [
            "A [RegisteredStake] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "cooldownPeriod",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateRewardMultiplier",
      "discriminator": [
        252,
        210,
        147,
        246,
        196,
        242,
        76,
        176
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority on the [RegisteredStake] account"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "registeredStake",
          "docs": [
            "A [RegisteredStake] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "rewardMultiplier",
          "type": "u64"
        },
        {
          "name": "newStakingPeriod",
          "type": "u16"
        }
      ]
    },
    {
      "name": "withdrawTokens",
      "discriminator": [
        2,
        4,
        225,
        61,
        19,
        182,
        106,
        170
      ],
      "accounts": [
        {
          "name": "user",
          "docs": [
            "The user calling this instruction"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "stakeMint",
          "docs": [
            "The mint account for the token being staked"
          ]
        },
        {
          "name": "tokenSource",
          "docs": [
            "The user's `StakeMint` token account"
          ],
          "writable": true
        },
        {
          "name": "registeredStake",
          "docs": [
            "A [RegisteredStake] account"
          ]
        },
        {
          "name": "stakingAccount",
          "docs": [
            "An initialized [StakingAccount] owned by the user"
          ],
          "writable": true
        },
        {
          "name": "tokenEscrow",
          "docs": [
            "A PDA token escrow account associated with the user and [RegisteredStake]"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The token program"
          ]
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "registeredStake",
      "discriminator": [
        11,
        251,
        203,
        151,
        180,
        145,
        39,
        46
      ]
    },
    {
      "name": "stakingAccount",
      "discriminator": [
        52,
        178,
        251,
        157,
        180,
        186,
        98,
        234
      ]
    },
    {
      "name": "stakingVars",
      "discriminator": [
        130,
        174,
        58,
        194,
        121,
        130,
        153,
        144
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidMint",
      "msg": "Invalid Token Mint"
    },
    {
      "code": 6001,
      "name": "invalidOwner",
      "msg": "Account now owned by user"
    },
    {
      "code": 6002,
      "name": "insufficientFunds",
      "msg": "Insufficient token balance"
    },
    {
      "code": 6003,
      "name": "invalidAuthority",
      "msg": "Invalid authority for this account"
    },
    {
      "code": 6004,
      "name": "invalidDepositQty",
      "msg": "Invalid deposit quantity"
    },
    {
      "code": 6005,
      "name": "numericalOverflowError",
      "msg": "Numerical overflow error"
    },
    {
      "code": 6006,
      "name": "stakeOnCooldown",
      "msg": "Cannot stake while account is on cooldown"
    },
    {
      "code": 6007,
      "name": "invalidEscrowAuth",
      "msg": "Invalid escrow authority"
    },
    {
      "code": 6008,
      "name": "withdrawOnCooldown",
      "msg": "Cannot withdraw before cooldown period has elapsed"
    },
    {
      "code": 6009,
      "name": "invalidPeriod",
      "msg": "Staking account must be in the same period as the Registered Stake"
    },
    {
      "code": 6010,
      "name": "notOnCooldown",
      "msg": "Staking account is not on cooldown"
    }
  ],
  "types": [
    {
      "name": "registeredStake",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The admin for this [`RegisteredStake`]"
            ],
            "type": "pubkey"
          },
          {
            "name": "stakeMint",
            "docs": [
              "Mint address for tokens to be staked"
            ],
            "type": "pubkey"
          },
          {
            "name": "rewardMint",
            "docs": [
              "Mint address for tokens which will be given as reward for staking"
            ],
            "type": "pubkey"
          },
          {
            "name": "currentPeriod",
            "docs": [
              "Current staking period"
            ],
            "type": "u16"
          },
          {
            "name": "rewardMultiplier",
            "docs": [
              "Rate at which reward tokens will be distributed - Tokens in base units per day per REWARD_MULTIPLIER_BASE tokens staked",
              "Example - reward_multiplier = 228_938",
              "User will receive 228_938 reward_mint base units per day for every 1_000 stake_mint base units they have staked"
            ],
            "type": "u64"
          },
          {
            "name": "cooldownPeriod",
            "docs": [
              "Amount of time, in seconds, the user must wait before withdrawing their staked tokens"
            ],
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seeds for [`RegisteredStake`] account"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "stakingAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "registeredStake",
            "type": "pubkey"
          },
          {
            "name": "stakeMint",
            "type": "pubkey"
          },
          {
            "name": "totalStake",
            "type": "u64"
          },
          {
            "name": "activeStake",
            "type": "u64"
          },
          {
            "name": "pendingRewards",
            "type": "u64"
          },
          {
            "name": "paidRewards",
            "type": "u64"
          },
          {
            "name": "currentPeriod",
            "type": "u16"
          },
          {
            "name": "stakedAtTs",
            "type": "i64"
          },
          {
            "name": "lastPendingRewardCalcTs",
            "type": "i64"
          },
          {
            "name": "lastHarvestTs",
            "type": "i64"
          },
          {
            "name": "unstakedTs",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "stakingVars",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The authority for the Staking Program"
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for [StakingVars] account"
            ],
            "type": "u8"
          }
        ]
      }
    }
  ]
};

