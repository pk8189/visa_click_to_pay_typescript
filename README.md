
# Click to Pay Typescript SDK

## Overview


## Initilization

```typescript
import Client from "visa_click_to_pay"

new Client();
```


### Get Payment Data
> 

```typescript
const response = await client.wallet.payments.get({
  callId: "string",
  dataLevel: "string",
  encryptionKey: "string",
  externalClientId: "string",
  payloadType: "string",
  tokenCryptogramType: "string",
});
```

---

### Get Payload
> 

```typescript
const response = await client.wallet.src.transaction.credentials.list({
  payloadTypeIndicator: "string",
  recipientId: "string",
  serviceId: "string",
  srcClientId: "string",
  srcCorrelationId: "string",
  srcDpaId: "string",
  srciTransactionId: "string",
});
```

---

### CTP Checkout API
> API to checkout for an external SRCi

```typescript
import * as types from "visa_click_to_pay/types"

const response =
  await client.wallet.payments.src.transaction.credentials.create({
    data: {
      assuranceData: {
        cardAssuranceData: "string",
        cardVerificationEntity: "string",
        cardVerificationMethod: "string",
        cardVerificationResults: "string",
        cardVerificationTimestamp: "string",
        cardholderAssuranceData: "string",
        cardholderAuthenticationEntity: "string",
        cardholderAuthenticationMethod: "string",
        cardholderAuthenticationResults: "string",
        cardholderAuthenticationTimestamp: "string",
        cardholderVerificationResults: "string",
        consumerAssuranceData: "string",
        consumerVerificationEntity: "string",
        consumerVerificationMethod: "string",
        consumerVerificationResults: "string",
        consumerVerificationTimestamp: "string",
        deviceAssuranceData: "string",
        deviceVerificationEntity: "string",
        deviceVerificationMethod: "string",
        deviceVerificationResults: "string",
        deviceVerificationTimestamp: "string",
        relationshipAssuranceData: "string",
        relationshipVerificationEntity: "string",
        relationshipVerificationMethod: "string",
        relationshipVerificationResults: "string",
        relationshipVerificationTimestamp: "string",
      },
      authorization: "string",
      checkoutRequestJws:
        "eyJ0eXAiOiJKT1NFIiwiaWF0IjoxNTgzOTQ3Nzk0LCJhbGciOiJSUzI1NiIsImtpZCI6IjhCQTVTQU9MSERSNk5HVVFFV1lMMTFDdjZRZjBkM2NXMFR3aG1Fdkk5U1Y2dHIxRnMifQ.eyJzcmNJbml0aWF0b3JJZCI6ImZmMzU2ZTM1LWVlNzktZjdiOC1kOThmLTEyM2Y5N2ViMzYwMSIsIm1hc2tlZENhcmQiOnsic3JjRGlnaXRhbENhcmRJZCI6IjA3OTI0MmJmLTYyMTYtYjYyNy01NzQzLTE4MzNiNTcxMzUwMSIsInBhbkJpbiI6IjQwMDU1MiIsInBhbkxhc3RGb3VyIjoiODI1NiIsInBhbkV4cGlyYXRpb25Nb250aCI6IjEwIiwicGFuRXhwaXJhdGlvblllYXIiOiIyMDIwIiwiZGlnaXRhbENhcmREYXRhIjp7InN0YXR1cyI6IkFDVElWRSIsInByZXNlbnRhdGlvbk5hbWUiOiJuYW1lb24gY2FyZCIsImRlc2NyaXB0b3JOYW1lIjoibmFtZW9uIGNhcmQiLCJhcnRVcmkiOiJodHRwczovL3Rlc3Qudm1laW1hZ2VzLnZpc2EuY29tLzVSOXlYNUpKSmFZYVpYaHRmWHhQc2hqUmQ5MW1wVkJrZlBwWUpZRWFZa0kucG5nIiwiYXJ0SGVpZ2h0IjoxNjQsImFydFdpZHRoIjoxMDV9LCJkYXRlb2ZDYXJkQ3JlYXRlZCI6MTU4Mzk0Nzc4OTMwNCwibWFza2VkQmlsbGluZ0FkZHJlc3MiOnsiYWRkcmVzc0lkIjoiOGU1NWQzN2YtODk4Yy1kZTAwLWJiMjUtMWYwM2FlMjQ2OTAxIiwibGluZTEiOiIxMDAqKioqKiIsImxpbmUyIjoiQXB0KioqKioiLCJjaXR5IjoiKioqKioiLCJzdGF0ZSI6IkZMIiwiemlwIjoiKioqKioiLCJjb3VudHJ5Q29kZSI6IlVTIn0sInBheW1lbnRDYXJkVHlwZSI6IkNSRURJVCIsImNvdW50cnlDb2RlIjoiODQwIn0sIm1hc2tlZENvbnN1bWVyIjp7InNyY0NvbnN1bWVySWQiOiJhZTNmNmQ4Ny03MWFjLTNjNDMtODU5YS0xOWE2YzI4MTA1MDEiLCJjb3VudHJ5Q29kZSI6IlVTIiwibGFuZ3VhZ2VDb2RlIjoiZW4tVVMiLCJzdGF0dXMiOiJBQ1RJVkUiLCJkYXRlQ29uc3VtZXJBZGRlZCI6IjE1ODM5NDc3ODEyODEiLCJtYXNrZWRDb25zdW1lcklkZW50aXR5Ijp7ImlkZW50aXR5VHlwZSI6IkVNQUlMX0FERFJFU1MiLCJtYXNrZWRJZGVudGl0eVZhbHVlIjoidmlzKipAZGlzcG9zdGFibGUuY29tIn0sIm1hc2tlZEVtYWlsQWRkcmVzcyI6InZpcyoqQGRpc3Bvc3RhYmxlLmNvbSIsIm1hc2tlZEZpcnN0TmFtZSI6ImYqKioqKiIsIm1hc2tlZExhc3ROYW1lIjoiZioqKioqIiwibWFza2VkRnVsbE5hbWUiOiJmKioqKiogZioqKioqIn0sIm1hc2tlZFNoaXBwaW5nQWRkcmVzc2VzIjpbeyJhZGRyZXNzSWQiOiI4YWIzNDEzZC02MzAwLTg1ODAtOGY4OC0xMmY5MmJkZTdhMDEiLCJuYW1lIjoiSSoqKioqIFQqKioqKiIsImxpbmUxIjoiMTAwKioqKioiLCJsaW5lMiI6IkFwdCoqKioqIiwiY2l0eSI6IioqKioqIiwic3RhdGUiOiJGTCIsImNvdW50cnlDb2RlIjoiVVMiLCJ6aXAiOiIqKioqKiJ9LHsiYWRkcmVzc0lkIjoiOGU1NWQzN2YtODk4Yy1kZTAwLWJiMjUtMWYwM2FlMjQ2OTAxIiwibmFtZSI6IlMqKioqKiBIKioqKioiLCJsaW5lMSI6IjEwMCoqKioqIiwibGluZTIiOiJBcHQqKioqKiIsImNpdHkiOiIqKioqKiIsInN0YXRlIjoiRkwiLCJjb3VudHJ5Q29kZSI6IlVTIiwiemlwIjoiKioqKioifV0sInNyY0NvcnJlbGF0aW9uSWQiOiI0MjBhNDk5ZC01MDExLTIyNzgtOTBhNC0xMDBhOThiMTJmMDEiLCJzcmNpVHJhbnNhY3Rpb25JZCI6IjEyMzQ1Iiwic3JjRHBhSWQiOiIzZGM4N2UzYi1kMWZlLWUxMzEtODNlOS0xNWVkNjM2MGExMDEiLCJkcGFEYXRhIjp7ImRwYU5hbWUiOiJDaW5lTWFyayJ9LCJkcGFUcmFuc2FjdGlvbk9wdGlvbnMiOnsidHJhbnNhY3Rpb25BbW91bnQiOnsidHJhbnNhY3Rpb25BbW91bnQiOjEwMC4wLCJ0cmFuc2FjdGlvbkN1cnJlbmN5Q29kZSI6IlVTRCJ9LCJ0cmFuc2FjdGlvblR5cGUiOiJQVVJDSEFTRSIsImRwYUJpbGxpbmdQcmVmZXJlbmNlIjoiUE9TVEFMX0NPVU5UUlkiLCJkcGFBY2NlcHRlZEJpbGxpbmdDb3VudHJpZXMiOlsiVVMiLCJDQSJdLCJkcGFTaGlwcGluZ1ByZWZlcmVuY2UiOiJGVUxMIiwiZHBhQWNjZXB0ZWRTaGlwcGluZ0NvdW50cmllcyI6WyJVUyIsIkNBIl0sImNvbnN1bWVyRW1haWxBZGRyZXNzUmVxdWVzdGVkIjp0cnVlLCJjb25zdW1lck5hbWVSZXF1ZXN0ZWQiOnRydWUsImNvbnN1bWVyUGhvbmVOdW1iZXJSZXF1ZXN0ZWQiOnRydWUsIm1lcmNoYW50Q2F0ZWdvcnlDb2RlIjoiMzAwMCIsIm1lcmNoYW50Q291bnRyeUNvZGUiOiJVUyIsIm1lcmNoYW50T3JkZXJJZCI6IjI4YjFiNjFiLWJiZWMtNDYzNy1iNzhmLTMzYmFiYzNiNTE4NyIsInRocmVlRHNQcmVmZXJlbmNlIjoiT05CRUhBTEYiLCJ0aHJlZURzSW5wdXREYXRhIjp7InJlcXVlc3RvcklkIjoiMjM0MjQyNSIsImFjcXVpcmVySWQiOiI0NTU1NTUiLCJhY3F1aXJlck1pZCI6IjEyMzQ1Njc4In0sInNyY1Rva2VuUmVxdWVzdERhdGEiOnt9LCJwYXltZW50T3B0aW9ucyI6W3siZHBhRHluYW1pY0RhdGFUdGxNaW51dGVzIjoxNTAsImR5bmFtaWNEYXRhVHlwZSI6Ik5PTkUifV0sImRwYUxvY2FsZSI6ImVuLVVTIiwiY3VzdG9tSW5wdXREYXRhIjp7fSwib3JkZXJUeXBlIjoiYWJjIzIxIn0sImNoZWNrb3V0UmVxdWVzdFVyaSI6InRlc3R2YWx1ZSIsImNoZWNrb3V0UmVzcG9uc2VVcmkiOiJodHRwOi8vYW1leC5jb20iLCJwYXlsb2FkVHlwZUluZGljYXRvckNoZWNrb3V0IjoiRlVMTCJ9.oEXMG3IiDmpw0JDWteIqAc5Dsp82fekiXX0mCzznxn2OZ-dZRNSnMbVPGWlQO18h8ZvvlZvkSeBCsY7SQMy6LF4hwGYNCM8HAItz798IFSN7IgB07P6Mq12GrlVQiRm5z3fYkf7AOW2ohCEN7n3SF4BMM8p_6vjivVG_FLzUDsMqQ8PdA6S-XXlFQGGFxKuBc-dXEsGYkr3v-2Z0TgVhX1pv54CKDG8RekW1_MHEDremGjRyh11sybCVcnfLvTKLccIrewP7Fp0UDVanGHEnVZp-DvrwPrAPETsgkzyTUnEMPyitHv01T4oLxTFj6pqG2G1B-SzFdYsh8vHqs_bleQ",
      checkoutResponseUri: "string",
      complianceSettings: {
        cookie: {
          acceptedVersion: "string",
          latestVersion: "string",
          latestVersionUri: "string",
        },
        geoLocation: {
          acceptedVersion: "string",
          latestVersion: "string",
          latestVersionUri: "string",
        },
        privacy: {
          acceptedVersion: "string",
          latestVersion: "string",
          latestVersionUri: "string",
        },
        tnc: {
          acceptedVersion: "string",
          latestVersion: "string",
          latestVersionUri: "string",
        },
      },
      consumerId: "string",
      customInputData: { nvPairs: [{ name: "string", value: "string" }] },
      dpaData: {
        applicationType: types.DpaData2ApplicationTypeEnum.WebBrowser,
        dpaAddress: {
          addressId: "string",
          city: "string",
          countryCode: "string",
          createTime: "string",
          lastUsedTime: "string",
          line1: "string",
          line2: "string",
          line3: "string",
          name: "string",
          state: "string",
          zip: "string",
        },
        dpaEmailAddress: "string",
        dpaLogoUri: "string",
        dpaName: "string",
        dpaPhoneNumber: { countryCode: "string", phoneNumber: "string" },
        dpaPresentationName: "string",
        dpaSupportEmailAddress: "string",
        dpaSupportPhoneNumber: { countryCode: "string", phoneNumber: "string" },
        dpaSupportUri: "string",
        dpaUri: "string",
        merchantAccountInformation: "string",
        terminalData: { initiationMethod: "string", posEntryMode: "string" },
      },
      dpaTransactionOptions: {
        acquirerId: "string",
        acquirerMid: "string",
        additionalSellerData: {
          customInputData: [{ key: "string", value: "string" }],
        },
        consumerEmailAddressRequested: true,
        consumerInputData: {
          billNumber: "string",
          customInputData: [{ key: "string", value: "string" }],
          customerLabel: "string",
          loyaltyNumber: "string",
          mobileNumber: "string",
          purposeOfTransaction: "string",
          referenceLabel: "string",
          storeLabel: "string",
          terminalLabel: "string",
        },
        consumerNameRequested: true,
        consumerNationalIdentifierRequested: true,
        consumerPhoneNumberRequested: true,
        customInputData: { nvPairs: [{ name: "string", value: "string" }] },
        dpaAcceptedBillingCountries: ["string"],
        dpaAcceptedShippingCountries: ["string"],
        dpaBillingPreference:
          types.DpaTransactionOptions3DpaBillingPreferenceEnum.None,
        dpaLocale: "string",
        dpaName: "string",
        dpaShippingPreference:
          types.DpaTransactionOptions3DpaShippingPreferenceEnum.None,
        dynamicDataType:
          types.DpaTransactionOptions3DynamicDataTypeEnum
            .CardApplicationCryptogramShortForm,
        merchantCategoryCode: "string",
        merchantChannel: "string",
        merchantCountryCode: "string",
        merchantOrderId: "string",
        orderType: "string",
        paymentOptions: [
          {
            dpaDynamicDataTtlMinutes: 123,
            dynamicDataType:
              types.PaymentOptions2DynamicDataTypeEnum
                .CardApplicationCryptogramShortForm,
          },
        ],
        sellerPresentedData: {
          customInputData: [{ key: "string", value: "string" }],
          qrData: "string",
        },
        srcTokenRequestData: { nvPairs: [{ name: "string", value: "string" }] },
        threeDsInputData: {
          acquirerId: "string",
          acquirerMid: "string",
          requestorId: "string",
        },
        threeDsPreference:
          types.DpaTransactionOptions3ThreeDsPreferenceEnum.None,
        transactionAmount: {
          additionalAmounts: [
            {
              additionalAmountType:
                types.AdditionalAmountAdditionalAmountTypeEnum.Tip,
              additionalAmountValue: "string",
            },
          ],
          transactionAmount: 123.0,
          transactionCurrencyCode: "string",
        },
        transactionType:
          types.DpaTransactionOptions3TransactionTypeEnum.Purchase,
      },
      payloadTypeIndicatorCheckout:
        types.CheckoutRequest3PayloadTypeIndicatorCheckoutEnum.Summary,
      payloadTypeIndicatorPayload:
        types.CheckoutRequest3PayloadTypeIndicatorPayloadEnum.Summary,
      profileName: "string",
      recipientIdCheckout: "string",
      recipientIdPayload: "string",
      serviceId: "xyz#21",
      shippingAddress: {
        accepted: true,
        additionalLocation: "string",
        addressVerificationStatusOverride:
          types.Address2AddressVerificationStatusOverrideEnum.NotVerified,
        billingAccepted: true,
        changed: ["string"],
        city: "string",
        countryCode: "string",
        county: "string",
        default: true,
        failed: ["string"],
        firstName: "string",
        id: "string",
        lastName: "string",
        lastUpdateTimestamp: "1970-01-01T00:00:00",
        line1: "string",
        line1Raw: "string",
        line2: "string",
        line3: "string",
        masked: true,
        neighborhood: "string",
        nickName: "string",
        personName: "string",
        phone: "string",
        phoneNumberCountryAlpha2Code: "string",
        phoneNumberCountryCode: "string",
        pointOfReference: "string",
        postalCode: "string",
        stateProvinceCode: "string",
        streetName: "string",
        streetNumber: "string",
        verificationStatus: types.Address2VerificationStatusEnum.NotVerified,
        verified: ["string"],
      },
      shippingAddressId: "8e55d37f-898c-de00-bb25-1f03ae246901",
      shippingAddressIds: ["string"],
      srcClientId: "J6XDQQQZ5CDSSJK0462Y11v-YWWFJ4O8G-3nTFwIIDwmqBLMM",
      srcCorrelationId: "420a499d-5011-2278-90a4-100a98b12f01",
      srcDigitalCardId: "string",
      srcDpaId: "3dc87e3b-d1fe-e131-83e9-15ed6360a101",
      srcInitiatorId: "string",
      srciTransactionId: "12345",
    },
  });
```

