---

title: HTML 5 Button

---

# HTML 5 Buttons

The Jainam Publisher Javascript plugin lets you add one-click trade buttons to your webpage. Provide some basic data while creating an Jainam HTML5 Button and add the button to your desired web page or portal. Users can place hassle free orders with single click using Jainam  web portal.


### Getting started


In the webpage or portal where the buttons are placed, make sure to add the following JavaScript file. Also users require an valid appcode (used in the button properties) to create these trade buttons. If the app code is not valid, the users will not be able to place the order.


``` <script  src="https://protrade.jainam.in/jspublisher/publisher.js"> </script> ```

<!-- 
HTML Buttons work with a valid App Code (Used as appcode). To create appcode visit this link [https://developers.Jainamonline.com.](https://developers.Jainamonline.com) You can use your regular  Jainam account credentials to login and create the app code.

The documentation on how to use the developer console can be found at [Developer's Console Documentation]() -->

Also, symbol tokens provided by exchange is also mandatory. Various tokens for all symbols across exchanges can be downloaded from the following link Contract Master Data

Please note, scrip token will change on daily/weekly/monthly basis based on group change, expiry etc. Sending a wrong token will result in wrong trade or rejection of order.


There are three types of buttons provided.

* *Branded Buttons* - This will be populated with  Jainam Logo.

* *Custom Buttons* - If you want to add custom color code and styling use Custom buttons.

* *Baskets* - If you want to place multiple orders, (Basket of orders) using a single button, you can use this basket option.

### Branded HTML5 buttons

```
        -- This Button initiate Buy SBIN Stock  --

<jainam-button

   data-token="3045"
   data-appcode="<appcode>"
   data-exchange="NSE"
   data-tradingSymbol="SBIN-EQ"
   data-transactionType="BUY"
   data-quantity="1"
   data-orderType="MKT"
   data-price="0"
   data-validity="DAY"
   data-product="CNC"
   data-complexity="regular">

</jainam-button>

```

__Example:__

Buy a single share of SBIN

<html>

<head>

  
 
</head>
<body>
<button>

<jainam-button

   data-token="3045"
   data-appcode="PYhm3uzCkFXFyrt"
   data-exchange="NSE"
   data-tradingSymbol="SBIN-EQ"
   data-transactionType="BUY"
   data-quantity="1"
   data-orderType="MKT"
   data-price="0"
   data-validity="DAY"
   data-product="CNC"
   data-complexity="regular""

</jainam-button>
Trade

</button>
</body>
</html>

```

      -- This Button initiate Sell SBIN Stock  --

<jainam-button

   data-token="3045"
   data-appcode="<appcode>"
   data-exchange="NSE"
   data-tradingSymbol="SBIN-EQ"
   data-transactionType="SELL"
   data-quantity="1"
   data-orderType="MKT"
   data-price="0"
   data-validity="DAY"
   data-product="CNC"
   data-complexity="regular"

</jainam-button>

```
__Example:__

Sell a single share of SBIN

<html>

<head>

  
 
</head>

<body>
<button>

  <jainam-button

   data-token="3045"
   data-appcode="PYhm3uzCkFXFyrt"
   data-exchange="NSE"
   data-tradingSymbol="SBIN-EQ"
   data-transactionType="SELL"
   data-quantity="1"
   data-orderType="MKT"
   data-price="0"
   data-validity="DAY"
   data-product="CNC"
   data-complexity="regular"

</jainam-button>
Trade
</button>
</body>
</html>



```

      -- This Button initiate Basket of Orders  --

<jainam-button

   data-appcode="<appcode>"
   :data-basket="JSON.stringify(basketList)" >

</jainam-button>

basketList - Check below on how to create basket
list variable. Please note the difference between other
data-properties like data-token etc and :data-basket.
The :data-basket attribute value binded with basket
list variable.

```
__Example:__

Place the Basket of Orders

<html>
<head>

  
 
</head>

<body>

<button>

<jainam-button
   
   data-appcode="PYhm3uzCkFXFyrt"
   :data-basket="JSON.stringify(basketList)" >
   
Trade
</jainam-button>

</button>
</body>
</html>

### Custom HTML5 buttons

```
       -- This Button initiate buy SBIN Stock --

<button

   data-token="3045"
   data-appcode="<appcode>"
   data-exchange="NSE"
   data-tradingSymbol="SBIN-EQ"
   data-transactionType="BUY"
   data-quantity="1"
   data-orderType="MKT"
   data-price="0"
   data-validity="DAY"
   data-product="CNC"
   data-complexity="regular" >

</button>


```

__Example:__

Buy a single share of SBIN

<html>

<body>

<button
   data-token="3045"
   data-appcode="PYhm3uzCkFXFyrt"
   data-exchange="NSE"
   data-tradingSymbol="SBIN-EQ"
   data-transactionType="BUY"
   data-quantity="1"
   data-orderType="MKT"
   data-price="0"
   data-validity="DAY"
   data-product="CNC"
   data-complexity="regular" >
   Buy
</button>

</body>

</html>

```

     -- This Button initiate buy SBIN Stock --

<button
   data-token="3045"
   data-appcode="<appcode>"
   data-exchange="NSE"
   data-tradingSymbol="SBIN-EQ"
   data-transactionType="SELL"
   data-quantity="1"
   data-orderType="MKT"
   data-price="0"
   data-validity="DAY"
   data-product="CNC"
   data-complexity="regular" >
</button>

```
__Example:__

Sell a single share of SBIN

<html>
<body>
<button>
<button
   data-token="3045"
   data-appcode="PYhm3uzCkFXFyrt"
   data-exchange="NSE"
   data-tradingSymbol="SBIN-EQ"
   data-transactionType="SELL"
   data-quantity="1"
   data-orderType="MKT"
   data-price="0"
   data-validity="DAY"
   data-product="CNC"
   data-complexity="regular" >
   Sell
</button>
</button>

</body>

</html>

### Basket buttons

```

   -- This link initiate buy SBIN and INFY Stocks --

<button

   data-appcode="<appcode>"
   :data-basket="JSON.stringify(basketList)" >

</button>


```


* __basketList__ : Array of objects with the value of Basket (string)

* __data-appcode__ is mandatory attribute with valid appcode


Example Basket value:

```
        var basketList = [

           {

             token: "3045",
             exchange: "NSE",
             tradingSymbol: "SBIN-EQ",
             instrument: "SBIN",
             transactionType: "BUY",
             orderType: "MKT",
             price: 0,
             quantity: 1,
             validity: "DAY",
             product: "MIS",
             complexity: "regular",

           },

           {

             token: "1594",
             exchange: "NSE",
             tradingSymbol: "INFY-EQ",
             instrument: "INFY",
             transactionType: "BUY",
             orderType: "L",
             price: "1450",
             quantity: 1,
             validity: "DAY",
             product: "MIS",
             complexity: "regular",

           },
        ],

```

__Example:__

Place the Basket of Orders

<html>
<head>
    <script src="https://protrade.jainam.in/jspublisher/publisher.js" ></script> 

 <script >  
         var basketList = [
            {
              token: "3045",
              exchange: "NSE",
              tradingSymbol: "SBIN-EQ",
              instrument: "SBIN",
              transactionType: "BUY",
              orderType: "MKT",
              price: 0,
              quantity: 1,
              validity: "DAY",
              product: "MIS",
              complexity: "regular",
            },

            {
              token: "1594",
              exchange: "NSE",
              tradingSymbol: "INFY-EQ",
              instrument: "INFY",
              transactionType: "SELL",
              orderType: "L",
              price: "1450",
              quantity: 1,
              validity: "DAY",
              product: "MIS",
              complexity: "regular",
            },
         ];
          document.addEventListener("DOMContentLoaded", function() {
            let btnSend = document.querySelector('#btnSend');
            if (btnSend) {
                btnSend.setAttribute('data-basket', JSON.stringify(basketList));
            }
        });
</script>
</head>
<body>
   <button    
    id="btnSend"
    data-appcode="PYhm3uzCkFXFyrt"
 >Trade
</button>
</body>
</html>



__Parameters:__

|Key    | Description  |
|-------|-------------------|
|complexity    |Complexity of the order (regular, amo) |
|tradingSymbol |Trading symbol of the instrument   |  
|exchange   |Name of the exchange   | 
|transactionType     |BUY or SELL   |  
|orderType  |Order type ( MKT, L ,SL ,SL-M  )  |  
|quantity   |Quantity to transact   |  
|product    |Product type ( MIS - for Intraday, CNC - for Holdings, NRML- for Positions ) |  
|price   |For LIMIT orders |  
|triggerPrice  |For ( SL, SL-M ).   |  
|disclosedQuantity   |Disclosed quantity  |  
|validity   |Validity of the order ( DAY, IOC ) |  
|token      |Token of the Instrument   |  