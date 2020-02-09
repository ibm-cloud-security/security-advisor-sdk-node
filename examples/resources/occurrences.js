module.exports = [
  {
    newName: 'occurence1',
    newResourceUrl: 'string',
    newNoteName: `${process.env.account_id}/providers/security-advisor/notes/mynote`,
    newKind: 'FINDING',
    newProviderId: 'security-advisor',
    newId: 'occurence1',
    newContext: {
      resource_name: 'myresource',
    },
    newFinding: {
      severity: 'LOW',
      certainty: 'LOW',
      next_steps: [
        {
          title: 'next_step_title',
          url: 'https://example.com',
        },
      ],
    },
  },
  {
    newName: 'occurence2',
    newResourceUrl: 'string',
    newNoteName: `${process.env.account_id}/providers/security-advisor/notes/sample-kpi`,
    newKind: 'KPI',
    newProviderId: 'security-advisor',
    newId: 'occurence2',
    newContext: {
      resource_name: 'myresource2',
    },
    newKpi: {
      value: 10,
      total: 100,
    },
  },
];
