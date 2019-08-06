# findings.FindingsGraphApi

All URIs are relative to:

* https://us-south.secadvisor.cloud.ibm.com/findings
* https://eu-gb.secadvisor.cloud.ibm.com/findings

Method | HTTP request | Description
------------- | ------------- | -------------
[**postGraph**](FindingsGraphApi.md#postGraph) | **POST** /v1/{account_id}/graph | query findings


<a name="postGraph"></a>
# **postGraph**
> Object postGraph(accountId, authorization, body)

query findings

query findings

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsGraphApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var body = "body_example"; // String | Body for query findings

apiInstance.postGraph(accountId, authorization, body).then(function(data) {
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
 **body** | **String**| Body for query findings | 

### Return type

**Object**

### HTTP request headers

 - **Content-Type**: application/graphql, application/json
 - **Accept**: application/json

