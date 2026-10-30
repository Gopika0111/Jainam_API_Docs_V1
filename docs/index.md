---
title: SSO Authentication
---

## Introduction

The vendor API is an innovative solution provided by Jainam Securities APIs. Vendor APIs are usually used by technical companies to build innovative technical solutions and customised trading platforms to retail traders. Vendor API will enable vendors to create the Session for any user, who has authorized the app registered by Vendor. This way, the vendors do not have to manually get the API Key from users to generate session.

**Base URL**

The Base URL is the common URL used as a prefix for all API calls.

[https://protrade.jainam.in/]()

## Vendor API

### Registration as a Vendor:

- To register as a Vendor, Please visit  [https://protrade.jainam.in/developers](https://protrade.jainam.in/developers){:target="\_blank"}

1.  Login using your Jainam credentials.
2.  In the Apps sections, Create a new application.
3.  Fill out the mandatory details.
4.  Click "Save" to create a new app.
5.  An App Code (appCode) and API Secret (apiSecret) will be provided to the Vendor. This code is important and Confidential. DO NOT Share with anyone outside your organization.

**Implementation of SSO:**

1. During User login, the Vendor should redirect the Jainam user to <br> [https://protrade.jainam.in/?appcode={appcode}](https://protrade.jainam.in/?appcode= along){:target="\_blank"} along with the App Code as shown here in the url.
2. User will be asked to login with their Jainam credentials.
3. After sucessful login, the user will be redirected to the URL provided by the Vendor (Provisions to provide / update the Redirect URL is provided in the Developers Login) along with User Authorization token (authCode) and User ID (userId).
4. The Vendor will save the user authCode, UserId (userId) along with apiSecret to create a checkSum, which is the SHA-256 hash of userId + authCode + apiSecret
5. Vendor should send this checkSum to the URL : [https://protrade.jainam.in/omt/auth/sso/vendor/getUserDetails]() to get the User Session (userSession), which can be used to access all API end points.
 
### Postman Sample 

 <a class="DLbtn" id="Live " href="./SSO_Authentication/jainam.vendor.postman_collection.json" download="">Download</a>
