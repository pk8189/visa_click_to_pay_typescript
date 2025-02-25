/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "visa_click_to_pay/types";

export type PaymentInstrument1 = {
  accounts: types.Account1[];
  billingAddress?: types.Address1;
  cardArt: types.CardArt1;
  cardType: string;
  expired?: boolean;
  lastFourDigits: string;
  verificationStatus?: types.PaymentInstrument1VerificationStatusEnum;
};
