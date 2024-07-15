/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "visa_click_to_pay/core";
import * as requests from "visa_click_to_pay/resources/wallet/payments/src/transaction/credentials/request-types";
import * as types from "visa_click_to_pay/types";

export class CredentialsClient extends CoreResourceClient {
  // register resources (keep comment for code generation)

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
  }

  // register api methods (keep comment for code generation)

  /**
   * API to checkout for an external SRCi
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CheckoutResponse> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "post",
      path: "/wallet/payments/src/transaction/credentials",
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
