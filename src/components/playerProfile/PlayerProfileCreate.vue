<script setup lang="ts">
import { useWorkspaceAdapter } from 'src/solana/connector';
import { Keypair, Transaction } from '@solana/web3.js';
import { handleTransaction } from 'src/solana/handleTransaction';
import { ref } from 'vue';
import { usePlayerProfileStore } from 'src/solana/staratlas/profiles/player/PlayerProfileStore';

const profileName = ref('somenamw');

async function buildTX() {
  console.log('buildTX');

  const tx = new Transaction();
  const pg_playerProfile = useWorkspaceAdapter()!.pg_playerProfile.value;

  const profile = Keypair.generate().publicKey;

  //Create Profile
  /* tx.add(
    await pg_playerProfile?.methods
      .createProfile(
        [
          {
            key: getSigner(),
            expireTime: null,
            scope: PLAYERPROFILE_ID,
            permissions: ProfilePermissions.auth(),
          },
        ].map((key): AddKeyInput => {
          return {
            scope: key.scope,
            expireTime: key.expireTime === null ? new BN(-1) : key.expireTime,
            permissions: key.permissions.getPermissions(),
          } as any;
        }) as any,
        1 as any,
      )
      .accountsPartial({
        profile: profile,
        systemProgram: SystemProgram.programId,
      })
      .remainingAccounts([
        {
          pubkey: getSigner(),
          isSigner: true,
          isWritable: false,
        },
      ])
      .instruction(),
  );*/

  //Set Name

  console.log(tx);
  await handleTransaction(tx, '[PlayerProfile] create');

  return '';
}
</script>

<template>
  <q-btn
    label="Create Profile"
    @click="usePlayerProfileStore().createProfile()"
  ></q-btn>
</template>

<style scoped lang="sass"></style>
