'use strict';

/*
export the following variables before running this example in a terminal
export apikey=
export account_id=

This would create a card in the given account with name SampleCard and a KPI called My sample KPI with value 10
Visit https://cloud.ibm.com/security-advisor#/dashboard to view them
*/

let notes = require('./resources/notes');
let occurrences = require('./resources/occurrences');

const FindingsAPI = require('ibm-security-advisor/findings-api/v1');
const { IamAuthenticator } = require('ibm-security-advisor/auth');

const findingsAPIClient = new FindingsAPI({
  authenticator: new IamAuthenticator({ apikey: process.env.apikey }),
  url: 'https://us-south.secadvisor.cloud.ibm.com/findings',
});

let listNotes = async () => {
  try {
    let response = await findingsAPIClient.listNotes({
      accountId: process.env.account_id,
      providerId: 'security-advisor',
    });
    console.log('List of notes');
    console.log(JSON.stringify(response.result, null, 2));
  } catch (err) {
    console.log(err);
  }
};

let listOccurrences = async () => {
  try {
    let response = await findingsAPIClient.listOccurrences({
      accountId: process.env.account_id,
      providerId: 'security-advisor',
    });
    console.log('List of occurrences');
    console.log(JSON.stringify(response.result, null, 2));
  } catch (err) {
    console.log(err);
  }
};

let createNotes = async () => {
  await Promise.all(
    notes.map(async n => {
      try {
        console.log('Creating note with id', n.newId);
        await findingsAPIClient.createNote(Object.assign({ accountId: process.env.account_id }, n));
        console.log('Created note with id', n.newId);
      } catch (err) {
        console.log('Note creation failed for id', n.newId, err.message);
        if (err.status == 409) {
          try {
            console.log('Trying to update note with id', n.newId);
            await findingsAPIClient.updateNote(
              Object.assign({ accountId: process.env.account_id, noteId: n.newId }, n)
            );
            console.log('Successfully updated note with id', n.newId);
          } catch (err) {
            console.log('Note update failed for id', n.newId, err.message);
          }
        }
      }
    })
  );
};

let createOccurrences = async () => {
  await Promise.all(
    occurrences.map(async o => {
      try {
        console.log('Creating occurence with id', o.newId);
        await findingsAPIClient.createOccurrence(
          Object.assign({ accountId: process.env.account_id, providerId: 'security-advisor' }, o)
        );
        console.log('Created occurence with id', o.newId);
      } catch (err) {
        console.log('Occurence creation failed for id', o.newId, err.message);
        if (err.status == 409) {
          try {
            console.log('Trying to update occurence with id', o.newId);
            await findingsAPIClient.updateOccurrence(
              Object.assign(
                {
                  accountId: process.env.account_id,
                  providerId: 'security-advisor',
                  occurrenceId: o.newId,
                },
                o
              )
            );
            console.log('Successfully updated occurence with id', o.newId);
          } catch (err) {
            console.log('Note update failed for id', o.newId, err.message);
          }
        }
      }
    })
  );
};

let deleteNote = async noteId => {
  try {
    let response = await findingsAPIClient.deleteNote({
      accountId: process.env.account_id,
      providerId: 'security-advisor',
      noteId,
    });
    console.log(`Deleted note ${noteId}`);
  } catch (err) {
    console.log(err);
  }
};

let deleteOccurrence = async occurrenceId => {
  try {
    let response = await findingsAPIClient.deleteOccurrence({
      accountId: process.env.account_id,
      providerId: 'security-advisor',
      occurrenceId,
    });
    console.log(`Deleted occurence ${occurrenceId}`);
  } catch (err) {
    console.log(err);
  }
};

//pass
let driver = async seq => {
  if (seq) {
    await listNotes();
    await createNotes();
    await createOccurrences();
    await listOccurrences();
  } else {
    Promise.all([listNotes(), createNotes(), createOccurrences(), listOccurrences()]);
  }
};

driver(true);

//Uncomment below and re-run to see the card is gone from the dashboard
// deleteNote("mycard")
// deleteOccurrence("occurence2")
