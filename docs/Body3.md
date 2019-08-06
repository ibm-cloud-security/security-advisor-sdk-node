# findings.Body3

### Description

`Occurrence` includes information about analysis occurrences for an image.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Output only. The name of the &#x60;Occurrence&#x60; in the form \&quot;providers/{provider_id}/occurrences/{occuurence_id}\&quot; | [optional] 
**resource_url** | **String** | The unique URL of the resource, image or the container, for which the &#x60;Occurrence&#x60; applies. For example, https://gcr.io/provider/image@sha256:foo. This field can be used as a filter in list requests. | [optional] 
**note_name** | **String** | An analysis note associated with this image, in the form \&quot;providers/{provider_id}/notes/{note_id}\&quot; This field can be used as a filter in list requests. | 
**kind** | **String** | This must be 1&amp;#58;1 with members of our oneofs, it can be used for filtering Note and Occurrence on their kind.  - FINDING&amp;#58; The note and occurrence represent a finding.  - KPI&amp;#58; The note and occurrence represent a KPI value.  - CARD&amp;#58; The note represents a card showing findings and related metric values.  - CARD_CONFIGURED&amp;#58; The note represents a card configured for a user account.  - SECTION&amp;#58; The note represents a section in a dashboard. | 
**remediation** | **String** |  | [optional] 
**create_time** | **Date** | Output only. The time this &#x60;Occurrence&#x60; was created. | [optional] 
**update_time** | **Date** | Output only. The time this &#x60;Occurrence&#x60; was last updated. | [optional] 
**provider_id** | **String** |  | [optional] 
**id** | **String** |  | 
**context** | [**InlineResponse2001Context**](InlineResponse2001Context.md) |  | [optional] 
**finding** | [**InlineResponse2001Finding**](InlineResponse2001Finding.md) |  | [optional] 
**kpi** | [**InlineResponse2001Kpi**](InlineResponse2001Kpi.md) |  | [optional] 


<a name="KindEnum"></a>
## Enum: KindEnum


* `FINDING` (value: `"FINDING"`)

* `KPI` (value: `"KPI"`)

* `CARD` (value: `"CARD"`)

* `CARD_CONFIGURED` (value: `"CARD_CONFIGURED"`)

* `SECTION` (value: `"SECTION"`)



