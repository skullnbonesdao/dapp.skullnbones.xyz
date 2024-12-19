/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/faction.json`.
 */
export type ProfileFaction = {
  address: 'pFACSRuobDmvfMKq1bAzwj27t6d2GJhSCHb1VcfnRmq';
  metadata: {
    name: 'profileFaction';
    version: '0.7.0';
    spec: '0.1.0';
  };
  instructions: [
    {
      name: 'chooseFaction';
      discriminator: [178, 232, 68, 217, 89, 112, 202, 175];
      accounts: [
        {
          name: 'key';
          docs: ['The key with auth permissions.'];
          signer: true;
        },
        {
          name: 'funder';
          docs: ['The funder for the transaction.'];
          writable: true;
          signer: true;
        },
        {
          name: 'profile';
          docs: ['The profile to change faction for.'];
        },
        {
          name: 'faction';
          docs: ['The faction to change to.'];
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
          name: 'faction';
          type: {
            defined: {
              name: 'faction';
            };
          };
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'profileFactionAccount';
      discriminator: [14, 149, 119, 243, 145, 240, 79, 227];
    },
  ];
  types: [
    {
      name: 'faction';
      docs: ['A faction that a player can belong to.'];
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'unaligned';
          },
          {
            name: 'mud';
          },
          {
            name: 'oni';
          },
          {
            name: 'ustur';
          },
        ];
      };
    },
    {
      name: 'profileFactionAccount';
      docs: ["Stores a profile's enlisted faction on-chain."];
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
            docs: ['The profile this faction enlistment is for.'];
            type: 'pubkey';
          },
          {
            name: 'faction';
            docs: ['The faction of the profile.'];
            type: 'u8';
          },
          {
            name: 'bump';
            docs: ['The bump for this account.'];
            type: 'u8';
          },
        ];
      };
    },
  ];
};
