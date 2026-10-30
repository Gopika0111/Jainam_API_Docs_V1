---
title: Basket Order
---

# Basket Order

| Type   | API                              | Details                      |
| ------ | -------------------------------- | ---------------------------- |
| POST   | borest/basketorder/create        | Create basket order          |
| GET    | borest/basketorder/get           | Get basket order             |
| POST   | borest/basketorder/rename        | Rename basket order          |
| DELETE | borest/basketorder/delete        | Delete basket order          |
| POST   | borest/basketorder/add/scrips    | Add basket order scrips      |
| GET    | borest/basketorder/get/scrips    | Retrieve basket order scrips |
| POST   | borest/basketorder/delete/scrips | Delete basket order scrips   |

### Create Basket

**Request Structure**

```
{
    "basketName": "codifi"
}

```

**Input parameters**

| Field      | Type   | Description        |
| ---------- | ------ | ------------------ |
| basketName | String | Unique Basket Name |

**Response Structure**

```
{
    "status": "Ok",
    "message": "Success",
    "result": [
        {
            "basketId": 25,
            "basketName": "codifi",
            "isExecuted": "0",
            "createdOn": "2023-11-02T03:39:55.000+00:00",
            "scripCount": 2
        }
    ]
}
```

**Parameters**

| Field      | Type   | Description                               |
| ---------- | ------ | ----------------------------------------- |
| basketId   | String | Unique identifier for the basket          |
| basketName | String | Name assigned to the basket               |
| isExecuted | String | Status of basket execution                |
| createdOn  | String | Registration timestamp of the SIP via API |
| scripCount | Int    | Number of scrips in the basket            |

### Get Basket Order

**Response Structure**

```
{
    "status": "Ok",
    "message": "Success",
    "result": [
        {
            "basketId": 20,
            "basketName": "bank",
            "isExecuted": "0",
            "createdOn": "2023-02-23T09:44:39.829+00:00",
            "scripCount": 0
        }
    ]
}
```

**Parameters**

| Field      | Type   | Description                               |
| ---------- | ------ | ----------------------------------------- |
| basketId   | String | Unique identifier for the basket          |
| basketName | String | Name assigned to the basket               |
| isExecuted | String | Status of basket execution                |
| createdOn  | String | Registration timestamp of the SIP via API |
| scripCount | Int    | Number of scrips in the basket            |

### Rename Basket

**Request Structure**

```
{
    "basketName" : "bank1",
    "basketId" :20,
}

```

**Input parameters**

| Field      | Type   | Description        |
| ---------- | ------ | ------------------ |
| basketName | String | Unique Basket Name |
| basketId   | String | Unique Basket ID   |

**Response Structure**

```
{
    "status": "Ok",
    "message": "Success",
    "result": [
        {
            "basketId": 20,
            "basketName": "bank1",
            "isExecuted": "0",
            "createdOn": "2023-02-23T09:44:39.829+00:00",
            "scripCount": 0
        }
    ]
}

```

**Parameters**

| Field      | Type   | Description                               |
| ---------- | ------ | ----------------------------------------- |
| basketId   | String | Unique identifier for the basket          |
| basketName | String | Name assigned to the basket               |
| isExecuted | String | Status of basket execution                |
| createdOn  | String | Registration timestamp of the SIP via API |
| scripCount | Int    | Number of scrips in the basket            |

### Delete Scripts

**Response Structure**

```
{
    "status": "Ok",
    "message": "Success",
    "result": [
        {
            "basketId": 61,
            "basketName": "er",
            "isExecuted": "1",
            "createdOn": "2023-11-24T03:13:04.000+00:00",
            "scripCount": 3
        },
    ]
}

```

**Parameters**

| Field      | Type   | Description                               |
| ---------- | ------ | ----------------------------------------- |
| basketId   | String | Unique identifier for the basket          |
| basketName | String | Name assigned to the basket               |
| isExecuted | String | Status of basket execution                |
| createdOn  | String | Registration timestamp of the SIP via API |
| scripCount | Int    | Number of scrips in the basket            |

