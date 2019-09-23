# findings.FindingsProvidersApi

All URIs are relative to:

* https://us-south.secadvisor.cloud.ibm.com/findings
* https://eu-gb.secadvisor.cloud.ibm.com/findings

Method | HTTP request | Description
------------- | ------------- | -------------
[**listProviders**](FindingsProvidersApi.md#listProviders) | **GET** /v1/{account_id}/providers | Lists all &#x60;Providers&#x60; for a given account id.


<a name="listProviders"></a>
# **listProviders**
> InlineResponse200 listProviders(accountId, authorization, opts)

Lists all &#x60;Providers&#x60; for a given account id.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsProvidersApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var opts = { 
  'pageSize': 56, // Number | Number of providers to return in the list.
  'pageToken': "pageToken_example" // String | Token to provide to skip to a particular spot in the list.
};
apiInstance.listProviders(accountId, authorization, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account ID | 
 **authorization** | **String**| The Identity &amp; Access Management (IAM) Bearer token. | 
 **pageSize** | **Number**| Number of providers to return in the list. | [optional] 
 **pageToken** | **String**| Token to provide to skip to a particular spot in the list. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

