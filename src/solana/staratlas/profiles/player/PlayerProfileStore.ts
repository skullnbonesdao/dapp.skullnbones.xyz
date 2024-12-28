import { defineStore } from 'pinia';
import { Keypair, PublicKey, Transaction } from '@solana/web3.js';
import { useRPCStore } from 'stores/rpcStore';
import { PLAYERPROFILE_ID } from 'src/solana/staratlas/profiles/player/PlayerProfileInterface';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { SagePermissions } from '@staratlas/sage';
import {
  PlayerProfile,
  PlayerProfileIDLProgram,
  ProfilePermissions,
} from '@staratlas/player-profile';
import { useWallet } from 'solana-wallets-vue';
import { WalletStore } from 'solana-wallets-vue/dist/types';
import { AsyncSigner } from '@staratlas/data-source/src/asyncSigner';
import { handleTransaction } from 'src/solana/handleTransaction';
import { readAllFromRPC } from '@staratlas/data-source';
import { Profile } from 'src/solana/staratlas/profiles/player/types/types_player_profile';

export interface ProfileAccount {
  publicKey: PublicKey;
  account: Profile;
  data: any;
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
    async createProfile() {
      const program = useWorkspaceAdapter()?.pg_playerProfile
        .value as unknown as PlayerProfileIDLProgram;

      const profileId = publicKeyToAsyncSigner(this.profile?.publicKey);
      const funder = walletStoreToAsyncSigner(useWallet());

      console.log('Profile publicKey:', this.profile.publicKey.toString());
      const tx = new Transaction();

      const createPlayerProfileInstruction = await PlayerProfile.createProfile(
        program,
        profileId as any, // Accessing the publicKey directly
        [
          {
            key: getSigner(),
            expireTime: null,
            scope: program?.programId,
            permissions: ProfilePermissions.all(),
          },
        ],
        1,
      )(funder);

      if (Array.isArray(createPlayerProfileInstruction)) {
        createPlayerProfileInstruction.forEach((instructionWithSigners) => {
          if (instructionWithSigners?.instruction) {
            tx.add(instructionWithSigners.instruction); // Add the instruction to the transaction
          } else {
            console.error('No instruction found in the array element');
          }
        });
      } else if (createPlayerProfileInstruction?.instruction) {
        tx.add(createPlayerProfileInstruction.instruction);
      } else {
        console.error('No instruction found');
      }

      //tx.add((await createPlayerProfileInstruction(funder))?.instruction);

      const profile = new PlayerProfile(this.profile?.account);

      const { instructions: setNameInstruction, name } = PlayerProfile.setName(
        program as unknown as PlayerProfileIDLProgram,
        {
          profile: profileId.publicKey(),
          key: funder,
          playerProfileProgram: program,
        },
        'test',
      );

      console.log(await setNameInstruction(funder));

      /*const x = await buildAndSignTransaction(
        [createPlayerProfileInstruction],
        funder,
        {
          connection: useRPCStore().connection,
          commitment: 'confirmed',
        },
      );*/

      await handleTransaction(tx, 'Create Player Profile');

      //console.log(await createPlayerProfile(funder));

      return;
    },
    async updateStore_new() {
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

      if (profile) {
        console.log(profile);

        this.profile.publicKey = profile[0].pubkey;

        const program = useWorkspaceAdapter()?.pg_playerProfile.value as any;

        const myProfiles = await readAllFromRPC(
          useRPCStore().connection,
          program,
          PlayerProfile,
          'processed',
          [
            {
              memcmp: {
                offset: PlayerProfile.MIN_DATA_SIZE + 2,
                bytes: getSigner().toString(),
              },
            },
          ],
        );
        console.log('MyProfiles');
        console.log(myProfiles);

        this.profile.account = program.coder.types.decode(
          'profile',
          profile[0].account.data.slice(0, 31),
        );

        console.log(this.profile);
      } else this.profileId = Keypair.generate().publicKey;
      return;
    },
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

      let profileData = profile[0].account.data.subarray(30);
      let iter = 0;

      this.profile = {
        publicKey: profile[0].pubkey,
        account: await pg_playerProfile.account.profile.fetch(
          profile[0].pubkey,
        ),
        data: profileData,
      };

      const permissionedAccounts = [];

      // The first 30 bytes are general information about the Profile

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

        // Find the Player Profile associated with the account which has been granted access
        // const [targetUserProfile] =
        //   await useRPCStore().connection.getProgramAccounts(PLAYERPROFILE_ID, {
        //     filters: [
        //       {
        //         memcmp: {
        //           offset: 30,
        //           bytes: decodedProfileKey.key.toString(),
        //         },
        //       },
        //     ],
        //   });

        // Find the Player Name associated with the account which has been granted access
        /*        let playerNameAcct;
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
        });*/
        profileData = profileData.subarray(80);
        iter += 1;
      }
      // console.log(permissionedAccounts);
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

function publicKeyToAsyncSigner(key: PublicKey) {
  return {
    publicKey: () => key,
  };
}

export function walletStoreToAsyncSigner(
  wallet: WalletStore,
): AsyncSigner<WalletStore> {
  return {
    inner(): WalletStore {
      return wallet;
    },
    publicKey(): PublicKey {
      return wallet.publicKey.value!;
    },
    requiresAsync(): boolean {
      return true;
    },
    sign<T extends Transaction>(tx: T): Promise<T> {
      return wallet.signTransaction.value!(tx);
    },
    signAll<T extends Transaction>(txs: T[]): Promise<T[]> {
      return wallet.signAllTransactions.value!(txs);
    },
  };
}