### Add Script

**Request Structure**

```
{
    "basketName": "codifi",
    "basketId": 1,
    "scrips":
        {
            "sortOrder": "codifi",
            "exchange": "nse",
            "token": "123456",
            "qty": "5",
            "price": "500",
            "product": "CNC",
            "transType": "BUY",
            "priceType": "MKT",
            "orderType": "Regular",
            "ret": "DAY",
            "source": "MOB"
        }
}

```

**Input parameters**

| Field      | Type   | Description                                                                                                                                                              |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BasketName | String | Name of the basket in which the script will be added                                                                                                                     |
| basketId   | Int    | Unique Basket ID                                                                                                                                                         |
| sortOrder  | String | Specifies order or sequence for the script within the basket                                                                                                             |
| exchange       | String  | [Code representing the exchange where the trade is executed](Appendix.md#exchange)         |
| token      | String | A unique identifier for the trading instrument. |
| qty        | String | Quantity to transact                                                                                                                                                     |
| price      | String | The price at which the order is placed.                                                                                                              |
| product        | String  | [Product category of the trade.](Appendix.md#product-type)                    |
| tranType   | String | Buy and Sell                                                                                                                                                             |
| priceType     | String | [Price type(L or MKT or SL or SL-M)](Appendix.md#price-type)                                |
| orderType  | String | Ordertypes (MIS,NRML,MTF)                                                                                                                                                |
| ret        | String |The duration for which the order is valid.                                                                    |
| source     | String | Source or origin of the script addition (e.g., API, User Interface)                                                                                                      |

**Response Structure**

```
{
    "status": "Ok",
    "message": "Success",
    "result": [
        {
            "id": 149,
            "basketId": 49,
            "sortOrder": null,
            "exchange": "NFO",
            "token": "40018",
            "tradingSymbol": "NIFTY16NOV23C19500",
            "qty": "50",
            "price": "268.15",
            "expiry": "2023-11-15T18:30:00.000+00:00",
            "product": "MIS",
            "transType": "BUY",
            "priceType": "L",
            "orderType": "Cover",
            "ret": "DAY",
            "triggerPrice": "268.15",
            "disClosedQty": null,
            "mktProtection": "",
            "target": "0",
            "stopLoss": "268.15",
            "trailingStopLoss": null,
            "formattedInsName": "NIFTY 16th NOV 19500 CE",
            "weekTag": "W3"
        }
    ]
}
```

**Parameters**

| Field            | Type   | Description                                                                                                                                                              |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Id               | String | The unique, The identifier for the user who placed the order.                                                                                                                |
| basketId         | Int    | Unique Basket ID                                                                                                                                                         |
| sortOrder        | String | Specifies order or sequence for the script within the basket                                                                                                             |
| exchange       | String  | [Code representing the exchange where the trade is executed](Appendix.md#exchange)         |
| token            | String | A unique identifier for the trading instrument. |
| tradingSymbol    | String | Exchange trading symbol of the instrument.                                                                                                                               |
| qty              | String | Quantity to transact                                                                                                                                                     |
| price            | String | Price at which the main leg of the bracket order will be placed                                                                                                          |
| product        | String  | [Product category of the trade.](Appendix.md#product-type)                    |
| tranType         | String | Buy and Sell                                                                                                                                                             |
| priceType     | String | [Price type(L or MKT or SL or SL-M)](Appendix.md#price-type)                                |
| orderType        | String | Ordertypes (MIS,NRML,MTF)                                                                                                                                                |
| ret              | String |The duration for which the order is valid.                                                                    |
| triggerPrice     | String | The price at which an order should be triggered (SL, SL-M)                                                                                                               |
| disclosedQty     | String | The quantity of shares that is publicly disclosed                                  |
| MktProtection    | String | Explains the concept of a market-with-protection order.                                                                                                                  |
| target           | String | Describes the purpose and meaning of a target price for a stock.                                                                                                         |
| stopLoss         | String | Details the functionality and purpose of a stop-loss order.                                                                                                              |
| trailingStopLoss | String | Explains the mechanism and purpose of a trailing stop-loss order.                                                                                                        |
| formattedInsName | String | The formatted or standardized name of the instrument.                                                                                                                    |
| weekTag          | String | A tag or identifier associated with a specific week or trading period. It may denote the week's activity, trends, or other relevant metrics.                             |

### Get Retrive Scrips

**Response Structure**

```
{
    "status": "Ok",
    "message": "Success",
    "result": [
        {
            "id": 468,
            "basketId": 72,
            "sortOrder": null,
            "exchange": "NSE",
            "token": "13",
            "tradingSymbol": "ABB-EQ",
            "qty": "2",
            "price": "4856.45",
            "expiry": null,
            "product": "CNC",
            "transType": "BUY",
            "priceType": "L",
            "orderType": "Regular",
            "ret": "DAY",
            "triggerPrice": "0",
            "disClosedQty": null,
            "mktProtection": "",
            "target": "0",
            "stopLoss": "4856.45",
            "trailingStopLoss": null,
            "formattedInsName": "ABB-EQ",
            "weekTag": null
        }
    ]
}
```

**Parameters**

| Field            | Type   | Description                                                                                                                                                                                                                                                                                                                      |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Id               | String | The unique, The identifier for the user who placed the order.                                                                                                                                                                                                                                                                         |
| basketId         | Int    | Unique ID Basket                                                                                                                                                                                                                                                                                                                 |
| sortOrder        | String | Specifies order or sequence for the script within the basket                                                                                                                                                                                                                                                                     |
| exchange       | String  | [Code representing the exchange where the trade is executed](Appendix.md#exchange)         |
| token            | String | Token of the scrip. Token Number is a unique code given to all companies listed on the exchange. Selected Instrument token number will be displayed under scrip details                                                                                                                                                          |
| tradingSymbol    | String | Exchange tradingsymbol of the of the instrument                                                                                                                                                                                                                                                                                  |
| qty              | String | Quantity to transact                                                                                                                                                                                                                                                                                                             |
| price            | String | The price at which the order is placed.                                                                                                                                                                                                                                                                      |
| product        | String  | [Product category of the trade.](Appendix.md#product-type)                    |
| tranType         | String | Buy and Sell                                                                                                                                                                                                                                                                                                                     |
| priceType     | String | [Price type(L or MKT or SL or SL-M)](Appendix.md#price-type)                                |
| orderType        | String | Ordertypes (MIS,NRML,MTF)                                                                                                                                                                                                                                                                                                        |
| ret              | String | Retention type (if applicable)                                                                                                                                                                                                                                                                                                   |
| triggerPrice     | String | The price at which an order should be triggered (SL, SL-M)|
| disclosedQty     | String | Quantity disclosed to the market (less than or equal to the total quantity).|
| MktProtection    | String | A market-with-protection order cancels an order to buy or sell stock or other assets and re-submits it as a limit order. A broker might submit a market-with-protection order if the price of the stock has moved unexpectedly and dramatically since the market order was placed.                                               |
| target           | String | A target price is an estimate of the future price of a stock. Target prices are based on earnings forecasts and assumed valuation multiples. Target prices can be used to evaluate stocks and may be even more useful than an equity analyst's rating.                                                                           |
| stopLoss         | String | A stop-loss order is an order placed with a broker to buy or sell a specific stock once the stock reaches a certain price. A stop-loss is designed to limit an investor's loss on a security position. For example, setting a stop-loss order for 10% below the price at which you bought the stock will limit your loss to 10%. |
| trailingStopLoss | String | A trailing stop loss order adjusts the stop price at a fixed percent or number of points below or above the market price of a stock                                                                                                                                                                                              |
| formattedInsName | String | The formatted or standardized name of the instrument.                                                                                                                                                                                                                                                                            |
| weekTag          | String | A tag or identifier associated with a specific week or trading period. It may denote the week's activity, trends, or other relevant metrics.                                                                                                                                                                                     |

### Delete Scrip in Basket

**Request Structure**

```

{
    "basketId": 61,
    "scripsId": [
        192
    ]
}

```

**Input parameters**

| Field    | Type   | Description                                                                                                                  |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| userID   | String |  The identifier for the user who placed the order.                                                     |
| basketId | Int    | Unique Basket ID                                                                                                             |
| scripsId | List   | List of unique identifiers representing individual scripts or instruments associated with a particular operation or context. |

**Response Structure**

```
{
    "status": "Ok",
    "message": "Success",
    "result": [
        {
            "id": 187,
            "basketId": 61,
            "sortOrder": null,
            "exchange": "NSE",
            "token": "13",
            "tradingSymbol": "ABB-EQ",
            "qty": "1",
            "price": "4260.55",
            "expiry": null,
            "product": "CNC",
            "transType": "BUY",
            "priceType": "L",
            "orderType": "Regular",
            "ret": "DAY",
            "triggerPrice": "0",
            "disClosedQty": null,
            "mktProtection": "",
            "target": "0",
            "stopLoss": "4260.55",
            "trailingStopLoss": null,
            "formattedInsName": "ABB-EQ",
            "weekTag": null
        }
    ]
}
```

**Parameters**

| Field            | Type   | Description                                                                                                                                                                                                                                                                                                                      |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Id               | String | The unique, The identifier for the user who placed the order.                                                                                                                                                                                                                                                                         |
| basketId         | Int    | Unique Basket ID                                                                                                                                                                                                                                                                                                                 |
| exchange       | String  | [Code representing the exchange where the trade is executed](Appendix.md#exchange)         |
| token            | String | Token of the scrip. Token Number is a unique code given to all companies listed on the exchange. Selected Instrument token number will be displayed under scrip details                                                                                                                                                          |
| tradingSymbol    | String | Exchange tradingsymbol of the of the instrument                                                                                                                                                                                                                                                                                  |
| qty              | String | Quantity to transact                                                                                                                                                                                                                                                                                                             |
| price            | String | The price at which the order is placed.                                                                                                                                                                                                                                                                      |
| product        | String  | [Product category of the trade.](Appendix.md#product-type)                    |
| tranType         | String | Buy and Sell                                                                                                                                                                                                                                                                                                                     |
| priceType     | String | [Price type(L or MKT or SL or SL-M)](Appendix.md#price-type)                                |
| orderType        | String | Ordertypes (MIS,NRML,MTF)                                                                                                                                                                                                                                                                                                        |
| ret              | String |The duration for which the order is valid.                                                                                                                                                                                                                            |
| triggerPrice     | String | The price at which an order should be triggered (SL, SL-M)                                                                                                                                                                                                                                                                       |
| disclosedQty     | String | Quantity disclosed to the market (less than or equal to the total quantity).                                                                                                                                                                        |
| MktProtection    | String | A market-with-protection order cancels an order to buy or sell stock or other assets and re-submits it as a limit order. A broker might submit a market-with-protection order if the price of the stock has moved unexpectedly and dramatically since the market order was placed.                                               |
| target           | String | A target price is an estimate of the future price of a stock. Target prices are based on earnings forecasts and assumed valuation multiples. Target prices can be used to evaluate stocks and may be even more useful than an equity analyst's rating.                                                                           |
| stopLoss         | String | A stop-loss order is an order placed with a broker to buy or sell a specific stock once the stock reaches a certain price. A stop-loss is designed to limit an investor's loss on a security position. For example, setting a stop-loss order for 10% below the price at which you bought the stock will limit your loss to 10%. |
| trailingStopLoss | String | A trailing stop loss order adjusts the stop price at a fixed percent or number of points below or above the market price of a stock                                                                                                                                                                                              |
| formattedInsName | String | The formatted or standardized name of the instrument.                                                                                                                                                                                                                                                                            |
| weekTag          | String | A tag or identifier associated with a specific week or trading period. It may denote the week's activity, trends, or other relevant metrics.                                                                                                                                                                                     |
