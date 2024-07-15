/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "visa_click_to_pay/types";

export type Account1 = {
  accountType: types.Account1AccountTypeEnum;
  cardNickName?: string;
  createdTimestamp?: string;
  linkedTimestamp?: string;
  partnerName?: string;
  paymentInstrumentID?: string;
  shippingAddresses: types.ShippingAddress1[];
  stateInfo: string;
  vaccountID?: string;
  vclientID?: string;
};
