/**
 * File Generated by Sideko (sideko.dev)
 */
import { CoreResourceClient, CoreClient } from "visa_click_to_pay/core";
import { CredentialsClient } from "visa_click_to_pay/resources/wallet/payments/src/transaction/credentials";
import { PreparedataClient } from "visa_click_to_pay/resources/wallet/payments/src/transaction/preparedata";

export class TransactionClient extends CoreResourceClient {
  // register resources (keep comment for code generation)
  credentials: CredentialsClient;
  preparedata: PreparedataClient;

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
    this.credentials = new CredentialsClient(this._client);
    this.preparedata = new PreparedataClient(this._client);
  }

  // register api methods (keep comment for code generation)
}
