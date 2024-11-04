import { computed, ComputedRef, Ref } from 'vue';
import { AnchorWallet, useAnchorWallet } from 'solana-wallets-vue';
import { Connection } from '@solana/web3.js';
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import dapp_whitelist_idl from 'src/idls/whitelist.0.30.1.json';
import dapp_raffle_idl from 'src/idls/raffle.0.30.1.json';
import proxy_rewarder_idl from 'src/idls/proxy_rewarder.0.30.1.json';
import locked_voter_idl from 'src/idls/locked_voter.0.30.1.json';
import snapshot_idl from 'src/idls/snapshots.0.30.1.json';
import { useRPCStore } from 'stores/rpcStore';

import type { Whitelist } from 'src/idls/types/whitelist';
import { Raffle } from 'src/idls/types/raffle';
import { ProxyRewarder } from 'src/idls/types/proxyrewarder';
import { LockedVoter } from 'src/idls/types/lockedvoter';
import { Snapshot } from 'src/idls/types/snapshot';

const preflightCommitment = 'processed';
const commitment = 'confirmed';

interface Workspace {
  wallet: Ref<AnchorWallet | undefined>;
  connection: Connection;
  provider: ComputedRef<AnchorProvider>;
  pg_raffle: ComputedRef<Program<Raffle>>;
  pg_whitelist: ComputedRef<Program<Whitelist>>;
  pg_proxy_rewarder: ComputedRef<Program<ProxyRewarder>>;
  pg_locked_voter: ComputedRef<Program<LockedVoter>>;
  pg_snapshot: ComputedRef<Program<Snapshot>>;
}

let workspace: Workspace | null = null;
export const useWorkspaceAdapter = () => workspace;

export const initWorkspaceAdapter = () => {
  const wallet = useAnchorWallet();
  const connection = useRPCStore().connection as Connection;
  const provider = computed(
    () =>
      new AnchorProvider(connection, wallet.value!, {
        preflightCommitment,
        commitment,
      }),
  );

  const pg_whitelist = computed(
    () =>
      new Program<Whitelist>(dapp_whitelist_idl as Whitelist, provider.value),
  );

  const pg_raffle = computed(
    () => new Program<Raffle>(dapp_raffle_idl as Raffle, provider.value),
  );

  const pg_proxy_rewarder = computed(
    () =>
      new Program<ProxyRewarder>(
        proxy_rewarder_idl as ProxyRewarder,
        provider.value,
      ),
  );

  const pg_locked_voter = computed(
    () =>
      new Program<LockedVoter>(locked_voter_idl as LockedVoter, provider.value),
  );

  const pg_snapshot = computed(
    () => new Program<Snapshot>(snapshot_idl as Snapshots, provider.value),
  );

  workspace = {
    wallet,
    connection,
    provider,
    pg_raffle,
    pg_whitelist,
    pg_proxy_rewarder,
    pg_locked_voter,
    pg_snapshot,
  };
};
