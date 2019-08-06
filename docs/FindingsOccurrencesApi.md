# findings.FindingsOccurrencesApi

All URIs are relative to:

* https://us-south.secadvisor.cloud.ibm.com/findings
* https://eu-gb.secadvisor.cloud.ibm.com/findings

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOccurrence**](FindingsOccurrencesApi.md#createOccurrence) | **POST** /v1/{account_id}/providers/{provider_id}/occurrences | Creates a new &#x60;Occurrence&#x60;. Use this method to create &#x60;Occurrences&#x60; for a resource.
[**deleteOccurrence**](FindingsOccurrencesApi.md#deleteOccurrence) | **DELETE** /v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id} | Deletes the given &#x60;Occurrence&#x60; from the system.
[**getOccurrence**](FindingsOccurrencesApi.md#getOccurrence) | **GET** /v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id} | Returns the requested &#x60;Occurrence&#x60;.
[**listNoteOccurrences**](FindingsOccurrencesApi.md#listNoteOccurrences) | **GET** /v1/{account_id}/providers/{provider_id}/notes/{note_id}/occurrences | Lists &#x60;Occurrences&#x60; referencing the specified &#x60;Note&#x60;. Use this method to get all occurrences referencing your &#x60;Note&#x60; across all your customer providers.
[**listOccurrences**](FindingsOccurrencesApi.md#listOccurrences) | **GET** /v1/{account_id}/providers/{provider_id}/occurrences | Lists active &#x60;Occurrences&#x60; for a given provider matching the filters.
[**updateOccurrence**](FindingsOccurrencesApi.md#updateOccurrence) | **PUT** /v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id} | Updates an existing &#x60;Occurrence&#x60;.


<a name="createOccurrence"></a>
# **createOccurrence**
> InlineResponse2001Occurrences createOccurrence(accountId, authorization, providerId, body, opts)

Creates a new &#x60;Occurrence&#x60;. Use this method to create &#x60;Occurrences&#x60; for a resource.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsOccurrencesApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var providerId = "providerId_example"; // String | Part of `parent`. This contains the provider_id for example: providers/{provider_id}

var body = new findings.Body2(); // Body2 | Body for Occurence creation

var opts = { 
  'replaceIfExists': true // Boolean | It allows replacing an existing occurrence when set to true.
};
apiInstance.createOccurrence(accountId, authorization, providerId, body, opts).then(function(data) {
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
 **providerId** | **String**| Part of &#x60;parent&#x60;. This contains the provider_id for example: providers/{provider_id} | 
 **body** | [**Body2**](Body2.md)| Body for Occurence creation | 
 **replaceIfExists** | **Boolean**| It allows replacing an existing occurrence when set to true. | [optional] 

### Return type

[**InlineResponse2001Occurrences**](InlineResponse2001Occurrences.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOccurrence"></a>
# **deleteOccurrence**
> Object deleteOccurrence(accountId, authorization, providerId, occurrenceId)

Deletes the given &#x60;Occurrence&#x60; from the system.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsOccurrencesApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var providerId = "providerId_example"; // String | First part of occurrence `name`: providers/{provider_id}/notes/{occurrence_id}

var occurrenceId = "occurrenceId_example"; // String | Second part of occurrence `name`: providers/{provider_id}/notes/{occurrence_id}

apiInstance.deleteOccurrence(accountId, authorization, providerId, occurrenceId).then(function(data) {
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
 **providerId** | **String**| First part of occurrence &#x60;name&#x60;: providers/{provider_id}/notes/{occurrence_id} | 
 **occurrenceId** | **String**| Second part of occurrence &#x60;name&#x60;: providers/{provider_id}/notes/{occurrence_id} | 

### Return type

**Object**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOccurrence"></a>
# **getOccurrence**
> InlineResponse2001 getOccurrence(accountId, authorization, providerId, occurrenceId)

Returns the requested &#x60;Occurrence&#x60;.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsOccurrencesApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var providerId = "providerId_example"; // String | First part of occurrence `name`: providers/{provider_id}/occurrences/{occurrence_id}

var occurrenceId = "occurrenceId_example"; // String | Second part of occurrence `name`: providers/{provider_id}/occurrences/{occurrence_id}

apiInstance.getOccurrence(accountId, authorization, providerId, occurrenceId).then(function(data) {
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
 **providerId** | **String**| First part of occurrence &#x60;name&#x60;: providers/{provider_id}/occurrences/{occurrence_id} | 
 **occurrenceId** | **String**| Second part of occurrence &#x60;name&#x60;: providers/{provider_id}/occurrences/{occurrence_id} | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listNoteOccurrences"></a>
# **listNoteOccurrences**
> InlineResponse2002 listNoteOccurrences(accountId, authorization, providerId, noteId, opts)

Lists &#x60;Occurrences&#x60; referencing the specified &#x60;Note&#x60;. Use this method to get all occurrences referencing your &#x60;Note&#x60; across all your customer providers.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsOccurrencesApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var providerId = "providerId_example"; // String | First part of note `name`: providers/{provider_id}/notes/{note_id}

var noteId = "noteId_example"; // String | Second part of note `name`: providers/{provider_id}/notes/{note_id}

var opts = { 
  'pageSize': 56, // Number | Number of notes to return in the list.
  'pageToken': "pageToken_example" // String | Token to provide to skip to a particular spot in the list.
};
apiInstance.listNoteOccurrences(accountId, authorization, providerId, noteId, opts).then(function(data) {
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
 **providerId** | **String**| First part of note &#x60;name&#x60;: providers/{provider_id}/notes/{note_id} | 
 **noteId** | **String**| Second part of note &#x60;name&#x60;: providers/{provider_id}/notes/{note_id} | 
 **pageSize** | **Number**| Number of notes to return in the list. | [optional] 
 **pageToken** | **String**| Token to provide to skip to a particular spot in the list. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listOccurrences"></a>
# **listOccurrences**
> InlineResponse2001 listOccurrences(accountId, authorization, providerId, opts)

Lists active &#x60;Occurrences&#x60; for a given provider matching the filters.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsOccurrencesApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var providerId = "providerId_example"; // String | Part of `parent`. This contains the provider_id for example: providers/{provider_id}

var opts = { 
  'pageSize': 56, // Number | Number of occurrences to return in the list.
  'pageToken': "pageToken_example" // String | Token to provide to skip to a particular spot in the list.
};
apiInstance.listOccurrences(accountId, authorization, providerId, opts).then(function(data) {
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
 **providerId** | **String**| Part of &#x60;parent&#x60;. This contains the provider_id for example: providers/{provider_id} | 
 **pageSize** | **Number**| Number of occurrences to return in the list. | [optional] 
 **pageToken** | **String**| Token to provide to skip to a particular spot in the list. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOccurrence"></a>
# **updateOccurrence**
> InlineResponse2001Occurrences updateOccurrence(accountId, authorization, providerId, occurrenceId, body)

Updates an existing &#x60;Occurrence&#x60;.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsOccurrencesApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var providerId = "providerId_example"; // String | First part of occurrence `name`: providers/{provider_id}/occurrences/{occurrence_id}

var occurrenceId = "occurrenceId_example"; // String | Second part of occurrence `name`: providers/{provider_id}/occurrences/{occurrence_id}

var body = new findings.Body3(); // Body3 | Body for Occurence updation

apiInstance.updateOccurrence(accountId, authorization, providerId, occurrenceId, body).then(function(data) {
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
 **providerId** | **String**| First part of occurrence &#x60;name&#x60;: providers/{provider_id}/occurrences/{occurrence_id} | 
 **occurrenceId** | **String**| Second part of occurrence &#x60;name&#x60;: providers/{provider_id}/occurrences/{occurrence_id} | 
 **body** | [**Body3**](Body3.md)| Body for Occurence updation | 

### Return type

[**InlineResponse2001Occurrences**](InlineResponse2001Occurrences.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

