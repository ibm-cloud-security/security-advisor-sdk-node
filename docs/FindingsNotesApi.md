# findings.FindingsNotesApi

All URIs are relative to:

* https://us-south.secadvisor.cloud.ibm.com/findings
* https://eu-gb.secadvisor.cloud.ibm.com/findings

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNote**](FindingsNotesApi.md#createNote) | **POST** /v1/{account_id}/providers/{provider_id}/notes | Creates a new &#x60;Note&#x60;.
[**deleteNote**](FindingsNotesApi.md#deleteNote) | **DELETE** /v1/{account_id}/providers/{provider_id}/notes/{note_id} | Deletes the given &#x60;Note&#x60; from the system.
[**getNote**](FindingsNotesApi.md#getNote) | **GET** /v1/{account_id}/providers/{provider_id}/notes/{note_id} | Returns the requested &#x60;Note&#x60;.
[**getOccurrenceNote**](FindingsNotesApi.md#getOccurrenceNote) | **GET** /v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id}/note | Gets the &#x60;Note&#x60; attached to the given &#x60;Occurrence&#x60;.
[**listNotes**](FindingsNotesApi.md#listNotes) | **GET** /v1/{account_id}/providers/{provider_id}/notes | Lists all &#x60;Notes&#x60; for a given provider.
[**updateNote**](FindingsNotesApi.md#updateNote) | **PUT** /v1/{account_id}/providers/{provider_id}/notes/{note_id} | Updates an existing &#x60;Note&#x60;.


<a name="createNote"></a>
# **createNote**
> InlineResponse2001Notes createNote(accountId, authorization, providerId, body)

Creates a new &#x60;Note&#x60;.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsNotesApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var providerId = "providerId_example"; // String | Part of `parent`. This field contains the provider_id for example: providers/{provider_id}

var body = new findings.Body(); // Body | Body for Note creation

apiInstance.createNote(accountId, authorization, providerId, body).then(function(data) {
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
 **providerId** | **String**| Part of &#x60;parent&#x60;. This field contains the provider_id for example: providers/{provider_id} | 
 **body** | [**Body**](Body.md)| Body for Note creation | 

### Return type

[**InlineResponse2001Notes**](InlineResponse2001Notes.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNote"></a>
# **deleteNote**
> Object deleteNote(accountId, authorization, providerId, noteId)

Deletes the given &#x60;Note&#x60; from the system.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsNotesApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var providerId = "providerId_example"; // String | First part of note `name`: providers/{provider_id}/notes/{note_id}

var noteId = "noteId_example"; // String | Second part of note `name`: providers/{provider_id}/notes/{note_id}

apiInstance.deleteNote(accountId, authorization, providerId, noteId).then(function(data) {
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

### Return type

**Object**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNote"></a>
# **getNote**
> InlineResponse2001Notes getNote(accountId, authorization, providerId, noteId)

Returns the requested &#x60;Note&#x60;.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsNotesApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var providerId = "providerId_example"; // String | First part of note `name`: providers/{provider_id}/notes/{note_id}

var noteId = "noteId_example"; // String | Second part of note `name`: providers/{provider_id}/notes/{note_id}

apiInstance.getNote(accountId, authorization, providerId, noteId).then(function(data) {
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

### Return type

[**InlineResponse2001Notes**](InlineResponse2001Notes.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOccurrenceNote"></a>
# **getOccurrenceNote**
> InlineResponse2001Notes getOccurrenceNote(accountId, authorization, providerId, occurrenceId)

Gets the &#x60;Note&#x60; attached to the given &#x60;Occurrence&#x60;.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsNotesApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var providerId = "providerId_example"; // String | First part of occurrence `name`: providers/{provider_id}/occurrences/{occurrence_id}

var occurrenceId = "occurrenceId_example"; // String | Second part of occurrence `name`: providers/{provider_id}/occurrences/{occurrence_id}

apiInstance.getOccurrenceNote(accountId, authorization, providerId, occurrenceId).then(function(data) {
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

[**InlineResponse2001Notes**](InlineResponse2001Notes.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listNotes"></a>
# **listNotes**
> InlineResponse2001 listNotes(accountId, authorization, providerId, opts)

Lists all &#x60;Notes&#x60; for a given provider.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsNotesApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var providerId = "providerId_example"; // String | Part of `parent`. This field contains the provider_id for example: providers/{provider_id}

var opts = { 
  'pageSize': 56, // Number | Number of notes to return in the list.
  'pageToken': "pageToken_example" // String | Token to provide to skip to a particular spot in the list.
};
apiInstance.listNotes(accountId, authorization, providerId, opts).then(function(data) {
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
 **providerId** | **String**| Part of &#x60;parent&#x60;. This field contains the provider_id for example: providers/{provider_id} | 
 **pageSize** | **Number**| Number of notes to return in the list. | [optional] 
 **pageToken** | **String**| Token to provide to skip to a particular spot in the list. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNote"></a>
# **updateNote**
> InlineResponse2001Notes updateNote(accountId, authorization, providerId, noteId, body)

Updates an existing &#x60;Note&#x60;.

### Example
```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"

var apiInstance = new findings.FindingsNotesApi();

var accountId = "accountId_example"; // String | Account ID

var authorization = "authorization_example"; // String | The Identity & Access Management (IAM) Bearer token.

var providerId = "providerId_example"; // String | First part of note `name`: providers/{provider_id}/notes/{note_id}

var noteId = "noteId_example"; // String | Second part of note `name`: providers/{provider_id}/notes/{note_id}

var body = new findings.Body1(); // Body1 | Body for Note updation

apiInstance.updateNote(accountId, authorization, providerId, noteId, body).then(function(data) {
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
 **body** | [**Body1**](Body1.md)| Body for Note updation | 

### Return type

[**InlineResponse2001Notes**](InlineResponse2001Notes.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

