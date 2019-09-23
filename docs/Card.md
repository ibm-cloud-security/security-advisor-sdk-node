# findings.Card

### Description

Card provides details about a card kind of note

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**section** | **String** | The section this card belongs to | 
**title** | **String** | The title of this card | 
**subtitle** | **String** | The subtitle of this card | 
**order** | **Number** | The order of the card in which it will appear on SA dashboard in the mentioned section | [optional] 
**finding_note_names** | **[String]** | The finding note names associated to this card | 
**requires_configuration** | **Boolean** |  | [optional] [default to false]
**badge_text** | **String** | The text associated to the card&#39;s badge | [optional] 
**badge_image** | **String** | The base64 content of the image associated to the card&#39;s badge | [optional] 
**elements** | [**[InlineResponse2001CardElements]**](InlineResponse2001CardElements.md) | The elements of this card | 

