/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "visa_click_to_pay/types";

export type IntentUpdateSrcResponse = {
  assuranceData?: types.AssuranceData;
  encryptedPayload?: string;
  eventHistory?: string;
  isGuestCheckout?: boolean;
  isNewUser?: boolean;
  issuerStepUpResponse?: types.TokenDeviceBindingRequest;
  maskedCard?: types.MaskedCard;
  maskedConsumer?: types.SrcConsumer;
  responseStatus?: types.ResponseStatus;
  shippingAddressZIP?: string;
  shippingAddressZip?: string;
  shippingCountryCode?: string;
  srcCorrelationId: string;
  srciTransactionId: string;
  threeDsOutputDatas?: types.KeyValueData[];
};
