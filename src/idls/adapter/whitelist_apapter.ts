import { computed } from 'vue';
import { useAnchorWallet } from 'solana-wallets-vue';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { AnchorProvider, Idl, Program } from '@coral-xyz/anchor';
import idl from 'src/idls/whitelist.json';
import { useGlobalStore } from 'stores/globalStore';

const preflightCommitment = 'processed';
const commitment = 'confirmed';
const programID = new PublicKey(import.meta.env.VITE_PROGRAM_WHITELIST);

let workspace = null;
export const useWorkspaceWhitelist = () => workspace;

export const initWorkspace = () => {
  const wallet = useAnchorWallet();
  const connection = useGlobalStore().connection as Connection;
  const provider = computed(
    () =>
      new AnchorProvider(connection, wallet.value, {
        preflightCommitment,
        commitment,
      }),
  );
  const program = computed(
    () => new Program(idl as Idl, programID, provider.value),
  );

  workspace = {
    wallet,
    connection,
    provider,
    program,
  };
};
