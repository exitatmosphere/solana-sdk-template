import * as anchor from "@coral-xyz/anchor";
import { Wallet } from "@coral-xyz/anchor/dist/cjs/provider";
import idl from "./contracts/idl/greeter.json";
import { Contracts } from "./types";
import { Greeter } from "./contracts/types/greeter";
import { GREETING_ACCOUNT_SEED_PHRASE } from "./constants";

export class GreeterClient {
  private readonly provider: anchor.AnchorProvider;

  constructor(connection: anchor.web3.Connection, wallet: Wallet) {
    this.provider = new anchor.AnchorProvider(connection, wallet);
  }

  public get rpcUrl(): string {
    return this.provider.connection.rpcEndpoint;
  }

  public get signerAddr(): string {
    return this.provider.publicKey.toBase58();
  }

  protected async getContracts(): Promise<Contracts> {
    const greeter = new anchor.Program(idl as Greeter, this.provider);
    return {
      greeter,
    };
  }

  public async getGreeting(): Promise<string> {
    const { greeter } = await this.getContracts();

    const greeterAccount = (
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from(GREETING_ACCOUNT_SEED_PHRASE)],
        greeter.programId
      )
    )[0];
    const greetingData =
      await greeter.account.greetingData.fetch(greeterAccount);

    return greetingData.greeting;
  }

  public async setGreeting(greeting: string): Promise<void> {
    const { greeter } = await this.getContracts();

    await greeter.methods
      .setGreeting(greeting)
      .accounts({ signer: this.signerAddr })
      .rpc();
  }
}
