import { computed } from 'vue';
import { useAnchorWallet } from 'solana-wallets-vue';
import { Connection, PublicKey } from '@solana/web3.js';
import { AnchorProvider, Idl, Program } from '@coral-xyz/anchor';
import idl from 'src/idls/dapp_raffle.json';
import { useGlobalStore } from 'stores/globalStore';
import * as anchor from '@coral-xyz/anchor';

const preflightCommitment = 'processed';
const commitment = 'confirmed';
const programID = new PublicKey(idl.metadata.address);

let workspace = null;
export const useWorkspaceRaffle = () => workspace;

export const initWorkspaceRaffle = () => {
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
