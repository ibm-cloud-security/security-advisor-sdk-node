module.exports = [
  {
    name: 'Channel1',
    description: 'My channel1',
    type: 'Webhook',
    severity: ['low', 'critical'],
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
