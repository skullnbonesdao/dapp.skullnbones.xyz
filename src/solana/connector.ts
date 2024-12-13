import { computed, ComputedRef, Ref } from 'vue';
import { AnchorWallet, useAnchorWallet } from 'solana-wallets-vue';
import { Connection } from '@solana/web3.js';
import { AnchorProvider, Program } from '@coral-xyz/anchor';

import { useRPCStore } from 'stores/rpcStore';

//WHITELIST
import whitelistIDL from './whitelist/whitelist.0.30.1.json';
import { Whitelist } from './whitelist/whitelist';

//WRAPPER
import wrapperIDL from './wrapper/wrapper_factory.0.30.1.json';
import { WrapperFactory } from './wrapper/wrapper_factory';

//RAFFLE
import raffleIDL from './raffle/raffle.0.30.1.json';
import { Raffle } from './raffle/raffle';

//PLAYER PROFILE
import playerProfileIDL from './staratlas/player_profile/player_profile.0.30.1.json';
import { PlayerProfile } from './staratlas/player_profile/player_profile';

//POLIS LOCKER
import proxyRewarderIDl from './staratlas/locker/polis/proxy_rewarder.0.30.1.json';
import { ProxyRewarder } from './staratlas/locker/polis/proxy_rewarder';
import lockedVoterIDL from './staratlas/locker/polis/locked_voter.0.30.1.json';
import { LockedVoter } from './staratlas/locker/polis/locked_voter';
import snapshotsIDL from './staratlas/locker/polis/snapshots.0.30.1.json';
import { Snapshots } from './staratlas/locker/polis/snapshots';

const preflightCommitment = 'processed';
const commitment = 'confirmed';

interface Workspace {
  wallet: Ref<AnchorWallet | undefined>;
  connection: ComputedRef<Connection>;
  provider: ComputedRef<AnchorProvider>;
  pg_wrapper: ComputedRef<Program<WrapperFactory>>;
  pg_raffle: ComputedRef<Program<Raffle>>;
  pg_whitelist: ComputedRef<Program<Whitelist>>;
  pg_playerProfile: ComputedRef<Program<PlayerProfile>>;
  pg_proxyRewarder: ComputedRef<Program<ProxyRewarder>>;
  pg_lockedVoter: ComputedRef<Program<LockedVoter>>;
  pg_snapshots: ComputedRef<Program<Snapshots>>;
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

  //WHITELIST
  const pg_whitelist = computed(
    () => new Program<Whitelist>(whitelistIDL as Whitelist, provider.value),
  );

  //WRAPPER
  const pg_wrapper = computed(
    () =>
      new Program<WrapperFactory>(wrapperIDL as WrapperFactory, provider.value),
  );

  //RAFFLE
  const pg_raffle = computed(
    () => new Program<Raffle>(raffleIDL as Raffle, provider.value),
  );

  //PLAYER PROFILE
  const pg_playerProfile = computed(
    () =>
      new Program<PlayerProfile>(
        playerProfileIDL as PlayerProfile,
        provider.value,
      ),
  );

  //POLIS LOCKER
  const pg_proxyRewarder = computed(
    () =>
      new Program<ProxyRewarder>(
        proxyRewarderIDl as ProxyRewarder,
        provider.value,
      ),
  );

  const pg_lockedVoter = computed(
    () =>
      new Program<LockedVoter>(lockedVoterIDL as LockedVoter, provider.value),
  );

  const pg_snapshots = computed(
    () => new Program<Snapshots>(snapshotsIDL as Snapshots, provider.value),
  );

  console.log('[Loaded] Workspace');

  workspace = {
    wallet: wallet,
    connection: connection,
    provider: provider,
    pg_wrapper: pg_wrapper,
    pg_whitelist: pg_whitelist,
    pg_raffle: pg_raffle,
    pg_playerProfile: pg_playerProfile,
    pg_proxyRewarder: pg_proxyRewarder,
    pg_lockedVoter: pg_lockedVoter,
    pg_snapshots: pg_snapshots,
  } as Workspace;
};
