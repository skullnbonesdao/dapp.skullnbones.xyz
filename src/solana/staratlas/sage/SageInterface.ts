import { PublicKey, SystemProgram } from '@solana/web3.js';
import sageIDL from './sage.0.30.1.json';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { BN } from '@staratlas/anchor';
import { Game } from 'src/solana/staratlas/sage/types/types_sage';

export const SAGE_ID = new PublicKey(sageIDL.address);

export function findSagePlayerProfile(
  playerProfile: PublicKey,
  gameId: PublicKey,
) {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from('sage_player_profile'),
      playerProfile.toBuffer(),
      gameId.toBuffer(),
    ],
    SAGE_ID,
  );
}

export function findGameState(gameId: PublicKey, updateId: BN) {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from('GameState'),
      gameId.toBuffer(),
      updateId.toArrayLike(Buffer, 'le', 8),
    ],
    SAGE_ID,
  );
}

export async function instruction_sage_registerSagePlayerProfile(
  profile: PublicKey,
  gameId: PublicKey,
  game: Game,
) {
  const sage = useWorkspaceAdapter()?.pg_sage.value;

  const gameState = findGameState(gameId, game.updateId.add(new BN(1)))[0];

  console.log(gameId.toString());
  console.log(gameState.toString());

  return (
    sage!.methods
      .registerSagePlayerProfile()
      .accounts([
        profile,
        getSigner(),
        findSagePlayerProfile(profile, gameId)[0],
        gameId,
        gameState,
        SystemProgram.programId,
      ])
      //.accountsStrict({
      //  profile: profile,
      //   funder: getSigner(),
      //   sagePlayerProfile: findSagePlayerProfile(profile, gameId)[0],
      //   gameAccounts: {
      //     gameId: gameId,
      //     gameState: gameState,
      //    },
      //    systemProgram: SystemProgram.programId,
      //  })
      .remainingAccounts([
        {
          pubkey: gameState,
          isWritable: true,
          isSigner: true,
        },
      ])
      .transaction()
  );
}
