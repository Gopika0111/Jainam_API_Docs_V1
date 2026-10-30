---
title: Funds
---

| Type | Apis                    | Details             |
| ---- | ----------------------- | ------------------- |
| GET  | api/funds-rest/funds/limits | Get available funds |

## Get Limits

Get all information of your trading account like balance, margin utilised, collateral, etc.

**Response Structure**

```
{
    "status": "Ok",
    "message": "Success",
    "infoMessage": null,
    "result": [
      {
            "availableMargin": 9224.69,
            "openingBalance": 9359.05,
            "marginUsed": -134.36,
            "payin": 0.0,
            "stockPledge": 0.0,
            "holdingSellCredit": 0.0,
            "exposure": 0.0,
            "premium": 0.0,
            "bookedPAndL": -134.36,
            "mtmPAndL": 0.0,
            "collateralValue": 0.0,
            "fundsTranstoday": 0.0,
            "creditForSale": 0.0,
            "totalUtilize": -134.36,
            "allocationOrWithdrawal": 9224.69,
            "netAvailableFunds": 9224.69,
            "adhocMargin": 0.0
        }
    ]
}

```

**Parameters**

| Field               | Type    | Description                                                                                         |
|---------------------|---------|-----------------------------------------------------------------------------------------------------|
| status              | String  | Status of the API response, indicating the success or failure of the request.                       |
| infoMessage     | String   | Additional info message, if any (can be null).      |
| result                      | String   | The outcome or result of the operation.                                                             |
| message             | String  | Message providing additional information about the response status.                                 |
| availableMargin     | Float   | Funds available for trading after accounting for used margins and other allocations.               |
| openingBalance      | Float   | Account balance at the start of the trading day.                                                   |
| marginUsed          | Float   | Portion of the margin currently used for open positions or trades.                                 |
| payin               | Float   | Amount deposited into the account by the user.                                                     |
| stockPledge         | Float   | Value of stocks pledged as collateral.                                                              |
| holdingSellCredit   | Float   | Credit received from the sale of holdings, pending settlement.                                     |
| exposure            | Float   | Total exposure amount allocated to open positions.                                                 |
| premium             | Float   | Amount spent on premiums, particularly in options trading.                                         |
| bookedPAndL         | Float   | Realized profit or loss from closed trades.                                                        |
| mtmPAndL            | Float   | Mark-to-market profit or loss, reflecting unrealized gains or losses on open positions.            |
| collateralValue     | Float   | Total value of securities provided as collateral.                                                  |
| fundsTranstoday     | Float   | Net funds transferred into or out of the account today.                                            |
| creditForSale       | Float   | Credit generated from securities sales available for further transactions.                         |
| totalUtilize        | Float   | Total funds utilized across all transactions, including trades and positions.                      |
| allocationOrWithdrawal | Float | Funds either allocated to or withdrawn from the margin account.                                   |
| netAvailableFunds   | Float   | Total funds available for additional trades or withdrawals.                                        |
| adhocMargin         | Float   | Additional margin provided to meet trading requirements.                                           |
