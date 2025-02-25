/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "visa_click_to_pay/types";

export type ConfirmationData = {
  assuranceData?: types.AssuranceData;
  checkoutEventStatus?: string;
  checkoutEventType?: string;
  confirmationReason?: string;
  confirmationStatus?: string;
  confirmationTimestamp?: string;
  networkAuthorizationCode?: string;
  networkTransactionIdentifier?: string;
  paymentNetworkReference?: string;
  transactionAmount?: types.TransactionAmount;
};
