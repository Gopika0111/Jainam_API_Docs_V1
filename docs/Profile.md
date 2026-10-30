---
title: Profile
---

# Profile

| Type | Apis                                 | Details                |
| ---- | -------------------------------      | ---------------------- |
| GET  | api/client-rest/profile/getclientdetails | To get a clientdetails |

## Profile

While a successful token exchange returns the full user profile, it's possible to retrieve it any point of time with the /user/profile API. Do note that the profile API does not return any of the tokens.

**Response Structure**

```
{
    "status": "Ok",
    "message": "Success",
    "infoMessage": null,
    "result": [
        {
         "userId": "<USER_ID>",
            "actId": "<ACT_ID>",
            "clientName": "***ABC",
            "actStatus": "Activated",
            "createdDate": "1648275191",
            "createdTime": "0",
            "mobNo": "1234567890",
            "email": "*****@gmail.com",
            "pan": "******123N",
            "address": "AA",
            "pincode": null,
            "officeAddress": "",
            "city": "",
            "state": "",
            "mandateIdList": null,
            "exchange": [
                "NSE",
                "BSE"
                "NFO",
                "BSE",
                "BFO",
                "CDS",
                "BCD"
            ],
            "bankdetails": [
                {
                    "bankName": "",
                    "accNumber": null,
                    "isDefault": null
                }
            ],
            "dpAccountNumber": [
                {
                    "dpAccountNumber": "1204150002705831",
                    "dpId": "12041500",
                    "boId": null,
                    "repository": "CDSL",
                    "edisClientCode": null,
                    "dpAccountName": null
                },
                {
                    "dpAccountNumber": "1204150002705831",
                    "dpId": "12041500",
                    "boId": null,
                    "repository": "CDSL",
                    "edisClientCode": null,
                    "dpAccountName": null
                },
                {
                    "dpAccountNumber": "1204150002705831",
                    "dpId": "12041500",
                    "boId": null,
                    "repository": "CDSL",
                    "edisClientCode": null,
                    "dpAccountName": null
                }
            ],
            "orders": null,
            "branchId": "",
            "brokerName": "",
            "products": null,
            "productTypes": [
                "CNC",
                "MIS"
                 "MTF"
            ],
            "orderTypes": null,
            "priceTypes": null
        }
    ]
}
```

**Parameters**


| Field            | Type     | Description                                           |
|------------------|----------|-------------------------------------------------------|
| status           | String   | Status of the response .                   |
| message          | String   | Message providing more information .  |
| infoMessage      | String   | Additional info message, if any .       |
| result           | Array    | Contains the details of the client profile.          |
| userId           | String   | Unique user ID.                                      |
| clientName       | String   | Full name of the client.                             |
| actStatus        | String   | Status of the account .                 |
| createdDate      | String   | Date when the account was created .     |
| createdTime      | String   | Time when the account was created .     |
| mobNo            | String   | Mobile number of the client.                         |
| email            | String   | Email address of the client (masked).                |
| pan              | String   | PAN number of the client (masked).                   |
| address          | String   | Full residential address of the client.              |
| pincode          | String   | Pincode of the client's address .       |
| officeAddress    | String   | Office address of the client .          |
| city             | String   | City of residence .                     |
| state            | String   | State of residence .                    |
| mandateIdList    | Array    | List of mandate IDs, if available.                   |
| exchange         | String         | [Code representing the exchange where the trade is executed](Appendix.md#exchange)         |
| bankdetails      | Array    | List of bank details associated with the client.     |
| dpAccountNumber  | Array    | List of demat account numbers with associated details.|
| orders           | Array    | List of orders placed by the client (if available).  |
| branchId         | String   | Branch ID of the client .               |
| brokerName       | String   | Name of the broker .                    |
| products         | Array    | List of products linked to the client's account.     |
| productTypes     | Array    | List of product types available for the client.      |
| orderTypes       | Array          | [Types of orders the client can place](Appendix.md#order-type)                                       |
| priceType     | String | [Price type(L or MKT or SL or SL-M)](Appendix.md#price-type)                                |
