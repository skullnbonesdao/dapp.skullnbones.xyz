export type Snapshot = {
  "address": "snapNQkxsiqDWdbNfz8KVB7e3NPzLwtHHA6WV8kKgUc",
  "metadata": {
    "name": "snapshots",
    "version": "0.1.1",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "create_escrow_history",
      "docs": [
        "Creates a [EscrowHistory]."
      ],
      "discriminator": [
        250,
        177,
        121,
        80,
        206,
        44,
        17,
        225
      ],
      "accounts": [
        {
          "name": "escrow",
          "docs": [
            "The [Escrow]."
          ]
        },
        {
          "name": "escrow_history",
          "docs": [
            "The [EscrowHistory] to be created."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  69,
                  115,
                  99,
                  114,
                  111,
                  119,
                  72,
                  105,
                  115,
                  116,
                  111,
                  114,
                  121,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "escrow",
                "account": "Escrow"
              },
              {
                "kind": "arg",
                "path": "era"
              }
            ]
          }
        },
        {
          "name": "payer",
          "docs": [
            "Payer."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "system_program",
          "docs": [
            "[System] program."
          ]
        }
      ],
      "args": [
        {
          "name": "era",
          "type": "u16"
        }
      ]
    },
    {
      "name": "create_locker_history",
      "docs": [
        "Creates a [LockerHistory]."
      ],
      "discriminator": [
        108,
        4,
        187,
        204,
        145,
        73,
        128,
        73
      ],
      "accounts": [
        {
          "name": "locker",
          "docs": [
            "The [Locker]."
          ]
        },
        {
          "name": "locker_history",
          "docs": [
            "The [LockerHistory] to be created."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  76,
                  111,
                  99,
                  107,
                  101,
                  114,
                  72,
                  105,
                  115,
                  116,
                  111,
                  114,
                  121,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "locker",
                "account": "Locker"
              },
              {
                "kind": "arg",
                "path": "era"
              }
            ]
          }
        },
        {
          "name": "payer",
          "docs": [
            "Payer."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "system_program",
          "docs": [
            "[System] program."
          ]
        }
      ],
      "args": [
        {
          "name": "era",
          "type": "u16"
        }
      ]
    },
    {
      "name": "sync",
      "docs": [
        "Synchronize an [locked_voter::Escrow] with the [LockerHistory]/[EscrowHistory]."
      ],
      "discriminator": [
        4,
        219,
        40,
        164,
        21,
        157,
        189,
        88
      ],
      "accounts": [
        {
          "name": "locker",
          "docs": [
            "The [Locker]."
          ]
        },
        {
          "name": "escrow",
          "docs": [
            "The [Escrow]."
          ]
        },
        {
          "name": "locker_history",
          "docs": [
            "The [LockerHistory] to sync."
          ],
          "writable": true
        },
        {
          "name": "escrow_history",
          "docs": [
            "The [EscrowHistory] to sync."
          ],
          "writable": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "LockerHistory",
      "discriminator": [
        82,
        148,
        228,
        104,
        132,
        144,
        101,
        129
      ]
    },
    {
      "name": "EscrowHistory",
      "discriminator": [
        170,
        160,
        173,
        100,
        94,
        119,
        107,
        81
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "LockerEscrowMismatch",
      "msg": "Locker/escrow mismatch."
    },
    {
      "code": 6001,
      "name": "EraMismatch",
      "msg": "Era mismatch."
    },
    {
      "code": 6002,
      "name": "EscrowBalanceDecreased",
      "msg": "Escrow balances cannot decrease."
    }
  ],
  "types": [
    {
      "name": "LockerHistory",
      "docs": [
        "Stores the total number of veTokens in circulation for each period.",
        "",
        "The [LockerHistory] account stores 256 periods, each 3 days each.",
        "For a 5-year [locked_voter::Locker], there will be at least 3 of these accounts existing",
        "at any given time, since the maximum lock period is 5 years."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "locker",
            "docs": [
              "The [locked_voter::Locker] being tracked."
            ],
            "type": "pubkey"
          },
          {
            "name": "era",
            "docs": [
              "The era. Multiplying this by [ERA_NUM_PERIODS] * [PERIOD_SECONDS];"
            ],
            "type": "u16"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed."
            ],
            "type": "u8"
          },
          {
            "name": "padding",
            "docs": [
              "Padding for aligning the struct to an 8-byte boundary."
            ],
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "ve_balances",
            "docs": [
              "The sum of all tracked historical vote escrow balances."
            ],
            "type": {
              "array": [
                "u64",
                256
              ]
            }
          },
          {
            "name": "ve_counts",
            "docs": [
              "Number of voters with non-zero balances at each epoch."
            ],
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
      "name": "EscrowHistory",
      "docs": [
        "Stores the total veToken balance of an [locked_voter::Escrow]",
        "for the given epochs.",
        "",
        "Any time someone refreshes and/or modifies their vote [locked_voter::Escrow], they",
        "should refresh their [EscrowHistory] accounts."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "escrow",
            "docs": [
              "The [locked_voter::Escrow] being tracked."
            ],
            "type": "pubkey"
          },
          {
            "name": "era",
            "docs": [
              "The era."
            ],
            "type": "u16"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed."
            ],
            "type": "u8"
          },
          {
            "name": "padding",
            "docs": [
              "Padding for aligning the struct to an 8-byte boundary."
            ],
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "ve_balances",
            "docs": [
              "All tracked historical vote escrow balances for this [locked_voter::Escrow]."
            ],
            "type": {
              "array": [
                "u64",
                256
              ]
            }
          }
        ]
      }
    }
  ]
}