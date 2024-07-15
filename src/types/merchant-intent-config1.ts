/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "visa_click_to_pay/types";

export type MerchantIntentConfig1 = {
  allowCustomBranding?: boolean;
  allowEnrollment?: boolean;
  backgroundImageId?: string;
  backgroundImages?: types.BackgroundImages1[];
  bannerDisplayName?: string;
  bannerURL?: string;
  billingConstraints?: types.BillingConstraints1;
  buttonAnimationEnabled?: boolean;
  buttonPosition?: string;
  callIDExpiry?: number;
  currencyFormat?: string;
  customerSupportUrl?: string;
  datalevel?: types.MerchantIntentConfig1DatalevelEnum;
  displayName?: string;
  enableTokenization?: boolean;
  enableUserDataPrefill?: boolean;
  encryptionKey?: string;
  externalProfileId?: string;
  guestCheckout?: boolean;
  logoResourceId?: string;
  logoUrl?: string;
  newUserWelcomeMessage?: string;
  newUserWelcomeMessageDescription?: string;
  paymentConstraints?: types.PaymentConstraints1;
  returningUserWelcomeMessage?: string;
  shippingConstraints?: types.ShippingConstraints1;
  srcDpaId?: string;
  threeDSSetup?: types.ThreeDsSetup1;
  tokenizationSetup?: types.TokenizationSetup1;
  websiteUrl?: string;
  widgetStyle?: string;
};
