# findings.ApiNote

### Description

Provides a detailed description of a `Note`.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**short_description** | **String** | A one sentence description of this &#x60;Note&#x60;. | 
**long_description** | **String** | A detailed description of this &#x60;Note&#x60;. | 
**kind** | **String** | This must be 1&amp;#58;1 with members of our oneofs, it can be used for filtering Note and Occurrence on their kind.  - FINDING&amp;#58; The note and occurrence represent a finding.  - KPI&amp;#58; The note and occurrence represent a KPI value.  - CARD&amp;#58; The note represents a card showing findings and related metric values.  - CARD_CONFIGURED&amp;#58; The note represents a card configured for a user account.  - SECTION&amp;#58; The note represents a section in a dashboard. | 
**related_url** | [**[InlineResponse200RelatedUrl]**](InlineResponse200RelatedUrl.md) |  | [optional] 
**expiration_time** | **Date** | Time of expiration for this note, null if note does not expire. | [optional] 
**create_time** | **Date** | Output only. The time this note was created. This field can be used as a filter in list requests. | [optional] 
**update_time** | **Date** | Output only. The time this note was last updated. This field can be used as a filter in list requests. | [optional] 
**provider_id** | **String** |  | [optional] 
**id** | **String** |  | 
**shared** | **Boolean** | True if this &#x60;Note&#x60; can be shared by multiple accounts. | [optional] [default to true]
**reported_by** | [**InlineResponse200ReportedBy**](InlineResponse200ReportedBy.md) |  | 
**finding** | [**InlineResponse200Finding**](InlineResponse200Finding.md) |  | [optional] 
**kpi** | [**InlineResponse200Kpi**](InlineResponse200Kpi.md) |  | [optional] 
**card** | [**InlineResponse200Card**](InlineResponse200Card.md) |  | [optional] 
**section** | [**InlineResponse200Section**](InlineResponse200Section.md) |  | [optional] 


<a name="KindEnum"></a>
## Enum: KindEnum


* `FINDING` (value: `"FINDING"`)

* `KPI` (value: `"KPI"`)

* `CARD` (value: `"CARD"`)

* `CARD_CONFIGURED` (value: `"CARD_CONFIGURED"`)

* `SECTION` (value: `"SECTION"`)



