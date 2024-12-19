import { AsyncSigner } from '@staratlas/data-source/src/asyncSigner';
import {
  AddressLookupTableAccount,
  Connection,
  Finality,
  SendOptions,
  SerializeConfig,
} from '@solana/web3.js';
import { normalizeArray } from '@staratlas/data-source/src/util';
import {
  InstructionReturn,
  TransactionReturn,
} from '@staratlas/data-source/src/transactions/transactionHandling';

export async function statatlasSendAndCheck(
  instructions: InstructionReturn | InstructionReturn[],
  feePayer: AsyncSigner,
  connection: Connection,
  options?: {
    commitment?: Finality;
    sendOptions?: SendOptions;
    serializeConfig?: SerializeConfig;
    suppressLogging?: boolean;
    postTransactionHandler?: (
      tx: TransactionReturn,
    ) => TransactionReturn | void;
  },
  lookupTables?: AddressLookupTableAccount[],
) {
  instructions = normalizeArray(instructions);

  console.log(instructions);

  /*  const commitment = options?.commitment || 'confirmed';
    let tx = await buildAndSignTransaction(
      instructions,
      feePayer,
      {
        connection,
        commitment,
      },
      lookupTables
    );
    if (options?.postTransactionHandler) {
      const newTx = options.postTransactionHandler(tx);
      if (newTx) {
        tx = newTx;
      }
    }*/
}
