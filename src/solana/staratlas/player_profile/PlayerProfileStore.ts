import { defineStore } from 'pinia';
import { PublicKey } from '@solana/web3.js';
import { useRPCStore } from 'stores/rpcStore';
import { PLAYERPROFILE_ID } from 'src/solana/staratlas/player_profile/PlayerProfileInterface';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { SagePermissions } from '@staratlas/sage';

export interface ProfileAccount {
  pubkey: PublicKey;
  account: any;
}

export interface ProfileKey {
  profileKeys: any;
  sagePermissions: SagePermissions;
}

export const usePlayerProfileStore = defineStore('playerProfileStore', {
  state: () => ({
    profile: ({} as ProfileAccount) || undefined,
    profileKeys: [] as ProfileKey[],
  }),

  getters: {},
  actions: {
    async updateStore() {
      this.profileKeys = [];

      const pg_playerProfile = useWorkspaceAdapter()!.pg_playerProfile.value;

      const profile = await useRPCStore().connection.getProgramAccounts(
        PLAYERPROFILE_ID,
        {
          filters: [
            {
              memcmp: {
                offset: 30,
                bytes: getSigner().toString(),
              },
            },
          ],
        },
      );
      console.log(profile[0]);
      this.profile = profile[0] as never;

      const permissionedAccounts = [];

      // The first 30 bytes are general information about the Profile
      const profileData = profile[0].account.data.subarray(30);
      //let iter = 0;

      // Each account which has been granted access to this Profile
      // is listed in 80 byte chunks
      while (profileData.length >= 80) {
        const currProfileKey = profileData.subarray(0, 80);

        console.log(`currProfileKey: ${currProfileKey}`);

        const decodedProfileKey = pg_playerProfile.coder.types.decode(
          'profileKey',
          currProfileKey,
        );

        this.profileKeys.push({
          profileKeys: decodedProfileKey as never,
          sagePermissions: SagePermissions.fromPermissions(
            decodedProfileKey.permissions,
          ),
        });

        /*        // Find the Player Profile associated with the account which has been granted access
        const [targetUserProfile] =
          await useRPCStore().connection.getProgramAccounts(PLAYERPROFILE_ID, {
            filters: [
              {
                memcmp: {
                  offset: 30,
                  bytes: decodedProfileKey.key.toString(),
                },
              },
            ],
          });

        // Find the Player Name associated with the account which has been granted access
        let playerNameAcct;
        if (targetUserProfile) {
          [playerNameAcct] = await useRPCStore().connection.getProgramAccounts(
            PLAYERPROFILE_ID,
            {
              filters: [
                {
                  memcmp: {
                    offset: 9,
                    bytes: targetUserProfile.pubkey.toString(),
                  },
                },
              ],
            },
          );
        }
        const playerName = playerNameAcct
          ? new TextDecoder().decode(playerNameAcct.account.data.subarray(42))
          : '';
        const permissions = decodePermissions(decodedProfileKey.permissions);

        console.log(`Permission: ${permissions} `);
        permissionedAccounts.push({
          account: decodedProfileKey.key.toString(),
          name: playerName,
          idx: iter,
          permissions: permissions,
        });
        profileData = profileData.subarray(80);
        iter += 1;*/
      }
      //console.log(permissionedAccounts);
    },
  },
});

function decodePermissions(input: any) {
  const permissions = [];
  for (const section of input) {
    const sectionFlags = [];
    sectionFlags.push((section & (1 << 0)) === 1 << 0);
    sectionFlags.push((section & (1 << 1)) === 1 << 1);
    sectionFlags.push((section & (1 << 2)) === 1 << 2);
    sectionFlags.push((section & (1 << 3)) === 1 << 3);
    sectionFlags.push((section & (1 << 4)) === 1 << 4);
    sectionFlags.push((section & (1 << 5)) === 1 << 5);
    sectionFlags.push((section & (1 << 6)) === 1 << 6);
    sectionFlags.push((section & (1 << 7)) === 1 << 7);
    permissions.push(sectionFlags);
  }
  return permissions;
}
