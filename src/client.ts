/**
 * File Generated by Sideko (sideko.dev)
 */
import { CoreClient } from "visa_click_to_pay/core";
import { Environment } from "visa_click_to_pay/environment";
import { WalletClient } from "visa_click_to_pay/resources/wallet";

export interface ClientOptions {
  baseUrl?: string;
  environment?: Environment;
  timeout?: number;
}

export class Client {
  protected _client: CoreClient;
  // register resources (keep comment for code generation)
  wallet: WalletClient;

  constructor(opts?: ClientOptions) {
    const baseUrl = opts?.baseUrl
      ? opts?.baseUrl
      : opts?.environment ?? Environment.Default;
    this._client = new CoreClient({ baseUrl, timeout: opts?.timeout });

    // register auth methods (keep comment for code generation)

    // init resources (keep comment for code generation)
    this.wallet = new WalletClient(this._client);
  }

  // register api methods (keep comment for code generation)
}
