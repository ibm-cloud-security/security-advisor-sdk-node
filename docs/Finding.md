# findings.Finding

### Description

Finding provides details about a finding occurrence.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**severity** | **String** | Note provider-assigned severity/impact ranking - LOW&amp;#58; Low Impact - MEDIUM&amp;#58; Medium Impact - HIGH&amp;#58; High Impact | [optional] 
**certainty** | **String** | Note provider-assigned confidence on the validity of an occurrence - LOW&amp;#58; Low Certainty - MEDIUM&amp;#58; Medium Certainty - HIGH&amp;#58; High Certainty | [optional] 
**next_steps** | [**[InlineResponse2001FindingNextSteps]**](InlineResponse2001FindingNextSteps.md) | Remediation steps for the issues reported in this finding. They override the note&#39;s next steps. | [optional] 
**network_connection** | [**InlineResponse2002FindingNetworkConnection**](InlineResponse2002FindingNetworkConnection.md) |  | [optional] 
**data_transferred** | [**InlineResponse2002FindingDataTransferred**](InlineResponse2002FindingDataTransferred.md) |  | [optional] 


<a name="SeverityEnum"></a>
## Enum: SeverityEnum


* `LOW` (value: `"LOW"`)

* `MEDIUM` (value: `"MEDIUM"`)

* `HIGH` (value: `"HIGH"`)




<a name="CertaintyEnum"></a>
## Enum: CertaintyEnum


* `LOW` (value: `"LOW"`)

* `MEDIUM` (value: `"MEDIUM"`)

* `HIGH` (value: `"HIGH"`)



