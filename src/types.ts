import * as anchor from "@coral-xyz/anchor";
import { Greeter } from "./contracts/types/greeter";

export type Contracts = {
  greeter: anchor.Program<Greeter>;
};
