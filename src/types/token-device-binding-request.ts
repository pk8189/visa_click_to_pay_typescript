/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "visa_click_to_pay/types";

export type TokenDeviceBindingRequest = {
  clientDeviceID?: string;
  clientReferenceID?: string;
  status?: types.TokenDeviceBindingRequestStatusEnum;
  stepUpRequests?: types.StepUpRequest[];
};
