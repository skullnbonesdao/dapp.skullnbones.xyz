import { computed } from 'vue';
import { useAnchorWallet } from 'solana-wallets-vue';
import { Connection, PublicKey } from '@solana/web3.js';
import { AnchorProvider, Idl, Program } from '@coral-xyz/anchor';
import dapp_whitelist_idl from 'src/idls/whitelist.json';
import dapp_raffle_idl from 'src/idls/raffle.json';
import { useGlobalStore } from 'stores/globalStore';
import { useRPCStore } from 'stores/rpcStore';

const preflightCommitment = 'processed';
const commitment = 'confirmed';
const programID_Whitelist = new PublicKey(
  import.meta.env.VITE_PROGRAM_WHITELIST,
);
const programID_Raffle = new PublicKey(import.meta.env.VITE_PROGRAM_RAFFLE);

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

  workspace = {
    wallet,
    connection,
    provider,
    pg_raffle,
    pg_whitelist,
  };
};
