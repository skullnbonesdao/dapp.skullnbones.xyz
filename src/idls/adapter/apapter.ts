import { computed } from 'vue';
import { useAnchorWallet } from 'solana-wallets-vue';
import { Connection, PublicKey } from '@solana/web3.js';
import { AnchorProvider, Idl, Program } from '@coral-xyz/anchor';
import dapp_whitelist_idl from 'src/idls/whitelist.json';
import dapp_raffle_idl from 'src/idls/raffle.json';
import proxy_rewarder_idl from 'src/idls/proxy_rewarder.json';
import locked_voter_idl from 'src/idls/locked_voter.json';
import snapshot_idl from 'src/idls/snapshots.json';
import { useGlobalStore } from 'stores/globalStore';
import { useRPCStore } from 'stores/rpcStore';

const preflightCommitment = 'processed';
const commitment = 'confirmed';
const programID_Whitelist = new PublicKey(
  import.meta.env.VITE_PROGRAM_WHITELIST,
);
const programID_Raffle = new PublicKey(import.meta.env.VITE_PROGRAM_RAFFLE);
const programID_ProxyRewarder = new PublicKey(
  proxy_rewarder_idl.metadata.address,
);
const programID_LockedVoter = new PublicKey(locked_voter_idl.metadata.address);
const programID_snapshot = new PublicKey(snapshot_idl.metadata.address);

let workspace = null;
export const useWorkspaceAdapter = () => workspace;

export const initWorkspaceAdapter = () => {
  const wallet = useAnchorWallet();
  const connection = useRPCStore().connection as Connection;
  const provider = computed(
    () =>
      new AnchorProvider(connection, wallet.value, {
        preflightCommitment,
        commitment,
      }),
  );
  const pg_whitelist = computed(
    () =>
      new Program(
        dapp_whitelist_idl as Idl,
        programID_Whitelist,
        provider.value,
      ),
  );
  const pg_raffle = computed(
    () => new Program(dapp_raffle_idl as Idl, programID_Raffle, provider.value),
  );

  const pg_proxy_rewarder = computed(
    () =>
      new Program(
        proxy_rewarder_idl as Idl,
        programID_ProxyRewarder,
        provider.value,
      ),
  );

  const pg_locked_voter = computed(
    () =>
      new Program(
        locked_voter_idl as Idl,
        programID_LockedVoter,
        provider.value,
      ),
  );

  const pg_snapshot = computed(
    () => new Program(snapshot_idl as Idl, programID_snapshot, provider.value),
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
