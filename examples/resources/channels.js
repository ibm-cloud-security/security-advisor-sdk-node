module.exports = [
  {
    name: 'Channel1',
    description: 'My channel1',
    type: 'Webhook',
    severity: ['low'],
    endpoint: 'http://mywebhook.com',
    enabled: true,
    alertSource: [
      {
        provider_name: 'ALL',
        finding_types: ['ALL'],
      },
    ],
  },
];
