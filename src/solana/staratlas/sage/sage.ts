/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/sage.json`.
 */
export type Sage = {
  "address": "SAGE2HAwep459SNq61LHvjxPk4pLPEJLoMETef7f7EE",
  "metadata": {
    "name": "sage",
    "version": "0.1.0",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "activateGameState",
      "discriminator": [
        134,
        227,
        46,
        21,
        85,
        120,
        113,
        131
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "gameState",
          "docs": [
            "The [`GameState`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "manageGameInput"
            }
          }
        }
      ]
    },
    {
      "name": "addConnection",
      "discriminator": [
        40,
        6,
        69,
        0,
        230,
        150,
        215,
        41
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for adding the connection"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "sector1",
          "docs": [
            "The first connected sector"
          ],
          "writable": true
        },
        {
          "name": "sector2",
          "docs": [
            "The second connected sector"
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The system program"
          ]
        }
      ],
      "args": [
        {
          "name": "subCoordinates1",
          "type": {
            "array": [
              "i64",
              2
            ]
          }
        },
        {
          "name": "flags1",
          "type": "u8"
        },
        {
          "name": "subCoordinates2",
          "type": {
            "array": [
              "i64",
              2
            ]
          }
        },
        {
          "name": "flags2",
          "type": "u8"
        },
        {
          "name": "keyIndex",
          "type": "u16"
        }
      ]
    },
    {
      "name": "addCrewToGame",
      "discriminator": [
        39,
        179,
        114,
        201,
        45,
        52,
        82,
        142
      ],
      "accounts": [
        {
          "name": "sagePlayerProfile",
          "docs": [
            "The [`SagePlayerProfile`] account"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "sageCrewConfig",
          "docs": [
            "The [`SageCrewConfig`] Account"
          ]
        },
        {
          "name": "gameAndProfileAndFaction",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "profileFaction",
              "docs": [
                "The faction that the profile belongs to."
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "crewConfig",
          "docs": [
            "The crew program `CrewConfig` account"
          ]
        },
        {
          "name": "crewOwner",
          "docs": [
            "The crew owner"
          ],
          "signer": true
        },
        {
          "name": "crewDelegate",
          "docs": [
            "The crew delegate"
          ]
        },
        {
          "name": "logWrapper",
          "docs": [
            "The log wrapper"
          ]
        },
        {
          "name": "compressionProgram",
          "docs": [
            "The compression program"
          ]
        },
        {
          "name": "bubblegumProgram",
          "docs": [
            "The bubblegum program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "addCrewInput"
            }
          }
        }
      ]
    },
    {
      "name": "addRental",
      "discriminator": [
        213,
        113,
        170,
        123,
        187,
        90,
        28,
        115
      ],
      "accounts": [
        {
          "name": "ownerProfile",
          "docs": [
            "The fleet owner's profile."
          ]
        },
        {
          "name": "ownerKey",
          "docs": [
            "The key on the owner profile with renting permissions."
          ],
          "signer": true
        },
        {
          "name": "invalidator",
          "docs": [
            "The fleet rental invalidator - this is a signer to help make sure the fleet won't be locked."
          ],
          "signer": true
        },
        {
          "name": "subProfile",
          "docs": [
            "The profile to rent to."
          ]
        },
        {
          "name": "fleet",
          "docs": [
            "The fleet to rent out."
          ],
          "writable": true
        },
        {
          "name": "gameId",
          "docs": [
            "The [`Game`] account"
          ]
        },
        {
          "name": "subProfileFaction",
          "docs": [
            "The faction that the sub_profile belongs to."
          ]
        }
      ],
      "args": [
        {
          "name": "ownerKeyIndex",
          "type": "u16"
        }
      ]
    },
    {
      "name": "addShipEscrow",
      "discriminator": [
        186,
        19,
        218,
        150,
        167,
        181,
        212,
        89
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder - pays for account rent"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "sagePlayerProfile",
          "docs": [
            "The [`SagePlayerProfile`] account"
          ],
          "writable": true
        },
        {
          "name": "originTokenAccount",
          "docs": [
            "The Origin Token Account"
          ],
          "writable": true
        },
        {
          "name": "ship",
          "docs": [
            "The [`Ship`] Account"
          ]
        },
        {
          "name": "shipEscrowTokenAccount",
          "docs": [
            "The Escrow Token Account"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The Token Program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "addShipEscrowInput"
            }
          }
        }
      ]
    },
    {
      "name": "addShipToFleet",
      "discriminator": [
        237,
        166,
        153,
        72,
        122,
        179,
        220,
        78
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new `Fleet`"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "fleetShips",
          "docs": [
            "The [`FleetShips`] account"
          ],
          "writable": true
        },
        {
          "name": "ship",
          "docs": [
            "The [`Ship`] Account"
          ]
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "addShipToFleetInput"
            }
          }
        }
      ]
    },
    {
      "name": "burnCraftingConsumables",
      "discriminator": [
        13,
        225,
        203,
        91,
        54,
        232,
        126,
        170
      ],
      "accounts": [
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "craftingInstance",
          "docs": [
            "The [`CraftingInstance`] account"
          ]
        },
        {
          "name": "craftingProcess",
          "docs": [
            "The crafting process account"
          ],
          "writable": true
        },
        {
          "name": "craftingFacility",
          "docs": [
            "The crafting facility account"
          ]
        },
        {
          "name": "craftingRecipe",
          "docs": [
            "The crafting recipe"
          ]
        },
        {
          "name": "gameAccounts",
          "accounts": [
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source account of the tokens - owner should be `crafting_process`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The token mint"
          ],
          "writable": true
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The [Token] program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "ingredientIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "cancelCraftingProcess",
      "discriminator": [
        215,
        30,
        129,
        128,
        91,
        231,
        249,
        78
      ],
      "accounts": [
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "craftingInstance",
          "docs": [
            "The [`CraftingInstance`] account to cancel"
          ],
          "writable": true
        },
        {
          "name": "craftingProcess",
          "docs": [
            "The crafting process account"
          ],
          "writable": true
        },
        {
          "name": "craftingFacility",
          "docs": [
            "The `CraftingFacility` account"
          ],
          "writable": true
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "changeRental",
      "discriminator": [
        107,
        122,
        221,
        24,
        12,
        249,
        70,
        193
      ],
      "accounts": [
        {
          "name": "subProfileInvalidator",
          "docs": [
            "The fleet rental invalidator"
          ],
          "signer": true
        },
        {
          "name": "newSubProfile",
          "docs": [
            "The new sub profile"
          ]
        },
        {
          "name": "fleet",
          "docs": [
            "The fleet"
          ],
          "writable": true
        },
        {
          "name": "gameId",
          "docs": [
            "The [`Game`] account"
          ]
        },
        {
          "name": "subProfileFaction",
          "docs": [
            "The faction that the sub_profile belongs to."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "claimCraftingNonConsumables",
      "discriminator": [
        18,
        145,
        170,
        128,
        59,
        241,
        83,
        136
      ],
      "accounts": [
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "craftingInstance",
          "docs": [
            "The [`CraftingInstance`] account"
          ]
        },
        {
          "name": "craftingProcess",
          "docs": [
            "The crafting process account"
          ],
          "writable": true
        },
        {
          "name": "craftingFacility",
          "docs": [
            "The crafting facility account"
          ]
        },
        {
          "name": "craftingRecipe",
          "docs": [
            "The crafting recipe"
          ]
        },
        {
          "name": "cargoPodTo",
          "docs": [
            "The destination cargo pod account"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The Cargo Type Account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "gameAccounts",
          "accounts": [
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source account of the tokens - owner should be `crafting_process`"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "The destination account of the tokens - owner should be `cargo_pod_to`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The token mint"
          ],
          "writable": true
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The [Token] program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "ingredientIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "claimCraftingOutputs",
      "discriminator": [
        215,
        71,
        59,
        28,
        156,
        93,
        188,
        255
      ],
      "accounts": [
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "craftingInstance",
          "docs": [
            "The [`CraftingInstance`] account"
          ]
        },
        {
          "name": "craftingProcess",
          "docs": [
            "The [`CraftingProcess`] account"
          ],
          "writable": true
        },
        {
          "name": "craftingFacility",
          "docs": [
            "The crafting facility account"
          ]
        },
        {
          "name": "craftingRecipe",
          "docs": [
            "The crafting [`Recipe`]"
          ]
        },
        {
          "name": "craftableItem",
          "docs": [
            "The craftable item"
          ]
        },
        {
          "name": "cargoPodTo",
          "docs": [
            "The destination cargo pod account"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The Cargo Type Account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "gameAccounts",
          "accounts": [
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source account of the tokens - owner should be `craftable_item`"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "The destination account of the tokens - owner should be `cargo_pod_to`"
          ],
          "writable": true
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The [Token] program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "ingredientIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "closeCraftingProcess",
      "discriminator": [
        202,
        21,
        225,
        156,
        15,
        4,
        106,
        93
      ],
      "accounts": [
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "craftingInstance",
          "docs": [
            "The [`CraftingInstance`] account to close"
          ],
          "writable": true
        },
        {
          "name": "craftingProcess",
          "docs": [
            "The crafting process account"
          ],
          "writable": true
        },
        {
          "name": "craftingRecipe",
          "docs": [
            "The crafting recipe account"
          ]
        },
        {
          "name": "craftingFacility",
          "docs": [
            "The `CraftingFacility` account"
          ],
          "writable": true
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "craftingXpAccounts",
          "accounts": [
            {
              "name": "userPointsAccount",
              "docs": [
                "The User Points Account"
              ],
              "writable": true
            },
            {
              "name": "pointsCategory",
              "docs": [
                "The Points Category Account"
              ]
            },
            {
              "name": "pointsModifierAccount",
              "docs": [
                "The Points Modifier Account"
              ]
            }
          ]
        },
        {
          "name": "councilRankXpAccounts",
          "accounts": [
            {
              "name": "userPointsAccount",
              "docs": [
                "The User Points Account"
              ],
              "writable": true
            },
            {
              "name": "pointsCategory",
              "docs": [
                "The Points Category Account"
              ]
            },
            {
              "name": "pointsModifierAccount",
              "docs": [
                "The Points Modifier Account"
              ]
            }
          ]
        },
        {
          "name": "progressionConfig",
          "docs": [
            "The [`ProgressionConfig`] account"
          ]
        },
        {
          "name": "pointsProgram",
          "docs": [
            "The points program"
          ]
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "closeDisbandedFleet",
      "discriminator": [
        214,
        150,
        149,
        156,
        245,
        123,
        37,
        165
      ],
      "accounts": [
        {
          "name": "key",
          "docs": [
            "The key on the player profile."
          ],
          "signer": true
        },
        {
          "name": "playerProfile",
          "docs": [
            "The player profile."
          ]
        },
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "disbandedFleet",
          "docs": [
            "The [`DisbandedFleet`] account"
          ],
          "writable": true
        },
        {
          "name": "fleetShips",
          "docs": [
            "The [`FleetShips`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "closeDisbandedFleetInput"
            }
          }
        }
      ]
    },
    {
      "name": "closeFleetCargoPodTokenAccount",
      "discriminator": [
        78,
        124,
        247,
        163,
        148,
        253,
        142,
        68
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "cargoPod",
          "docs": [
            "The cargo pod, owned by the fleet"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "token",
          "docs": [
            "The destination token account - owned by the `cargo_pod`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The mint of the token accounts"
          ],
          "writable": true
        },
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "closePlayerCrewRecord",
      "discriminator": [
        66,
        232,
        19,
        108,
        180,
        192,
        18,
        233
      ],
      "accounts": [
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "crewRecord",
          "docs": [
            "The [`PlayerCrewRecord`] account"
          ],
          "writable": true
        },
        {
          "name": "gameAndProfileAndFaction",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "profileFaction",
              "docs": [
                "The faction that the profile belongs to."
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "crewConfig",
          "docs": [
            "The [`SageCrewConfig`] Account"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "closeStarbaseCargoTokenAccount",
      "discriminator": [
        97,
        164,
        98,
        158,
        180,
        195,
        251,
        80
      ],
      "accounts": [
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "cargoPod",
          "docs": [
            "The new cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "token",
          "docs": [
            "The source token account - owned by the `cargo_pod`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The mint of the token accounts"
          ],
          "writable": true
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "closeUpgradeProcess",
      "discriminator": [
        214,
        132,
        138,
        123,
        136,
        17,
        89,
        82
      ],
      "accounts": [
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "resourceCraftingInstance",
          "docs": [
            "The [`CraftingInstance`] account to close"
          ],
          "writable": true
        },
        {
          "name": "resourceCraftingProcess",
          "docs": [
            "The crafting process account"
          ],
          "writable": true
        },
        {
          "name": "resourceRecipe",
          "docs": [
            "The crafting recipe for the upgrade resource"
          ]
        },
        {
          "name": "resourceCraftingFacility",
          "docs": [
            "The `CraftingFacility` account"
          ],
          "writable": true
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "completeStarbaseUpgrade",
      "discriminator": [
        143,
        92,
        192,
        249,
        21,
        108,
        173,
        81
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder for the new crafting process"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ],
              "writable": true
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "craftingFacility",
          "docs": [
            "The `CraftingFacility` account for crafting at this `Starbase`"
          ],
          "writable": true
        },
        {
          "name": "upgradeFacility",
          "docs": [
            "The `CraftingFacility` account for starbase upgrades"
          ]
        },
        {
          "name": "upgradeRecipe",
          "docs": [
            "The crafting recipe for the starbase upgrade"
          ]
        },
        {
          "name": "newRecipeCategory",
          "docs": [
            "The crafting recipe category for the next `Starbase` level"
          ]
        },
        {
          "name": "craftingDomain",
          "docs": [
            "The crafting domain"
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "copyGameState",
      "discriminator": [
        95,
        77,
        254,
        162,
        248,
        168,
        17,
        16
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new `GameState`"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "oldGameState",
          "docs": [
            "The old [`GameState`] account"
          ]
        },
        {
          "name": "newGameState",
          "docs": [
            "The [`GameState`] account",
            "This will and should fail if there already exists a `GameState`for the desired `update_id`"
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The system program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "manageGameInput"
            }
          }
        }
      ]
    },
    {
      "name": "createCargoPod",
      "discriminator": [
        143,
        62,
        133,
        80,
        133,
        83,
        167,
        17
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder for the new crafting process"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "cargoPod",
          "docs": [
            "The new cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The system program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "starbaseCreateCargoPodInput"
            }
          }
        }
      ]
    },
    {
      "name": "createCertificateMint",
      "discriminator": [
        173,
        190,
        45,
        116,
        34,
        109,
        34,
        89
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder for the new crafting process"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "starbase",
          "docs": [
            "The Starbase to create a certificate mint for"
          ]
        },
        {
          "name": "cargoMint",
          "docs": [
            "The mint to create a certificate mint for"
          ]
        },
        {
          "name": "certificateMint",
          "docs": [
            "The new certificate mint"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type to associated with the `cargo_mint`",
            "Included to ensure that this instruction can only be called for valid cargo types"
          ]
        },
        {
          "name": "rent",
          "docs": [
            "The rent sysvar"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The token program"
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
      "name": "createCraftingProcess",
      "discriminator": [
        54,
        25,
        3,
        71,
        90,
        215,
        99,
        108
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder for the new crafting process"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "craftingInstance",
          "docs": [
            "The [`CraftingInstance`] account to initialize"
          ],
          "writable": true
        },
        {
          "name": "craftingFacility",
          "docs": [
            "The `CraftingFacility` account"
          ],
          "writable": true
        },
        {
          "name": "craftingProcess",
          "docs": [
            "The crafting process account (NOT initialized)"
          ],
          "writable": true
        },
        {
          "name": "craftingRecipe",
          "docs": [
            "The crafting recipe"
          ]
        },
        {
          "name": "craftingDomain",
          "docs": [
            "The crafting domain"
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "starbaseCreateCraftingProcessInput"
            }
          }
        }
      ]
    },
    {
      "name": "createFleet",
      "discriminator": [
        76,
        123,
        81,
        82,
        235,
        228,
        156,
        203
      ],
      "accounts": [
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new `Fleet`"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "fleet",
          "docs": [
            "The [`Fleet`] account"
          ],
          "writable": true
        },
        {
          "name": "fleetShips",
          "docs": [
            "The [`FleetShips`] account"
          ],
          "writable": true
        },
        {
          "name": "cargoHold",
          "docs": [
            "The new fleet `cargo_hold` cargo pod (not initialized)"
          ],
          "writable": true
        },
        {
          "name": "fuelTank",
          "docs": [
            "The new fleet `fuel_tank` cargo pod (not initialized)"
          ],
          "writable": true
        },
        {
          "name": "ammoBank",
          "docs": [
            "The new fleet `ammo_bank` cargo pod (not initialized)"
          ],
          "writable": true
        },
        {
          "name": "ship",
          "docs": [
            "The [`Ship`] Account - represents the first ship in the new fleet"
          ]
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "createFleetInput"
            }
          }
        }
      ]
    },
    {
      "name": "createStarbaseUpgradeResourceProcess",
      "discriminator": [
        29,
        5,
        202,
        253,
        183,
        7,
        4,
        44
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder for the new crafting process"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "craftingInstance",
          "docs": [
            "The [`CraftingInstance`] account to initialize"
          ],
          "writable": true
        },
        {
          "name": "upgradeFacility",
          "docs": [
            "The `CraftingFacility` account"
          ],
          "writable": true
        },
        {
          "name": "craftingProcess",
          "docs": [
            "The crafting process account (NOT initialized)"
          ],
          "writable": true
        },
        {
          "name": "craftingRecipe",
          "docs": [
            "The crafting recipe"
          ]
        },
        {
          "name": "craftingDomain",
          "docs": [
            "The crafting domain"
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "starbaseCreateCraftingProcessInput"
            }
          }
        }
      ]
    },
    {
      "name": "depositCargoToFleet",
      "discriminator": [
        55,
        235,
        105,
        123,
        0,
        253,
        64,
        237
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "cargoPodFrom",
          "docs": [
            "The origin cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoPodTo",
          "docs": [
            "The destination cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source token account - owned by the `cargo_pod_from`"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "The destination token account - owned by the `cargo_pod_to`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The mint of the token accounts"
          ],
          "writable": true
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "depositCargoToFleetInput"
            }
          }
        }
      ]
    },
    {
      "name": "depositCargoToGame",
      "discriminator": [
        87,
        49,
        117,
        148,
        241,
        247,
        176,
        18
      ],
      "accounts": [
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "cargoPod",
          "docs": [
            "The new cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source token account - owned by the `key`"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "The destination token account - owned by the `cargo_pod`"
          ],
          "writable": true
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "cargoToGameInput"
            }
          }
        }
      ]
    },
    {
      "name": "depositCraftingIngredient",
      "discriminator": [
        32,
        35,
        145,
        213,
        56,
        255,
        209,
        156
      ],
      "accounts": [
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "craftingInstance",
          "docs": [
            "The [`CraftingInstance`] account"
          ]
        },
        {
          "name": "craftingFacility",
          "docs": [
            "The [`CraftingFacility`](crafting::CraftingFacility) account"
          ]
        },
        {
          "name": "craftingProcess",
          "docs": [
            "The crafting process account"
          ],
          "writable": true
        },
        {
          "name": "cargoPodFrom",
          "docs": [
            "The source cargo pod account"
          ],
          "writable": true
        },
        {
          "name": "craftingRecipe",
          "docs": [
            "The crafting recipe"
          ]
        },
        {
          "name": "cargoType",
          "docs": [
            "The Cargo Type Account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source account of the tokens - owner should be `cargo_pod_from`"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "The destination account of the tokens - owner should be `crafting_process`"
          ],
          "writable": true
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The [Token] program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "starbaseDepositCraftingIngredientInput"
            }
          }
        }
      ]
    },
    {
      "name": "depositStarbaseUpkeepResource",
      "discriminator": [
        176,
        160,
        11,
        250,
        34,
        66,
        94,
        12
      ],
      "accounts": [
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ],
              "writable": true
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "cargoPodFrom",
          "docs": [
            "The source cargo pod account"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The Cargo Type Account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source account of the tokens - owner should be `cargo_pod_from`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The token mint"
          ],
          "writable": true
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "resourceRecipe",
          "docs": [
            "The crafting recipe for the upkeep resource"
          ]
        },
        {
          "name": "loyaltyPointsAccounts",
          "accounts": [
            {
              "name": "userPointsAccount",
              "docs": [
                "The User Points Account"
              ],
              "writable": true
            },
            {
              "name": "pointsCategory",
              "docs": [
                "The Points Category Account"
              ]
            },
            {
              "name": "pointsModifierAccount",
              "docs": [
                "The Points Modifier Account"
              ]
            }
          ]
        },
        {
          "name": "progressionConfig",
          "docs": [
            "The [`ProgressionConfig`] account"
          ]
        },
        {
          "name": "pointsProgram",
          "docs": [
            "The points program"
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The [Token] program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "depositStarbaseUpkeepResourceInput"
            }
          }
        }
      ]
    },
    {
      "name": "deregisterMineItem",
      "discriminator": [
        21,
        186,
        168,
        200,
        84,
        195,
        41,
        73
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "fundsTo",
          "docs": [
            "Where the closing funds go."
          ],
          "writable": true
        },
        {
          "name": "mineItem",
          "docs": [
            "The [`MineItem`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "deregisterProgressionConfig",
      "discriminator": [
        249,
        174,
        242,
        187,
        139,
        219,
        47,
        118
      ],
      "accounts": [
        {
          "name": "fundsTo",
          "docs": [
            "Where the closing funds go."
          ],
          "writable": true
        },
        {
          "name": "progressionConfig",
          "docs": [
            "The [`ProgressionConfig`] account"
          ],
          "writable": true
        },
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "deregisterResource",
      "discriminator": [
        57,
        140,
        148,
        246,
        8,
        89,
        23,
        34
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "fundsTo",
          "docs": [
            "Where the closing funds go."
          ],
          "writable": true
        },
        {
          "name": "mineItem",
          "docs": [
            "The [`MineItem`] account"
          ],
          "writable": true
        },
        {
          "name": "resource",
          "docs": [
            "The [`Resource`] account"
          ],
          "writable": true
        },
        {
          "name": "location",
          "docs": [
            "The Location address"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "deregisterStarbase",
      "discriminator": [
        100,
        66,
        210,
        187,
        110,
        199,
        211,
        107
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "fundsTo",
          "docs": [
            "Where the closing funds go."
          ],
          "writable": true
        },
        {
          "name": "starbase",
          "docs": [
            "The [`Starbase`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "deregisterSurveyDataUnitTracker",
      "discriminator": [
        255,
        33,
        61,
        120,
        136,
        119,
        184,
        235
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "fundsTo",
          "docs": [
            "Where the closing funds go."
          ],
          "writable": true
        },
        {
          "name": "surveyDataUnitTracker",
          "docs": [
            "The [`SurveyDataUnitTracker`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "deregisterSurveyDataUnitTrackerInput"
            }
          }
        }
      ]
    },
    {
      "name": "disbandFleet",
      "discriminator": [
        39,
        139,
        14,
        85,
        45,
        16,
        215,
        152
      ],
      "accounts": [
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder - pays for account rent"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "disbandedFleet",
          "docs": [
            "The [`DisbandedFleet`] account"
          ],
          "writable": true
        },
        {
          "name": "fleet",
          "docs": [
            "The [`Fleet`] account",
            "The fleet can only be disbanded by the `owner_profile` and not `sub_profile`",
            "Fleet cannot be disbanded while rented"
          ],
          "writable": true
        },
        {
          "name": "fleetShips",
          "docs": [
            "The [`FleetShips`] account"
          ],
          "writable": true
        },
        {
          "name": "cargoHold",
          "docs": [
            "The fleet `cargo_hold` cargo pod"
          ],
          "writable": true
        },
        {
          "name": "fuelTank",
          "docs": [
            "The fleet `fuel_tank` cargo pod"
          ],
          "writable": true
        },
        {
          "name": "ammoBank",
          "docs": [
            "The fleet `ammo_bank` cargo pod"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "disbandFleetInput"
            }
          }
        }
      ]
    },
    {
      "name": "disbandedFleetToEscrow",
      "discriminator": [
        165,
        90,
        71,
        222,
        155,
        7,
        14,
        121
      ],
      "accounts": [
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder - pays for account rent"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "disbandedFleet",
          "docs": [
            "The [`DisbandedFleet`] account"
          ],
          "writable": true
        },
        {
          "name": "fleetShips",
          "docs": [
            "The [`FleetShips`] account"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "ship",
          "docs": [
            "The [`Ship`] Account"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "disbandedFleetToEscrowInput"
            }
          }
        }
      ]
    },
    {
      "name": "discoverSector",
      "discriminator": [
        109,
        231,
        231,
        121,
        203,
        44,
        22,
        40
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ]
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new sector"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "sector",
          "docs": [
            "The [`Sector`] account"
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "discoverSectorInput"
            }
          }
        }
      ]
    },
    {
      "name": "drainMineItemBank",
      "discriminator": [
        221,
        76,
        92,
        127,
        230,
        35,
        41,
        67
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "fundsTo",
          "docs": [
            "Where the closing funds go."
          ],
          "writable": true
        },
        {
          "name": "mineItem",
          "docs": [
            "The [`MineItem`] account"
          ],
          "writable": true
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The mine item token bank to drain"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "Where to send tokens from the bank"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The [Token] program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "drainSurveyDataUnitsBank",
      "discriminator": [
        227,
        99,
        86,
        55,
        218,
        201,
        96,
        208
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "fundsTo",
          "docs": [
            "Where the closing rent refunds go."
          ],
          "writable": true
        },
        {
          "name": "surveyDataUnitTracker",
          "docs": [
            "The [`SurveyDataUnitTracker`] account"
          ]
        },
        {
          "name": "surveyDataUnitTrackerSigner",
          "docs": [
            "The `SurveyDataUnitTracker` signer"
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The SDU token bank to drain"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "Where to send tokens from the bank"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The [Token] program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "fleetStateHandler",
      "discriminator": [
        114,
        77,
        252,
        27,
        52,
        161,
        2,
        156
      ],
      "accounts": [
        {
          "name": "fleet",
          "docs": [
            "The fleet."
          ],
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "forceDisbandFleet",
      "discriminator": [
        18,
        245,
        53,
        119,
        155,
        57,
        1,
        78
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder - pays for account rent"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "disbandedFleet",
          "docs": [
            "The new [`DisbandedFleet`] account"
          ],
          "writable": true
        },
        {
          "name": "fleet",
          "docs": [
            "The [`Fleet`] account"
          ],
          "writable": true
        },
        {
          "name": "fleetShips",
          "docs": [
            "The [`FleetShips`] account"
          ],
          "writable": true
        },
        {
          "name": "cargoHold",
          "docs": [
            "The fleet `cargo_hold` cargo pod"
          ],
          "writable": true
        },
        {
          "name": "fuelTank",
          "docs": [
            "The fleet `fuel_tank` cargo pod"
          ],
          "writable": true
        },
        {
          "name": "ammoBank",
          "docs": [
            "The fleet `ammo_bank` cargo pod"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "ship",
          "docs": [
            "The [`Ship`]",
            "Must provide at least one ship that is invalid for this instruction"
          ]
        },
        {
          "name": "gameAccounts",
          "accounts": [
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "forcedDisbandFleetInput"
            }
          }
        }
      ]
    },
    {
      "name": "forceDropFleetCargo",
      "discriminator": [
        170,
        120,
        191,
        46,
        255,
        195,
        80,
        221
      ],
      "accounts": [
        {
          "name": "fleet",
          "docs": [
            "The `Fleet` Account"
          ],
          "writable": true
        },
        {
          "name": "fleetShips",
          "docs": [
            "The [`FleetShips`] account"
          ],
          "writable": true
        },
        {
          "name": "cargoPod",
          "docs": [
            "The origin cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The `cargo_type` for the token"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition"
          ]
        },
        {
          "name": "gameId",
          "docs": [
            "The [`Game`] account"
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source token account - owned by the `cargo_pod`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The mint of the token account"
          ],
          "writable": true
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "idleToLoadingBay",
      "discriminator": [
        227,
        46,
        4,
        74,
        151,
        248,
        41,
        131
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        }
      ],
      "args": [
        {
          "name": "keyIndex",
          "type": "u16"
        }
      ]
    },
    {
      "name": "idleToRespawn",
      "discriminator": [
        235,
        207,
        200,
        174,
        161,
        116,
        91,
        168
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "atlasTokenFrom",
          "docs": [
            "Source Token account for ATLAS, owned by the player"
          ],
          "writable": true
        },
        {
          "name": "atlasTokenTo",
          "docs": [
            "Vault Token account for ATLAS"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The Solana Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "idleToRespawnInput"
            }
          }
        }
      ]
    },
    {
      "name": "initGame",
      "discriminator": [
        251,
        46,
        12,
        208,
        184,
        148,
        157,
        73
      ],
      "accounts": [
        {
          "name": "signer",
          "docs": [
            "The entity calling this instruction"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "profile",
          "docs": [
            "The sector permissions [`Profile`]"
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new game"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "gameId",
          "docs": [
            "The [`Game`] account"
          ],
          "writable": true,
          "signer": true
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
      "name": "initGameState",
      "discriminator": [
        236,
        199,
        44,
        86,
        12,
        134,
        36,
        120
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new `GameState`"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "gameState",
          "docs": [
            "The [`GameState`] account"
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The system program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "initGameStateInput"
            }
          }
        }
      ]
    },
    {
      "name": "invalidateRental",
      "discriminator": [
        180,
        183,
        106,
        153,
        255,
        8,
        232,
        178
      ],
      "accounts": [
        {
          "name": "subProfileInvalidator",
          "docs": [
            "The fleet rental invalidator"
          ],
          "signer": true
        },
        {
          "name": "fleet",
          "docs": [
            "The fleet"
          ],
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "invalidateShip",
      "discriminator": [
        8,
        7,
        115,
        86,
        246,
        67,
        87,
        148
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "ship",
          "docs": [
            "The current [`Ship`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "keyIndex",
          "type": "u16"
        }
      ]
    },
    {
      "name": "loadFleetCrew",
      "discriminator": [
        39,
        9,
        212,
        218,
        167,
        107,
        137,
        208
      ],
      "accounts": [
        {
          "name": "fleetAndOwner",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key on the profile."
              ],
              "signer": true
            },
            {
              "name": "owningProfile",
              "docs": [
                "The profile that owns the fleet."
              ]
            },
            {
              "name": "owningProfileFaction",
              "docs": [
                "The faction that the profile belongs to."
              ]
            },
            {
              "name": "fleet",
              "docs": [
                "The fleet."
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "gameId",
          "docs": [
            "The [`Game`] account"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "fleetCrewInput"
            }
          }
        }
      ]
    },
    {
      "name": "loadingBayToIdle",
      "discriminator": [
        13,
        80,
        226,
        63,
        24,
        172,
        190,
        87
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        }
      ],
      "args": [
        {
          "name": "keyIndex",
          "type": "u16"
        }
      ]
    },
    {
      "name": "mineAsteroidToRespawn",
      "discriminator": [
        208,
        63,
        135,
        108,
        218,
        252,
        36,
        0
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "resource",
          "docs": [
            "The [`Resource`] account"
          ],
          "writable": true
        },
        {
          "name": "planet",
          "docs": [
            "The [`Planet`] account"
          ],
          "writable": true
        },
        {
          "name": "atlasTokenFrom",
          "docs": [
            "Source Token account for ATLAS, owned by the player"
          ],
          "writable": true
        },
        {
          "name": "atlasTokenTo",
          "docs": [
            "Vault Token account for ATLAS"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The Solana Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "mineAsteroidToRespawnInput"
            }
          }
        }
      ]
    },
    {
      "name": "mintCertificate",
      "discriminator": [
        53,
        2,
        104,
        84,
        51,
        197,
        179,
        10
      ],
      "accounts": [
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "cargoMint",
          "docs": [
            "The mint of the cargo in question"
          ]
        },
        {
          "name": "certificateMint",
          "docs": [
            "The cargo certificate mint"
          ],
          "writable": true
        },
        {
          "name": "certificateTokenTo",
          "docs": [
            "The token account where certificates are minted to"
          ],
          "writable": true
        },
        {
          "name": "cargoTokenFrom",
          "docs": [
            "The source token account for the cargo - owned by the `cargo_pod`"
          ],
          "writable": true
        },
        {
          "name": "cargoTokenTo",
          "docs": [
            "The destination token account for the cargo - owned by the Starbase"
          ],
          "writable": true
        },
        {
          "name": "cargoPod",
          "docs": [
            "The cargo pod to take from"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The token program"
          ]
        }
      ],
      "args": [
        {
          "name": "keyIndex",
          "type": "u16"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintCrewToGame",
      "discriminator": [
        64,
        222,
        94,
        243,
        149,
        65,
        54,
        132
      ],
      "accounts": [
        {
          "name": "sagePlayerProfile",
          "docs": [
            "The [`SagePlayerProfile`] account"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "sageCrewConfig",
          "docs": [
            "The [`SageCrewConfig`] Account"
          ]
        },
        {
          "name": "crewConfig",
          "docs": [
            "The crew program `CrewConfig` account"
          ]
        },
        {
          "name": "instructionsSysvar",
          "docs": [
            "Solana Instructions Sysvar"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "redeemCertificate",
      "discriminator": [
        212,
        241,
        133,
        172,
        137,
        83,
        49,
        177
      ],
      "accounts": [
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "cargoMint",
          "docs": [
            "The mint of the cargo in question"
          ]
        },
        {
          "name": "certificateMint",
          "docs": [
            "The cargo certificate mint"
          ],
          "writable": true
        },
        {
          "name": "certificateOwnerAuthority",
          "docs": [
            "Owner of the certificates"
          ],
          "signer": true
        },
        {
          "name": "certificateTokenFrom",
          "docs": [
            "The source token account for the cargo certificate - owned by the `certificate_owner_authority`"
          ],
          "writable": true
        },
        {
          "name": "cargoTokenFrom",
          "docs": [
            "The source token account for the cargo - owned by the Starbase"
          ],
          "writable": true
        },
        {
          "name": "cargoTokenTo",
          "docs": [
            "The destination token account for the cargo - owned by the `cargo_pod`"
          ],
          "writable": true
        },
        {
          "name": "cargoPod",
          "docs": [
            "The cargo pod to send to"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The token program"
          ]
        }
      ],
      "args": [
        {
          "name": "keyIndex",
          "type": "u16"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "registerMineItem",
      "discriminator": [
        54,
        173,
        58,
        74,
        128,
        116,
        109,
        20
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new mine item"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "mineItem",
          "docs": [
            "The [`MineItem`] account"
          ],
          "writable": true
        },
        {
          "name": "mint",
          "docs": [
            "The mint address representing the mine item"
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "registerMineItemInput"
            }
          }
        }
      ]
    },
    {
      "name": "registerPlanet",
      "discriminator": [
        213,
        91,
        78,
        118,
        207,
        133,
        98,
        238
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new game"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "planet",
          "docs": [
            "The [`Planet`] account"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "sector",
          "docs": [
            "The [`Sector`] account"
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "registerPlanetInput"
            }
          }
        }
      ]
    },
    {
      "name": "registerProgressionConfig",
      "discriminator": [
        21,
        65,
        0,
        240,
        76,
        135,
        85,
        219
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder for the new star base"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "progressionConfig",
          "docs": [
            "The [`ProgressionConfig`] account"
          ],
          "writable": true
        },
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "registerProgressionConfigInput"
            }
          }
        }
      ]
    },
    {
      "name": "registerResource",
      "discriminator": [
        87,
        209,
        164,
        28,
        6,
        82,
        232,
        214
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new resource"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "resource",
          "docs": [
            "The [`Resource`] account"
          ],
          "writable": true
        },
        {
          "name": "location",
          "docs": [
            "The Location address"
          ],
          "writable": true
        },
        {
          "name": "mineItem",
          "docs": [
            "The [`MineItem`] account"
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "registerResourceInput"
            }
          }
        }
      ]
    },
    {
      "name": "registerSageCrewConfig",
      "discriminator": [
        221,
        144,
        125,
        158,
        28,
        25,
        186,
        209
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder for the new star base"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "sageCrewConfig",
          "docs": [
            "The [`SageCrewConfig`] account"
          ],
          "writable": true
        },
        {
          "name": "config",
          "docs": [
            "The crew config"
          ]
        },
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "registerSagePlayerProfile",
      "discriminator": [
        88,
        142,
        218,
        149,
        75,
        77,
        228,
        156
      ],
      "accounts": [
        {
          "name": "profile",
          "docs": [
            "The player permissions [`Profile`]"
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new profile"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "sagePlayerProfile",
          "docs": [
            "The `SagePlayerProfile` account"
          ],
          "writable": true
        },
        {
          "name": "gameAccounts",
          "accounts": [
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "registerSagePointModifier",
      "discriminator": [
        212,
        251,
        164,
        180,
        158,
        19,
        173,
        22
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder - pays for account rent"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "pointsCategory",
          "docs": [
            "The `PointCategory`"
          ]
        },
        {
          "name": "pointsModifier",
          "docs": [
            "The `PointsModifier` account to be created in Points CPI"
          ],
          "writable": true
        },
        {
          "name": "pointsProgram",
          "docs": [
            "The points program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "registerSagePointsModifierInput"
            }
          }
        }
      ]
    },
    {
      "name": "registerSector",
      "discriminator": [
        55,
        57,
        58,
        192,
        36,
        235,
        36,
        109
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new sector"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "discoverer",
          "docs": [
            "The discoverer of this sector"
          ]
        },
        {
          "name": "sector",
          "docs": [
            "The [`Sector`] account"
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "coordinates",
          "type": {
            "array": [
              "i64",
              2
            ]
          }
        },
        {
          "name": "name",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        },
        {
          "name": "keyIndex",
          "type": "u16"
        }
      ]
    },
    {
      "name": "registerShip",
      "discriminator": [
        6,
        51,
        127,
        92,
        57,
        76,
        176,
        165
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new game"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "ship",
          "docs": [
            "The [`Ship`] account"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "docs": [
            "The mint address representing the [`Ship`]"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "registerShipInput"
            }
          }
        }
      ]
    },
    {
      "name": "registerStar",
      "discriminator": [
        15,
        25,
        105,
        234,
        177,
        215,
        147,
        191
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder - pays for account rent"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "star",
          "docs": [
            "The [`Star`] account"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "sector",
          "docs": [
            "The [`Sector`] account"
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "registerStarInput"
            }
          }
        }
      ]
    },
    {
      "name": "registerStarbase",
      "discriminator": [
        105,
        33,
        36,
        138,
        165,
        181,
        51,
        57
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder for the new star base"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "starbase",
          "docs": [
            "The [`Starbase`] account"
          ],
          "writable": true
        },
        {
          "name": "sector",
          "docs": [
            "The [`Sector`] account"
          ]
        },
        {
          "name": "gameStateAndProfile",
          "accounts": [
            {
              "name": "gameAndProfile",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "registerStarbaseInputUnpacked"
            }
          }
        }
      ]
    },
    {
      "name": "registerStarbasePlayer",
      "discriminator": [
        60,
        18,
        158,
        19,
        208,
        147,
        83,
        226
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder -- pays account rent"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "gameAccounts",
          "accounts": [
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "sagePlayerProfile",
          "docs": [
            "The [`SagePlayerProfile`] account"
          ]
        },
        {
          "name": "profileFaction",
          "docs": [
            "The faction that the player belongs to."
          ]
        },
        {
          "name": "starbase",
          "docs": [
            "The [`Starbase`] account"
          ]
        },
        {
          "name": "starbasePlayer",
          "docs": [
            "The [`StarbasePlayer`] account to initialize"
          ],
          "writable": true
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
      "name": "registerSurveyDataUnitTracker",
      "discriminator": [
        208,
        72,
        99,
        63,
        0,
        214,
        40,
        155
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new `SurveyDataUnitTracker`"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "surveyDataUnitTracker",
          "docs": [
            "The [`SurveyDataUnitTracker`] account"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "sduMint",
          "docs": [
            "The Survey Data Unit Mint"
          ]
        },
        {
          "name": "resourceMint",
          "docs": [
            "The mint of the resource spent when scanning for SDUs"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "registerSurveyDataUnitTrackerInput"
            }
          }
        }
      ]
    },
    {
      "name": "removeCargoPod",
      "discriminator": [
        216,
        23,
        78,
        104,
        239,
        43,
        8,
        3
      ],
      "accounts": [
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "cargoPod",
          "docs": [
            "The cargo pod (should be empty)"
          ],
          "writable": true
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The system program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "starbaseRemoveCargoPodInput"
            }
          }
        }
      ]
    },
    {
      "name": "removeConnection",
      "discriminator": [
        200,
        145,
        119,
        103,
        85,
        190,
        120,
        138
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "fundsTo",
          "docs": [
            "Where the rent refund funds from the connections go to."
          ],
          "writable": true
        },
        {
          "name": "sector1",
          "docs": [
            "The first sector to remove from"
          ],
          "writable": true
        },
        {
          "name": "sector2",
          "docs": [
            "The second sector to remove from"
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The system program"
          ]
        }
      ],
      "args": [
        {
          "name": "sector1Index",
          "type": "u16"
        },
        {
          "name": "sector2Index",
          "type": "u16"
        },
        {
          "name": "keyIndex",
          "type": "u16"
        }
      ]
    },
    {
      "name": "removeCrewFromGame",
      "discriminator": [
        242,
        139,
        76,
        15,
        23,
        182,
        100,
        117
      ],
      "accounts": [
        {
          "name": "sagePlayerProfile",
          "docs": [
            "The [`SagePlayerProfile`] account"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "sageCrewConfig",
          "docs": [
            "The [`SageCrewConfig`] Account"
          ]
        },
        {
          "name": "gameAndProfileAndFaction",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "profileFaction",
              "docs": [
                "The faction that the profile belongs to."
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "crewConfig",
          "docs": [
            "The crew program `CrewConfig` account"
          ]
        },
        {
          "name": "newCrewOwner",
          "docs": [
            "The new crew owner"
          ]
        },
        {
          "name": "crewDelegate",
          "docs": [
            "The crew delegate"
          ]
        },
        {
          "name": "logWrapper",
          "docs": [
            "The log wrapper"
          ]
        },
        {
          "name": "compressionProgram",
          "docs": [
            "The compression program"
          ]
        },
        {
          "name": "bubblegumProgram",
          "docs": [
            "The bubblegum program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "removeCrewInput"
            }
          }
        }
      ]
    },
    {
      "name": "removeInvalidShipEscrow",
      "discriminator": [
        248,
        15,
        16,
        197,
        13,
        248,
        39,
        0
      ],
      "accounts": [
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "sagePlayerProfile",
          "docs": [
            "The [`SagePlayerProfile`] account"
          ],
          "writable": true
        },
        {
          "name": "destinationTokenAccount",
          "docs": [
            "The Destination Token Account"
          ],
          "writable": true
        },
        {
          "name": "ship",
          "docs": [
            "The [`Ship`] Account"
          ]
        },
        {
          "name": "shipEscrowTokenAccount",
          "docs": [
            "The Escrow Token Account"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The Token Program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "removeShipEscrowInput"
            }
          }
        }
      ]
    },
    {
      "name": "removeShipEscrow",
      "discriminator": [
        67,
        4,
        108,
        161,
        186,
        106,
        125,
        52
      ],
      "accounts": [
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "sagePlayerProfile",
          "docs": [
            "The [`SagePlayerProfile`] account"
          ],
          "writable": true
        },
        {
          "name": "destinationTokenAccount",
          "docs": [
            "The Destination Token Account"
          ],
          "writable": true
        },
        {
          "name": "ship",
          "docs": [
            "The [`Ship`] Account"
          ]
        },
        {
          "name": "shipEscrowTokenAccount",
          "docs": [
            "The Escrow Token Account"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The Token Program"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "removeShipEscrowInput"
            }
          }
        }
      ]
    },
    {
      "name": "respawnToLoadingBay",
      "discriminator": [
        105,
        196,
        139,
        238,
        13,
        70,
        125,
        226
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "cargoHold",
          "docs": [
            "The fleet `cargo_hold` cargo pod"
          ]
        },
        {
          "name": "fuelTank",
          "docs": [
            "The fleet `fuel_tank` cargo pod"
          ]
        },
        {
          "name": "ammoBank",
          "docs": [
            "The fleet `ammo_bank` cargo pod"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "respawnToLoadingBayInput"
            }
          }
        }
      ]
    },
    {
      "name": "scanForSurveyDataUnits",
      "discriminator": [
        84,
        102,
        234,
        1,
        126,
        136,
        186,
        147
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "surveyDataUnitTracker",
          "docs": [
            "The [`SurveyDataUnitTracker`] account"
          ]
        },
        {
          "name": "surveyDataUnitTrackerSigner",
          "docs": [
            "The `SurveyDataUnitTracker` signer"
          ]
        },
        {
          "name": "cargoHold",
          "docs": [
            "The general cargo hold cargo pod for the fleet"
          ],
          "writable": true
        },
        {
          "name": "sector",
          "docs": [
            "The [`Sector`] account"
          ],
          "writable": true
        },
        {
          "name": "sduTokenFrom",
          "docs": [
            "Source token account for the SDU, owned by `survey_data_unit_tracker_signer`"
          ],
          "writable": true
        },
        {
          "name": "sduTokenTo",
          "docs": [
            "Destination token account for the SDU, owned by cargo_hold"
          ],
          "writable": true
        },
        {
          "name": "resourceTokenFrom",
          "docs": [
            "Token account for `resource_mint`, owned by fleet"
          ],
          "writable": true
        },
        {
          "name": "resourceMint",
          "docs": [
            "The resource that is spent when scanning for Survey Data Units"
          ],
          "writable": true
        },
        {
          "name": "sduCargoType",
          "docs": [
            "The cargo type of the SDU"
          ]
        },
        {
          "name": "resourceCargoType",
          "docs": [
            "The cargo type of `resource_mint`"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition"
          ]
        },
        {
          "name": "dataRunningXpAccounts",
          "accounts": [
            {
              "name": "userPointsAccount",
              "docs": [
                "The User Points Account"
              ],
              "writable": true
            },
            {
              "name": "pointsCategory",
              "docs": [
                "The Points Category Account"
              ]
            },
            {
              "name": "pointsModifierAccount",
              "docs": [
                "The Points Modifier Account"
              ]
            }
          ]
        },
        {
          "name": "councilRankXpAccounts",
          "accounts": [
            {
              "name": "userPointsAccount",
              "docs": [
                "The User Points Account"
              ],
              "writable": true
            },
            {
              "name": "pointsCategory",
              "docs": [
                "The Points Category Account"
              ]
            },
            {
              "name": "pointsModifierAccount",
              "docs": [
                "The Points Modifier Account"
              ]
            }
          ]
        },
        {
          "name": "progressionConfig",
          "docs": [
            "The [`ProgressionConfig`] account"
          ]
        },
        {
          "name": "pointsProgram",
          "docs": [
            "The points program"
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The cargo program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The token program"
          ]
        },
        {
          "name": "instructionsSysvar",
          "docs": [
            "Solana Instructions Sysvar"
          ]
        },
        {
          "name": "recentSlothashes",
          "docs": [
            "Solana recent slothashes"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "scanForSurveyDataUnitsInput"
            }
          }
        }
      ]
    },
    {
      "name": "setNextShip",
      "discriminator": [
        184,
        239,
        118,
        237,
        92,
        169,
        177,
        174
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "ship",
          "docs": [
            "The current [`Ship`] account"
          ],
          "writable": true
        },
        {
          "name": "nextShip",
          "docs": [
            "The next [`Ship`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "keyIndex",
          "type": "u16"
        }
      ]
    },
    {
      "name": "startCraftingProcess",
      "discriminator": [
        64,
        108,
        109,
        62,
        9,
        128,
        138,
        246
      ],
      "accounts": [
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "craftingInstance",
          "docs": [
            "The [`CraftingInstance`] account"
          ]
        },
        {
          "name": "craftingProcess",
          "docs": [
            "The [`CraftingProcess`] account"
          ],
          "writable": true
        },
        {
          "name": "craftingRecipe",
          "docs": [
            "The crafting [`Recipe`]"
          ],
          "writable": true
        },
        {
          "name": "craftingFacility",
          "docs": [
            "The `CraftingFacility` account"
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "startMiningAsteroid",
      "discriminator": [
        186,
        215,
        80,
        30,
        174,
        226,
        211,
        33
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "fleetFuelTokenAccount",
          "docs": [
            "The fleet fuel token account - owned by the `fuel_tank`"
          ]
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "mineItem",
          "docs": [
            "The [`MineItem`] account"
          ]
        },
        {
          "name": "resource",
          "docs": [
            "The [`Resource`] account"
          ],
          "writable": true
        },
        {
          "name": "planet",
          "docs": [
            "The [`Planet`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "startStarbaseUpgrade",
      "discriminator": [
        165,
        225,
        83,
        167,
        158,
        211,
        143,
        205
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder for the new crafting process"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ],
              "writable": true
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "upgradeFacility",
          "docs": [
            "The `CraftingFacility` account for starbase upgrades"
          ],
          "writable": true
        },
        {
          "name": "upgradeRecipe",
          "docs": [
            "The crafting recipe for the starbase upgrade"
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "startSubwarp",
      "discriminator": [
        192,
        104,
        197,
        40,
        30,
        39,
        155,
        48
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "startSubwarpInput"
            }
          }
        }
      ]
    },
    {
      "name": "stopCraftingProcess",
      "discriminator": [
        49,
        192,
        172,
        244,
        79,
        44,
        170,
        178
      ],
      "accounts": [
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "craftingInstance",
          "docs": [
            "The [`CraftingInstance`] account"
          ]
        },
        {
          "name": "craftingProcess",
          "docs": [
            "The [`CraftingProcess`] account"
          ],
          "writable": true
        },
        {
          "name": "craftingRecipe",
          "docs": [
            "The crafting [`Recipe`]"
          ],
          "writable": true
        },
        {
          "name": "craftingFacility",
          "docs": [
            "The `CraftingFacility` account"
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "stopMiningAsteroid",
      "discriminator": [
        181,
        77,
        45,
        163,
        103,
        27,
        211,
        81
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "mineItem",
          "docs": [
            "The [`MineItem`] account"
          ]
        },
        {
          "name": "resource",
          "docs": [
            "The [`Resource`] account"
          ],
          "writable": true
        },
        {
          "name": "planet",
          "docs": [
            "The [`Planet`] account"
          ],
          "writable": true
        },
        {
          "name": "fuelTank",
          "docs": [
            "The fuel tank cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type account for fuel"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source token account - owned by the `fuel_tank`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The mint of the token account"
          ],
          "writable": true
        },
        {
          "name": "pilotXpAccounts",
          "accounts": [
            {
              "name": "userPointsAccount",
              "docs": [
                "The User Points Account"
              ],
              "writable": true
            },
            {
              "name": "pointsCategory",
              "docs": [
                "The Points Category Account"
              ]
            },
            {
              "name": "pointsModifierAccount",
              "docs": [
                "The Points Modifier Account"
              ]
            }
          ]
        },
        {
          "name": "miningXpAccounts",
          "accounts": [
            {
              "name": "userPointsAccount",
              "docs": [
                "The User Points Account"
              ],
              "writable": true
            },
            {
              "name": "pointsCategory",
              "docs": [
                "The Points Category Account"
              ]
            },
            {
              "name": "pointsModifierAccount",
              "docs": [
                "The Points Modifier Account"
              ]
            }
          ]
        },
        {
          "name": "councilRankXpAccounts",
          "accounts": [
            {
              "name": "userPointsAccount",
              "docs": [
                "The User Points Account"
              ],
              "writable": true
            },
            {
              "name": "pointsCategory",
              "docs": [
                "The Points Category Account"
              ]
            },
            {
              "name": "pointsModifierAccount",
              "docs": [
                "The Points Modifier Account"
              ]
            }
          ]
        },
        {
          "name": "progressionConfig",
          "docs": [
            "The [`ProgressionConfig`] account"
          ]
        },
        {
          "name": "pointsProgram",
          "docs": [
            "The points program"
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "stopMiningAsteroidInput"
            }
          }
        }
      ]
    },
    {
      "name": "stopSubwarp",
      "discriminator": [
        150,
        58,
        3,
        0,
        6,
        207,
        119,
        46
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "stopSubwarpInput"
            }
          }
        }
      ]
    },
    {
      "name": "submitStarbaseUpgradeResource",
      "discriminator": [
        53,
        182,
        230,
        232,
        57,
        201,
        167,
        120
      ],
      "accounts": [
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ],
              "writable": true
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "resourceCraftingInstance",
          "docs": [
            "The [`CraftingInstance`] account"
          ]
        },
        {
          "name": "resourceCraftingProcess",
          "docs": [
            "The crafting process account"
          ],
          "writable": true
        },
        {
          "name": "resourceCraftingFacility",
          "docs": [
            "The crafting facility account"
          ]
        },
        {
          "name": "upgradeProcessRecipe",
          "docs": [
            "The crafting recipe for the submission of resources used in the upgrade process"
          ]
        },
        {
          "name": "starbaseUpgradeRecipe",
          "docs": [
            "The crafting recipe for the starbase upgrade"
          ]
        },
        {
          "name": "resourceRecipe",
          "docs": [
            "The crafting recipe for the resource being submitted",
            "i.e. the recipe for crafting the resource whose mint would be `token_mint`"
          ]
        },
        {
          "name": "cargoPodTo",
          "docs": [
            "The destination cargo pod account"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The Cargo Type Account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source account of the tokens - owner should be `crafting_process`"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "The destination account of the tokens - owner should be `cargo_pod_to` (receives any refunds)"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The token mint"
          ],
          "writable": true
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "loyaltyPointsAccounts",
          "accounts": [
            {
              "name": "userPointsAccount",
              "docs": [
                "The User Points Account"
              ],
              "writable": true
            },
            {
              "name": "pointsCategory",
              "docs": [
                "The Points Category Account"
              ]
            },
            {
              "name": "pointsModifierAccount",
              "docs": [
                "The Points Modifier Account"
              ]
            }
          ]
        },
        {
          "name": "progressionConfig",
          "docs": [
            "The [`ProgressionConfig`] account"
          ]
        },
        {
          "name": "pointsProgram",
          "docs": [
            "The points program"
          ]
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The [Token] program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "submitStarbaseUpgradeResourceInput"
            }
          }
        }
      ]
    },
    {
      "name": "syncStarbasePlayer",
      "discriminator": [
        120,
        94,
        164,
        216,
        167,
        59,
        3,
        204
      ],
      "accounts": [
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "gameAccounts",
          "accounts": [
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        }
      ],
      "args": []
    },
    {
      "name": "syncStarbaseUpgradeIngredients",
      "discriminator": [
        169,
        253,
        2,
        19,
        46,
        73,
        18,
        220
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "The funder for the new crafting process"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "starbase",
          "docs": [
            "The [`Starbase`] account"
          ],
          "writable": true
        },
        {
          "name": "upgradeRecipe",
          "docs": [
            "The crafting recipe for the starbase upgrade"
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfile",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "keyIndexInput"
            }
          }
        }
      ]
    },
    {
      "name": "transferCargoAtStarbase",
      "discriminator": [
        12,
        190,
        166,
        190,
        123,
        119,
        214,
        80
      ],
      "accounts": [
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "cargoPodFrom",
          "docs": [
            "The origin cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoPodTo",
          "docs": [
            "The destination cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source token account - owned by the `cargo_pod_from`"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "The destination token account - owned by the `cargo_pod_to`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The mint of the token accounts"
          ],
          "writable": true
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "starbaseTransferCargoInput"
            }
          }
        }
      ]
    },
    {
      "name": "transferCargoWithinFleet",
      "discriminator": [
        201,
        109,
        41,
        219,
        57,
        52,
        180,
        23
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "cargoPodFrom",
          "docs": [
            "The origin cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoPodTo",
          "docs": [
            "The destination cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source token account - owned by the `cargo_pod_from`"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "The destination token account - owned by the `cargo_pod_to`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The mint of the token accounts"
          ],
          "writable": true
        },
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "transferCargoWithinFleetInput"
            }
          }
        }
      ]
    },
    {
      "name": "unloadFleetCrew",
      "discriminator": [
        103,
        95,
        42,
        85,
        79,
        144,
        71,
        32
      ],
      "accounts": [
        {
          "name": "fleetAndOwner",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key on the profile."
              ],
              "signer": true
            },
            {
              "name": "owningProfile",
              "docs": [
                "The profile that owns the fleet."
              ]
            },
            {
              "name": "owningProfileFaction",
              "docs": [
                "The faction that the profile belongs to."
              ]
            },
            {
              "name": "fleet",
              "docs": [
                "The fleet."
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "gameId",
          "docs": [
            "The [`Game`] account"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "fleetCrewInput"
            }
          }
        }
      ]
    },
    {
      "name": "updateGame",
      "discriminator": [
        159,
        61,
        132,
        131,
        3,
        234,
        209,
        220
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ],
              "writable": true
            }
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "updateGameInput"
            }
          }
        }
      ]
    },
    {
      "name": "updateGameState",
      "discriminator": [
        96,
        203,
        129,
        158,
        74,
        22,
        229,
        248
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "gameState",
          "docs": [
            "The [`GameState`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "updateGameStateInput"
            }
          }
        }
      ]
    },
    {
      "name": "updateMineItem",
      "discriminator": [
        230,
        25,
        137,
        117,
        146,
        86,
        121,
        48
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "mineItem",
          "docs": [
            "The [`MineItem`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "updateMineItemInput"
            }
          }
        }
      ]
    },
    {
      "name": "updatePlanet",
      "discriminator": [
        24,
        44,
        71,
        134,
        31,
        32,
        201,
        178
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "planet",
          "docs": [
            "The [`Planet`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "updatePlanetInput"
            }
          }
        }
      ]
    },
    {
      "name": "updateProgressionConfig",
      "discriminator": [
        39,
        217,
        150,
        82,
        237,
        214,
        100,
        184
      ],
      "accounts": [
        {
          "name": "progressionConfig",
          "docs": [
            "The [`ProgressionConfig`] account"
          ],
          "writable": true
        },
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "updateProgressionConfigInput"
            }
          }
        }
      ]
    },
    {
      "name": "updateResource",
      "discriminator": [
        240,
        208,
        156,
        86,
        230,
        216,
        1,
        100
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "mineItem",
          "docs": [
            "The [`MineItem`] account"
          ]
        },
        {
          "name": "resource",
          "docs": [
            "The [`Resource`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "updateResourceInput"
            }
          }
        }
      ]
    },
    {
      "name": "updateShip",
      "discriminator": [
        103,
        231,
        36,
        213,
        187,
        72,
        42,
        252
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "ship",
          "docs": [
            "The [`Ship`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "updateShipInput"
            }
          }
        }
      ]
    },
    {
      "name": "updateShipEscrow",
      "discriminator": [
        173,
        207,
        101,
        247,
        172,
        228,
        39,
        105
      ],
      "accounts": [
        {
          "name": "oldShip",
          "docs": [
            "The old [`Ship`] Account"
          ]
        },
        {
          "name": "next",
          "docs": [
            "The address indicated as `next` in the `old_ship` account"
          ]
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ],
              "writable": true
            }
          ]
        },
        {
          "name": "gameAccounts",
          "accounts": [
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "updateShipEscrowInput"
            }
          }
        }
      ]
    },
    {
      "name": "updateShipInFleet",
      "discriminator": [
        213,
        83,
        186,
        229,
        179,
        31,
        172,
        253
      ],
      "accounts": [
        {
          "name": "fleet",
          "docs": [
            "The [`Fleet`] account"
          ],
          "writable": true
        },
        {
          "name": "fleetShips",
          "docs": [
            "The [`FleetShips`] account"
          ],
          "writable": true
        },
        {
          "name": "oldShip",
          "docs": [
            "The old [`Ship`] Account"
          ]
        },
        {
          "name": "next",
          "docs": [
            "The address indicated as `next` in the `old_ship` account"
          ]
        },
        {
          "name": "gameAccounts",
          "accounts": [
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "updateShipFleetInput"
            }
          }
        }
      ]
    },
    {
      "name": "updateStar",
      "discriminator": [
        145,
        146,
        12,
        86,
        12,
        48,
        39,
        169
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "star",
          "docs": [
            "The [`Star`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "updateStarInput"
            }
          }
        }
      ]
    },
    {
      "name": "updateStarbase",
      "discriminator": [
        78,
        146,
        104,
        166,
        111,
        146,
        95,
        28
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "funder",
          "docs": [
            "The funder for the new game"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "starbase",
          "docs": [
            "The [`Starbase`] account"
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana System program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "updateStarbaseInput"
            }
          }
        }
      ]
    },
    {
      "name": "updateSurveyDataUnitTracker",
      "discriminator": [
        206,
        27,
        247,
        25,
        221,
        207,
        219,
        35
      ],
      "accounts": [
        {
          "name": "gameAndProfile",
          "accounts": [
            {
              "name": "key",
              "docs": [
                "The key authorized for this instruction"
              ],
              "signer": true
            },
            {
              "name": "profile",
              "docs": [
                "The [`Profile`] account"
              ]
            },
            {
              "name": "gameId",
              "docs": [
                "The [`Game`] account"
              ]
            }
          ]
        },
        {
          "name": "surveyDataUnitTracker",
          "docs": [
            "The [`SurveyDataUnitTracker`] account"
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "updateSurveyDataUnitTrackerInput"
            }
          }
        }
      ]
    },
    {
      "name": "warpLane",
      "discriminator": [
        232,
        188,
        195,
        49,
        100,
        72,
        231,
        243
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "fromStarbase",
          "docs": [
            "The [`Starbase`] account"
          ]
        },
        {
          "name": "toStarbase",
          "docs": [
            "The [`Starbase`] account"
          ]
        },
        {
          "name": "fromSector",
          "docs": [
            "The Sector account representing the fleet`s  current sector"
          ]
        },
        {
          "name": "toSector",
          "docs": [
            "The Sector account that `Fleet` will move to"
          ]
        },
        {
          "name": "fuelTank",
          "docs": [
            "The fuel tank cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The `Cargo Type` Account"
          ]
        },
        {
          "name": "statsDefinition",
          "docs": [
            "The `CargoStatsDefinition` for the cargo type"
          ]
        },
        {
          "name": "fuelTokenFrom",
          "docs": [
            "The fuel source token account - owned by the `fuel_tank`"
          ],
          "writable": true
        },
        {
          "name": "fuelMint",
          "docs": [
            "Token Mint - The fuel mint"
          ],
          "writable": true
        },
        {
          "name": "feeTokenFrom",
          "docs": [
            "The fee source token account"
          ],
          "writable": true
        },
        {
          "name": "feeTokenTo",
          "docs": [
            "The fee destination token account"
          ],
          "writable": true
        },
        {
          "name": "feeMint",
          "docs": [
            "Fee Token Mint"
          ],
          "writable": true
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "warpLaneInput"
            }
          }
        }
      ]
    },
    {
      "name": "warpToCoordinate",
      "discriminator": [
        87,
        60,
        50,
        154,
        241,
        106,
        77,
        23
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "fuelTank",
          "docs": [
            "The fuel tank cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type account for fuel"
          ]
        },
        {
          "name": "statsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source token account - owned by the `fuel_tank`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "Token Mint - The fuel mint"
          ],
          "writable": true
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "warpToCoordinateInput"
            }
          }
        }
      ]
    },
    {
      "name": "withdrawCargoFromFleet",
      "discriminator": [
        5,
        163,
        128,
        233,
        108,
        81,
        31,
        56
      ],
      "accounts": [
        {
          "name": "gameAccountsFleetAndOwner",
          "accounts": [
            {
              "name": "gameFleetAndOwner",
              "accounts": [
                {
                  "name": "fleetAndOwner",
                  "accounts": [
                    {
                      "name": "key",
                      "docs": [
                        "The key on the profile."
                      ],
                      "signer": true
                    },
                    {
                      "name": "owningProfile",
                      "docs": [
                        "The profile that owns the fleet."
                      ]
                    },
                    {
                      "name": "owningProfileFaction",
                      "docs": [
                        "The faction that the profile belongs to."
                      ]
                    },
                    {
                      "name": "fleet",
                      "docs": [
                        "The fleet."
                      ],
                      "writable": true
                    }
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "cargoPodFrom",
          "docs": [
            "The origin cargo pod, owned by the fleet"
          ],
          "writable": true
        },
        {
          "name": "cargoPodTo",
          "docs": [
            "The destination cargo pod, owned by the Starbase player"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source token account - owned by the `cargo_pod_from`"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "The destination token account - owned by the `cargo_pod_to`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The mint of the token accounts"
          ],
          "writable": true
        },
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "withdrawCargoFromFleetInput"
            }
          }
        }
      ]
    },
    {
      "name": "withdrawCargoFromGame",
      "discriminator": [
        102,
        218,
        88,
        53,
        255,
        194,
        24,
        62
      ],
      "accounts": [
        {
          "name": "fundsTo",
          "docs": [
            "The funds_to - receives rent refund"
          ],
          "writable": true
        },
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "cargoPod",
          "docs": [
            "The new cargo pod"
          ],
          "writable": true
        },
        {
          "name": "cargoType",
          "docs": [
            "The cargo type account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source token account - owned by the `cargo_pod`"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "The destination token account - owned by the `key`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The mint of the token accounts"
          ],
          "writable": true
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "cargoToGameInput"
            }
          }
        }
      ]
    },
    {
      "name": "withdrawCraftingIngredient",
      "discriminator": [
        218,
        0,
        207,
        77,
        253,
        116,
        248,
        250
      ],
      "accounts": [
        {
          "name": "starbaseAndStarbasePlayer",
          "accounts": [
            {
              "name": "starbase",
              "docs": [
                "The [`Starbase`] account"
              ]
            },
            {
              "name": "starbasePlayer",
              "docs": [
                "The [`StarbasePlayer`] Account"
              ]
            }
          ]
        },
        {
          "name": "craftingInstance",
          "docs": [
            "The [`CraftingInstance`] account"
          ]
        },
        {
          "name": "craftingFacility",
          "docs": [
            "The [`CraftingFacility`](crafting::CraftingFacility) account"
          ]
        },
        {
          "name": "craftingProcess",
          "docs": [
            "The crafting process account"
          ],
          "writable": true
        },
        {
          "name": "cargoPodTo",
          "docs": [
            "The destination cargo pod account"
          ],
          "writable": true
        },
        {
          "name": "craftingRecipe",
          "docs": [
            "The crafting recipe"
          ]
        },
        {
          "name": "cargoType",
          "docs": [
            "The Cargo Type Account"
          ]
        },
        {
          "name": "cargoStatsDefinition",
          "docs": [
            "The cargo stats definition account"
          ]
        },
        {
          "name": "gameAccountsAndProfile",
          "accounts": [
            {
              "name": "gameAndProfileAndFaction",
              "accounts": [
                {
                  "name": "key",
                  "docs": [
                    "The key authorized for this instruction"
                  ],
                  "signer": true
                },
                {
                  "name": "profile",
                  "docs": [
                    "The [`Profile`] account"
                  ]
                },
                {
                  "name": "profileFaction",
                  "docs": [
                    "The faction that the profile belongs to."
                  ]
                },
                {
                  "name": "gameId",
                  "docs": [
                    "The [`Game`] account"
                  ]
                }
              ]
            },
            {
              "name": "gameState",
              "docs": [
                "The [`GameState`] account"
              ]
            }
          ]
        },
        {
          "name": "tokenFrom",
          "docs": [
            "The source account of the tokens - owner should be `crafting_process`"
          ],
          "writable": true
        },
        {
          "name": "tokenTo",
          "docs": [
            "The destination account of the tokens - owner should be `cargo_pod_to`"
          ],
          "writable": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The token mint"
          ],
          "writable": true
        },
        {
          "name": "craftingProgram",
          "docs": [
            "The Crafting Program"
          ]
        },
        {
          "name": "cargoProgram",
          "docs": [
            "The Cargo Program"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "The [Token] program"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "starbaseWithdrawCraftingIngredientInput"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "craftingInstance",
      "discriminator": [
        90,
        186,
        155,
        208,
        93,
        186,
        112,
        191
      ]
    },
    {
      "name": "disbandedFleet",
      "discriminator": [
        53,
        6,
        127,
        23,
        247,
        12,
        225,
        249
      ]
    },
    {
      "name": "fleet",
      "discriminator": [
        109,
        207,
        251,
        48,
        106,
        2,
        136,
        163
      ]
    },
    {
      "name": "fleetShips",
      "discriminator": [
        252,
        81,
        147,
        246,
        222,
        141,
        185,
        110
      ]
    },
    {
      "name": "game",
      "discriminator": [
        27,
        90,
        166,
        125,
        74,
        100,
        121,
        18
      ]
    },
    {
      "name": "gameState",
      "discriminator": [
        144,
        94,
        208,
        172,
        248,
        99,
        134,
        120
      ]
    },
    {
      "name": "mineItem",
      "discriminator": [
        64,
        55,
        212,
        19,
        215,
        156,
        22,
        66
      ]
    },
    {
      "name": "planet",
      "discriminator": [
        242,
        27,
        236,
        42,
        220,
        217,
        132,
        128
      ]
    },
    {
      "name": "playerCrewRecord",
      "discriminator": [
        221,
        185,
        48,
        7,
        75,
        196,
        38,
        219
      ]
    },
    {
      "name": "progressionConfig",
      "discriminator": [
        224,
        156,
        129,
        95,
        15,
        29,
        132,
        208
      ]
    },
    {
      "name": "resource",
      "discriminator": [
        10,
        160,
        2,
        1,
        42,
        207,
        51,
        212
      ]
    },
    {
      "name": "sageCrewConfig",
      "discriminator": [
        247,
        42,
        24,
        109,
        161,
        3,
        248,
        166
      ]
    },
    {
      "name": "sagePlayerProfile",
      "discriminator": [
        10,
        55,
        75,
        234,
        126,
        14,
        47,
        146
      ]
    },
    {
      "name": "sector",
      "discriminator": [
        65,
        117,
        23,
        82,
        80,
        133,
        247,
        233
      ]
    },
    {
      "name": "ship",
      "discriminator": [
        114,
        41,
        245,
        232,
        24,
        58,
        234,
        158
      ]
    },
    {
      "name": "star",
      "discriminator": [
        214,
        131,
        207,
        208,
        202,
        148,
        162,
        48
      ]
    },
    {
      "name": "starbase",
      "discriminator": [
        204,
        182,
        29,
        231,
        220,
        29,
        52,
        2
      ]
    },
    {
      "name": "starbasePlayer",
      "discriminator": [
        192,
        234,
        144,
        86,
        72,
        19,
        5,
        99
      ]
    },
    {
      "name": "surveyDataUnitTracker",
      "discriminator": [
        234,
        127,
        227,
        90,
        144,
        65,
        85,
        111
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "incorrectAdminAddress",
      "msg": "Incorrect admin address."
    },
    {
      "code": 6001,
      "name": "missingRemainingAccount",
      "msg": "An expected remaining account is missing."
    },
    {
      "code": 6002,
      "name": "noStargateConnectionsAvailable",
      "msg": "No Stargate connections available."
    },
    {
      "code": 6003,
      "name": "stargatesNotConnected",
      "msg": "The provided Stargates are not connected."
    },
    {
      "code": 6004,
      "name": "invalidPlanetType",
      "msg": "Invalid Planet Type."
    },
    {
      "code": 6005,
      "name": "invalidRingType",
      "msg": "Invalid Ring Type."
    },
    {
      "code": 6006,
      "name": "invalidStarType",
      "msg": "Invalid Star Type."
    },
    {
      "code": 6007,
      "name": "invalidOrInactiveGame",
      "msg": "Invalid Or Inactive Game"
    },
    {
      "code": 6008,
      "name": "invalidShipSizeClass",
      "msg": "Invalid Ship Size Class."
    },
    {
      "code": 6009,
      "name": "incorrectAccountSize",
      "msg": "Incorrect Account Size."
    },
    {
      "code": 6010,
      "name": "updateIdMismatch",
      "msg": "The update_id is mismatched."
    },
    {
      "code": 6011,
      "name": "alreadyActive",
      "msg": "The account is already active."
    },
    {
      "code": 6012,
      "name": "inactiveAccount",
      "msg": "The account is inactive."
    },
    {
      "code": 6013,
      "name": "invalidGame",
      "msg": "The game account is invalid."
    },
    {
      "code": 6014,
      "name": "invalidGameState",
      "msg": "The game state account is invalid."
    },
    {
      "code": 6015,
      "name": "invalidSector",
      "msg": "The sector account is invalid."
    },
    {
      "code": 6016,
      "name": "fleetCrewNotNormalized",
      "msg": "Fleet Crew Not Normalized"
    },
    {
      "code": 6017,
      "name": "insufficientFuel",
      "msg": "Insufficient Fuel to complete movement"
    },
    {
      "code": 6018,
      "name": "distanceGreaterThanMax",
      "msg": "Distance of movement is greater than the allowed maximum"
    },
    {
      "code": 6019,
      "name": "numericOverflow",
      "msg": "Numeric overflow"
    },
    {
      "code": 6020,
      "name": "invalidLocationType",
      "msg": "Invalid Location Type."
    },
    {
      "code": 6021,
      "name": "locationTypeNotSupported",
      "msg": "The provided location type is not supported."
    },
    {
      "code": 6022,
      "name": "incorrectMineItem",
      "msg": "Incorrect mine item address."
    },
    {
      "code": 6023,
      "name": "incorrectAuthorityAddress",
      "msg": "Incorrect authority address."
    },
    {
      "code": 6024,
      "name": "incorrectResourceAddress",
      "msg": "Incorrect resource address."
    },
    {
      "code": 6025,
      "name": "incorrectMintAuthority",
      "msg": "Incorrect mint authority."
    },
    {
      "code": 6026,
      "name": "mintAuthorityIsNone",
      "msg": "The mint authority should exist."
    },
    {
      "code": 6027,
      "name": "invalidCurrentFleetState",
      "msg": "The current fleet state is not valid."
    },
    {
      "code": 6028,
      "name": "invalidCurrentStarbaseState",
      "msg": "The current starbase state is not valid."
    },
    {
      "code": 6029,
      "name": "authorityMismatch",
      "msg": "Authority mismatch"
    },
    {
      "code": 6030,
      "name": "mintMismatch",
      "msg": "Mint mismatch"
    },
    {
      "code": 6031,
      "name": "tokenMismatch",
      "msg": "Incorrect token address."
    },
    {
      "code": 6032,
      "name": "ownerMismatch",
      "msg": "Owner mismatch"
    },
    {
      "code": 6033,
      "name": "gameMismatch",
      "msg": "Game ID mismatch"
    },
    {
      "code": 6034,
      "name": "profileMismatch",
      "msg": "Profile mismatch"
    },
    {
      "code": 6035,
      "name": "sagePlayerProfileMismatch",
      "msg": "SagePlayerProfile mismatch"
    },
    {
      "code": 6036,
      "name": "starbaseMismatch",
      "msg": "Starbase mismatch"
    },
    {
      "code": 6037,
      "name": "factionMismatch",
      "msg": "Faction mismatch"
    },
    {
      "code": 6038,
      "name": "seqIdMismatch",
      "msg": "Sequence id mismatch"
    },
    {
      "code": 6039,
      "name": "shipMismatch",
      "msg": "Ship mismatch"
    },
    {
      "code": 6040,
      "name": "cargoPodMismatch",
      "msg": "Cargo Pod mismatch"
    },
    {
      "code": 6041,
      "name": "planetMismatch",
      "msg": "Planet mismatch"
    },
    {
      "code": 6042,
      "name": "mineItemMismatch",
      "msg": "MineItem mismatch"
    },
    {
      "code": 6043,
      "name": "locationMismatch",
      "msg": "Location mismatch"
    },
    {
      "code": 6044,
      "name": "invalidEscrowKey",
      "msg": "Escrow key not found in remaining data"
    },
    {
      "code": 6045,
      "name": "invalidShipAmount",
      "msg": "Insufficient Ship token amount"
    },
    {
      "code": 6046,
      "name": "invalidShipHangarSpaceAmount",
      "msg": "Insufficient Ship hangar space amount"
    },
    {
      "code": 6047,
      "name": "invalidCrewAmount",
      "msg": "Invalid crew amount"
    },
    {
      "code": 6048,
      "name": "invalidState",
      "msg": "Invalid state"
    },
    {
      "code": 6049,
      "name": "invalidDistance",
      "msg": "Invalid distance"
    },
    {
      "code": 6050,
      "name": "notAtCentralSpaceStation",
      "msg": "Not at central space station"
    },
    {
      "code": 6051,
      "name": "shipNotExpected",
      "msg": "The instruction does not expect a ship account"
    },
    {
      "code": 6052,
      "name": "addressMismatch",
      "msg": "Address mismatch"
    },
    {
      "code": 6053,
      "name": "invalidSectorConnection",
      "msg": "Invalid sector connection"
    },
    {
      "code": 6054,
      "name": "invalidStarbaseLevel",
      "msg": "Invalid Starbase level"
    },
    {
      "code": 6055,
      "name": "invalidStarbaseUpgradeRecipeCategory",
      "msg": "Invalid Starbase upgrade recipe category"
    },
    {
      "code": 6056,
      "name": "hangarUpgradeNotPossible",
      "msg": "Hangar upgrade not Possible"
    },
    {
      "code": 6057,
      "name": "disbandedFleetNotEmpty",
      "msg": "Disbanded fleet not empty"
    },
    {
      "code": 6058,
      "name": "faultyMovement",
      "msg": "Faulty movement"
    },
    {
      "code": 6059,
      "name": "incorrectHandleRawAccount",
      "msg": "Incorrect Account Type for Handle Raw"
    },
    {
      "code": 6060,
      "name": "insufficientShipCargoCapacity",
      "msg": "Insufficient Ship Cargo Capacity"
    },
    {
      "code": 6061,
      "name": "fleetDoesNotNeedUpdate",
      "msg": "Fleet does not need update"
    },
    {
      "code": 6062,
      "name": "mustDisbandFleet",
      "msg": "Must disband fleet"
    },
    {
      "code": 6063,
      "name": "cannotForceDisbandFleet",
      "msg": "Cannot force-disband fleet"
    },
    {
      "code": 6064,
      "name": "shipMismatchOrAlreadyUpdated",
      "msg": "Ship mismatch or already updated"
    },
    {
      "code": 6065,
      "name": "shipAlreadyUpdated",
      "msg": "Ship already updated"
    },
    {
      "code": 6066,
      "name": "invalidNextShipAddress",
      "msg": "Invalid next ship address"
    },
    {
      "code": 6067,
      "name": "invalidShipForForcedDisband",
      "msg": "Ship is not valid for forced disband of fleet"
    },
    {
      "code": 6068,
      "name": "invalidWarpRange",
      "msg": "Warp range exceeded"
    },
    {
      "code": 6069,
      "name": "invalidIngredient",
      "msg": "Invalid Ingredient"
    },
    {
      "code": 6070,
      "name": "starbaseUpgradeNotInProgress",
      "msg": "Starbase Upgrade Not in progress"
    },
    {
      "code": 6071,
      "name": "missingRentedCrew",
      "msg": "Missing Rented Crew"
    },
    {
      "code": 6072,
      "name": "noPassengersAllowed",
      "msg": "No Passengers Allowed"
    },
    {
      "code": 6073,
      "name": "planetNotReachable",
      "msg": "Planet Not Reachable"
    },
    {
      "code": 6074,
      "name": "respawnNotPossible",
      "msg": "Respawn Not Possible"
    },
    {
      "code": 6075,
      "name": "invalidMovement",
      "msg": "Cannot enter enemy faction's Security Zone"
    },
    {
      "code": 6076,
      "name": "cargoAmountAboveZero",
      "msg": "The Cargo Pod contains a non-zero amount of the Cargo Type"
    },
    {
      "code": 6077,
      "name": "invalidCargoPod",
      "msg": "The Cargo Pod is invalid"
    },
    {
      "code": 6078,
      "name": "invalidZoneCoordinates",
      "msg": "Invalid Zone Coordinates"
    },
    {
      "code": 6079,
      "name": "respawnTimeNotElapsed",
      "msg": "Respawn time not elapsed"
    },
    {
      "code": 6080,
      "name": "activeAccount",
      "msg": "The Account is Active"
    },
    {
      "code": 6081,
      "name": "starbasePlayerMismatch",
      "msg": "Starbase Player mismatch"
    },
    {
      "code": 6082,
      "name": "alreadyProcessed",
      "msg": "The account has already been processed"
    },
    {
      "code": 6083,
      "name": "invalidAmount",
      "msg": "The amount is invalid"
    },
    {
      "code": 6084,
      "name": "warpIsOnCooldown",
      "msg": "Warp is on cooldown"
    },
    {
      "code": 6085,
      "name": "programMismatch",
      "msg": "Program Mismatch"
    },
    {
      "code": 6086,
      "name": "mustBeOnlyInstruction",
      "msg": "Current Instruction Is Not Only Instruction"
    },
    {
      "code": 6087,
      "name": "invalidTime",
      "msg": "Invalid Time"
    },
    {
      "code": 6088,
      "name": "scanIsOnCooldown",
      "msg": "Scanning is on cooldown"
    },
    {
      "code": 6089,
      "name": "invalidFleetSize",
      "msg": "Invalid Fleet Size"
    },
    {
      "code": 6090,
      "name": "inactiveFeature",
      "msg": "The feature is inactive"
    },
    {
      "code": 6091,
      "name": "zeroShipsAdded",
      "msg": "Zero ships added to fleet"
    },
    {
      "code": 6092,
      "name": "invalidNoiseSeed",
      "msg": "Invalid Noise Seed"
    },
    {
      "code": 6093,
      "name": "invalidType",
      "msg": "Invalid type"
    },
    {
      "code": 6094,
      "name": "rentedFleet",
      "msg": "Rented Fleet"
    },
    {
      "code": 6095,
      "name": "noCrewItems",
      "msg": "No Crew Items"
    },
    {
      "code": 6096,
      "name": "genericInvalid",
      "msg": "Generic invalid data"
    }
  ],
  "types": [
    {
      "name": "addCrewInput",
      "docs": [
        "Struct for data input for `AddCrew`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "items",
            "docs": [
              "inputs required to transfer crew cNFTs"
            ],
            "type": {
              "vec": {
                "defined": {
                  "name": "crewTransferInput"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "addShipEscrowInput",
      "docs": [
        "Struct for data input for `AddShipEscrow`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shipAmount",
            "docs": [
              "Amount of `Ship` tokens to transfer to escrow"
            ],
            "type": "u64"
          },
          {
            "name": "index",
            "docs": [
              "Index of `WrappedShipEscrow` in remaining data of `StarbasePlayer`",
              "Some index `WrappedShipEscrow`, or None for new `WrappedShipEscrow`"
            ],
            "type": {
              "option": "u32"
            }
          }
        ]
      }
    },
    {
      "name": "addShipToFleetInput",
      "docs": [
        "Struct for data input for that has `key_index`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shipAmount",
            "docs": [
              "Number of ships to add to the fleet"
            ],
            "type": "u8"
          },
          {
            "name": "shipEscrowIndex",
            "docs": [
              "Index of `WrappedShipEscrow` in remaining data of `StarbasePlayer`"
            ],
            "type": "u32"
          },
          {
            "name": "fleetShipInfoIndex",
            "docs": [
              "Index of `FleetShipsInfo` in remaining data of `FleetShips`"
            ],
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "cargo",
      "docs": [
        "Variables for the Cargo program"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "statsDefinition",
            "docs": [
              "The cargo stats definition account"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "cargoStats",
      "docs": [
        "A ship's cargo stats"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cargoCapacity",
            "docs": [
              "the capacity of the ship's cargo hold"
            ],
            "type": "u32"
          },
          {
            "name": "fuelCapacity",
            "docs": [
              "the capacity of the ship's fuel tank"
            ],
            "type": "u32"
          },
          {
            "name": "ammoCapacity",
            "docs": [
              "the capacity of the ship's ammo bank"
            ],
            "type": "u32"
          },
          {
            "name": "ammoConsumptionRate",
            "docs": [
              "the amount of ammo consumed per second by the ship when doing non-combat activities e.g. mining"
            ],
            "type": "u32"
          },
          {
            "name": "foodConsumptionRate",
            "docs": [
              "the amount of food consumed per second by the ship when doing non-combat activities e.g. mining"
            ],
            "type": "u32"
          },
          {
            "name": "miningRate",
            "docs": [
              "the amount of resources that can be mined by a ship per second"
            ],
            "type": "u32"
          },
          {
            "name": "upgradeRate",
            "docs": [
              "the amount of upgrade material that is consumed by a ship per second while upgrading a Starbase"
            ],
            "type": "u32"
          },
          {
            "name": "cargoTransferRate",
            "docs": [
              "the amount of cargo that a ship can transfer per second to another ship outside of dock"
            ],
            "type": "u32"
          },
          {
            "name": "tractorBeamGatherRate",
            "docs": [
              "the amount of cargo that the ship can gather per second using its tractor beam"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "cargoStatsUnpacked",
      "docs": [
        "Unpacked version of [`CargoStats`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cargoCapacity",
            "docs": [
              "the capacity of the ship's cargo hold"
            ],
            "type": "u32"
          },
          {
            "name": "fuelCapacity",
            "docs": [
              "the capacity of the ship's fuel tank"
            ],
            "type": "u32"
          },
          {
            "name": "ammoCapacity",
            "docs": [
              "the capacity of the ship's ammo bank"
            ],
            "type": "u32"
          },
          {
            "name": "ammoConsumptionRate",
            "docs": [
              "the amount of ammo consumed per second by the ship when doing non-combat activities e.g. mining"
            ],
            "type": "u32"
          },
          {
            "name": "foodConsumptionRate",
            "docs": [
              "the amount of food consumed per second by the ship when doing non-combat activities e.g. mining"
            ],
            "type": "u32"
          },
          {
            "name": "miningRate",
            "docs": [
              "the amount of resources that can be mined by a ship per second"
            ],
            "type": "u32"
          },
          {
            "name": "upgradeRate",
            "docs": [
              "the amount of upgrade material that is consumed by a ship per second while upgrading a Starbase"
            ],
            "type": "u32"
          },
          {
            "name": "cargoTransferRate",
            "docs": [
              "the amount of cargo that a ship can transfer per second to another ship outside of dock"
            ],
            "type": "u32"
          },
          {
            "name": "tractorBeamGatherRate",
            "docs": [
              "the amount of cargo that the ship can gather per second using its tractor beam"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "cargoToGameInput",
      "docs": [
        "Struct for data input to `DepositCargoToGame`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "cargo amount"
            ],
            "type": "u64"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "closeDisbandedFleetInput",
      "docs": [
        "Struct for data input for that has `key_index`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "crafting",
      "docs": [
        "Variables for the Crafting program"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "domain",
            "docs": [
              "The crafting domain account"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "craftingInstanceType",
      "docs": [
        "Represents the type of `CraftingInstance`"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "starbaseCrafting"
          },
          {
            "name": "starbaseUpgradeMaterial"
          }
        ]
      }
    },
    {
      "name": "createFleetInput",
      "docs": [
        "Struct for data input for that has `key_index`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shipAmount",
            "docs": [
              "Number of ships to add to the fleet"
            ],
            "type": "u8"
          },
          {
            "name": "fleetLabel",
            "docs": [
              "the fleet label"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "shipEscrowIndex",
            "docs": [
              "Index of `WrappedShipEscrow` in remaining data of `StarbasePlayer`"
            ],
            "type": "u32"
          },
          {
            "name": "cargoHoldSeeds",
            "docs": [
              "cargo hold seeds"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "fuelTankSeeds",
            "docs": [
              "fuel tank seeds"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "ammoBankSeeds",
            "docs": [
              "ammo bank seeds"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "crewTransferInput",
      "docs": [
        "Struct for data input for crew cNFT transfer"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "dataHash",
            "docs": [
              "The crew cNFT data hash"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "proofCount",
            "docs": [
              "The number of proofs for the crew cNFT"
            ],
            "type": "u8"
          },
          {
            "name": "leafIndex",
            "docs": [
              "The crew cNFT index (index of the leaf node in the Merkle tree)"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "depositCargoToFleetInput",
      "docs": [
        "Struct for data input to `DepositCargoToFleet`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "cargo amount"
            ],
            "type": "u64"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "depositStarbaseUpkeepResourceInput",
      "docs": [
        "Submit starbase upkeep resource inputs"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pointsProgramPermissionsKeyIndex",
            "docs": [
              "the index of the points program permissions in the player profile"
            ],
            "type": "u16"
          },
          {
            "name": "sagePermissionsKeyIndex",
            "docs": [
              "the index of the key in sage permissions in the player profile"
            ],
            "type": "u16"
          },
          {
            "name": "resourceType",
            "docs": [
              "the resource type"
            ],
            "type": "u8"
          },
          {
            "name": "resourceIndex",
            "docs": [
              "the index of the resource represented by `token_mint` in the `resource_recipe` ingredients list"
            ],
            "type": "u16"
          },
          {
            "name": "amount",
            "docs": [
              "the amount"
            ],
            "type": "u64"
          },
          {
            "name": "epochIndex",
            "docs": [
              "the index of the epoch in the `RedemptionConfig` account"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "deregisterSurveyDataUnitTrackerInput",
      "docs": [
        "Struct for data input that has `key_index`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "disbandFleetInput",
      "docs": [
        "Struct for data input for that has `key_index`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "disbandedFleetToEscrowInput",
      "docs": [
        "Struct for data input for that has `key_index`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shipAmount",
            "docs": [
              "Number of ships to add to the fleet"
            ],
            "type": "u16"
          },
          {
            "name": "shipEscrowIndex",
            "docs": [
              "Index of `WrappedShipEscrow` in remaining data of `StarbasePlayer`"
            ],
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "fleetShipInfoIndex",
            "docs": [
              "Index of `FleetShipsInfo` in remaining data of `FleetShips`"
            ],
            "type": "u32"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "discoverSectorInput",
      "docs": [
        "Struct for data input for `DiscoverSector`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "coordinates",
            "docs": [
              "The coordinates of the new `Sector`"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "factionsStarbaseLevelInfo",
      "docs": [
        "`Starbase` levels discriminated by faction"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mud",
            "docs": [
              "Mud Starbase Levels Info"
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "starbaseLevelInfo"
                  }
                },
                7
              ]
            }
          },
          {
            "name": "oni",
            "docs": [
              "Oni Starbase Levels Info"
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "starbaseLevelInfo"
                  }
                },
                7
              ]
            }
          },
          {
            "name": "ustur",
            "docs": [
              "Ustur Starbase Levels Info"
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "starbaseLevelInfo"
                  }
                },
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "fleetCrewInput",
      "docs": [
        "Struct for data input to `FleetCrew`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "docs": [
              "passenger count"
            ],
            "type": "u16"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "fleetInfo",
      "docs": [
        "Variables for the Fleet program"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "starbaseLevels",
            "docs": [
              "`Starbase` levels discriminated by faction"
            ],
            "type": {
              "defined": {
                "name": "factionsStarbaseLevelInfo"
              }
            }
          },
          {
            "name": "upkeep",
            "docs": [
              "`Starbase` upkeep discriminated by level"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepLevels"
              }
            }
          },
          {
            "name": "maxFleetSize",
            "docs": [
              "Maximum `Fleet` size allowed"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "fleetInput",
      "docs": [
        "Struct for data input to Update fleet settings"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "starbaseLevelInfoArray",
            "docs": [
              "`Starbase` Level Info array"
            ],
            "type": {
              "option": {
                "vec": {
                  "defined": {
                    "name": "starbaseLevelInfoArrayInput"
                  }
                }
              }
            }
          },
          {
            "name": "upkeepInfoArray",
            "docs": [
              "`Starbase` Level Info array"
            ],
            "type": {
              "option": {
                "vec": {
                  "defined": {
                    "name": "starbaseUpkeepInfoArrayInput"
                  }
                }
              }
            }
          },
          {
            "name": "maxFleetSize",
            "docs": [
              "Maximum `Fleet` size allowed"
            ],
            "type": {
              "option": "u32"
            }
          }
        ]
      }
    },
    {
      "name": "fleetShipsInfo",
      "docs": [
        "Struct that represents info on a single ship type in a fleet"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ship",
            "docs": [
              "The `Ship` account address"
            ],
            "type": "pubkey"
          },
          {
            "name": "amount",
            "docs": [
              "The `Ship` token amount in escrow"
            ],
            "type": "u64"
          },
          {
            "name": "updateId",
            "docs": [
              "The update id for the `Ship`"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "forcedDisbandFleetInput",
      "docs": [
        "Struct for data input for that has `key_index`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fleetShipInfoIndex",
            "docs": [
              "Index of `FleetShipsInfo` in remaining data of `FleetShips`"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "idle",
      "docs": [
        "The data for the [`FleetStateData::Idle`](crate::state_machine::FleetStateData::Idle) state"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sector",
            "docs": [
              "The star system the fleet is in"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          }
        ]
      }
    },
    {
      "name": "idleToRespawnInput",
      "docs": [
        "Struct for data input to initialize an `IdleToRespawn` Ix"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "ingredientIndexInput",
      "docs": [
        "Struct for data input that has `key_index`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ingredientIndex",
            "docs": [
              "the index of the recipe output"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "initGameStateInput",
      "docs": [
        "Struct for data input to `InitGameState`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "keyIndexInput",
      "docs": [
        "Struct for data input that has `key_index`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "locationType",
      "docs": [
        "Represents different types of locations that a `Resource` might be found"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "planet"
          }
        ]
      }
    },
    {
      "name": "manageGameInput",
      "docs": [
        "Struct for data input to managing Game accounts"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "mineAsteroid",
      "docs": [
        "The data for the [`FleetStateData::MineAsteroid`](crate::state_machine::FleetStateData::MineAsteroid) state"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "asteroid",
            "docs": [
              "The `Asteroid` the `Fleet` is mining (Must be an asteroid belt)"
            ],
            "type": "pubkey"
          },
          {
            "name": "resource",
            "docs": [
              "The `Resource` being mined on the `Asteroid`"
            ],
            "type": "pubkey"
          },
          {
            "name": "start",
            "docs": [
              "The timestamp at which mining activity started"
            ],
            "type": "i64"
          },
          {
            "name": "end",
            "docs": [
              "The timestamp at which mining activity stops"
            ],
            "type": "i64"
          },
          {
            "name": "amountMined",
            "docs": [
              "The cumulative amount mined"
            ],
            "type": "u64"
          },
          {
            "name": "lastUpdate",
            "docs": [
              "The last time the `Fleet` was updated"
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "mineAsteroidToRespawnInput",
      "docs": [
        "Struct for data input for `MineAsteroidToRespawnInput`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "mints",
      "docs": [
        "Token mints"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "atlas",
            "docs": [
              "ATLAS token mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "polis",
            "docs": [
              "POLIS token mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "ammo",
            "docs": [
              "ammunition"
            ],
            "type": "pubkey"
          },
          {
            "name": "food",
            "docs": [
              "food"
            ],
            "type": "pubkey"
          },
          {
            "name": "fuel",
            "docs": [
              "fuel"
            ],
            "type": "pubkey"
          },
          {
            "name": "repairKit",
            "docs": [
              "repair kit"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "miscStats",
      "docs": [
        "A ship's miscellaneous stats"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "requiredCrew",
            "docs": [
              "Number of crew required to operate the ship"
            ],
            "type": "u16"
          },
          {
            "name": "passengerCapacity",
            "docs": [
              "Number of crew that the ship can carry as passengers"
            ],
            "type": "u16"
          },
          {
            "name": "crewCount",
            "docs": [
              "Total number of crew on the ship (required crew + passengers on board)",
              "Will be zero until `CREW_FEATURE` is enabled"
            ],
            "type": "u16"
          },
          {
            "name": "rentedCrew",
            "docs": [
              "Total number of crew that were rented out together with the fleet"
            ],
            "type": "u16"
          },
          {
            "name": "respawnTime",
            "docs": [
              "the time it takes the ship to respawn"
            ],
            "type": "u16"
          },
          {
            "name": "scanCoolDown",
            "docs": [
              "the time it takes the ship to be able to scan again after scanning"
            ],
            "type": "u16"
          },
          {
            "name": "sduPerScan",
            "docs": [
              "The number of SDUs that can be found while scanning"
            ],
            "type": "u32"
          },
          {
            "name": "scanCost",
            "docs": [
              "the amount of resource required to do a scan"
            ],
            "type": "u32"
          },
          {
            "name": "placeholder",
            "docs": [
              "TODO: this is a placeholder stat for use in the future"
            ],
            "type": "u32"
          },
          {
            "name": "placeholder2",
            "docs": [
              "TODO: this is a placeholder stat for use in the future"
            ],
            "type": "u32"
          },
          {
            "name": "placeholder3",
            "docs": [
              "TODO: this is a placeholder stat for use in the future"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "miscStatsUnpacked",
      "docs": [
        "Unpacked version of [`MiscStats`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "requiredCrew",
            "docs": [
              "Number of crew required to operate the ship"
            ],
            "type": "u16"
          },
          {
            "name": "passengerCapacity",
            "docs": [
              "Number of crew that the ship can carry as passengers"
            ],
            "type": "u16"
          },
          {
            "name": "crewCount",
            "docs": [
              "Total number of crew on the ship (required crew + passengers on board)",
              "Will be zero until `CREW_FEATURE` is enabled"
            ],
            "type": "u16"
          },
          {
            "name": "rentedCrew",
            "docs": [
              "Total number of crew that were rented out together with the fleet"
            ],
            "type": "u16"
          },
          {
            "name": "respawnTime",
            "docs": [
              "the time it takes the ship to respawn"
            ],
            "type": "u16"
          },
          {
            "name": "scanCoolDown",
            "docs": [
              "the time it takes the ship to be able to scan again after scanning"
            ],
            "type": "u16"
          },
          {
            "name": "sduPerScan",
            "docs": [
              "The number of SDUs that can be found while scanning"
            ],
            "type": "u32"
          },
          {
            "name": "scanCost",
            "docs": [
              "the amount of resource required to do a scan"
            ],
            "type": "u32"
          },
          {
            "name": "placeholder",
            "docs": [
              "TODO: this is a placeholder stat for use in the future"
            ],
            "type": "u32"
          },
          {
            "name": "placeholder2",
            "docs": [
              "TODO: this is a placeholder stat for use in the future"
            ],
            "type": "u32"
          },
          {
            "name": "placeholder3",
            "docs": [
              "TODO: this is a placeholder stat for use in the future"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "miscVariables",
      "docs": [
        "Miscellaneous game state variables"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "warpLaneFuelCostReduction",
            "docs": [
              "Percentage by which the \"warp lane\" movement type reduces warp fuel cost"
            ],
            "type": "i16"
          },
          {
            "name": "respawnFee",
            "docs": [
              "Respawn fee; You cannot enter into the respawning state without paying this fee",
              "Since ATLAS has 8 decimal places, units are in the smallest value of ATLAS possible."
            ],
            "type": "u64"
          },
          {
            "name": "upkeepMiningEmissionsPenalty",
            "docs": [
              "Percentage by which to reduce the asteroid mining rate if a starbase ammo upkeep coffer is empty"
            ],
            "type": "i16"
          }
        ]
      }
    },
    {
      "name": "miscVariablesInput",
      "docs": [
        "Struct for data input to update miscellaneous settings"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "warpLaneFuelCostReduction",
            "docs": [
              "Percentage by which the \"warp lane\" movement type reduces warp fuel cost"
            ],
            "type": {
              "option": "i16"
            }
          },
          {
            "name": "upkeepMiningEmissionsPenalty",
            "docs": [
              "Percentage by which to reduce the asteroid mining rate if a starbase ammo upkeep coffer is empty"
            ],
            "type": {
              "option": "i16"
            }
          },
          {
            "name": "respawnFee",
            "docs": [
              "Respawn fee, charged in ATLAS"
            ],
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "moveSubwarp",
      "docs": [
        "The data for the [`FleetStateData::MoveSubwarp`] state"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fromSector",
            "docs": [
              "The sector the fleet is coming from"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "toSector",
            "docs": [
              "The sector the fleet is going to"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "currentSector",
            "docs": [
              "The sector the fleet is currently in"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "departureTime",
            "docs": [
              "When the fleet started subwarp"
            ],
            "type": "i64"
          },
          {
            "name": "arrivalTime",
            "docs": [
              "When the fleet will finish subwarp"
            ],
            "type": "i64"
          },
          {
            "name": "fuelExpenditure",
            "docs": [
              "The fuel cost of the subwarp"
            ],
            "type": "u64"
          },
          {
            "name": "lastUpdate",
            "docs": [
              "The last update time"
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "moveWarp",
      "docs": [
        "The data for the [`FleetStateData::MoveWarp`] state"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fromSector",
            "docs": [
              "The star system the fleet is coming from"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "toSector",
            "docs": [
              "The star system the fleet is going to"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "warpStart",
            "docs": [
              "When the fleet started warping"
            ],
            "type": "i64"
          },
          {
            "name": "warpFinish",
            "docs": [
              "When the warp will end"
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "movementStats",
      "docs": [
        "A ship's movement stats"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "subwarpSpeed",
            "docs": [
              "the amount of distance that the ship can cover in one second while sub-warping"
            ],
            "type": "u32"
          },
          {
            "name": "warpSpeed",
            "docs": [
              "the amount of distance that the ship can cover in one second while warping"
            ],
            "type": "u32"
          },
          {
            "name": "maxWarpDistance",
            "docs": [
              "the max distance that the ship can warp"
            ],
            "type": "u16"
          },
          {
            "name": "warpCoolDown",
            "docs": [
              "the time it takes the ship to be able to warp again after a warp"
            ],
            "type": "u16"
          },
          {
            "name": "subwarpFuelConsumptionRate",
            "docs": [
              "the amount of fuel consumed by the ship when sub-warp moving"
            ],
            "type": "u32"
          },
          {
            "name": "warpFuelConsumptionRate",
            "docs": [
              "the amount of fuel consumed by the ship when warp moving"
            ],
            "type": "u32"
          },
          {
            "name": "planetExitFuelAmount",
            "docs": [
              "the amount of fuel required to exit a planet"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "movementStatsUnpacked",
      "docs": [
        "Unpacked version of [`MovementStats`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "subwarpSpeed",
            "docs": [
              "the amount of distance that the ship can cover in one second while sub-warping"
            ],
            "type": "u32"
          },
          {
            "name": "warpSpeed",
            "docs": [
              "the amount of distance that the ship can cover in one second while warping"
            ],
            "type": "u32"
          },
          {
            "name": "maxWarpDistance",
            "docs": [
              "the max distance that the ship can warp"
            ],
            "type": "u16"
          },
          {
            "name": "warpCoolDown",
            "docs": [
              "the time it takes the ship to be able to warp again after a warp"
            ],
            "type": "u16"
          },
          {
            "name": "subwarpFuelConsumptionRate",
            "docs": [
              "the amount of fuel consumed by the ship when sub-warp moving"
            ],
            "type": "u32"
          },
          {
            "name": "warpFuelConsumptionRate",
            "docs": [
              "the amount of fuel consumed by the ship when warp moving"
            ],
            "type": "u32"
          },
          {
            "name": "planetExitFuelAmount",
            "docs": [
              "the amount of fuel required to exit a planet"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "optionalNonSystemPubkey",
      "docs": [
        "A pubkey sized option that is none if set to the system program."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "key",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "planetType",
      "docs": [
        "Represents different types a `Planet` could be"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "terrestrial"
          },
          {
            "name": "volcanic"
          },
          {
            "name": "barren"
          },
          {
            "name": "asteroidBelt"
          },
          {
            "name": "gasGiant"
          },
          {
            "name": "iceGiant"
          },
          {
            "name": "dark"
          }
        ]
      }
    },
    {
      "name": "points",
      "docs": [
        "Variables for the Points program"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpCategory",
            "docs": [
              "Represents the points category & modifier to use for Loyalty Points (LP)"
            ],
            "type": {
              "defined": {
                "name": "sagePointsCategory"
              }
            }
          },
          {
            "name": "councilRankXpCategory",
            "docs": [
              "Represents the points category & modifier to use for Council Rank Experience Points (CRXP)"
            ],
            "type": {
              "defined": {
                "name": "sagePointsCategory"
              }
            }
          },
          {
            "name": "pilotXpCategory",
            "docs": [
              "Represents the points category & modifier to use for Pilot License Experience Points (PXP)"
            ],
            "type": {
              "defined": {
                "name": "sagePointsCategory"
              }
            }
          },
          {
            "name": "dataRunningXpCategory",
            "docs": [
              "Represents the points category & modifier to use for Data Running Experience Points (DRXP)"
            ],
            "type": {
              "defined": {
                "name": "sagePointsCategory"
              }
            }
          },
          {
            "name": "miningXpCategory",
            "docs": [
              "Represents the points category & modifier to use for Mining Experience Points (MXP)"
            ],
            "type": {
              "defined": {
                "name": "sagePointsCategory"
              }
            }
          },
          {
            "name": "craftingXpCategory",
            "docs": [
              "Represents the points category & modifier to use for Crafting Experience Points (CXP)"
            ],
            "type": {
              "defined": {
                "name": "sagePointsCategory"
              }
            }
          }
        ]
      }
    },
    {
      "name": "progressionItem",
      "docs": [
        "Progression Item"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "value",
            "docs": [
              "The progression points value"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "progressionItemInput",
      "docs": [
        "Progression Item for Data Input"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "itemType",
            "docs": [
              "The type of progression item"
            ],
            "type": "u8"
          },
          {
            "name": "item",
            "docs": [
              "The progression item"
            ],
            "type": {
              "defined": {
                "name": "progressionItem"
              }
            }
          }
        ]
      }
    },
    {
      "name": "progressionItemInputUnpacked",
      "docs": [
        "Unpacked version of [`ProgressionItemInput`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "itemType",
            "docs": [
              "The type of progression item"
            ],
            "type": "u8"
          },
          {
            "name": "item",
            "docs": [
              "The progression item"
            ],
            "type": {
              "defined": {
                "name": "progressionItem"
              }
            }
          }
        ]
      }
    },
    {
      "name": "progressionItemType",
      "docs": [
        "The different types of progression items"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "subwarp"
          },
          {
            "name": "warp"
          },
          {
            "name": "warpLane"
          },
          {
            "name": "asteroidExit"
          },
          {
            "name": "scanUnsuccessful"
          },
          {
            "name": "scanSuccessful"
          },
          {
            "name": "mining"
          },
          {
            "name": "crafting"
          },
          {
            "name": "upkeep"
          },
          {
            "name": "upgrade"
          }
        ]
      }
    },
    {
      "name": "progressionItemUnpacked",
      "docs": [
        "Unpacked version of [`ProgressionItem`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "value",
            "docs": [
              "The progression points value"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "registerMineItemInput",
      "docs": [
        "Struct for data input to Register a Resource"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "The name of the `MineItem`"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "resourceHardness",
            "docs": [
              "How hard it is to mine this item"
            ],
            "type": "u16"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the fleet permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "registerPlanetInput",
      "docs": [
        "Struct for data input to Register Planet"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "`Planet` name"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "size",
            "docs": [
              "`Planet` size"
            ],
            "type": "u64"
          },
          {
            "name": "maxHp",
            "docs": [
              "`Planet` max health"
            ],
            "type": "u64"
          },
          {
            "name": "subCoordinates",
            "docs": [
              "`Planet` sub_coordinates"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "planetType",
            "docs": [
              "`Planet` type"
            ],
            "type": "u8"
          },
          {
            "name": "position",
            "docs": [
              "`Planet` position"
            ],
            "type": "u8"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "registerProgressionConfigInput",
      "docs": [
        "Data input for RegisterProgressionConfig"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "dailyLpLimit",
            "docs": [
              "the daily limit for Loyalty Points (LP)"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "dailyCouncilRankXpLimit",
            "docs": [
              "the daily limit for Council Rank Experience Points (CRXP)"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "dailyPilotXpLimit",
            "docs": [
              "the daily limit for Pilot License Experience Points (PXP)"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "dailyDataRunningXpLimit",
            "docs": [
              "the daily limit for Data Running Experience Points (DRXP)"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "dailyMiningXpLimit",
            "docs": [
              "the daily limit for Mining Experience Points (MXP)"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "dailyCraftingXpLimit",
            "docs": [
              "the daily limit for Crafting Experience Points (CXP)"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "registerResourceInput",
      "docs": [
        "Struct for data input to Register a Resource"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "locationType",
            "docs": [
              "`Resource` location type"
            ],
            "type": "u8"
          },
          {
            "name": "systemRichness",
            "docs": [
              "`Resource` `system_richness`"
            ],
            "type": "u16"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the fleet permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "registerSagePointsModifierInput",
      "docs": [
        "Struct for data input to register a points modifier for SAGE program"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pointsCategoryType",
            "docs": [
              "The points category type of the modifier"
            ],
            "type": "u8"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "registerShipInput",
      "docs": [
        "Struct for data input to Register Ship"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "The `Ship` name/label"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "sizeClass",
            "docs": [
              "the ship's size class"
            ],
            "type": {
              "defined": {
                "name": "sizeClass"
              }
            }
          },
          {
            "name": "stats",
            "docs": [
              "The stats for the ship"
            ],
            "type": {
              "defined": {
                "name": "shipStatsUnpacked"
              }
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          },
          {
            "name": "isActive",
            "docs": [
              "Whether the ship is initialized to active (`update_id == current_update_id`)"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "registerStarInput",
      "docs": [
        "Struct for data input to Register Star"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "`Star` name"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "size",
            "docs": [
              "`Star` size"
            ],
            "type": "u64"
          },
          {
            "name": "subCoordinates",
            "docs": [
              "`Star` sub_coordinates"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "starType",
            "docs": [
              "`Star` type"
            ],
            "type": "u8"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "registerStarbaseInput",
      "docs": [
        "Struct for data input to Register `Starbase`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "`Starbase` name"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "subCoordinates",
            "docs": [
              "`Starbase` coordinates"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "starbaseLevelIndex",
            "docs": [
              "The index representing the level of the `Starbase` in the game variables."
            ],
            "type": "u8"
          },
          {
            "name": "faction",
            "docs": [
              "The `Starbase` faction"
            ],
            "type": "u8"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the fleet permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "registerStarbaseInputUnpacked",
      "docs": [
        "Unpacked version of [`RegisterStarbaseInput`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "`Starbase` name"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "subCoordinates",
            "docs": [
              "`Starbase` coordinates"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "starbaseLevelIndex",
            "docs": [
              "The index representing the level of the `Starbase` in the game variables."
            ],
            "type": "u8"
          },
          {
            "name": "faction",
            "docs": [
              "The `Starbase` faction"
            ],
            "type": "u8"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the fleet permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "registerSurveyDataUnitTrackerInput",
      "docs": [
        "Struct for data input to Register SurveyDataUnitTracker"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "coordinatesRange",
            "docs": [
              "The valid coordinates range",
              "e.g. a value of [-50, 50] means that coordinates from [-50, -50] to [50, 50] are valid for SDU scanning"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "cssCoordinates",
            "docs": [
              "The locations of the central space stations (CSS) of the three factions"
            ],
            "type": {
              "array": [
                {
                  "array": [
                    "i64",
                    2
                  ]
                },
                3
              ]
            }
          },
          {
            "name": "originCoordinates",
            "docs": [
              "The co-ordinates of the \"origin\"; used in calculating SDU probability"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "cssMaxDistance",
            "docs": [
              "The max distance from the nearest CSS; used in calculating SDU probability"
            ],
            "type": "u32"
          },
          {
            "name": "originMaxDistance",
            "docs": [
              "The max distance from the `origin_coordinates`; used in calculating SDU probability"
            ],
            "type": "u32"
          },
          {
            "name": "distanceWeighting",
            "docs": [
              "The distance weighting; used in calculating SDU probability"
            ],
            "type": "u32"
          },
          {
            "name": "tMax",
            "docs": [
              "The maximum time before SDU probability at a location changes"
            ],
            "type": "i64"
          },
          {
            "name": "xMul",
            "docs": [
              "Multiplier in the X dimension; used in noise function"
            ],
            "type": "u32"
          },
          {
            "name": "yMul",
            "docs": [
              "Multiplier in the Y dimension; used in noise function"
            ],
            "type": "u32"
          },
          {
            "name": "zMul",
            "docs": [
              "Multiplier in the Z dimension; used in noise function"
            ],
            "type": "u32"
          },
          {
            "name": "sduMaxPerSector",
            "docs": [
              "The maximum number of SDUs that can be found per scan per sector"
            ],
            "type": "u32"
          },
          {
            "name": "scanChanceRegenPeriod",
            "docs": [
              "The amount of time in seconds that it takes for a sector scan chance to fully regenerate"
            ],
            "type": "i16"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "removeCrewInput",
      "docs": [
        "Accounts for Struct for data input for `RemoveCrew`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "items",
            "docs": [
              "inputs required to transfer crew cNFTs"
            ],
            "type": {
              "vec": {
                "defined": {
                  "name": "crewTransferInput"
                }
              }
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the `ProfileKey` in `Profile` with required permissions"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "removeShipEscrowInput",
      "docs": [
        "Struct for data input for `RemoveShipEscrow`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shipAmount",
            "docs": [
              "Amount of `Ship` tokens to transfer from escrow"
            ],
            "type": "u64"
          },
          {
            "name": "permissionKeyIndex",
            "docs": [
              "the index of the `ProfileKey` in `Profile` with required permissions"
            ],
            "type": "u16"
          },
          {
            "name": "shipEscrowIndex",
            "docs": [
              "Index of `WrappedShipEscrow` in remaining data of `StarbasePlayer`"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "respawn",
      "docs": [
        "The data for the [`FleetStateData::Respawn`](crate::state_machine::FleetStateData::Respawn) state"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sector",
            "docs": [
              "The star system the fleet was in when it entered the `Respawn` state"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "start",
            "docs": [
              "The time `Respawn` started"
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "respawnToLoadingBayInput",
      "docs": [
        "Struct for data input to `RespawnToLoadingBay`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "riskZoneData",
      "docs": [
        "`RiskZone` center and radius"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "center",
            "docs": [
              "Risk zone center"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "radius",
            "docs": [
              "Risk zone radius"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "riskZoneDataUnpacked",
      "docs": [
        "Unpacked version of [`RiskZoneData`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "center",
            "docs": [
              "Risk zone center"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "radius",
            "docs": [
              "Risk zone radius"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "riskZonesData",
      "docs": [
        "[`RiskZoneData`] for [`RiskZones`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mudSecurityZone",
            "docs": [
              "Mud security zone"
            ],
            "type": {
              "defined": {
                "name": "riskZoneData"
              }
            }
          },
          {
            "name": "oniSecurityZone",
            "docs": [
              "Oni security zone"
            ],
            "type": {
              "defined": {
                "name": "riskZoneData"
              }
            }
          },
          {
            "name": "usturSecurityZone",
            "docs": [
              "Ustur security zone"
            ],
            "type": {
              "defined": {
                "name": "riskZoneData"
              }
            }
          },
          {
            "name": "highRiskZone",
            "docs": [
              "High risk zone"
            ],
            "type": {
              "defined": {
                "name": "riskZoneData"
              }
            }
          },
          {
            "name": "mediumRiskZone",
            "docs": [
              "Medium risk zone"
            ],
            "type": {
              "defined": {
                "name": "riskZoneData"
              }
            }
          }
        ]
      }
    },
    {
      "name": "riskZonesDataUnpacked",
      "docs": [
        "Unpacked version of [`RiskZonesData`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mudSecurityZone",
            "docs": [
              "Mud security zone"
            ],
            "type": {
              "defined": {
                "name": "riskZoneData"
              }
            }
          },
          {
            "name": "oniSecurityZone",
            "docs": [
              "Oni security zone"
            ],
            "type": {
              "defined": {
                "name": "riskZoneData"
              }
            }
          },
          {
            "name": "usturSecurityZone",
            "docs": [
              "Ustur security zone"
            ],
            "type": {
              "defined": {
                "name": "riskZoneData"
              }
            }
          },
          {
            "name": "highRiskZone",
            "docs": [
              "High risk zone"
            ],
            "type": {
              "defined": {
                "name": "riskZoneData"
              }
            }
          },
          {
            "name": "mediumRiskZone",
            "docs": [
              "Medium risk zone"
            ],
            "type": {
              "defined": {
                "name": "riskZoneData"
              }
            }
          }
        ]
      }
    },
    {
      "name": "sagePointsCategory",
      "docs": [
        "Represents a points category & modifier as defined in the Points program"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "category",
            "docs": [
              "The points category"
            ],
            "type": "pubkey"
          },
          {
            "name": "modifier",
            "docs": [
              "The points category modifier"
            ],
            "type": "pubkey"
          },
          {
            "name": "modifierBump",
            "docs": [
              "The points category modifier bump"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "scanForSurveyDataUnitsInput",
      "docs": [
        "Struct for data input to Scan For Survey Data Units"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "The index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "sectorConnection",
      "docs": [
        "Connection between sectors"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "connectionSector",
            "docs": [
              "The sector connected to"
            ],
            "type": "pubkey"
          },
          {
            "name": "subCoordinates",
            "docs": [
              "The location of the connection"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "flags",
            "docs": [
              "Connection flags"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "sectorRing",
      "docs": [
        "Represents the orbital position of a `Planet` in the `Sector`"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "inner"
          },
          {
            "name": "mid"
          },
          {
            "name": "outer"
          }
        ]
      }
    },
    {
      "name": "shipCounts",
      "docs": [
        "Ship counts for a fleet."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "total",
            "docs": [
              "The total number of ships in the fleet."
            ],
            "type": "u32"
          },
          {
            "name": "updated",
            "docs": [
              "Used when updating a fleet.",
              "Value is 0 when fleet update is in progress"
            ],
            "type": "u32"
          },
          {
            "name": "xxSmall",
            "docs": [
              "The number of xx small ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "xSmall",
            "docs": [
              "The number of x small ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "small",
            "docs": [
              "The number of small ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "medium",
            "docs": [
              "The number of medium ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "large",
            "docs": [
              "The number of large ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "capital",
            "docs": [
              "The number of capital ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "commander",
            "docs": [
              "The number of commander ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "titan",
            "docs": [
              "The number of titan ships in the fleet."
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "shipCountsUnpacked",
      "docs": [
        "Unpacked version of [`ShipCounts`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "total",
            "docs": [
              "The total number of ships in the fleet."
            ],
            "type": "u32"
          },
          {
            "name": "updated",
            "docs": [
              "Used when updating a fleet.",
              "Value is 0 when fleet update is in progress"
            ],
            "type": "u32"
          },
          {
            "name": "xxSmall",
            "docs": [
              "The number of xx small ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "xSmall",
            "docs": [
              "The number of x small ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "small",
            "docs": [
              "The number of small ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "medium",
            "docs": [
              "The number of medium ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "large",
            "docs": [
              "The number of large ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "capital",
            "docs": [
              "The number of capital ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "commander",
            "docs": [
              "The number of commander ships in the fleet."
            ],
            "type": "u16"
          },
          {
            "name": "titan",
            "docs": [
              "The number of titan ships in the fleet."
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "shipSizes",
      "docs": [
        "Ship sizes."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "xxSmall",
            "docs": [
              "The size of xx small ships"
            ],
            "type": "u8"
          },
          {
            "name": "xSmall",
            "docs": [
              "The size of x small ships"
            ],
            "type": "u8"
          },
          {
            "name": "small",
            "docs": [
              "The size of small ships"
            ],
            "type": "u8"
          },
          {
            "name": "medium",
            "docs": [
              "The size of medium ships"
            ],
            "type": "u8"
          },
          {
            "name": "large",
            "docs": [
              "The size of large ships"
            ],
            "type": "u8"
          },
          {
            "name": "capital",
            "docs": [
              "The size of capital ships"
            ],
            "type": "u8"
          },
          {
            "name": "commander",
            "docs": [
              "The size of commander ships"
            ],
            "type": "u8"
          },
          {
            "name": "titan",
            "docs": [
              "The size of titan ships"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "shipStats",
      "docs": [
        "A ship's stats"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "movementStats",
            "docs": [
              "Movement stats for the ship"
            ],
            "type": {
              "defined": {
                "name": "movementStats"
              }
            }
          },
          {
            "name": "cargoStats",
            "docs": [
              "Cargo stats for the ship"
            ],
            "type": {
              "defined": {
                "name": "cargoStats"
              }
            }
          },
          {
            "name": "miscStats",
            "docs": [
              "Miscellaneous stats for the ship"
            ],
            "type": {
              "defined": {
                "name": "miscStats"
              }
            }
          }
        ]
      }
    },
    {
      "name": "shipStatsUnpacked",
      "docs": [
        "Unpacked version of [`ShipStats`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "movementStats",
            "docs": [
              "Movement stats for the ship"
            ],
            "type": {
              "defined": {
                "name": "movementStats"
              }
            }
          },
          {
            "name": "cargoStats",
            "docs": [
              "Cargo stats for the ship"
            ],
            "type": {
              "defined": {
                "name": "cargoStats"
              }
            }
          },
          {
            "name": "miscStats",
            "docs": [
              "Miscellaneous stats for the ship"
            ],
            "type": {
              "defined": {
                "name": "miscStats"
              }
            }
          }
        ]
      }
    },
    {
      "name": "sizeClass",
      "docs": [
        "Represents different types of Ships"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "xxSmall"
          },
          {
            "name": "xSmall"
          },
          {
            "name": "small"
          },
          {
            "name": "medium"
          },
          {
            "name": "large"
          },
          {
            "name": "capital"
          },
          {
            "name": "commander"
          },
          {
            "name": "titan"
          }
        ]
      }
    },
    {
      "name": "starType",
      "docs": [
        "Represents different types of Stars"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "whiteDwarf"
          },
          {
            "name": "redDwarf"
          },
          {
            "name": "solar"
          },
          {
            "name": "hotBlue"
          },
          {
            "name": "redGiant"
          }
        ]
      }
    },
    {
      "name": "starbaseCreateCargoPodInput",
      "docs": [
        "Struct for data input to `StarbaseCreateCargoPod`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "podSeeds",
            "docs": [
              "cargo pod seeds"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "starbaseCreateCraftingProcessInput",
      "docs": [
        "Struct for data input to create a `CraftingProcess`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "craftingId",
            "docs": [
              "crafting id"
            ],
            "type": "u64"
          },
          {
            "name": "recipeCategoryIndex",
            "docs": [
              "the index of the recipe's category"
            ],
            "type": "u16"
          },
          {
            "name": "quantity",
            "docs": [
              "quantity of outputs to craft"
            ],
            "type": "u64"
          },
          {
            "name": "numCrew",
            "docs": [
              "number of crew members to use for this crafting process"
            ],
            "type": "u64"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "starbaseDepositCraftingIngredientInput",
      "docs": [
        "Struct for data input to deposit an ingredient"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "the amount of ingredient to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "ingredientIndex",
            "docs": [
              "the index of the recipe ingredient"
            ],
            "type": "u16"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "starbaseLevelInfo",
      "docs": [
        "Information associated with `Starbase` levels"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "recipeForUpgrade",
            "docs": [
              "The crafting recipe required to upgrade a `Starbase` to this level"
            ],
            "type": "pubkey"
          },
          {
            "name": "recipeCategoryForLevel",
            "docs": [
              "The crafting recipe category enabled for crafting at a `Starbase` of this level."
            ],
            "type": "pubkey"
          },
          {
            "name": "hp",
            "docs": [
              "The `Starbase` health points for this level."
            ],
            "type": "u64"
          },
          {
            "name": "sp",
            "docs": [
              "The `Starbase` shield points for this level."
            ],
            "type": "u64"
          },
          {
            "name": "sectorRingAvailable",
            "docs": [
              "The planet position `Ring` available for this level"
            ],
            "type": "u8"
          },
          {
            "name": "warpLaneMovementFee",
            "docs": [
              "Fee charged for the \"warp lane\" movement type which is meant to be charged in ATLAS",
              "Since ATLAS has 8 decimal places, units are in the smallest value of ATLAS possible."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "starbaseLevelInfoArrayInput",
      "docs": [
        "Struct for data input to Update Starbase Level Settings"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "level",
            "docs": [
              "The level of the `Starbase`."
            ],
            "type": "u8"
          },
          {
            "name": "faction",
            "docs": [
              "The `Starbase` faction."
            ],
            "type": "u8"
          },
          {
            "name": "hp",
            "docs": [
              "The `Starbase` health points for this level."
            ],
            "type": "u64"
          },
          {
            "name": "sp",
            "docs": [
              "The `Starbase` shield points for this level."
            ],
            "type": "u64"
          },
          {
            "name": "sectorRingAvailable",
            "docs": [
              "The planet position `Ring` available for this level"
            ],
            "type": {
              "defined": {
                "name": "sectorRing"
              }
            }
          },
          {
            "name": "warpLaneMovementFee",
            "docs": [
              "Fee charged for the \"warp lane\" movement type which is meant to be charged in ATLAS"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "starbaseLoadingBay",
      "docs": [
        "The data for the [`FleetStateData::StarbaseLoadingBay`] state"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "starbase",
            "docs": [
              "The `Starbase` is in the loading bay of"
            ],
            "type": "pubkey"
          },
          {
            "name": "lastUpdate",
            "docs": [
              "The last time this fleet was updated"
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "starbaseRemoveCargoPodInput",
      "docs": [
        "Struct for data input to `StarbaseRemoveCargoPod`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "starbaseState",
      "docs": [
        "The state of a `Starbase`."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "active"
          },
          {
            "name": "destroyed"
          }
        ]
      }
    },
    {
      "name": "starbaseTransferCargoInput",
      "docs": [
        "Struct for data input to `DepositCargoToGame`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "cargo amount"
            ],
            "type": "u64"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "starbaseUpgradeState",
      "docs": [
        "The state of a `Starbase`."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "notStarted"
          },
          {
            "name": "started"
          },
          {
            "name": "completed"
          }
        ]
      }
    },
    {
      "name": "starbaseUpkeepInfo",
      "docs": [
        "Information associated with `Starbase` upkeep"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ammoReserve",
            "docs": [
              "The maximum amount of ammo that can be committed upkeep by players",
              "If 0 (zero) then ammo upkeep is disabled"
            ],
            "type": "u64"
          },
          {
            "name": "ammoDepletionRate",
            "docs": [
              "The per second rate at which the ammo reserve is emptied"
            ],
            "type": "u32"
          },
          {
            "name": "foodReserve",
            "docs": [
              "The maximum amount of food that can be committed upkeep by players",
              "If 0 (zero) then food upkeep is disabled"
            ],
            "type": "u64"
          },
          {
            "name": "foodDepletionRate",
            "docs": [
              "The per second rate at which the food reserve is emptied"
            ],
            "type": "u32"
          },
          {
            "name": "toolkitReserve",
            "docs": [
              "The maximum amount of toolkits that can be committed upkeep by players",
              "If 0 (zero) then toolkit upkeep is disabled"
            ],
            "type": "u64"
          },
          {
            "name": "toolkitDepletionRate",
            "docs": [
              "The per second rate at which the toolkit reserve is emptied"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "starbaseUpkeepInfoArrayInput",
      "docs": [
        "Struct for data input to Update Starbase Upkeep Settings"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "level",
            "docs": [
              "The level of the `Starbase`."
            ],
            "type": "u8"
          },
          {
            "name": "info",
            "docs": [
              "The stats for the ship"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfoUnpacked"
              }
            }
          }
        ]
      }
    },
    {
      "name": "starbaseUpkeepInfoUnpacked",
      "docs": [
        "Unpacked version of [`StarbaseUpkeepInfo`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ammoReserve",
            "docs": [
              "The maximum amount of ammo that can be committed upkeep by players",
              "If 0 (zero) then ammo upkeep is disabled"
            ],
            "type": "u64"
          },
          {
            "name": "ammoDepletionRate",
            "docs": [
              "The per second rate at which the ammo reserve is emptied"
            ],
            "type": "u32"
          },
          {
            "name": "foodReserve",
            "docs": [
              "The maximum amount of food that can be committed upkeep by players",
              "If 0 (zero) then food upkeep is disabled"
            ],
            "type": "u64"
          },
          {
            "name": "foodDepletionRate",
            "docs": [
              "The per second rate at which the food reserve is emptied"
            ],
            "type": "u32"
          },
          {
            "name": "toolkitReserve",
            "docs": [
              "The maximum amount of toolkits that can be committed upkeep by players",
              "If 0 (zero) then toolkit upkeep is disabled"
            ],
            "type": "u64"
          },
          {
            "name": "toolkitDepletionRate",
            "docs": [
              "The per second rate at which the toolkit reserve is emptied"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "starbaseUpkeepLevels",
      "docs": [
        "Information on `Starbase` upkeep by level"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "level0",
            "docs": [
              "Upkeep info. for a level 0 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          },
          {
            "name": "level1",
            "docs": [
              "Upkeep info. for a level 1 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          },
          {
            "name": "level2",
            "docs": [
              "Upkeep info. for a level 2 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          },
          {
            "name": "level3",
            "docs": [
              "Upkeep info. for a level 3 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          },
          {
            "name": "level4",
            "docs": [
              "Upkeep info. for a level 4 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          },
          {
            "name": "level5",
            "docs": [
              "Upkeep info. for a level 5 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          },
          {
            "name": "level6",
            "docs": [
              "Upkeep info. for a level 6 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          }
        ]
      }
    },
    {
      "name": "starbaseUpkeepLevelsUnpacked",
      "docs": [
        "Unpacked version of [`StarbaseUpkeepLevels`]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "level0",
            "docs": [
              "Upkeep info. for a level 0 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          },
          {
            "name": "level1",
            "docs": [
              "Upkeep info. for a level 1 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          },
          {
            "name": "level2",
            "docs": [
              "Upkeep info. for a level 2 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          },
          {
            "name": "level3",
            "docs": [
              "Upkeep info. for a level 3 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          },
          {
            "name": "level4",
            "docs": [
              "Upkeep info. for a level 4 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          },
          {
            "name": "level5",
            "docs": [
              "Upkeep info. for a level 5 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          },
          {
            "name": "level6",
            "docs": [
              "Upkeep info. for a level 6 `Starbase`"
            ],
            "type": {
              "defined": {
                "name": "starbaseUpkeepInfo"
              }
            }
          }
        ]
      }
    },
    {
      "name": "starbaseWithdrawCraftingIngredientInput",
      "docs": [
        "Struct for data input to withdraw an ingredient"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "the amount of ingredient to withdraw"
            ],
            "type": "u64"
          },
          {
            "name": "ingredientIndex",
            "docs": [
              "the index of the recipe ingredient"
            ],
            "type": "u16"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "startSubwarpInput",
      "docs": [
        "Struct for data input to initialize an `SubwarpMovement`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "toSector",
            "docs": [
              "The destination coordinates"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "The index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "stopMiningAsteroidInput",
      "docs": [
        "Struct for data input for `StopMiningAsteroidInput`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "stopSubwarpInput",
      "docs": [
        "Struct for data input to stop an `SubwarpMovement`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "The index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "submitStarbaseUpgradeResourceInput",
      "docs": [
        "Submit starbase upgrade resource inputs"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pointsProgramPermissionsKeyIndex",
            "docs": [
              "the index of the point program permissions in the player profile"
            ],
            "type": "u16"
          },
          {
            "name": "sagePermissionsKeyIndex",
            "docs": [
              "the index of the key in sage permissions in the player profile"
            ],
            "type": "u16"
          },
          {
            "name": "upgradeProcessRecipeInputIndex",
            "docs": [
              "the index of the resource in the upgrade_process_recipe ingredients list",
              "The resource is a non-consumable in this recipe"
            ],
            "type": "u16"
          },
          {
            "name": "starbaseUpgradeRecipeInputIndex",
            "docs": [
              "the index of the resource in the upgrade recipe",
              "The resource is a consumable in this recipe"
            ],
            "type": "u16"
          },
          {
            "name": "resourceRecipeOutputIndex",
            "docs": [
              "the index of the resource represented by `token_mint` in the `resource_recipe` ingredients list",
              "The resource is an output in this recipe"
            ],
            "type": "u16"
          },
          {
            "name": "epochIndex",
            "docs": [
              "the index of the epoch in the `RedemptionConfig` account"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "transferCargoWithinFleetInput",
      "docs": [
        "Struct for data input to `TransferCargoWithinFleet`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "cargo amount"
            ],
            "type": "u64"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updateGameInput",
      "docs": [
        "Struct for data input to Update instruction"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cargo",
            "docs": [
              "Cargo settings"
            ],
            "type": "u8"
          },
          {
            "name": "crafting",
            "docs": [
              "Crafting settings"
            ],
            "type": "u8"
          },
          {
            "name": "mints",
            "docs": [
              "mints"
            ],
            "type": "u8"
          },
          {
            "name": "vaults",
            "docs": [
              "vaults"
            ],
            "type": "u8"
          },
          {
            "name": "points",
            "docs": [
              "Points settings"
            ],
            "type": "u8"
          },
          {
            "name": "riskZones",
            "docs": [
              "Data for risk zones"
            ],
            "type": {
              "option": {
                "defined": {
                  "name": "riskZonesDataUnpacked"
                }
              }
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updateGameStateInput",
      "docs": [
        "Struct for data input to Update instruction"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fleet",
            "docs": [
              "Fleet settings"
            ],
            "type": {
              "option": {
                "defined": {
                  "name": "fleetInput"
                }
              }
            }
          },
          {
            "name": "misc",
            "docs": [
              "Miscellaneous settings"
            ],
            "type": {
              "option": {
                "defined": {
                  "name": "miscVariablesInput"
                }
              }
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updateMineItemInput",
      "docs": [
        "Struct for data input to Register a Resource"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "The name of the `MineItem`"
            ],
            "type": {
              "option": {
                "array": [
                  "u8",
                  64
                ]
              }
            }
          },
          {
            "name": "resourceHardness",
            "docs": [
              "How hard it is to mine this item"
            ],
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the fleet permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updatePlanetInput",
      "docs": [
        "Struct for data input to Update Planet"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "`Planet` name"
            ],
            "type": {
              "option": {
                "array": [
                  "u8",
                  64
                ]
              }
            }
          },
          {
            "name": "size",
            "docs": [
              "`Planet` size"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "maxHp",
            "docs": [
              "`Planet` max_hp"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "subCoordinates",
            "docs": [
              "`Planet` sub_coordinates"
            ],
            "type": {
              "option": {
                "array": [
                  "i64",
                  2
                ]
              }
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updateProgressionConfigInput",
      "docs": [
        "Struct for data input for `UpdateProgressionConfig`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the permissions profile"
            ],
            "type": "u16"
          },
          {
            "name": "dailyLpLimit",
            "docs": [
              "the daily limit for Loyalty Points (LP)"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "dailyCouncilRankXpLimit",
            "docs": [
              "the daily limit for Council Rank Experience Points (CRXP)"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "dailyPilotXpLimit",
            "docs": [
              "the daily limit for Pilot License Experience Points (PXP)"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "dailyDataRunningXpLimit",
            "docs": [
              "the daily limit for Data Running Experience Points (DRXP)"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "dailyMiningXpLimit",
            "docs": [
              "the daily limit for Mining Experience Points (MXP)"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "dailyCraftingXpLimit",
            "docs": [
              "the daily limit for Crafting Experience Points (CXP)"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "items",
            "docs": [
              "the progression items"
            ],
            "type": {
              "option": {
                "vec": {
                  "defined": {
                    "name": "progressionItemInputUnpacked"
                  }
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "updateResourceInput",
      "docs": [
        "Struct for data input to Update Resource"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "systemRichness",
            "docs": [
              "`Resource` richness"
            ],
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the fleet permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updateShipEscrowInput",
      "docs": [
        "Struct for data input for `UpdateShipEscrow`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shipEscrowIndex",
            "docs": [
              "Index of `WrappedShipEscrow` in remaining data of `StarbasePlayer`"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "updateShipFleetInput",
      "docs": [
        "Struct for data input for that has `key_index`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shipAmount",
            "docs": [
              "Number of ships to add to the fleet"
            ],
            "type": "u16"
          },
          {
            "name": "fleetShipInfoIndex",
            "docs": [
              "Index of `FleetShipsInfo` in remaining data of `FleetShips`"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "updateShipInput",
      "docs": [
        "Struct for data input to Update Ship"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "The `Ship` name/label"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "sizeClass",
            "docs": [
              "the ship's size class"
            ],
            "type": {
              "defined": {
                "name": "sizeClass"
              }
            }
          },
          {
            "name": "stats",
            "docs": [
              "The stats for the ship"
            ],
            "type": {
              "defined": {
                "name": "shipStatsUnpacked"
              }
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updateStarInput",
      "docs": [
        "Struct for data input to Update Star"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "`Star` name"
            ],
            "type": {
              "option": {
                "array": [
                  "u8",
                  64
                ]
              }
            }
          },
          {
            "name": "size",
            "docs": [
              "`Star` size"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "starType",
            "docs": [
              "`Star` type"
            ],
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updateStarbaseInput",
      "docs": [
        "Struct for data input to Update `Starbase`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "`Starbase` name"
            ],
            "type": {
              "option": {
                "array": [
                  "u8",
                  64
                ]
              }
            }
          },
          {
            "name": "subCoordinates",
            "docs": [
              "`Starbase` coordinates"
            ],
            "type": {
              "option": {
                "array": [
                  "i64",
                  2
                ]
              }
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updateSurveyDataUnitTrackerInput",
      "docs": [
        "Struct for data input to Update SurveyDataUnitTracker"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "coordinatesRange",
            "docs": [
              "The valid coordinates range",
              "e.g. a value of [-50, 50] means that coordinates from [-50, -50] to [50, 50] are valid for SDU scanning"
            ],
            "type": {
              "option": {
                "array": [
                  "i64",
                  2
                ]
              }
            }
          },
          {
            "name": "cssCoordinates",
            "docs": [
              "The locations of the central space stations (CSS) of the three factions"
            ],
            "type": {
              "option": {
                "array": [
                  {
                    "array": [
                      "i64",
                      2
                    ]
                  },
                  3
                ]
              }
            }
          },
          {
            "name": "originCoordinates",
            "docs": [
              "The co-ordinates of the \"origin\"; used in calculating SDU probability"
            ],
            "type": {
              "option": {
                "array": [
                  "i64",
                  2
                ]
              }
            }
          },
          {
            "name": "cssMaxDistance",
            "docs": [
              "The max distance from the nearest CSS; used in calculating SDU probability"
            ],
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "originMaxDistance",
            "docs": [
              "The max distance from the `origin_coordinates`; used in calculating SDU probability"
            ],
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "distanceWeighting",
            "docs": [
              "The distance weighting; used in calculating SDU probability"
            ],
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "tMax",
            "docs": [
              "The maximum time before SDU probability at a location changes"
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "xMul",
            "docs": [
              "Multiplier in the X dimension; used in noise function"
            ],
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "yMul",
            "docs": [
              "Multiplier in the Y dimension; used in noise function"
            ],
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "zMul",
            "docs": [
              "Multiplier in the Z dimension; used in noise function"
            ],
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "sduMaxPerSector",
            "docs": [
              "The maximum number of SDUs that can be found per scan per sector"
            ],
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "scanChanceRegenPeriod",
            "docs": [
              "The amount of time in seconds that it takes for a sector scan chance to fully regenerate"
            ],
            "type": {
              "option": "i16"
            }
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the sector permissions profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "upkeepResourceType",
      "docs": [
        "The different types of upkeep resources"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ammo"
          },
          {
            "name": "food"
          },
          {
            "name": "toolkit"
          }
        ]
      }
    },
    {
      "name": "vaults",
      "docs": [
        "Token vaults"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "atlas",
            "docs": [
              "ATLAS token mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "polis",
            "docs": [
              "POLIS token mint"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "warpLaneInput",
      "docs": [
        "Struct for data input to initialize a `WarpLane`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "The index of the key in the player profile"
            ],
            "type": "u16"
          },
          {
            "name": "toSectorIndex",
            "docs": [
              "Index of the to_sector in `SectorConnections` of the from_sector"
            ],
            "type": "u16"
          },
          {
            "name": "fromSectorIndex",
            "docs": [
              "Index of the from_sector in `SectorConnections` of the to_sector"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "warpToCoordinateInput",
      "docs": [
        "Struct for data input to initialize a `WarpToCoordinate`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keyIndex",
            "docs": [
              "The index of the key in the player profile"
            ],
            "type": "u16"
          },
          {
            "name": "toSector",
            "docs": [
              "The destination coordinates"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          }
        ]
      }
    },
    {
      "name": "withdrawCargoFromFleetInput",
      "docs": [
        "Struct for data input to `WithdrawCargoFromFleet`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "cargo amount"
            ],
            "type": "u64"
          },
          {
            "name": "keyIndex",
            "docs": [
              "the index of the key in the player profile"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "wrappedShipEscrow",
      "docs": [
        "Wrapped `Ship` escrow info"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ship",
            "docs": [
              "The `Ship` account address"
            ],
            "type": "pubkey"
          },
          {
            "name": "amount",
            "docs": [
              "The `Ship` token amount in escrow"
            ],
            "type": "u64"
          },
          {
            "name": "updateId",
            "docs": [
              "The update id for the `Ship`"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "craftingInstance",
      "docs": [
        "This account is used to store relevant information for a crafting process instance"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account"
            ],
            "type": "u8"
          },
          {
            "name": "seqId",
            "docs": [
              "The sequence id for the `Starbase`"
            ],
            "type": "u16"
          },
          {
            "name": "authority",
            "docs": [
              "The authority over the `CraftingInstance`"
            ],
            "type": "pubkey"
          },
          {
            "name": "craftingProcess",
            "docs": [
              "The `CraftingProcess` account address"
            ],
            "type": "pubkey"
          },
          {
            "name": "instanceType",
            "docs": [
              "the planet type"
            ],
            "type": "u8"
          },
          {
            "name": "numCrew",
            "docs": [
              "The number of crew taking part in the crafting process"
            ],
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "Bump of Account PDA"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "disbandedFleet",
      "docs": [
        "Keeps track of a fleet while it is disbanded"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "gameId",
            "docs": [
              "The game id this belongs to."
            ],
            "type": "pubkey"
          },
          {
            "name": "ownerProfile",
            "docs": [
              "The owner's profile."
            ],
            "type": "pubkey"
          },
          {
            "name": "starbase",
            "docs": [
              "The `Starbase` at which the original `Fleet` was disbanded."
            ],
            "type": "pubkey"
          },
          {
            "name": "fleetLabel",
            "docs": [
              "The label or name of the disbanded fleet."
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "fleetShips",
            "docs": [
              "The `FleetShips` account belonging to the original `Fleet` that was disbanded."
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "The disbanded fleet's bump."
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "fleet",
      "docs": [
        "A `SAGE` fleet."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "gameId",
            "docs": [
              "The game id this belongs to."
            ],
            "type": "pubkey"
          },
          {
            "name": "ownerProfile",
            "docs": [
              "The owner's profile."
            ],
            "type": "pubkey"
          },
          {
            "name": "fleetShips",
            "docs": [
              "Fleet Ships Key"
            ],
            "type": "pubkey"
          },
          {
            "name": "subProfile",
            "docs": [
              "The fleet's sub-authority.",
              "If [`Some`] will have the exclusive ability to interact with this fleet."
            ],
            "type": {
              "defined": {
                "name": "optionalNonSystemPubkey"
              }
            }
          },
          {
            "name": "subProfileInvalidator",
            "docs": [
              "The authority for revoking a sun-authority."
            ],
            "type": "pubkey"
          },
          {
            "name": "faction",
            "docs": [
              "The faction of the profile."
            ],
            "type": "u8"
          },
          {
            "name": "fleetLabel",
            "docs": [
              "The label or name of the fleet."
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "shipCounts",
            "docs": [
              "The number of ships in the fleet."
            ],
            "type": {
              "defined": {
                "name": "shipCounts"
              }
            }
          },
          {
            "name": "warpCooldownExpiresAt",
            "docs": [
              "The time at which the warp cooldown expires"
            ],
            "type": "i64"
          },
          {
            "name": "scanCooldownExpiresAt",
            "docs": [
              "The time at which the scan cooldown expires"
            ],
            "type": "i64"
          },
          {
            "name": "stats",
            "docs": [
              "The fleet's stats."
            ],
            "type": {
              "defined": {
                "name": "shipStats"
              }
            }
          },
          {
            "name": "cargoHold",
            "docs": [
              "The Cargo pod representing the fleet's cargo hold"
            ],
            "type": "pubkey"
          },
          {
            "name": "fuelTank",
            "docs": [
              "The Cargo pod representing the fleet's fuel tank"
            ],
            "type": "pubkey"
          },
          {
            "name": "ammoBank",
            "docs": [
              "The Cargo pod representing the fleet's ammo bank"
            ],
            "type": "pubkey"
          },
          {
            "name": "updateId",
            "docs": [
              "The update id for the `Fleet`"
            ],
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "The fleet's bump."
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "fleetShips",
      "docs": [
        "Keeps track of a the individual ships that make up a fleet"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "fleet",
            "docs": [
              "The `Fleet` account this belongs to"
            ],
            "type": "pubkey"
          },
          {
            "name": "fleetShipsInfoCount",
            "docs": [
              "List length of `RemainingData`"
            ],
            "type": "u32"
          },
          {
            "name": "bump",
            "docs": [
              "The disbanded fleet's bump."
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "game",
      "docs": [
        "Global Game Configuration variables"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "updateId",
            "docs": [
              "The sequence id for updates."
            ],
            "type": "u64"
          },
          {
            "name": "profile",
            "docs": [
              "The [`Profile`](player_profile::state::Profile) that handles the sector program permissions"
            ],
            "type": "pubkey"
          },
          {
            "name": "gameState",
            "docs": [
              "The associated `GameState` account."
            ],
            "type": "pubkey"
          },
          {
            "name": "points",
            "docs": [
              "Points setting"
            ],
            "type": {
              "defined": {
                "name": "points"
              }
            }
          },
          {
            "name": "cargo",
            "docs": [
              "Cargo settings"
            ],
            "type": {
              "defined": {
                "name": "cargo"
              }
            }
          },
          {
            "name": "crafting",
            "docs": [
              "Crafting settings"
            ],
            "type": {
              "defined": {
                "name": "crafting"
              }
            }
          },
          {
            "name": "mints",
            "docs": [
              "mint related settings"
            ],
            "type": {
              "defined": {
                "name": "mints"
              }
            }
          },
          {
            "name": "vaults",
            "docs": [
              "vault related settings"
            ],
            "type": {
              "defined": {
                "name": "vaults"
              }
            }
          },
          {
            "name": "riskZones",
            "docs": [
              "Data for risk zones"
            ],
            "type": {
              "defined": {
                "name": "riskZonesData"
              }
            }
          }
        ]
      }
    },
    {
      "name": "gameState",
      "docs": [
        "Keeps track of variables that may change frequently during a `Game` session"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account"
            ],
            "type": "u8"
          },
          {
            "name": "updateId",
            "docs": [
              "The sequence id for updates"
            ],
            "type": "u64"
          },
          {
            "name": "gameId",
            "docs": [
              "The `Game` that this belongs to"
            ],
            "type": "pubkey"
          },
          {
            "name": "fleet",
            "docs": [
              "Fleet settings"
            ],
            "type": {
              "defined": {
                "name": "fleetInfo"
              }
            }
          },
          {
            "name": "misc",
            "docs": [
              "Miscellaneous settings"
            ],
            "type": {
              "defined": {
                "name": "miscVariables"
              }
            }
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "mineItem",
      "docs": [
        "Represents a token registered as an item that can be mined"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "gameId",
            "docs": [
              "the game_id account this item is registered with"
            ],
            "type": "pubkey"
          },
          {
            "name": "name",
            "docs": [
              "The name of the `MineItem`"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "mint",
            "docs": [
              "the mint representing the items mined"
            ],
            "type": "pubkey"
          },
          {
            "name": "resourceHardness",
            "docs": [
              "How hard it is to mine this item -> Ranges from 1-10"
            ],
            "type": "u16"
          },
          {
            "name": "numResourceAccounts",
            "docs": [
              "The number of resource accounts for this mine item"
            ],
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "bump for PDA"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "planet",
      "docs": [
        "planet"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "name",
            "docs": [
              "The name of this `Planet`"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "gameId",
            "docs": [
              "the `Game` that this belongs to"
            ],
            "type": "pubkey"
          },
          {
            "name": "sector",
            "docs": [
              "the sector that this belongs to"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "subCoordinates",
            "docs": [
              "sub_coordinates as [x, y]"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "planetType",
            "docs": [
              "the planet type"
            ],
            "type": "u8"
          },
          {
            "name": "position",
            "docs": [
              "the planet position"
            ],
            "type": "u8"
          },
          {
            "name": "size",
            "docs": [
              "size"
            ],
            "type": "u64"
          },
          {
            "name": "maxHp",
            "docs": [
              "maximum health"
            ],
            "type": "u64"
          },
          {
            "name": "currentHealth",
            "docs": [
              "The current health of the `Planet`."
            ],
            "type": "u64"
          },
          {
            "name": "amountMined",
            "docs": [
              "the cumulative amount mined from this `Asteroid`"
            ],
            "type": "u64"
          },
          {
            "name": "numResources",
            "docs": [
              "the number of resources at this `Asteroid`"
            ],
            "type": "u8"
          },
          {
            "name": "numMiners",
            "docs": [
              "the number of entities currently mining at this `Asteroid`"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "playerCrewRecord",
      "docs": [
        "An account used to record how many crew members have been added to the game by a player",
        "This is meant to be used temporarily during the crew \"pre add\" period where players can add crew members to the game but not use them"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account"
            ],
            "type": "u8"
          },
          {
            "name": "playerProfile",
            "docs": [
              "The `Profile` key"
            ],
            "type": "pubkey"
          },
          {
            "name": "crewConfig",
            "docs": [
              "The `SageCrewConfig` key"
            ],
            "type": "pubkey"
          },
          {
            "name": "gameId",
            "docs": [
              "The id of the `Game`"
            ],
            "type": "pubkey"
          },
          {
            "name": "count",
            "docs": [
              "The number of crew members"
            ],
            "type": "u32"
          },
          {
            "name": "bump",
            "docs": [
              "Bump of Account PDA"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "progressionConfig",
      "docs": [
        "Progression Config"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "the data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "gameId",
            "docs": [
              "the `Game` that this belongs to"
            ],
            "type": "pubkey"
          },
          {
            "name": "dailyLpLimit",
            "docs": [
              "the daily limit for Loyalty Points (LP)"
            ],
            "type": "u64"
          },
          {
            "name": "dailyCouncilRankXpLimit",
            "docs": [
              "the daily limit for Council Rank Experience Points (CRXP)"
            ],
            "type": "u64"
          },
          {
            "name": "dailyPilotXpLimit",
            "docs": [
              "the daily limit for Pilot License Experience Points (PXP)"
            ],
            "type": "u64"
          },
          {
            "name": "dailyDataRunningXpLimit",
            "docs": [
              "the daily limit for Data Running Experience Points (DRXP)"
            ],
            "type": "u64"
          },
          {
            "name": "dailyMiningXpLimit",
            "docs": [
              "the daily limit for Mining Experience Points (MXP)"
            ],
            "type": "u64"
          },
          {
            "name": "dailyCraftingXpLimit",
            "docs": [
              "the daily limit for Crafting Experience Points (CXP)"
            ],
            "type": "u64"
          },
          {
            "name": "numItems",
            "docs": [
              "number of progression items being tracked"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "resource",
      "docs": [
        "Represents a mine-able item existing at a particular location (e.g. a planet)"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "gameId",
            "docs": [
              "the game_id pubkey"
            ],
            "type": "pubkey"
          },
          {
            "name": "location",
            "docs": [
              "the location's pubkey"
            ],
            "type": "pubkey"
          },
          {
            "name": "mineItem",
            "docs": [
              "the mine item pubkey"
            ],
            "type": "pubkey"
          },
          {
            "name": "locationType",
            "docs": [
              "the location type"
            ],
            "type": "u8"
          },
          {
            "name": "systemRichness",
            "docs": [
              "How abundant the resource is at the location -> Ranges from 1-5"
            ],
            "type": "u16"
          },
          {
            "name": "amountMined",
            "docs": [
              "the cumulative amount mined from this resource"
            ],
            "type": "u64"
          },
          {
            "name": "numMiners",
            "docs": [
              "the number of entities currently mining this resource"
            ],
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "bump for PDA"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "sageCrewConfig",
      "docs": [
        "SAGE crew Config"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "the data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "gameId",
            "docs": [
              "the `Game` that this belongs to"
            ],
            "type": "pubkey"
          },
          {
            "name": "config",
            "docs": [
              "the `CrewConfig` account address"
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "Bump of Account PDA"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "sagePlayerProfile",
      "docs": [
        "A `SAGE` player's profile."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account"
            ],
            "type": "u8"
          },
          {
            "name": "playerProfile",
            "docs": [
              "The `Profile` key"
            ],
            "type": "pubkey"
          },
          {
            "name": "gameId",
            "docs": [
              "The id of the `Game`"
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "Bump of Account PDA"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "sector",
      "docs": [
        "sector"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "gameId",
            "docs": [
              "the game_id that this belongs to"
            ],
            "type": "pubkey"
          },
          {
            "name": "coordinates",
            "docs": [
              "coordinates as [x, y]"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "discoverer",
            "docs": [
              "The discoverer of this sector"
            ],
            "type": "pubkey"
          },
          {
            "name": "name",
            "docs": [
              "The name of this sector"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "numStars",
            "docs": [
              "the number of stars in this system"
            ],
            "type": "u16"
          },
          {
            "name": "numPlanets",
            "docs": [
              "the number of planets in this system"
            ],
            "type": "u16"
          },
          {
            "name": "numMoons",
            "docs": [
              "the number of moons in this system"
            ],
            "type": "u16"
          },
          {
            "name": "numAsteroidBelts",
            "docs": [
              "the number of num_asteroid belts in this system"
            ],
            "type": "u16"
          },
          {
            "name": "lastScanTime",
            "docs": [
              "The last time the `Sector` was scanned"
            ],
            "type": "i64"
          },
          {
            "name": "lastScanChance",
            "docs": [
              "The probability of finding SDUs in the `Sector` from the last time it was scanned"
            ],
            "type": "u32"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump"
            ],
            "type": "u8"
          },
          {
            "name": "numConnections",
            "docs": [
              "the number of connections in this system"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "ship",
      "docs": [
        "This account represents a Ship"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "gameId",
            "docs": [
              "the game_id account this Ship is registered with"
            ],
            "type": "pubkey"
          },
          {
            "name": "mint",
            "docs": [
              "the mint representing the Ship"
            ],
            "type": "pubkey"
          },
          {
            "name": "name",
            "docs": [
              "The name of this `Ship`"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "sizeClass",
            "docs": [
              "the ship's size class"
            ],
            "type": "u8"
          },
          {
            "name": "stats",
            "docs": [
              "The ship's stats"
            ],
            "type": {
              "defined": {
                "name": "shipStats"
              }
            }
          },
          {
            "name": "updateId",
            "docs": [
              "The `update_id` for the `Ship`"
            ],
            "type": "u64"
          },
          {
            "name": "maxUpdateId",
            "docs": [
              "The max `Game` `update_id` that the `Ship` is valid for"
            ],
            "type": "u64"
          },
          {
            "name": "next",
            "docs": [
              "the next `Ship` account to use when this `Ship` is updated"
            ],
            "type": {
              "defined": {
                "name": "optionalNonSystemPubkey"
              }
            }
          }
        ]
      }
    },
    {
      "name": "star",
      "docs": [
        "`Star` account"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "name",
            "docs": [
              "The name of this `Star`"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "gameId",
            "docs": [
              "the game_id that this belongs to"
            ],
            "type": "pubkey"
          },
          {
            "name": "sector",
            "docs": [
              "the sector that this belongs to"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "size",
            "docs": [
              "size"
            ],
            "type": "u64"
          },
          {
            "name": "subCoordinates",
            "docs": [
              "sub_coordinates as [x, y]"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "starType",
            "docs": [
              "the star type"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "starbase",
      "docs": [
        "starbase"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this `Starbase` account."
            ],
            "type": "u8"
          },
          {
            "name": "gameId",
            "docs": [
              "the game_id that this `Starbase` belongs to"
            ],
            "type": "pubkey"
          },
          {
            "name": "sector",
            "docs": [
              "the sector that this `Starbase` belongs to"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "craftingFacility",
            "docs": [
              "the [`CraftingFacility`] to use for crafting at this `Starbase`"
            ],
            "type": "pubkey"
          },
          {
            "name": "upgradeFacility",
            "docs": [
              "the [`CraftingFacility`] to use for upgrade jobs at this `Starbase`"
            ],
            "type": "pubkey"
          },
          {
            "name": "name",
            "docs": [
              "The name of this `Starbase`"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "subCoordinates",
            "docs": [
              "coordinates as [x, y]"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "faction",
            "docs": [
              "The faction of the `Starbase`."
            ],
            "type": "u8"
          },
          {
            "name": "bump",
            "docs": [
              "bump for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "seqId",
            "docs": [
              "The sequence id for the `Starbase`"
            ],
            "type": "u16"
          },
          {
            "name": "state",
            "docs": [
              "The state of the `Starbase`. Is a [`StarbaseState`]."
            ],
            "type": "u8"
          },
          {
            "name": "level",
            "docs": [
              "The level of the `Starbase`."
            ],
            "type": "u8"
          },
          {
            "name": "hp",
            "docs": [
              "The `Starbase` health points."
            ],
            "type": "u64"
          },
          {
            "name": "sp",
            "docs": [
              "The `Starbase` shield points."
            ],
            "type": "u64"
          },
          {
            "name": "sectorRingAvailable",
            "docs": [
              "The planet position (`sector::state::Ring`) available for this `Starbase`"
            ],
            "type": "u8"
          },
          {
            "name": "upgradeState",
            "docs": [
              "The `Starbase` upgrade state"
            ],
            "type": "u8"
          },
          {
            "name": "upgradeIngredientsChecksum",
            "docs": [
              "used to check if expected upgrade ingredients have been supplied"
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "numUpgradeIngredients",
            "docs": [
              "number of ingredients needed for starbase upgrade"
            ],
            "type": "u8"
          },
          {
            "name": "upkeepAmmoBalance",
            "docs": [
              "The balance of ammo for upkeep"
            ],
            "type": "u64"
          },
          {
            "name": "upkeepAmmoLastUpdate",
            "docs": [
              "The last time ammo for upkeep was updated (Local time)"
            ],
            "type": "i64"
          },
          {
            "name": "upkeepAmmoGlobalLastUpdate",
            "docs": [
              "The last time ammo for upkeep was updated (Global time)"
            ],
            "type": "i64"
          },
          {
            "name": "upkeepFoodBalance",
            "docs": [
              "The balance of food for upkeep"
            ],
            "type": "u64"
          },
          {
            "name": "upkeepFoodLastUpdate",
            "docs": [
              "The last time food for upkeep was updated (Local time)"
            ],
            "type": "i64"
          },
          {
            "name": "upkeepFoodGlobalLastUpdate",
            "docs": [
              "The last time food for upkeep was updated (Global time)"
            ],
            "type": "i64"
          },
          {
            "name": "upkeepToolkitBalance",
            "docs": [
              "The balance of toolkits for upkeep"
            ],
            "type": "u64"
          },
          {
            "name": "upkeepToolkitLastUpdate",
            "docs": [
              "The last time toolkits for upkeep was updated (Local time)"
            ],
            "type": "i64"
          },
          {
            "name": "upkeepToolkitGlobalLastUpdate",
            "docs": [
              "The last time toolkits for upkeep was updated (Global time)"
            ],
            "type": "i64"
          },
          {
            "name": "builtDestroyedTimestamp",
            "docs": [
              "The last time the starbase was built or destroyed"
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "starbasePlayer",
      "docs": [
        "The `SAGE` player info within a `Starbase`"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account"
            ],
            "type": "u8"
          },
          {
            "name": "playerProfile",
            "docs": [
              "The `Profile` key"
            ],
            "type": "pubkey"
          },
          {
            "name": "gameId",
            "docs": [
              "The id of the `Game`"
            ],
            "type": "pubkey"
          },
          {
            "name": "starbase",
            "docs": [
              "The `Starbase` key"
            ],
            "type": "pubkey"
          },
          {
            "name": "sagePlayerProfile",
            "docs": [
              "The `SagePlayerProfile` key"
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "Bump of Account PDA"
            ],
            "type": "u8"
          },
          {
            "name": "shipEscrowCount",
            "docs": [
              "List length of `RemainingData`"
            ],
            "type": "u32"
          },
          {
            "name": "oldTotalCrew",
            "docs": [
              "The old total crew members from the player's fleets at the `Starbase`",
              "This is used BEFORE crew program features are turned ON"
            ],
            "type": "u32"
          },
          {
            "name": "newTotalCrew",
            "docs": [
              "The new total crew members from the player's fleets at the `Starbase`",
              "This is used AFTER crew program features are turned ON"
            ],
            "type": "u32"
          },
          {
            "name": "busyCrew",
            "docs": [
              "The number of crew members that is engaged/busy and not available"
            ],
            "type": "u64"
          },
          {
            "name": "updateId",
            "docs": [
              "The `Game` update id"
            ],
            "type": "u64"
          },
          {
            "name": "updatedShipEscrowCount",
            "docs": [
              "Number of updated items in `RemainingData` list",
              "This will be `ship_escrow_count` when all ships in escrow are up-to-date"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "surveyDataUnitTracker",
      "docs": [
        "Survey Data Unit (SDU) Tracker"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "The data version of this account."
            ],
            "type": "u8"
          },
          {
            "name": "gameId",
            "docs": [
              "The game_id that this belongs to"
            ],
            "type": "pubkey"
          },
          {
            "name": "sduMint",
            "docs": [
              "The Survey Data Unit Mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "resourceMint",
            "docs": [
              "The mint of the resource spent when scanning for SDUs"
            ],
            "type": "pubkey"
          },
          {
            "name": "signer",
            "docs": [
              "The signer for this account"
            ],
            "type": "pubkey"
          },
          {
            "name": "signerBump",
            "docs": [
              "The signer for this account"
            ],
            "type": "u8"
          },
          {
            "name": "coordinatesRange",
            "docs": [
              "The valid coordinates range",
              "e.g. a value of [-50, 50] means that coordinates from [-50, -50] to [50, 50] are valid for SDU scanning"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "cssCoordinates",
            "docs": [
              "The locations of the central space stations (CSS) of the three factions"
            ],
            "type": {
              "array": [
                {
                  "array": [
                    "i64",
                    2
                  ]
                },
                3
              ]
            }
          },
          {
            "name": "originCoordinates",
            "docs": [
              "The co-ordinates of the \"origin\"; used in calculating SDU probability"
            ],
            "type": {
              "array": [
                "i64",
                2
              ]
            }
          },
          {
            "name": "cssMaxDistance",
            "docs": [
              "The max distance from the nearest CSS; used in calculating SDU probability"
            ],
            "type": "u32"
          },
          {
            "name": "originMaxDistance",
            "docs": [
              "The max distance from the `origin_coordinates`; used in calculating SDU probability"
            ],
            "type": "u32"
          },
          {
            "name": "distanceWeighting",
            "docs": [
              "The distance weighting; used in calculating SDU probability"
            ],
            "type": "u32"
          },
          {
            "name": "tMax",
            "docs": [
              "The maximum time before SDU probability at a location changes"
            ],
            "type": "i64"
          },
          {
            "name": "xMul",
            "docs": [
              "Multiplier in the X dimension; used in noise function"
            ],
            "type": "u32"
          },
          {
            "name": "yMul",
            "docs": [
              "Multiplier in the Y dimension; used in noise function"
            ],
            "type": "u32"
          },
          {
            "name": "zMul",
            "docs": [
              "Multiplier in the Z dimension; used in noise function"
            ],
            "type": "u32"
          },
          {
            "name": "sduMaxPerSector",
            "docs": [
              "The maximum number of SDUs that can be found per scan per sector"
            ],
            "type": "u32"
          },
          {
            "name": "scanChanceRegenPeriod",
            "docs": [
              "The amount of time in seconds that it takes for a sector scan chance to fully regenerate"
            ],
            "type": "i16"
          }
        ]
      }
    }
  ]
};