---

### CTP Prepare Checkout API
> API to prepare checkout for an external SRCi

```typescript
import * as types from "visa_click_to_pay/types"

const response =
  await client.wallet.payments.src.transaction.preparedata.create({
    data: {
      assuranceData: {
        cardVerificationResults: "string",
        cardholderVerificationResults: "string",
        consumerVerificationResults: "string",
      },
      authorization: "string",
      checkoutResponseUri: "http://amex.com",
      consumerId: "69540639-c79c-5ee0-60d1-1ec65f27b601",
      customInputData: { nvPairs: [{ name: "string", value: "string" }] },
      dpaData: {
        applicationType:
          types
            .PostWalletPaymentsSrcTransactionPreparedataBodyDpaDataApplicationTypeEnum
            .WebBrowser,
        dpaAddress: {
          addressId: "string",
          city: "string",
          countryCode: "string",
          createTime: "string",
          lastUsedTime: "string",
          line1: "string",
          line2: "string",
          line3: "string",
          name: "string",
          state: "string",
          zip: "string",
        },
        dpaEmailAddress: "string",
        dpaLogoUri: "string",
        dpaName: "CineMark",
        dpaPhoneNumber: { countryCode: "string", phoneNumber: "string" },
        dpaPresentationName: "string",
        dpaSupportEmailAddress: "string",
        dpaSupportPhoneNumber: { countryCode: "string", phoneNumber: "string" },
        dpaSupportUri: "string",
        dpaUri: "string",
      },
      dpaTransactionOptions: {
        consumerEmailAddressRequested: true,
        consumerNameRequested: true,
        consumerPhoneNumberRequested: true,
        customInputData: { nvPairs: [{ name: "string", value: "string" }] },
        dpaAcceptedBillingCountries: [{}, {}],
        dpaAcceptedShippingCountries: [{}, {}],
        dpaBillingPreference:
          types
            .PostWalletPaymentsSrcTransactionPreparedataBodyDpaTransactionOptionsDpaBillingPreferenceEnum
            .PostalCountry,
        dpaLocale: "en-US",
        dpaShippingPreference:
          types
            .PostWalletPaymentsSrcTransactionPreparedataBodyDpaTransactionOptionsDpaShippingPreferenceEnum
            .Full,
        merchantCategoryCode: "3000",
        merchantCountryCode: "US",
        merchantOrderId: "28b1b61b-bbec-4637-b78f-33babc3b5187",
        orderType: "abc#21",
        paymentOptions: [
          {
            dpaDynamicDataTtlMinutes: 150,
            dynamicDataType:
              types
                .PostWalletPaymentsSrcTransactionPreparedataBodyDpaTransactionOptionsPaymentOptionsItemDynamicDataTypeEnum
                .None,
          },
        ],
        srcTokenRequestData: { nvPairs: [{ name: "string", value: "string" }] },
        threeDsInputData: {
          acquirerId: "455555",
          acquirerMid: "12345678",
          requestorId: "2342425",
        },
        threeDsPreference:
          types
            .PostWalletPaymentsSrcTransactionPreparedataBodyDpaTransactionOptionsThreeDsPreferenceEnum
            .Onbehalf,
        transactionAmount: {
          transactionAmount: 100,
          transactionCurrencyCode: "USD",
        },
        transactionType:
          types
            .PostWalletPaymentsSrcTransactionPreparedataBodyDpaTransactionOptionsTransactionTypeEnum
            .Purchase,
      },
      payloadTypeIndicatorCheckout:
        types
          .PostWalletPaymentsSrcTransactionPreparedataBodyPayloadTypeIndicatorCheckoutEnum
          .Full,
      payloadTypeIndicatorPayload:
        types
          .PostWalletPaymentsSrcTransactionPreparedataBodyPayloadTypeIndicatorPayloadEnum
          .Summary,
      recipientIdCheckout: "string",
      recipientIdPayload: "string",
      serviceId: "string",
      shippingAddressIds: [{}, {}],
      srcClientId: "J6XDQQQZ5CDSSJK0462Y11v-YWWFJ4O8G-3nTFwIIDwmqBLMM",
      srcCorrelationId: null,
      srcDigitalCardId: "146e821d-aeb1-dd57-a0ec-1ad7179d7b01",
      srcDpaId: "3dc87e3b-d1fe-e131-83e9-15ed6360a101",
      srcInitiatorId: "ff356e35-ee79-f7b8-d98f-123f97eb3601",
      srciTransactionId: "12345",
    },
  });
```

---

### Payment Confirmation
> API to retrieve the transaction payload. This API is based off of EMVCo 1.0 DRAFT spec and is expected to be invoked by a Non-Visa SRCI

```typescript
const response = await client.wallet.src.confirmations.create({
  data: {
    confirmationData: {
      assuranceData: {
        cardVerificationEntity: "string",
        cardVerificationMethod: "string",
        cardVerificationResults: "string",
        cardholderVerificationResults: "string",
        consumerVerificationResults: "string",
      },
      checkoutEventStatus: "string",
      checkoutEventType: "01",
      confirmationReason: "Reasons",
      confirmationStatus: "02",
      confirmationTimestamp: "string",
      networkAuthorizationCode: "123456",
      networkTransactionIdentifier: "78910",
      paymentNetworkReference: "string",
      transactionAmount: {
        transactionAmount: 99.99,
        transactionCurrencyCode: "USD",
      },
    },
    serviceId: "string",
    srcClientId: "apikey",
    srcCorrelationId: "intentId",
    srcDpaId: "string",
    srciTransactionId: "string",
  },
});
```

---

### Update Pay Info
> 

```typescript
const response = await client.wallet.payments.put({ callId: "string" });
```


