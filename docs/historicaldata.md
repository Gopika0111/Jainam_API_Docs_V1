---
title: Historical Data

---


!!! Note

    The BASE URL, Endpoint, and Payload JSON key values are case-sensitive. Please use the format which we have given in the documentation.

    1. Only Day and Minute data will be available. Other resolutions can be calculated on their own, based user preferences using these resolutions.
    2. Historical data API will be available from 5:30 PM (evening) to 8 AM (Next day morning) on weekdays (Monday to Friday). Historical data will not be available during market hours
    3. Historical data API will be available fully during weekends and holidays.
    4. For NSE segment, 2 years of historical data will be provided.
    5. For NFO, CDS and MCX segments, current expiry data will be provided.
    6. BSE, BCD and BFO Chart data will be added later.


|Method	     |APIS  	|
|------------|----------|
| Post|/chart/history|


__Request Structure__

```
  {
  "token": "1594",
  "resolution": "D", 
  "from": "1660128489000", 
  "to": "1660221861000",
  "exchange": "NSE"
  }

```

__Input parameters__


| Field      | TYPE   | Description |
|------------|--------|-------------|
| token      | String | Get the tokens from Contract master files or API |
| resolution | String | Resolutions should be `1` (One minute data) or `1D` (Day Data) |
| from       | String | From Time in milliseconds. It's UNIX timestamp in IST. Users can get the dates converted into UNIX timestamp using any online resources like [currentmillis.com](https://currentmillis.com/). For language-specific implementations like JavaScript, Python, Java, etc., check [currentmillis.com/#methods](https://currentmillis.com/#methods) |
| to         | String | To Time in Milliseconds. Same as above |
| exchange   | String | Exchange segment. Part of contract master file. Right now, only NSE, NFO, CDS, and MCX are supported |


__Response Structure__

```

{
"stat": "Ok",
"result": [
{
"volume": 773841.0,
"high": 3789.0,
"low": 3637.0,
"time": "2022-09-21 00:00:00",
"close": 3765.65,
"open": 3646.0
},
{
"volume": 687172.0,
"high": 3835.45,
"low": 3751.0,
"time": "2022-09-22 00:00:00",
"close": 3825.95,
"open": 3764.0
}
],
"message": null
}

```



__Parameters__



| Field      | TYPE          | Description                                                 |
|------------|---------------|-------------------------------------------------------------|
| stat       | String            |    Ok                                                         |
| result     |   String            | JSON Array Containing JSON Object key value pairs of open, high, low, close, volume, and time. <br>`Open`: Open price  <br>`High`: High price  <br>`Low`: Low price <br>`Close`: Close price <br>`Volume`: Trade volume  <br>`Time`: Data captured time (YYYY-MM-DD HH:MM:SS)|

         

## Error Response

| Field      | TYPE           | Description                                                 |
|------------|----------------|-------------------------------------------------------------|
| stat       | String         |        Not_Ok                                                     |
| emsg       | String         | Data not available at market time. Please try after market hours or Session Expired |
