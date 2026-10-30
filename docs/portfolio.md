---
title: Portfolio
---

# Portfolio

This API lets you retrieve holdings and positions in your portfolio.

| Method | API                         | Detail                                                 |
| ------ | --------------------------- | ------------------------------------------------------ |
| GET    | api/ho-rest/holdings            | Retrieve the list of long term equity holdings         |
| GET    | api/po-rest/positions           | Retrieve the list of short term positions              |
| POST   | api/po-rest/positions/conversion | Convert intraday to long term or long term to intraday |

## Holdings

Holdings contain the long term equity Holdings of the customer. All the financial instruments in the holdings reside in the customer’s DEMAT account indefinitely until its sold or is delisted or changed by the exchanges. Changes to DEMAT account is settled in T+1 days.

**Response Structure**

```
{
    "status": "Ok",
    "message": "Success",
    "infoMessage": null,
    "result": [
        {
            "stat": "Ok",
            "poaStatus": 0,
            "holdings": [
                {
                    "isin": "INE512B01022",
                    "realizedPnl": "-0.10",
                    "unrealizedPnl": "-0.10",
                    "netPnl": "-0.10",
                    "netQty": "2",
                    "buyPrice": "2.85",
                    "holdQty": "0",
                    "dpQty": "0",
                    "benQty": "0",
                    "unpledgedQty": "0",
                    "collateralQty": "0",
                    "brkCollQty": "0",
                    "btstQty": "0",
                    "usedQty": "0",
                    "tradedQty": "0",
                    "sellableQty": "0",
                    "authQty": "0",
                    "authFlag": false,
                    "sellAmount": null,
                    "symbol": [
                        {
                            "exchange": "BSE",
                            "token": "532666",
                            "tradingSymbol": "FCSSOFT",
                            "pdc": "2.82",
                            "ltp": "2.80"
                        },
                        {
                            "exchange": "NSE",
                            "token": "11999",
                            "tradingSymbol": "FCSSOFT",
                            "pdc": "2.8",
                            "ltp": "2.80"
                        }
                    ]
                }
            ]
        }
    ]
}

```

**Parameters**

