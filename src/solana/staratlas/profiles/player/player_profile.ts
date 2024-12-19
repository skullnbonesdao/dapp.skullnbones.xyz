/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/player.json`.
 */
export type PlayerProfile = {
  address: 'pprofELXjL5Kck7Jn5hCpwAL82DpTkSYBENzahVtbc9';
  metadata: {
    name: 'playerProfile';
    version: '0.7.3';
    spec: '0.1.0';
  };
  instructions: [
    {
      name: 'acceptRoleInvitation';
      discriminator: [254, 252, 153, 44, 41, 232, 56, 107];
      accounts: [
        {
          name: 'newMember';
          docs: ['The new member'];
        },
        {
          name: 'roleAccount';
          docs: ['The role which the player is joining'];
          writable: true;
        },
        {
          name: 'roleMembershipAccount';
          docs: ['The role membership account for the new member'];
          writable: true;
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
        {
          name: 'keyIndexInRoleAccount';
          type: 'u16';
        },
        {
          name: 'keyIndexInMembershipAccount';
          type: 'u16';
        },
      ];
    },
    {
      name: 'addExistingMemberToRole';
      discriminator: [85, 51, 158, 41, 144, 7, 103, 87];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder for reallocation.'];
          writable: true;
          signer: true;
        },
        {
          name: 'newMember';
          docs: ['The profile of the member to be added to the role'];
        },
        {
          name: 'profile';
          docs: ['The profile which the role belongs to.'];
        },
        {
          name: 'roleMembershipAccount';
          docs: ['The role membership account for the new member'];
          writable: true;
        },
        {
          name: 'roleAccount';
          docs: ['The role which the player is joining'];
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['The system program'];
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
        {
          name: 'keyIndexInMembershipAccount';
          type: 'u16';
        },
      ];
    },
    {
      name: 'addKeys';
      discriminator: [154, 225, 16, 176, 146, 76, 78, 105];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder for the profile.'];
          writable: true;
          signer: true;
        },
        {
          name: 'key';
          docs: [
            'Key with [`ProfilePermissions::ADD_KEYS`] permission to add keys.',
          ];
          signer: true;
        },
        {
          name: 'profile';
          docs: ['The profile to add to'];
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['The system program'];
        },
      ];
      args: [
        {
          name: 'keyAddIndex';
          type: 'u16';
        },
        {
          name: 'keyPermissionsIndex';
          type: 'u16';
        },
        {
          name: 'keysToAdd';
          type: {
            vec: {
              defined: {
                name: 'addKeyInput';
              };
            };
          };
        },
      ];
    },
    {
      name: 'adjustAuth';
      discriminator: [6, 254, 177, 87, 111, 72, 12, 211];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder for the profile.'];
          writable: true;
          signer: true;
        },
        {
          name: 'profile';
          docs: ['The profile to create'];
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['The system program'];
        },
      ];
      args: [
        {
          name: 'authIndexes';
          type: {
            vec: 'u16';
          };
        },
        {
          name: 'newKeyPermissions';
          type: {
            vec: {
              defined: {
                name: 'addKeyInput';
              };
            };
          };
        },
        {
          name: 'removeRange';
          type: {
            array: ['u16', 2];
          };
        },
        {
          name: 'newKeyThreshold';
          type: 'u8';
        },
      ];
    },
    {
      name: 'createProfile';
      discriminator: [225, 205, 234, 143, 17, 186, 50, 220];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder for the new profile.'];
          writable: true;
          signer: true;
        },
        {
          name: 'profile';
          docs: ['The profile to create'];
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          docs: ['The system program'];
        },
      ];
      args: [
        {
          name: 'keyPermissions';
          type: {
            vec: {
              defined: {
                name: 'addKeyInput';
              };
            };
          };
        },
        {
          name: 'keyThreshold';
          type: 'u8';
        },
      ];
    },
    {
      name: 'createRole';
      discriminator: [170, 147, 127, 223, 222, 112, 205, 163];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder for the transaction'];
          writable: true;
          signer: true;
        },
        {
          name: 'profile';
          docs: ['The [`Profile`] account that the role is being created for'];
          writable: true;
        },
        {
          name: 'newRoleAccount';
          docs: ['The role account being created'];
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['The system program'];
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
      ];
    },
    {
      name: 'inviteMemberToRole';
      discriminator: [253, 134, 248, 50, 88, 11, 141, 144];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder for the new profile.'];
          writable: true;
          signer: true;
        },
        {
          name: 'newMember';
          docs: ['The profile of the user to be added to the role'];
        },
        {
          name: 'profile';
          docs: ['The profile which the role belongs to.'];
        },
        {
          name: 'roleMembershipAccount';
          docs: ['The role membership account for the new member'];
          writable: true;
        },
        {
          name: 'roleAccount';
          docs: ['The role which the player is joining'];
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['The system program'];
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
      ];
    },
    {
      name: 'joinRole';
      discriminator: [134, 185, 219, 182, 219, 126, 24, 157];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder for the new profile.'];
          writable: true;
          signer: true;
        },
        {
          name: 'newMember';
          docs: ['The new member joining the role'];
        },
        {
          name: 'roleMembershipAccount';
          docs: ['The role membership account for the new member'];
          writable: true;
        },
        {
          name: 'roleAccount';
          docs: ['The role which the player is joining'];
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['The system program'];
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
      ];
    },
    {
      name: 'leaveRole';
      discriminator: [120, 198, 103, 107, 14, 193, 102, 79];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder to receive the rent allocation.'];
          writable: true;
        },
        {
          name: 'member';
          docs: ['The member leaving the role'];
        },
        {
          name: 'roleMembershipAccount';
          docs: ['The role membership account for the member'];
          writable: true;
        },
        {
          name: 'roleAccount';
          docs: ['The role which the player is leaving'];
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['The system program'];
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
        {
          name: 'keyIndexInRoleAccount';
          type: 'u16';
        },
        {
          name: 'keyIndexInMembershipAccount';
          type: 'u16';
        },
      ];
    },
    {
      name: 'removeKeys';
      discriminator: [172, 65, 100, 63, 31, 208, 57, 71];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder for the profile.'];
          writable: true;
        },
        {
          name: 'key';
          docs: [
            'Key with [`ProfilePermissions::REMOVE_KEYS`] permission to add keys.',
          ];
          signer: true;
        },
        {
          name: 'profile';
          docs: ['The profile to remove from'];
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['The system program'];
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
        {
          name: 'keysToRemove';
          type: {
            array: ['u16', 2];
          };
        },
      ];
    },
    {
      name: 'removeMemberFromRole';
      discriminator: [125, 78, 77, 208, 207, 127, 246, 14];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder to receive the rent allocation'];
          writable: true;
        },
        {
          name: 'member';
          docs: ['The profile of the user to be added to the role'];
        },
        {
          name: 'profile';
          docs: ['The profile which the role belongs to.'];
        },
        {
          name: 'roleMembershipAccount';
          docs: ['The role membership account for the member'];
          writable: true;
        },
        {
          name: 'roleAccount';
          docs: ['The role which the player is being removed from'];
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['The system program'];
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
        {
          name: 'keyIndexInRoleAccount';
          type: 'u16';
        },
        {
          name: 'keyIndexInMembershipAccount';
          type: 'u16';
        },
      ];
    },
    {
      name: 'removeRole';
      discriminator: [74, 69, 168, 163, 248, 3, 130, 0];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder for the transaction'];
          writable: true;
        },
        {
          name: 'profile';
          docs: ['The Profile that the role is being removed from'];
          writable: true;
        },
        {
          name: 'roleAccount';
          docs: ['The role being removed'];
          writable: true;
        },
        {
          name: 'roleNameAccount';
          docs: ['The role name account (if it exists)'];
          writable: true;
        },
      ];
      args: [
        {
          name: 'roleNameBump';
          type: 'u8';
        },
        {
          name: 'keyIndex';
          type: 'u16';
        },
      ];
    },
    {
      name: 'setName';
      discriminator: [78, 194, 111, 229, 198, 169, 162, 106];
      accounts: [
        {
          name: 'key';
          docs: ['The key authorized to change the name.'];
          signer: true;
        },
        {
          name: 'funder';
          docs: ['The funder for the name size change.'];
          writable: true;
          signer: true;
        },
        {
          name: 'profile';
          docs: ['The profile to set the name for.'];
        },
        {
          name: 'name';
          docs: ['The name account.'];
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['The system program.'];
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
        {
          name: 'name';
          type: 'bytes';
        },
      ];
    },
    {
      name: 'setRoleAcceptingMembers';
      discriminator: [255, 132, 76, 171, 145, 213, 127, 214];
      accounts: [
        {
          name: 'profile';
          docs: ['The profile which owns the role being modified.'];
        },
        {
          name: 'roleAccount';
          docs: ['The role account to set as accepting members.'];
          writable: true;
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
      ];
    },
    {
      name: 'setRoleAuthorizer';
      discriminator: [74, 219, 208, 248, 237, 153, 188, 229];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder for the name size change.'];
          writable: true;
          signer: true;
        },
        {
          name: 'profile';
          docs: ['The profile to set the name for.'];
        },
        {
          name: 'roleAccount';
          docs: ['The role account to set the authorizer for.'];
          writable: true;
        },
        {
          name: 'authorizer';
          docs: ['The authorizer account to set.'];
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
      ];
    },
    {
      name: 'setRoleName';
      discriminator: [9, 97, 176, 36, 28, 19, 41, 93];
      accounts: [
        {
          name: 'funder';
          docs: ['The funder for the name size change.'];
          writable: true;
          signer: true;
        },
        {
          name: 'profile';
          docs: ['The profile which the role belongs to'];
        },
        {
          name: 'role';
          docs: ['The role to set the name for.'];
        },
        {
          name: 'name';
          docs: ['The name account.'];
          writable: true;
        },
        {
          name: 'systemProgram';
          docs: ['The system program.'];
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
        {
          name: 'name';
          type: 'bytes';
        },
      ];
    },
    {
      name: 'setRoleNotAcceptingMembers';
      discriminator: [230, 151, 152, 4, 238, 11, 100, 15];
      accounts: [
        {
          name: 'profile';
          docs: ['The profile which owns the role being modified.'];
        },
        {
          name: 'roleAccount';
          docs: ['The role account to set as not accepting members.'];
          writable: true;
        },
      ];
      args: [
        {
          name: 'keyIndex';
          type: 'u16';
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'playerName';
      discriminator: [102, 9, 241, 98, 96, 196, 212, 161];
    },
    {
      name: 'profile';
      discriminator: [184, 101, 165, 188, 95, 63, 127, 188];
    },
    {
      name: 'profileRoleMembership';
      discriminator: [45, 2, 86, 111, 110, 121, 5, 1];
    },
    {
      name: 'role';
      discriminator: [46, 219, 197, 24, 233, 249, 253, 154];
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'keyIndexOutOfBounds';
      msg: 'Key index out of bounds';
    },
    {
      code: 6001;
      name: 'profileMismatch';
      msg: 'Profile did not match profile key';
    },
    {
      code: 6002;
      name: 'keyMismatch';
      msg: 'Key did not match profile key';
    },
    {
      code: 6003;
      name: 'scopeMismatch';
      msg: 'Scope did not match profile scope';
    },
    {
      code: 6004;
      name: 'keyExpired';
      msg: 'Key expired';
    },
    {
      code: 6005;
      name: 'keyMissingPermissions';
      msg: 'Key is missing permissions';
    },
    {
      code: 6006;
      name: 'permissionsMismatch';
      msg: "Permissions don't match available";
    },
    {
      code: 6007;
      name: 'authKeyCannotExpire';
      msg: 'Auth keys cannot expire';
    },
    {
      code: 6008;
      name: 'authKeyMustSign';
      msg: 'New auth keys must be signers';
    },
    {
      code: 6009;
      name: 'duplicateAuthKey';
      msg: 'Duplicate key when adjusting auth keys';
    },
    {
      code: 6010;
      name: 'roleAuthorityAlreadySet';
      msg: 'Role authority has already been set';
    },
    {
      code: 6011;
      name: 'roleNotAcceptingMembers';
      msg: 'Role is not accepting new members';
    },
    {
      code: 6012;
      name: 'roleMembershipMismatch';
      msg: 'Role membership is not as expected';
    },
    {
      code: 6013;
      name: 'roleLimitExceeded';
      msg: 'Role limit exceeded';
    },
    {
      code: 6014;
      name: 'roleHasMembers';
      msg: 'Cannot remove role with members';
    },
    {
      code: 6015;
      name: 'featureNotImplemented';
      msg: 'This feature is not yet support';
    },
  ];
  types: [
    {
      name: 'addKeyInput';
      docs: ['Struct for adding a key'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'scope';
            docs: ['The block of permissions'];
            type: 'pubkey';
          },
          {
            name: 'expireTime';
            docs: ['The expire time of the key to add'];
            type: 'i64';
          },
          {
            name: 'permissions';
            docs: ['The permissions for the key'];
            type: {
              array: ['u8', 8];
            };
          },
        ];
      };
    },
    {
      name: 'memberStatus';
      docs: [
        'Represents potential membership statuses for a player with a role',
      ];
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'inactive';
          },
          {
            name: 'active';
          },
        ];
      };
    },
    {
      name: 'profileKey';
      docs: ['A key on a profile.'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'key';
            docs: ['The key.'];
            type: 'pubkey';
          },
          {
            name: 'scope';
            docs: ['The key for the permissions.'];
            type: 'pubkey';
          },
          {
            name: 'expireTime';
            docs: ['The expire time for this key.', 'If `<0` does not expire.'];
            type: 'i64';
          },
          {
            name: 'permissions';
            docs: ['The permissions for the key.'];
            type: {
              array: ['u8', 8];
            };
          },
        ];
      };
    },
    {
      name: 'roleMembership';
      docs: ["Represents a member's status in a role"];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'key';
            docs: ['The member or role key associated with this membership'];
            type: 'pubkey';
          },
          {
            name: 'status';
            docs: ["The member's role status"];
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'playerName';
      docs: ["Stores a player's name on-chain."];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'version';
            docs: ['The data version of this account.'];
            type: 'u8';
          },
          {
            name: 'profile';
            docs: ['The profile this name is for.'];
            type: 'pubkey';
          },
          {
            name: 'bump';
            docs: ['The bump for this account.'];
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'profile';
      docs: ['A player profile.'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'version';
            docs: ['The data version of this account.'];
            type: 'u8';
          },
          {
            name: 'authKeyCount';
            docs: ['The number of auth keys on the account'];
            type: 'u16';
          },
          {
            name: 'keyThreshold';
            docs: ['The number of auth keys needed to update the profile.'];
            type: 'u8';
          },
          {
            name: 'nextSeqId';
            docs: ['The next sequence number for a new role.'];
            type: 'u64';
          },
          {
            name: 'createdAt';
            docs: ['When the profile was created.'];
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'profileRoleMembership';
      docs: [
        "A player's roles for a given profile",
        'Remaining data contains an unordered list of [`RoleMembership`](RoleMembership) structs',
      ];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'version';
            docs: ['The data version of this account.'];
            type: 'u8';
          },
          {
            name: 'profile';
            docs: ['The Profile this belongs to'];
            type: 'pubkey';
          },
          {
            name: 'member';
            docs: ["The member's profile pubkey"];
            type: 'pubkey';
          },
          {
            name: 'bump';
            docs: ['PDA bump'];
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'role';
      docs: [
        'A Role associated with a Profile. A Role contains an unordered list of Role Members in its',
        'remaining data which lists all of the members who carry this role.',
      ];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'version';
            docs: ['The data version of this account.'];
            type: 'u8';
          },
          {
            name: 'profile';
            docs: ['Profile that this role belongs to'];
            type: 'pubkey';
          },
          {
            name: 'authorizer';
            docs: ['Origin authority of the account'];
            type: 'pubkey';
          },
          {
            name: 'roleSeqId';
            docs: ["Role's seq_id"];
            type: 'u64';
          },
          {
            name: 'acceptingNewMembers';
            docs: ['Is role accepting new members'];
            type: 'u8';
          },
          {
            name: 'bump';
            docs: [
              'The name of the rank',
              'TODO: Add instruction to use `player-name` as the label',
              'PDA bump',
            ];
            type: 'u8';
          },
        ];
      };
    },
  ];
};
