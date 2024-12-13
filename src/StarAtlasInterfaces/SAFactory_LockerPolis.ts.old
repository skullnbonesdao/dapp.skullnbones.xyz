import { AnchorWallet } from 'solana-wallets-vue';
import { useRPCStore } from 'stores/rpcStore';
import {
  Connection,
  PublicKey,
  SystemProgram,
  SYSVAR_INSTRUCTIONS_PUBKEY,
  Transaction,
} from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import { AnchorProvider, Idl, Program, web3 } from '@coral-xyz/anchor';

import proxy_rewarder_idl from 'src/idls/proxy_rewarder.json';
import locked_voter_idl from 'src/idls/locked_voter.json';
import snapshot_idl from 'src/idls/snapshots.json';
import { POLIS } from 'stores/globalStarAtlasLockerStore';

import {
  createAssociatedTokenAccountInstruction,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';

const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID: PublicKey = new PublicKey(
  'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
);

const PROXY_REWARDER_ID = new PublicKey(proxy_rewarder_idl.metadata.address);
const LOCKED_VOTER_ID = new PublicKey(locked_voter_idl.metadata.address);
const SNAPSHOT_ID = new PublicKey(snapshot_idl.metadata.address);

const LOCKER = new PublicKey('5WmM9c9WE71y78Ah8Bp8vgyoStscM1ZZyaaFqRf8b2Qa');

const WHITELIST_ENTRY = new PublicKey(
  'GW8UH9QYNyFd5zVQJ6srjG6DJSq3WkMdAD123Z7LdzwV',
);
const REGISTERED_LOCKER = new PublicKey(
  'EAgUhz4LG8fqtrShFo1NDrvEiNPxEi7kHe96D76NzkAj',
);

const preflightCommitment = 'processed';
const commitment = 'confirmed';

export enum DURATIONS {
  TOW_WEEKS = 2 * 7 * 24 * 60 * 60,
  ONE_MONTH = (1 / 12) * 365 * 24 * 60 * 60,
  TREE_MONTHS = 0.25 * 365 * 24 * 60 * 60,
  SIX_MONTHS = 0.5 * 365 * 24 * 60 * 60,
  NINE_MONTHS = 0.75 * 365 * 24 * 60 * 60,
  ONE_YEAR = 1 * 365 * 24 * 60 * 60,
  TWO_YEARS = 2 * 365 * 24 * 60 * 60,
  THREE_YEARS = 3 * 365 * 24 * 60 * 60,
  FOUR_YEARS = 4 * 365 * 24 * 60 * 60,
  FIVE_YEARS = 5 * 365 * 24 * 60 * 60,
}

export class SAFactory_LockerPolis {
  private owner: PublicKey | undefined;
  private payer: PublicKey | undefined;

  private wallet: any;

  private provider: AnchorProvider | undefined;
  private pg_proxy_rewarder: Program<Idl> | undefined;
  private pg_locked_voter: Program<Idl> | undefined;
  private pg_snapshot: Program<Idl> | undefined;

  public locker: PublicKey | undefined;
  private whitelistEntry: PublicKey | undefined;
  private registeredLocker: PublicKey | undefined;

  public proxyEscrow: PublicKey | undefined;
  private bump_proxyEscrow: number | undefined;

  public proxy: PublicKey | undefined;
  private bump_proxy: number | undefined;

  public escrow: PublicKey | undefined;
  private bump_escrow: number | undefined;

  private ata_proxy: PublicKey | undefined;
  private ata_proxy_bump: number | undefined;

  private ata_escrow: PublicKey | undefined;
  private ata_escrow_bump: number | undefined;

  init(wallet: AnchorWallet, owner: PublicKey, payer: PublicKey) {
    this.wallet = wallet;
    this.owner = owner;
    this.payer = payer;

    this.locker = LOCKER;
    this.whitelistEntry = WHITELIST_ENTRY;
    this.registeredLocker = REGISTERED_LOCKER;

    const connection = useRPCStore().connection as Connection;
    this.provider = new AnchorProvider(connection, this.wallet, {
      preflightCommitment,
      commitment,
    });

    this.pg_proxy_rewarder = new Program(
      proxy_rewarder_idl as Idl,
      new PublicKey(proxy_rewarder_idl.metadata.address),
      this.provider,
    );

    this.pg_locked_voter = new Program(
      locked_voter_idl as Idl,
      LOCKED_VOTER_ID,
      this.provider,
    );

    this.pg_snapshot = new Program(
      snapshot_idl as Idl,
      SNAPSHOT_ID,
      this.provider,
    );
  }

  public async setAccounts() {
    [this.proxyEscrow, this.bump_proxyEscrow] =
      web3.PublicKey.findProgramAddressSync(
        [anchor.utils.bytes.utf8.encode('ProxyEscrow'), this.owner!.toBuffer()],
        PROXY_REWARDER_ID,
      );

    [this.proxy, this.bump_proxy] = web3.PublicKey.findProgramAddressSync(
      [
        anchor.utils.bytes.utf8.encode('Proxy'),
        this.proxyEscrow.toBuffer(),
        this.owner!.toBuffer(),
      ],
      PROXY_REWARDER_ID,
    );

    [this.escrow, this.bump_escrow] = web3.PublicKey.findProgramAddressSync(
      [
        anchor.utils.bytes.utf8.encode('Escrow'),
        this.locker!.toBuffer(),
        this.proxy.toBuffer(),
      ],
      LOCKED_VOTER_ID,
    );

    //ATA TOKENACCOUNT
    [this.ata_proxy, this.ata_proxy_bump] =
      web3.PublicKey.findProgramAddressSync(
        [this.proxy!.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), POLIS.toBuffer()],
        SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
      );
    [this.ata_escrow, this.ata_escrow_bump] =
      web3.PublicKey.findProgramAddressSync(
        [
          this.escrow!.toBuffer(),
          TOKEN_PROGRAM_ID.toBuffer(),
          POLIS.toBuffer(),
        ],
        SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
      );
  }

  private async buildSync(duration: DURATIONS) {
    await this.setAccounts();
    const transaction = new Transaction();

    for (const era of getERAs(duration)) {
      const lockerHistory = (
        await this.pg_snapshot!.account.lockerHistory.all()
      ).find((lh) => lh.account.era == era)!.publicKey;

      const [escrowHistory] = web3.PublicKey.findProgramAddressSync(
        [
          anchor.utils.bytes.utf8.encode('EscrowHistory'),
          this.escrow!.toBuffer(),
          new anchor.BN(era).toBuffer('le', 2),
        ],
        SNAPSHOT_ID,
      );

      transaction.add(
        await this.pg_snapshot!.methods.sync()
          .accounts({
            locker: this.locker,
            escrow: this.escrow,
            lockerHistory: lockerHistory,
            escrowHistory: escrowHistory,
          })
          .instruction(),
      );
    }
  }

  async buildCreateAccounts() {
    await this.setAccounts();
    const transaction = new Transaction();

    // Proxy Rewarder: New Proxy Escrow
    transaction.add(
      await this.pg_proxy_rewarder!.methods.newProxyEscrow(
        new anchor.BN(this.bump_proxyEscrow!),
      )
        .accounts({
          escrowOwner: this.owner,
          proxyEscrow: this.proxyEscrow,
          payer: this.payer,
          systemProgram: SystemProgram.programId,
        })
        .instruction(),
    );

    // Proxy Rewarder: New Proxy
    transaction.add(
      await this.pg_proxy_rewarder!.methods.newProxy(
        new anchor.BN(this.bump_proxy!),
      )
        .accounts({
          proxyEscrow: this.proxyEscrow,
          proxy: this.proxy,
          tokenMint: POLIS,
          proxyOwner: this.owner,
          systemProgram: SystemProgram.programId,
        })
        .instruction(),
    );

    // Locked Voter: New Escrow
    transaction.add(
      await this.pg_locked_voter!.methods.newEscrow(
        new anchor.BN(this.bump_escrow!),
      )
        .accounts({
          locker: this.locker,
          escrow: this.escrow,
          escrowOwner: this.proxy,
          payer: this.payer,
          systemProgram: SystemProgram.programId,
        })
        .instruction(),
    );

    //Create ATA_Proxy
    transaction.add(
      createAssociatedTokenAccountInstruction(
        this.payer!,
        this.ata_proxy,
        this.proxy,
        POLIS,
      ),
    );

    //Create ATA_Escrow
    transaction.add(
      createAssociatedTokenAccountInstruction(
        this.payer,
        this.ata_escrow,
        this.escrow,
        POLIS,
      ),
    );

    return transaction;
  }

  async buildCreateLocker(duration: number, amount: number) {
    await this.setAccounts();

    const transaction = new Transaction();

    //Snapshots: Create Escrow History
    for (const era of getERAs(duration)) {
      const [escrowHistory] = web3.PublicKey.findProgramAddressSync(
        [
          anchor.utils.bytes.utf8.encode('EscrowHistory'),
          this.escrow!.toBuffer(),
          new anchor.BN(era).toBuffer('le', 2),
        ],
        SNAPSHOT_ID,
      );

      transaction.add(
        await this.pg_snapshot!.methods.createEscrowHistory(era)
          .accounts({
            escrow: this.escrow,
            escrowHistory: escrowHistory,
            payer: this.payer,
            systemProgram: SystemProgram.programId,
          })
          .instruction(),
      );
    }

    const [userTokenAccount] = web3.PublicKey.findProgramAddressSync(
      [this.owner!.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), POLIS.toBuffer()],
      SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
    );

    //Proxy Rewarder: Proxy Lock
    transaction.add(
      await this.pg_proxy_rewarder!.methods.proxyLock(
        new anchor.BN(amount),
        new anchor.BN(duration),
      )
        .accounts({
          locker: this.locker,
          escrow: this.escrow,
          userTokenAccount: userTokenAccount,
          proxyTokenAccount: this.ata_proxy,
          escrowTokenAccount: this.ata_escrow,
          proxy: this.proxy,
          payer: this.payer,
          lockedVoterProgram: LOCKED_VOTER_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
          instructionsSysvar: SYSVAR_INSTRUCTIONS_PUBKEY,
          whitelistEntry: this.whitelistEntry,
          registeredLocker: this.registeredLocker,
        })
        .instruction(),
    );

    return transaction;
  }

  async buildClaimLocker() {
    await this.setAccounts();
    const transaction = new Transaction();

    const [userTokenAccount] = web3.PublicKey.findProgramAddressSync(
      [this.owner!.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), POLIS.toBuffer()],
      SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
    );

    transaction.add(
      await this.pg_proxy_rewarder!.methods.claimRewards()
        .accounts({
          escrow: this.escrow,
          locker: this.locker,
          proxy: this.proxy,
          proxyEscrow: this.proxyEscrow,
          escrowHistory: undefined,
          lockerHistory: this.locker,
          treasuryTokenAccount: undefined,
          registeredLocker: undefined,
          treasuryAuthority: undefined,
          userTokenAccount: userTokenAccount,
          escrowOwner: this.owner,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .instruction(),
    );

    return transaction;
  }
}

function getERAs(duration_sec: number): number[] {
  const START_AT = 3;
  const intervals = duration_sec / 60 / 60 / 24 / 255;
  const result = [];

  for (let i = 0; i < intervals; i++) {
    result.push(START_AT + i);
  }

  return result;
}