| Field                       | Type     | Description                                                                                         |
|-----------------------------|----------|-----------------------------------------------------------------------------------------------------|
| status                      | String   | The status of the request or transaction.                                                           |
| infoMessage     | String   | Additional info message, if any (can be null).      |
| message                     | String   | Any message or information related to the status.                                                   |
| result                      | String   | The outcome or result of the operation.                                                             |
| isin             | String    | International Securities Identification Number (ISIN) for the stock. |
| realizedPnl      | String    | Profit or loss realized from completed trades, represented as a monetary value. |
| unrealizedPnl    | String    | Profit or loss from open positions, which have not yet been sold. |
| netPnl           | String    | Total profit or loss, summing realized and unrealized PnL.     |
| netQty           | String    | Net quantity of shares held in the portfolio.                 |
| buyPrice         | String    | Average price at which the stock was purchased.               |
| holdQty          | String    | Quantity of stock currently held.                             |
| dpQty            | String    | Quantity held in the Depository Participant (DP) account.     |
| benQty           | String    | Beneficial quantity available in the Demat account.           |
| unpledgedQty     | String    | Quantity of stocks that are not pledged and available for trading. |
| collateralQty    | String    | Quantity of stocks used as collateral for margin or loans.    |
| brkCollQty       | String    | Collateral quantity specifically pledged with the broker.    |
| btstQty          | String    | Buy Today, Sell Tomorrow (BTST) quantity.                     |
| usedQty          | String    | Quantity already used for trading.                            |
| tradedQty        | String    | Total quantity traded.                                        |
| sellableQty      | String    | Quantity available for selling.                               |
| authQty          | String    | Authorized quantity for transactions.                         |
| authFlag         | Boolean   | Indicates if the quantity is authorized (true/false).         |
| sellAmount       | String    | Amount from stock sales (if applicable).                      |
| exchange                    | String  | [Code representing the exchange where the trade is executed](Appendix.md#exchange)         |
| token            | String    | Token number of the stock.                                    |
| tradingSymbol    | String    | Trading symbol of the stock.                                  |
| pdc              | String    | Previous day's closing price.                                 |
| ltp              | String    | Last traded price of the stock.                               |


## Positions

Users can retrieve a list of all open positions for the day. This includes all F&O carryforward positions as well.

**Response Structure**

```
{
    "status": "Ok",
    "message": "Success",
    "result": [
          {
            "displayName": "BSE-EQ",
            "tradingsymbol": "BSE",
            "token": "19585",
            "exchange": "NSE",
            "product": "MIS",
            "netQty": "0",
            "netAvgPrice": "0.00",
            "buyQty": "11",
            "buyPrice": "4440.51",
            "sellQty": "11",
            "sellPrice": "4440.92",
            "mtm": null,
            "mtmBuyPrice": "4440.51",
            "mtmSellprice": "4440.92",
            "pnl": null,
            "realizedPnl": "0.0",
            "unrealizedPnl": null,
            "multiplier": "1.0",
            "lotsize": "1",
            "ticksize": null,
            "pdc": "4392.45",
            "ltp": null,
            "breakevenPrice": "0.0",
            "overnightQty": "0",
            "overnightPrice": "0.0",
            "orderType": null,
            "ret": "DAILY"
        }
     ]
 }
```

**Parameters**

| Field                        | Type     | Description                                                                                         |
|------------------------------|----------|-----------------------------------------------------------------------------------------------------|
| status                       | String   | The current status of the operation or request.                                                     |
| message                      | String   | Any message or information related to the status.                                                   |
| result                       | Array   | Array containing details of the stock holdings.                                                        |
| displayName                  | String   | The name displayed for the security or product.                                                     |
| tradingsymbol                | String   | The symbol or ticker representing the security in the trading system.                               |
| token                        | String   | A unique identifier or code representing the security or transaction.                               |
| exchange                     | String  | [Code representing the exchange where the trade is executed](Appendix.md#exchange)         |
| product        | String  | [Product category of the trade.](Appendix.md#product-type)                    |
| netQty                       | Int   | The net quantity of securities after considering all trades.                                        |
| netAveragePrice              | Float   | The average price of the securities based on net quantity.                                          |
| buyQty                       | Int   | The quantity of securities purchased.                                                               |
| buyPrice                     | Float   | The price at which the securities were purchased.                                                   |
| sellQty                      | Int   | The quantity of securities sold.                                                                    |
| sellPrice                    | Float   | The price at which the securities were sold.                                                        |
| marketToMarket               | Float   | The mark-to-market value, showing the current value of the open positions based on the latest market price. |
| marketToMarketBuyPrice       | Float   | The mark-to-market value based on the buying price.                                                 |
| marketToMarketSellprice      | Float   | The mark-to-market value based on the selling price.                                                |
| profitOrLoss                 | Float   | The overall profit or loss from the trade or position.                                              |
| realizedProfitOrLoss         | String   | The profit or loss realized after closing a position.                                               |
| unrealizedProfitOrLoss       | Float   | The potential profit or loss on open positions based on the current market price.                   |
| multiplier                   | String   | A factor used to adjust the quantity or price, often related to derivatives.                        |
| lotsize                      | String   | The minimum quantity or lot size for trading the security.                                          |
| ticksize                     | String   | The minimum price movement allowed for the security.                                                |
| previousDayClose             | Float   | The closing price of the security on the previous trading day.                                      |
| ltp                          | String   | Last Traded Price; the most recent price at which the security was traded.                          |
| breakevenPrice               | String   | The price at which the position would result in neither profit nor loss.                            |
| overnightQty                 | Int   | The quantity of securities held overnight.                                                          |
| overnightPrice               | Float   | The price of the securities held overnight.                                                         |
| orderType      | String  | [Type of order](Appendix.md#order-type)                                        |
| ret            | String   | Retention type of the order (e.g., DAILY).         |





## Convert Position

Users can convert their open position from intraday to delivery .

**Request Structure**

```
{
    "exchange": "NSE",
    "tradingsymbol": "DISHTV",
    "token": "14537",
    "qty": "1",
    "product": "MIS",
    "prevProduct": "CNC",
    "transType": "B",
    "posType": "DAY"
}
```

**Parameters**


| Field           | Type     | Description                                          |
|-----------------|----------|------------------------------------------------------|
| exchange       | String  | [Code representing the exchange where the trade is executed](Appendix.md#exchange)         |
| tradingsymbol   | String   | Trading symbol of the stock.                        |
| token           | String   | Token number of the stock.                          |
| qty             | String   | Quantity of stock ordered.                          |
| product        | String  | [Product category of the trade.](Appendix.md#product-type)                    |
| prevProduct     | String   | Previous product type before the order (e.g., CNC). |
| transType      | String  | [Type of transaction, indicating whether the trade is a "BUY" or "SELL"](Appendix.md#transaction-type) |
| posType         | String   | Position type (e.g., DAY for Day).                  |



**Response Structure**

```
{
    "status": "Ok",
    "message": "Success",
    "result": []
    "infoMessage": null
}

```

**Parameters**

| Field   | Type   | Description                                                     |
| ------- | ------ | --------------------------------------------------------------- |
| status  | string | Indicates the status of the operation.                          |
| message | string | A message providing additional information about the operation. |
| result  | array  | An array containing the results of the operation.               |
| infoMessage     | String   | Additional info message, if any (can be null).      |

