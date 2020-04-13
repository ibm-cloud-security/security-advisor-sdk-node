'use strict';

/*
export the following variables before running this example in a terminal
export apikey=
export account_id=

This would create a card in the given account with name SampleCard and a KPI called My sample KPI with value 10
Visit https://cloud.ibm.com/security-advisor#/dashboard to view them
*/

let channels = require('./resources/channels');

const NotificationsApiV1 = require('ibm-security-advisor/notifications-api/v1');
const { IamAuthenticator } = require('ibm-security-advisor/auth');

const client = new NotificationsApiV1({
  authenticator: new IamAuthenticator({ apikey: process.env.apikey }),
  serviceUrl: 'https://us-south.secadvisor.cloud.ibm.com/notifications',
});

let listChannels = async () => {
  try {
    let response = await client.listAllChannels({
      accountId: process.env.account_id
    });
    console.log('List of Channels');
    console.log(JSON.stringify(response.result, null, 2));
  } catch (err) {
    console.log(err);
  }
};

let fetchChannel = async (id) => {
  try {
    let response = await client.getNotificationChannel({
      accountId: process.env.account_id,
      channelId: id
    });
    console.log('Fetching the channel info');
    console.log(JSON.stringify(response.result, null, 2));
  } catch (err) {
    console.log(err);
  }
};

let createChannels = async () => {
  await Promise.all(
    channels.map(async c => {
      try {
        console.log('Creating channel', c.name);
        await client.createNotificationChannel(
          Object.assign({ accountId: process.env.account_id }, c)
        );
        console.log('Created channel', n.id);
      } catch (err) {
        console.log('Channel creation failed for', c.name);
        if (err.status == 409) {
          try {
            console.log('Trying to update channel with id', n.id);
            await client.updateNotificationChannel(
              Object.assign(
                { accountId: process.env.account_id, channelId: err.body.id },
                c
              )
            );
            console.log('Successfully updated channel with name', c.name);
          } catch (err) {
            console.log('Channel update failed for', c.name, err.message);
          }
        }
      }
    })
  );
};

let deleteChannel = async channelId => {
  try {
    await client.deleteNotificationChannel({
      accountId: process.env.account_id,
      channelId: channelId
    });
    console.log(`Deleted channel ${channelId}`);
  } catch (err) {
    console.log(err);
  }
};


//pass
let driver = async seq => {
  if (seq) {
    await listChannels();
    await fetchChannel("id");
    await createChannels();
  } else {
    Promise.all([listChannels(), fetchChannel("id"), createChannels()]);
  }
};

driver(true);

