import { computed, ComputedRef, Ref } from 'vue';
import { AnchorWallet, useAnchorWallet } from 'solana-wallets-vue';
import { Connection } from '@solana/web3.js';
import { AnchorProvider, Program } from '@coral-xyz/anchor';

import { useRPCStore } from 'stores/rpcStore';

import whitelistIDL from './whitelist/whitelist.0.30.1.json';
import wrapperIDL from './wrapper/wrapper_factory.0.30.1.json';
import raffleIDL from './raffle/raffle.0.30.1.json';

import { Whitelist } from './whitelist/whitelist';
import { Raffle } from './raffle/raffle';
import { WrapperFactory } from './wrapper/wrapper_factory';

const preflightCommitment = 'processed';
const commitment = 'confirmed';

interface Workspace {
  wallet: Ref<AnchorWallet | undefined>;
  connection: ComputedRef<Connection>;
  provider: ComputedRef<AnchorProvider>;
  pg_wrapper: ComputedRef<Program<WrapperFactory>>;
  pg_raffle: ComputedRef<Program<Raffle>>;
  pg_whitelist: ComputedRef<Program<Whitelist>>;
}

let workspace: Workspace | undefined = undefined;

export const useWorkspaceAdapter = (): Workspace | undefined => workspace;

export const initWorkspaceAdapter = () => {
  const wallet = useAnchorWallet();

  const connection = computed(() => useRPCStore().connection as Connection);

  const provider = computed(
    () =>
      new AnchorProvider(connection.value, wallet.value!, {
        preflightCommitment,
        commitment,
      }),
  );

  const pg_whitelist = computed(
    () => new Program<Whitelist>(whitelistIDL as Whitelist, provider.value),
  );

  const pg_raffle = computed(
    () => new Program<Raffle>(raffleIDL as Raffle, provider.value),
  );

  const pg_wrapper = computed(
    () =>
      new Program<WrapperFactory>(wrapperIDL as WrapperFactory, provider.value),
  );

  console.log('[Loaded] Workspace');

  workspace = {
    wallet: wallet,
    connection: connection,
    provider: provider,
    pg_wrapper: pg_wrapper,
    pg_whitelist: pg_whitelist,
    pg_raffle: pg_raffle,
  } as Workspace;
};
