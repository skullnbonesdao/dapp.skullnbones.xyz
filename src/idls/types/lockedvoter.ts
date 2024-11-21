export type LockedVoter = {
  address: 'Lock7kBijGCQLEFAmXcengzXKA88iDNQPriQ7TbgeyG';
  metadata: {
    name: 'locked_voter';
    version: '0.1.1';
    spec: '0.1.0';
  };
  instructions: [
    {
      name: 'new_locker';
      docs: ['Creates a new [Locker].'];
      discriminator: [177, 133, 32, 90, 229, 216, 131, 47];
      accounts: [
        {
          name: 'base';
          docs: ['Base.'];
          signer: true;
        },
        {
          name: 'locker';
          docs: ['[Locker].'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [34, 76, 111, 99, 107, 101, 114, 34];
              },
              {
                kind: 'account';
                path: 'base';
              },
            ];
          };
        },
        {
          name: 'token_mint';
          docs: ['Mint of the token that can be used to join the [Locker].'];
        },
        {
          name: 'governor';
          docs: ['[Governor] associated with the [Locker].'];
        },
        {
          name: 'payer';
          docs: ['Payer of the initialization.'];
          writable: true;
          signer: true;
        },
        {
          name: 'system_program';
          docs: ['System program.'];
        },
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        },
        {
          name: 'params';
          type: {
            defined: {
              name: 'LockerParams';
            };
          };
        },
      ];
    },
    {
      name: 'new_escrow';
      docs: [
        'Creates a new [Escrow] for an account.',
        '',
        'A Vote Escrow, or [Escrow] for short, is an agreement between an account (known as the `authority`) and the DAO to',
        'lock up tokens for a specific period of time, in exchange for voting rights',
        'linearly proportional to the amount of votes given.',
      ];
      discriminator: [216, 182, 143, 11, 220, 38, 86, 185];
      accounts: [
        {
          name: 'locker';
          docs: ['[Locker].'];
        },
        {
          name: 'escrow';
          docs: ['[Escrow].'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [34, 69, 115, 99, 114, 111, 119, 34];
              },
              {
                kind: 'account';
                path: 'locker';
                account: 'Locker';
              },
              {
                kind: 'account';
                path: 'escrow_owner';
              },
            ];
          };
        },
        {
          name: 'escrow_owner';
        },
        {
          name: 'payer';
          docs: ['Payer of the initialization.'];
          writable: true;
          signer: true;
        },
        {
          name: 'system_program';
          docs: ['System program.'];
        },
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        },
      ];
    },
    {
      name: 'lock';
      docs: [
        'Stakes `amount` tokens into the [Escrow].',
        'WARNING: if the program has a whitelist, one should use [crate::locked_voter::lock_with_whitelist] instead.',
        'This version of the instruction is deprecated.',
      ];
      discriminator: [21, 19, 208, 43, 237, 62, 255, 87];
      accounts: [
        {
          name: 'locker';
          docs: ['[Locker].'];
          writable: true;
        },
        {
          name: 'escrow';
          docs: ['[Escrow].'];
          writable: true;
        },
        {
          name: 'escrow_tokens';
          docs: ['Token account held by the [Escrow].'];
          writable: true;
        },
        {
          name: 'escrow_owner';
          docs: ['Authority of the [Escrow] and [Self::source_tokens].'];
          signer: true;
        },
        {
          name: 'source_tokens';
          docs: ['The source of deposited tokens.'];
          writable: true;
        },
        {
          name: 'token_program';
          docs: ['Token program.'];
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'duration';
          type: 'i64';
        },
      ];
    },
    {
      name: 'lock_with_whitelist_entry';
      docs: [
        'Stakes `amount` tokens into the [Escrow], if there is a whitelist.',
        'Stakes `amount` tokens into the [Escrow] via CPI by using the provided [LockerWhitelistEntry].',
      ];
      discriminator: [138, 248, 185, 79, 3, 115, 115, 57];
      accounts: [
        {
          name: 'lock';
          accounts: [
            {
              name: 'locker';
              docs: ['[Locker].'];
              writable: true;
            },
            {
              name: 'escrow';
              docs: ['[Escrow].'];
              writable: true;
            },
            {
              name: 'escrow_tokens';
              docs: ['Token account held by the [Escrow].'];
              writable: true;
            },
            {
              name: 'escrow_owner';
              docs: ['Authority of the [Escrow] and [Self::source_tokens].'];
              signer: true;
            },
            {
              name: 'source_tokens';
              docs: ['The source of deposited tokens.'];
              writable: true;
            },
            {
              name: 'token_program';
              docs: ['Token program.'];
            },
          ];
        },
        {
          name: 'instructions_sysvar';
        },
        {
          name: 'whitelist_entry';
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'duration';
          type: 'i64';
        },
      ];
    },
    {
      name: 'exit';
      docs: [
        'Stakes `amount` tokens into the [Escrow] if there is no whitelist.',
        'Exits the DAO; i.e., withdraws all staked tokens in an [Escrow] if the [Escrow] is unlocked.',
      ];
      discriminator: [234, 32, 12, 71, 126, 5, 219, 160];
      accounts: [
        {
          name: 'locker';
          docs: ['The [Locker] being exited from.'];
          writable: true;
        },
        {
          name: 'escrow';
          docs: ['The [Escrow] that is being closed.'];
          writable: true;
        },
        {
          name: 'escrow_owner';
          docs: ['Authority of the [Escrow].'];
          signer: true;
        },
        {
          name: 'escrow_tokens';
          docs: ['Tokens locked up in the [Escrow].'];
          writable: true;
        },
        {
          name: 'destination_tokens';
          docs: ['Destination for the tokens to unlock.'];
          writable: true;
        },
        {
          name: 'payer';
          docs: ['The payer to receive the rent refund.'];
          writable: true;
          signer: true;
        },
        {
          name: 'token_program';
          docs: ['Token program.'];
        },
      ];
      args: [];
    },
    {
      name: 'activate_proposal';
      docs: ['Activates a proposal.'];
      discriminator: [90, 186, 203, 234, 70, 185, 191, 21];
      accounts: [
        {
          name: 'locker';
          docs: ['The [Locker].'];
        },
        {
          name: 'governor';
          docs: ['The [Governor].'];
        },
        {
          name: 'proposal';
          docs: ['The [Proposal].'];
          writable: true;
        },
        {
          name: 'escrow';
          docs: ["The user's [Escrow]."];
        },
        {
          name: 'escrow_owner';
          docs: ["The [Escrow]'s owner."];
          signer: true;
        },
        {
          name: 'govern_program';
          docs: ['The [govern] program.'];
        },
      ];
      args: [];
    },
    {
      name: 'cast_vote';
      docs: ['Casts a vote.'];
      discriminator: [20, 212, 15, 189, 69, 180, 69, 151];
      accounts: [
        {
          name: 'locker';
          docs: ['The [Locker].'];
        },
        {
          name: 'escrow';
          docs: ['The [Escrow] that is voting.'];
        },
        {
          name: 'vote_delegate';
          docs: ['Vote delegate of the [Escrow].'];
          signer: true;
        },
        {
          name: 'proposal';
          docs: ['The [Proposal] being voted on.'];
          writable: true;
        },
        {
          name: 'vote';
          docs: ['The [Vote].'];
          writable: true;
        },
        {
          name: 'governor';
          docs: ['The [Governor].'];
        },
        {
          name: 'govern_program';
          docs: ['The [govern] program.'];
        },
      ];
      args: [
        {
          name: 'side';
          type: 'u8';
        },
      ];
    },
    {
      name: 'set_vote_delegate';
      docs: ['Delegate escrow vote.'];
      discriminator: [46, 236, 241, 243, 251, 108, 156, 12];
      accounts: [
        {
          name: 'escrow';
          docs: ['The [Escrow].'];
          writable: true;
        },
        {
          name: 'escrow_owner';
          docs: ['The owner of the [Escrow].'];
          signer: true;
        },
      ];
      args: [
        {
          name: 'new_delegate';
          type: 'pubkey';
        },
      ];
    },
    {
      name: 'set_locker_params';
      docs: ['Set locker params.'];
      discriminator: [106, 39, 132, 84, 254, 77, 161, 169];
      accounts: [
        {
          name: 'locker';
          docs: ['The [Locker].'];
          writable: true;
        },
        {
          name: 'governor';
          docs: ['The [Governor].'];
        },
        {
          name: 'smart_wallet';
          docs: ['The smart wallet on the [Governor].'];
          signer: true;
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: {
              name: 'LockerParams';
            };
          };
        },
      ];
    },
    {
      name: 'approve_program_lock_privilege';
      docs: [
        'Creates a new [LockerWhitelistEntry] to whitelist program from CPI.',
      ];
      discriminator: [75, 202, 1, 4, 122, 110, 102, 148];
      accounts: [
        {
          name: 'locker';
          docs: ['The [Locker].'];
        },
        {
          name: 'whitelist_entry';
          docs: ['[LockerWhitelistEntry].'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  34,
                  76,
                  111,
                  99,
                  107,
                  101,
                  114,
                  87,
                  104,
                  105,
                  116,
                  101,
                  108,
                  105,
                  115,
                  116,
                  69,
                  110,
                  116,
                  114,
                  121,
                  34,
                ];
              },
              {
                kind: 'account';
                path: 'locker';
                account: 'Locker';
              },
              {
                kind: 'account';
                path: 'executable_id';
              },
              {
                kind: 'account';
                path: 'whitelisted_owner';
              },
            ];
          };
        },
        {
          name: 'governor';
          docs: ['Governor for the [Locker].'];
        },
        {
          name: 'smart_wallet';
          docs: ['Smart wallet on the [Governor].'];
          signer: true;
        },
        {
          name: 'executable_id';
        },
        {
          name: 'whitelisted_owner';
        },
        {
          name: 'payer';
          docs: ['Payer of the initialization.'];
          writable: true;
          signer: true;
        },
        {
          name: 'system_program';
          docs: ['System program.'];
        },
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        },
      ];
    },
    {
      name: 'revoke_program_lock_privilege';
      docs: [
        "Close a [LockerWhitelistEntry] revoking program's CPI privilege.",
      ];
      discriminator: [170, 151, 7, 88, 194, 86, 245, 112];
      accounts: [
        {
          name: 'locker';
          docs: ['The [Locker].'];
        },
        {
          name: 'whitelist_entry';
          docs: ['[LockerWhitelistEntry].'];
          writable: true;
        },
        {
          name: 'governor';
          docs: ['Governor for the [Locker].'];
        },
        {
          name: 'smart_wallet';
          docs: ['Smart wallet on the [Governor].'];
          signer: true;
        },
        {
          name: 'payer';
          docs: ['Payer of the initialization.'];
          writable: true;
          signer: true;
        },
      ];
      args: [];
    },
  ];
  accounts: [
    {
      name: 'Locker';
      discriminator: [74, 246, 6, 113, 249, 228, 75, 169];
    },
    {
      name: 'LockerWhitelistEntry';
      discriminator: [128, 245, 238, 138, 226, 48, 216, 63];
    },
    {
      name: 'Escrow';
      discriminator: [31, 213, 123, 187, 186, 22, 218, 155];
    },
  ];
  events: [
    {
      name: 'ApproveLockPrivilegeEvent';
      discriminator: [240, 224, 137, 61, 143, 200, 225, 110];
    },
    {
      name: 'ExitEscrowEvent';
      discriminator: [218, 91, 68, 189, 102, 152, 212, 166];
    },
    {
      name: 'LockEvent';
      discriminator: [76, 37, 6, 186, 14, 42, 253, 15];
    },
    {
      name: 'NewEscrowEvent';
      discriminator: [96, 82, 181, 204, 84, 177, 72, 141];
    },
    {
      name: 'NewLockerEvent';
      discriminator: [149, 31, 207, 106, 172, 155, 65, 110];
    },
    {
      name: 'RevokeLockPrivilegeEvent';
      discriminator: [53, 15, 178, 80, 153, 198, 65, 145];
    },
    {
      name: 'LockerSetParamsEvent';
      discriminator: [239, 24, 209, 234, 210, 143, 7, 202];
    },
    {
      name: 'SetVoteDelegateEvent';
      discriminator: [165, 160, 157, 241, 121, 34, 54, 8];
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'ProgramNotWhitelisted';
      msg: 'CPI caller not whitelisted to invoke lock instruction.';
    },
    {
      code: 6001;
      name: 'LockupDurationTooShort';
      msg: 'Lockup duration must at least be the min stake duration.';
    },
    {
      code: 6002;
      name: 'LockupDurationTooLong';
      msg: 'Lockup duration must at most be the max stake duration.';
    },
    {
      code: 6003;
      name: 'RefreshCannotShorten';
      msg: 'A voting escrow refresh cannot shorten the escrow time remaining.';
    },
    {
      code: 6004;
      name: 'EscrowNotEnded';
      msg: 'Escrow has not ended.';
    },
    {
      code: 6005;
      name: 'MustProvideWhitelist';
      msg: "Program whitelist enabled; please provide whitelist entry and instructions sysvar or use the 'lock_with_whitelist' instruction.";
    },
    {
      code: 6006;
      name: 'EscrowOwnerNotWhitelisted';
      msg: 'CPI caller not whitelisted for escrow owner to invoke lock instruction.';
    },
    {
      code: 6007;
      name: 'MustCallLockWithWhitelistEntry';
      msg: 'Must call `lock_with_whitelist_entry` to lock via CPI.';
    },
    {
      code: 6008;
      name: 'MustCallLockPermissionless';
      msg: 'Must call `lock_permissionless` since this DAO does not have a CPI whitelist.';
    },
  ];
  types: [
    {
      name: 'LockerParams';
      docs: ['Contains parameters for the [Locker].'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'whitelist_enabled';
            docs: ['Whether or not the locking whitelist system is enabled.'];
            type: 'bool';
          },
          {
            name: 'max_stake_vote_multiplier';
            docs: [
              'The weight of a maximum vote lock relative to the total number of tokens locked.',
              'For example, veCRV is 10 because 1 CRV locked for 4 years = 10 veCRV.',
            ];
            type: 'u8';
          },
          {
            name: 'min_stake_duration';
            docs: ['Minimum staking duration.'];
            type: 'u64';
          },
          {
            name: 'max_stake_duration';
            docs: ['Maximum staking duration.'];
            type: 'u64';
          },
          {
            name: 'proposal_activation_min_votes';
            docs: ['Minimum number of votes required to activate a proposal.'];
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'Locker';
      docs: ['A group of [Escrow]s.'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'base';
            docs: ['Base account used to generate signer seeds.'];
            type: 'pubkey';
          },
          {
            name: 'bump';
            docs: ['Bump seed.'];
            type: 'u8';
          },
          {
            name: 'token_mint';
            docs: ['Mint of the token that must be locked in the [Locker].'];
            type: 'pubkey';
          },
          {
            name: 'locked_supply';
            docs: ['Total number of tokens locked in [Escrow]s.'];
            type: 'u64';
          },
          {
            name: 'governor';
            docs: ['Governor associated with the [Locker].'];
            type: 'pubkey';
          },
          {
            name: 'params';
            docs: ['Mutable parameters of how a [Locker] should behave.'];
            type: {
              defined: {
                name: 'LockerParams';
              };
            };
          },
        ];
      };
    },
    {
      name: 'LockerWhitelistEntry';
      docs: [
        "An entry in the [Locker]'s whitelist.",
        '',
        'The whitelist controls which solana are allowed to stake tokens into the system.',
      ];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            docs: ['Bump seed.'];
            type: 'u8';
          },
          {
            name: 'locker';
            docs: ['[Locker] this whitelist entry belongs to.'];
            type: 'pubkey';
          },
          {
            name: 'program_id';
            docs: ['Key of the program_id allowed to call the `lock` CPI.'];
            type: 'pubkey';
          },
          {
            name: 'owner';
            docs: [
              'The account authorized to be the [Escrow::owner] with this CPI.',
              'If set to [anchor_lang::solana_program::system_program::ID],',
              'all accounts are allowed to be the [Escrow::owner].',
            ];
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'Escrow';
      docs: ['Locks tokens on behalf of a user.'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'locker';
            docs: ['The [Locker] that this [Escrow] is part of.'];
            type: 'pubkey';
          },
          {
            name: 'owner';
            docs: [
              'The key of the account that is authorized to stake into/withdraw from this [Escrow].',
            ];
            type: 'pubkey';
          },
          {
            name: 'bump';
            docs: ['Bump seed.'];
            type: 'u8';
          },
          {
            name: 'tokens';
            docs: ['The token account holding the escrow tokens.'];
            type: 'pubkey';
          },
          {
            name: 'amount';
            docs: ['Amount of tokens staked.'];
            type: 'u64';
          },
          {
            name: 'escrow_started_at';
            docs: ['When the [Escrow::owner] started their escrow.'];
            type: 'i64';
          },
          {
            name: 'escrow_ends_at';
            docs: [
              'When the escrow unlocks; i.e. the [Escrow::owner] is scheduled to be allowed to withdraw their tokens.',
            ];
            type: 'i64';
          },
          {
            name: 'vote_delegate';
            docs: [
              'Account that is authorized to vote on behalf of this [Escrow].',
              'Defaults to the [Escrow::owner].',
            ];
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'ApproveLockPrivilegeEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'locker';
            type: 'pubkey';
          },
          {
            name: 'program_id';
            type: 'pubkey';
          },
          {
            name: 'owner';
            type: 'pubkey';
          },
          {
            name: 'timestamp';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'ExitEscrowEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'escrow_owner';
            type: 'pubkey';
          },
          {
            name: 'locker';
            type: 'pubkey';
          },
          {
            name: 'timestamp';
            type: 'i64';
          },
          {
            name: 'locker_supply';
            type: 'u64';
          },
          {
            name: 'released_amount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'LockEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'locker';
            type: 'pubkey';
          },
          {
            name: 'escrow_owner';
            type: 'pubkey';
          },
          {
            name: 'token_mint';
            type: 'pubkey';
          },
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'locker_supply';
            type: 'u64';
          },
          {
            name: 'duration';
            type: 'i64';
          },
          {
            name: 'prev_escrow_ends_at';
            type: 'i64';
          },
          {
            name: 'next_escrow_ends_at';
            type: 'i64';
          },
          {
            name: 'next_escrow_started_at';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'NewEscrowEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'escrow';
            type: 'pubkey';
          },
          {
            name: 'escrow_owner';
            type: 'pubkey';
          },
          {
            name: 'locker';
            type: 'pubkey';
          },
          {
            name: 'timestamp';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'NewLockerEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'governor';
            type: 'pubkey';
          },
          {
            name: 'locker';
            type: 'pubkey';
          },
          {
            name: 'token_mint';
            type: 'pubkey';
          },
          {
            name: 'params';
            type: {
              defined: {
                name: 'LockerParams';
              };
            };
          },
        ];
      };
    },
    {
      name: 'RevokeLockPrivilegeEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'locker';
            type: 'pubkey';
          },
          {
            name: 'program_id';
            type: 'pubkey';
          },
          {
            name: 'timestamp';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'LockerSetParamsEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'locker';
            type: 'pubkey';
          },
          {
            name: 'prev_params';
            type: {
              defined: {
                name: 'LockerParams';
              };
            };
          },
          {
            name: 'params';
            type: {
              defined: {
                name: 'LockerParams';
              };
            };
          },
        ];
      };
    },
    {
      name: 'SetVoteDelegateEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'escrow_owner';
            type: 'pubkey';
          },
          {
            name: 'old_delegate';
            type: 'pubkey';
          },
          {
            name: 'new_delegate';
            type: 'pubkey';
          },
        ];
      };
    },
  ];
};
