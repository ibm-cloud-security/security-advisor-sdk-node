/**
 * (C) Copyright IBM Corp. 2020.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const { NoAuthAuthenticator, unitTestUtils } = require('ibm-cloud-sdk-core');
const FindingsApiV1 = require('../../dist/findings-api/v1');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkUserHeader,
} = unitTestUtils;

const service = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://gateway.watsonplatform.net/findings/findings',
};

const findingsApi = new FindingsApiV1(service);
const createRequestMock = jest.spyOn(findingsApi, 'createRequest');

// dont actually create a request
createRequestMock.mockImplementation(() => Promise.resolve());

afterEach(() => {
  createRequestMock.mockClear();
});

describe('FindingsApiV1', () => {
  describe('postGraph', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const body = 'fake_body';
        const contentType = 'fake_contentType';
        const params = {
          accountId,
          body,
          contentType,
        };

        const postGraphResult = findingsApi.postGraph(params);

        // all methods should return a Promise
        expectToBePromise(postGraphResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/graph', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = contentType;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Content-Type', contentType);
        expect(options.body).toEqual(body);
        expect(options.path['account_id']).toEqual(accountId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const body = 'fake_body';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          body,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.postGraph(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.postGraph({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const postGraphPromise = findingsApi.postGraph();
        expectToBePromise(postGraphPromise);

        postGraphPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('createNote', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const newShortDescription = 'fake_newShortDescription';
        const newLongDescription = 'fake_newLongDescription';
        const newKind = 'fake_newKind';
        const newId = 'fake_newId';
        const newReportedBy = 'fake_newReportedBy';
        const newName = 'fake_newName';
        const newRelatedUrl = 'fake_newRelatedUrl';
        const newExpirationTime = 'fake_newExpirationTime';
        const newCreateTime = 'fake_newCreateTime';
        const newUpdateTime = 'fake_newUpdateTime';
        const newProviderId = 'fake_newProviderId';
        const newShared = 'fake_newShared';
        const newFinding = 'fake_newFinding';
        const newKpi = 'fake_newKpi';
        const newCard = 'fake_newCard';
        const newSection = 'fake_newSection';
        const params = {
          accountId,
          providerId,
          newShortDescription,
          newLongDescription,
          newKind,
          newId,
          newReportedBy,
          newName,
          newRelatedUrl,
          newExpirationTime,
          newCreateTime,
          newUpdateTime,
          newProviderId,
          newShared,
          newFinding,
          newKpi,
          newCard,
          newSection,
        };

        const createNoteResult = findingsApi.createNote(params);

        // all methods should return a Promise
        expectToBePromise(createNoteResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/providers/{provider_id}/notes', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['short_description']).toEqual(newShortDescription);
        expect(options.body['long_description']).toEqual(newLongDescription);
        expect(options.body['kind']).toEqual(newKind);
        expect(options.body['id']).toEqual(newId);
        expect(options.body['reported_by']).toEqual(newReportedBy);
        expect(options.body['name']).toEqual(newName);
        expect(options.body['related_url']).toEqual(newRelatedUrl);
        expect(options.body['expiration_time']).toEqual(newExpirationTime);
        expect(options.body['create_time']).toEqual(newCreateTime);
        expect(options.body['update_time']).toEqual(newUpdateTime);
        expect(options.body['provider_id']).toEqual(newProviderId);
        expect(options.body['shared']).toEqual(newShared);
        expect(options.body['finding']).toEqual(newFinding);
        expect(options.body['kpi']).toEqual(newKpi);
        expect(options.body['card']).toEqual(newCard);
        expect(options.body['section']).toEqual(newSection);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const newShortDescription = 'fake_newShortDescription';
        const newLongDescription = 'fake_newLongDescription';
        const newKind = 'fake_newKind';
        const newId = 'fake_newId';
        const newReportedBy = 'fake_newReportedBy';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          newShortDescription,
          newLongDescription,
          newKind,
          newId,
          newReportedBy,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.createNote(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.createNote({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const createNotePromise = findingsApi.createNote();
        expectToBePromise(createNotePromise);

        createNotePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listNotes', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const pageSize = 'fake_pageSize';
        const pageToken = 'fake_pageToken';
        const params = {
          accountId,
          providerId,
          pageSize,
          pageToken,
        };

        const listNotesResult = findingsApi.listNotes(params);

        // all methods should return a Promise
        expectToBePromise(listNotesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/providers/{provider_id}/notes', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['page_size']).toEqual(pageSize);
        expect(options.qs['page_token']).toEqual(pageToken);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.listNotes(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.listNotes({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listNotesPromise = findingsApi.listNotes();
        expectToBePromise(listNotesPromise);

        listNotesPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getNote', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const noteId = 'fake_noteId';
        const params = {
          accountId,
          providerId,
          noteId,
        };

        const getNoteResult = findingsApi.getNote(params);

        // all methods should return a Promise
        expectToBePromise(getNoteResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/{account_id}/providers/{provider_id}/notes/{note_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
        expect(options.path['note_id']).toEqual(noteId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const noteId = 'fake_noteId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          noteId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.getNote(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.getNote({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getNotePromise = findingsApi.getNote();
        expectToBePromise(getNotePromise);

        getNotePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('updateNote', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const noteId = 'fake_noteId';
        const newShortDescription = 'fake_newShortDescription';
        const newLongDescription = 'fake_newLongDescription';
        const newKind = 'fake_newKind';
        const newId = 'fake_newId';
        const newReportedBy = 'fake_newReportedBy';
        const newName = 'fake_newName';
        const newRelatedUrl = 'fake_newRelatedUrl';
        const newExpirationTime = 'fake_newExpirationTime';
        const newCreateTime = 'fake_newCreateTime';
        const newUpdateTime = 'fake_newUpdateTime';
        const newProviderId = 'fake_newProviderId';
        const newShared = 'fake_newShared';
        const newFinding = 'fake_newFinding';
        const newKpi = 'fake_newKpi';
        const newCard = 'fake_newCard';
        const newSection = 'fake_newSection';
        const params = {
          accountId,
          providerId,
          noteId,
          newShortDescription,
          newLongDescription,
          newKind,
          newId,
          newReportedBy,
          newName,
          newRelatedUrl,
          newExpirationTime,
          newCreateTime,
          newUpdateTime,
          newProviderId,
          newShared,
          newFinding,
          newKpi,
          newCard,
          newSection,
        };

        const updateNoteResult = findingsApi.updateNote(params);

        // all methods should return a Promise
        expectToBePromise(updateNoteResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/{account_id}/providers/{provider_id}/notes/{note_id}',
          'PUT'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['short_description']).toEqual(newShortDescription);
        expect(options.body['long_description']).toEqual(newLongDescription);
        expect(options.body['kind']).toEqual(newKind);
        expect(options.body['id']).toEqual(newId);
        expect(options.body['reported_by']).toEqual(newReportedBy);
        expect(options.body['name']).toEqual(newName);
        expect(options.body['related_url']).toEqual(newRelatedUrl);
        expect(options.body['expiration_time']).toEqual(newExpirationTime);
        expect(options.body['create_time']).toEqual(newCreateTime);
        expect(options.body['update_time']).toEqual(newUpdateTime);
        expect(options.body['provider_id']).toEqual(newProviderId);
        expect(options.body['shared']).toEqual(newShared);
        expect(options.body['finding']).toEqual(newFinding);
        expect(options.body['kpi']).toEqual(newKpi);
        expect(options.body['card']).toEqual(newCard);
        expect(options.body['section']).toEqual(newSection);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
        expect(options.path['note_id']).toEqual(noteId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const noteId = 'fake_noteId';
        const newShortDescription = 'fake_newShortDescription';
        const newLongDescription = 'fake_newLongDescription';
        const newKind = 'fake_newKind';
        const newId = 'fake_newId';
        const newReportedBy = 'fake_newReportedBy';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          noteId,
          newShortDescription,
          newLongDescription,
          newKind,
          newId,
          newReportedBy,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.updateNote(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.updateNote({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const updateNotePromise = findingsApi.updateNote();
        expectToBePromise(updateNotePromise);

        updateNotePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteNote', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const noteId = 'fake_noteId';
        const params = {
          accountId,
          providerId,
          noteId,
        };

        const deleteNoteResult = findingsApi.deleteNote(params);

        // all methods should return a Promise
        expectToBePromise(deleteNoteResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/{account_id}/providers/{provider_id}/notes/{note_id}',
          'DELETE'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
        expect(options.path['note_id']).toEqual(noteId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const noteId = 'fake_noteId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          noteId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.deleteNote(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.deleteNote({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteNotePromise = findingsApi.deleteNote();
        expectToBePromise(deleteNotePromise);

        deleteNotePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getOccurrenceNote', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const occurrenceId = 'fake_occurrenceId';
        const params = {
          accountId,
          providerId,
          occurrenceId,
        };

        const getOccurrenceNoteResult = findingsApi.getOccurrenceNote(params);

        // all methods should return a Promise
        expectToBePromise(getOccurrenceNoteResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id}/note',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
        expect(options.path['occurrence_id']).toEqual(occurrenceId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const occurrenceId = 'fake_occurrenceId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          occurrenceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.getOccurrenceNote(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.getOccurrenceNote({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getOccurrenceNotePromise = findingsApi.getOccurrenceNote();
        expectToBePromise(getOccurrenceNotePromise);

        getOccurrenceNotePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('createOccurrence', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const newNoteName = 'fake_newNoteName';
        const newKind = 'fake_newKind';
        const newId = 'fake_newId';
        const newName = 'fake_newName';
        const newResourceUrl = 'fake_newResourceUrl';
        const newRemediation = 'fake_newRemediation';
        const newCreateTime = 'fake_newCreateTime';
        const newUpdateTime = 'fake_newUpdateTime';
        const newProviderId = 'fake_newProviderId';
        const newContext = 'fake_newContext';
        const newFinding = 'fake_newFinding';
        const newKpi = 'fake_newKpi';
        const replaceIfExists = 'fake_replaceIfExists';
        const params = {
          accountId,
          providerId,
          newNoteName,
          newKind,
          newId,
          newName,
          newResourceUrl,
          newRemediation,
          newCreateTime,
          newUpdateTime,
          newProviderId,
          newContext,
          newFinding,
          newKpi,
          replaceIfExists,
        };

        const createOccurrenceResult = findingsApi.createOccurrence(params);

        // all methods should return a Promise
        expectToBePromise(createOccurrenceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/providers/{provider_id}/occurrences', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Replace-If-Exists', replaceIfExists);
        expect(options.body['note_name']).toEqual(newNoteName);
        expect(options.body['kind']).toEqual(newKind);
        expect(options.body['id']).toEqual(newId);
        expect(options.body['name']).toEqual(newName);
        expect(options.body['resource_url']).toEqual(newResourceUrl);
        expect(options.body['remediation']).toEqual(newRemediation);
        expect(options.body['create_time']).toEqual(newCreateTime);
        expect(options.body['update_time']).toEqual(newUpdateTime);
        expect(options.body['provider_id']).toEqual(newProviderId);
        expect(options.body['context']).toEqual(newContext);
        expect(options.body['finding']).toEqual(newFinding);
        expect(options.body['kpi']).toEqual(newKpi);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const newNoteName = 'fake_newNoteName';
        const newKind = 'fake_newKind';
        const newId = 'fake_newId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          newNoteName,
          newKind,
          newId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.createOccurrence(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.createOccurrence({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const createOccurrencePromise = findingsApi.createOccurrence();
        expectToBePromise(createOccurrencePromise);

        createOccurrencePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listOccurrences', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const pageSize = 'fake_pageSize';
        const pageToken = 'fake_pageToken';
        const params = {
          accountId,
          providerId,
          pageSize,
          pageToken,
        };

        const listOccurrencesResult = findingsApi.listOccurrences(params);

        // all methods should return a Promise
        expectToBePromise(listOccurrencesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/providers/{provider_id}/occurrences', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['page_size']).toEqual(pageSize);
        expect(options.qs['page_token']).toEqual(pageToken);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.listOccurrences(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.listOccurrences({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listOccurrencesPromise = findingsApi.listOccurrences();
        expectToBePromise(listOccurrencesPromise);

        listOccurrencesPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listNoteOccurrences', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const noteId = 'fake_noteId';
        const pageSize = 'fake_pageSize';
        const pageToken = 'fake_pageToken';
        const params = {
          accountId,
          providerId,
          noteId,
          pageSize,
          pageToken,
        };

        const listNoteOccurrencesResult = findingsApi.listNoteOccurrences(params);

        // all methods should return a Promise
        expectToBePromise(listNoteOccurrencesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/{account_id}/providers/{provider_id}/notes/{note_id}/occurrences',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['page_size']).toEqual(pageSize);
        expect(options.qs['page_token']).toEqual(pageToken);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
        expect(options.path['note_id']).toEqual(noteId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const noteId = 'fake_noteId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          noteId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.listNoteOccurrences(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.listNoteOccurrences({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listNoteOccurrencesPromise = findingsApi.listNoteOccurrences();
        expectToBePromise(listNoteOccurrencesPromise);

        listNoteOccurrencesPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getOccurrence', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const occurrenceId = 'fake_occurrenceId';
        const params = {
          accountId,
          providerId,
          occurrenceId,
        };

        const getOccurrenceResult = findingsApi.getOccurrence(params);

        // all methods should return a Promise
        expectToBePromise(getOccurrenceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
        expect(options.path['occurrence_id']).toEqual(occurrenceId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const occurrenceId = 'fake_occurrenceId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          occurrenceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.getOccurrence(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.getOccurrence({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getOccurrencePromise = findingsApi.getOccurrence();
        expectToBePromise(getOccurrencePromise);

        getOccurrencePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('updateOccurrence', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const occurrenceId = 'fake_occurrenceId';
        const newNoteName = 'fake_newNoteName';
        const newKind = 'fake_newKind';
        const newId = 'fake_newId';
        const newName = 'fake_newName';
        const newResourceUrl = 'fake_newResourceUrl';
        const newRemediation = 'fake_newRemediation';
        const newCreateTime = 'fake_newCreateTime';
        const newUpdateTime = 'fake_newUpdateTime';
        const newProviderId = 'fake_newProviderId';
        const newContext = 'fake_newContext';
        const newFinding = 'fake_newFinding';
        const newKpi = 'fake_newKpi';
        const params = {
          accountId,
          providerId,
          occurrenceId,
          newNoteName,
          newKind,
          newId,
          newName,
          newResourceUrl,
          newRemediation,
          newCreateTime,
          newUpdateTime,
          newProviderId,
          newContext,
          newFinding,
          newKpi,
        };

        const updateOccurrenceResult = findingsApi.updateOccurrence(params);

        // all methods should return a Promise
        expectToBePromise(updateOccurrenceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id}',
          'PUT'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['note_name']).toEqual(newNoteName);
        expect(options.body['kind']).toEqual(newKind);
        expect(options.body['id']).toEqual(newId);
        expect(options.body['name']).toEqual(newName);
        expect(options.body['resource_url']).toEqual(newResourceUrl);
        expect(options.body['remediation']).toEqual(newRemediation);
        expect(options.body['create_time']).toEqual(newCreateTime);
        expect(options.body['update_time']).toEqual(newUpdateTime);
        expect(options.body['provider_id']).toEqual(newProviderId);
        expect(options.body['context']).toEqual(newContext);
        expect(options.body['finding']).toEqual(newFinding);
        expect(options.body['kpi']).toEqual(newKpi);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
        expect(options.path['occurrence_id']).toEqual(occurrenceId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const occurrenceId = 'fake_occurrenceId';
        const newNoteName = 'fake_newNoteName';
        const newKind = 'fake_newKind';
        const newId = 'fake_newId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          occurrenceId,
          newNoteName,
          newKind,
          newId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.updateOccurrence(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.updateOccurrence({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const updateOccurrencePromise = findingsApi.updateOccurrence();
        expectToBePromise(updateOccurrencePromise);

        updateOccurrencePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteOccurrence', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const occurrenceId = 'fake_occurrenceId';
        const params = {
          accountId,
          providerId,
          occurrenceId,
        };

        const deleteOccurrenceResult = findingsApi.deleteOccurrence(params);

        // all methods should return a Promise
        expectToBePromise(deleteOccurrenceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id}',
          'DELETE'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
        expect(options.path['occurrence_id']).toEqual(occurrenceId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const occurrenceId = 'fake_occurrenceId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          occurrenceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.deleteOccurrence(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.deleteOccurrence({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteOccurrencePromise = findingsApi.deleteOccurrence();
        expectToBePromise(deleteOccurrencePromise);

        deleteOccurrencePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listProviders', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const pageSize = 'fake_pageSize';
        const pageToken = 'fake_pageToken';
        const params = {
          accountId,
          pageSize,
          pageToken,
        };

        const listProvidersResult = findingsApi.listProviders(params);

        // all methods should return a Promise
        expectToBePromise(listProvidersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/providers', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['page_size']).toEqual(pageSize);
        expect(options.qs['page_token']).toEqual(pageToken);
        expect(options.path['account_id']).toEqual(accountId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        findingsApi.listProviders(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await findingsApi.listProviders({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listProvidersPromise = findingsApi.listProviders();
        expectToBePromise(listProvidersPromise);

        listProvidersPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
});
