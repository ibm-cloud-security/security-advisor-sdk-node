# IBM Cloud Security Advisor Node.js SDK

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Node JS client library to use the IBM Cloud Security Advisor APIs.

<details>
<summary>Table of Contents</summary>

* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Authentication](#authentication)
* [Using the SDK](#using-the-sdk)
  * [Basic Usage](#basic-usage)
  * [Setting the Service URL](#setting-the-service-url)
  * [Sending request headers](#sending-request-headers)
* [Configuring the HTTPS Agent](#configuring-the-https-agent)
  * [Use behind a corporate proxy](#use-behind-a-corporate-proxy)
  * [Sending custom certificates](#sending-custom-certificates)
  * [Disabling SSL Verification](#disabling-ssl-verification---discouraged)
* [Documentation](#documentation)
* [Questions](#questions)
* [Debug](#debug)
* [Tests](#tests)
* [Open Source @ IBM](#open-source--ibm)
* [Contributing](#contributing)
* [Featured Projects](#featured-projects)
* [License](#license)
</details>

## Overview

The IBM Cloud Security Advisor Node SDK allows developers to programmatically interact with the IBM Cloud Security Advisor Service.

## Prerequisites
- You need an [IBM Cloud][ibm-cloud-onboarding] account.

- **Node >=10**: This SDK is tested with Node versions 10 and up. It may work on previous versions but this is not officially supported.

## Installation

```sh
npm install ibm-security-advisor
```

## Authentication

IBM Cloud Security Advisor service uses token-based Identity and Access Management (IAM) authentication.

IAM authentication uses a service API key to get an access token that is passed with the call.
Access tokens are valid for a limited amount of time and must be regenerated.

Authentication is accomplished using dedicated Authenticators for each authentication scheme. Import authenticators from `ibm-security-advisor/auth`.

### Examples
#### Programmatic credentials
```js
import { IamAuthenticator } from 'ibm-security-advisor/auth';

const authenticator = new IamAuthenticator({
  apikey: '{apikey}',
});
```

#### External configuration
```js
import { getAuthenticatorFromEnvironment } from 'ibm-security-advisor/auth';

// env vars
// FINDINGS_API_AUTH_TYPE=iam
// FINDINGS_API_APIKEY=<apikey>
const iamAuthenticator = getAuthenticatorFromEnvironment('findings-api');
```

To learn more about the Authenticators and how to use them with your services, see [the detailed documentation](https://github.com/IBM/node-sdk-core/blob/master/AUTHENTICATION.md).

## Using the SDK
### Basic Usage

All methods return a Promise that either resolves with the response from the service or rejects with an Error. The response contains the body, the headers, the status code, and the status text.

```js
const FindingsAPI =  require('ibm-security-advisor/findings-api/v1');
const { IamAuthenticator } = require('ibm-security-advisor/auth');

const findingsAPIClient = new FindingsAPI({
  authenticator: new IamAuthenticator({ apikey: '{apikey}' }),
  url: 'https://us-south.secadvisor.cloud.ibm.com/findings',
});

findingsAPIClient
  .listNotes({account_id: "account_id", provider_id: "provider_id"})
  .then(
    response => {
      // handle response
      // the body is under property `result`
      console.log(JSON.stringify(response.result, null, 2));

      // access the headers
      console.log(JSON.stringify(response.headers, null, 2));

      // access the status code
      console.log(response.status);

      // access the status text
      console.log(response.statusText);
    },
    err => {
      // handle request/SDK errors
      console.log(err);
    }
  )
  .catch(err => {
    // catch errors in response handling code
    console.log(err);
  });

```

### Setting the Service URL
You can set or reset the base URL after constructing the client instance using the `setServiceUrl` method:

```js
const FindingsAPI =  require('ibm-security-advisor/findings-api/v1');
const { IamAuthenticator } = require('ibm-security-advisor/auth');

const findingsAPIClient = new FindingsAPI({
  authenticator: new IamAuthenticator({ apikey: '{apikey}' }),
});

findingsAPIClient.setServiceUrl('https://eu-gb.secadvisor.cloud.ibm.com/findings');
```

### Sending request headers
Custom headers can be passed with any request. There are two ways of setting them - setting default headers in the constructor or passing request-specific headers directly to one of the methods.

#### Default headers
Any headers passed in with the service client constructor will be stored and automatically added to every request made with said client.

```js
const FindingsAPI =  require('ibm-security-advisor/findings-api/v1');
const { IamAuthenticator } = require('ibm-security-advisor/auth');

const findingsAPIClient = new FindingsAPI({
  authenticator: new IamAuthenticator({ apikey: '{apikey}' }),
  headers: {
    'X-Custom-Header': 'some value',
  },
});

findingsAPIClient.listNotes({account_id: "account_id", provider_id: "provider_id"}).then(res => {
  // X-Custom-Header will have been sent with the request
});
```

## Configuring the HTTPS Agent
The SDK provides the user with full control over the HTTPS Agent used to make requests. This is available for both the service client and the authenticators that make network requests (e.g. `IamAuthenticator`). Outlined below are a couple of different scenarios where this capability is needed. Note that this functionality is for Node environments only - these configurtions will have no effect in the browser.

### Use behind a corporate proxy
To use the SDK (which makes HTTPS requests) behind an HTTP proxy, a special tunneling agent must be used. Use the package [`tunnel`](https://github.com/koichik/node-tunnel/) for this. Configure this agent with your proxy information, and pass it in as the HTTPS agent in the service constructor. Additionally, you must set `proxy` to `false` in the client constructor. See this example configuration:

```js
const tunnel = require('tunnel');
const FindingsAPI =  require('ibm-security-advisor/findings-api/v1');
const { IamAuthenticator } = require('ibm-security-advisor/auth');

const findingsAPIClient = new FindingsAPI({
  authenticator: new IamAuthenticator({ apikey: '{apikey}' }),
  httpsAgent: tunnel.httpsOverHttp({
    proxy: {
      host: 'some.host.org',
      port: 1234,
    },
  }),
  proxy: false,
});
```

### Sending custom certificates
To send custom certificates as a security measure in your request, use the `cert`, `key`, and/or `ca` properties of the HTTPS Agent. See [this documentation](https://nodejs.org/api/tls.html#tls_tls_createsecurecontext_options) for more information about the options. Note that the entire contents of the file must be provided - not just the file name.
```js
const tunnel = require('tunnel');
const FindingsAPI =  require('ibm-security-advisor/findings-api/v1');
const { IamAuthenticator } = require('ibm-security-advisor/auth');

const certFile = fs.readFileSync('./my-cert.pem');
const keyFile = fs.readFileSync('./my-key.pem');

const findingsAPIClient = new FindingsAPI({
  authenticator: new IamAuthenticator({
    apikey: '{apikey}',
    httpsAgent: new https.Agent({
      key: keyFile,
      cert: certFile,
    })
  }),
  httpsAgent: new https.Agent({
    key: keyFile,
    cert: certFile,
  }),
});
```

### Disabling SSL Verification - Discouraged
The HTTP client can be configured to disable SSL verification. **Note that this has serious security implications - only do this if you really mean to!** ⚠️

To do this, set `disableSslVerification` to `true` in the service constructor and/or authenticator constructor, like below:

```js
const FindingsAPI =  require('ibm-security-advisor/findings-api/v1');
const { IamAuthenticator } = require('ibm-security-advisor/auth');

const findingsAPIClient = new FindingsAPI({
  authenticator: new IamAuthenticator({ apikey: '<apikey>', disableSslVerification: true }), // this will disable SSL verification for requests to the token endpoint
  disableSslVerification: true, // this will disable SSL verification for any request made with this client instance
});
```

## Documentation
You can find links to the documentation at https://cloud.ibm.com/docs/security-advisor. Click API reference.

There are also auto-generated JSDocs available at http://ibm-cloud-security.github.io/security-advisor-findings-sdk-nodejs

## Questions
If you are having difficulties using the APIs or have a question about the IBM Cloud Security Advisor offering, please ask a question at [dW Answers](https://developer.ibm.com/answers/questions/ask) or [Stack Overflow](http://stackoverflow.com/questions/ask).

## Debug
This module uses the [`debug`](https://github.com/visionmedia/debug) package for logging. Specify the desired environment variable to enable logging debug messages.

## Tests
Running all the tests:
```sh
npm test
```

Running a specific test:
```sh
npm run jest -- '<path to test>'
```

## Open source @ IBM
[Find more open source projects on the IBM Github Page.][ibm-open-source]

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md).

## Featured Projects
We love to highlight cool open-source projects that use this SDK! If you'd like to get your project added to the list, feel free to make an issue linking us to it.
<link-to-project>

## License
This library is licensed under Apache 2.0. Full license text is available in
[LICENSE][license].

[ibm-cloud-onboarding]: https://cloud.ibm.com/registration?state=%2Fsecurity-advisor%23%2Fdashboard
[ibm-open-source]: http://ibm.github.io/
[license]: http://www.apache.org/licenses/LICENSE-2.0
