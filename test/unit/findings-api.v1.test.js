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
  url: 'https://sec.advisor.unit.test/findings',
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
        // required parameters for this method
        const requiredParams = ['accountId', 'body'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'body'];

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
        const shortDescription = 'fake_shortDescription';
        const longDescription = 'fake_longDescription';
        const kind = 'fake_kind';
        const id = 'fake_id';
        const reportedBy = 'fake_reportedBy';
        const relatedUrl = 'fake_relatedUrl';
        const expirationTime = 'fake_expirationTime';
        const createTime = 'fake_createTime';
        const updateTime = 'fake_updateTime';
        const shared = 'fake_shared';
        const finding = 'fake_finding';
        const kpi = 'fake_kpi';
        const card = 'fake_card';
        const section = 'fake_section';
        const params = {
          accountId,
          providerId,
          shortDescription,
          longDescription,
          kind,
          id,
          reportedBy,
          relatedUrl,
          expirationTime,
          createTime,
          updateTime,
          shared,
          finding,
          kpi,
          card,
          section,
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
        expect(options.body['short_description']).toEqual(shortDescription);
        expect(options.body['long_description']).toEqual(longDescription);
        expect(options.body['kind']).toEqual(kind);
        expect(options.body['id']).toEqual(id);
        expect(options.body['reported_by']).toEqual(reportedBy);
        expect(options.body['related_url']).toEqual(relatedUrl);
        expect(options.body['expiration_time']).toEqual(expirationTime);
        expect(options.body['create_time']).toEqual(createTime);
        expect(options.body['update_time']).toEqual(updateTime);
        expect(options.body['shared']).toEqual(shared);
        expect(options.body['finding']).toEqual(finding);
        expect(options.body['kpi']).toEqual(kpi);
        expect(options.body['card']).toEqual(card);
        expect(options.body['section']).toEqual(section);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const shortDescription = 'fake_shortDescription';
        const longDescription = 'fake_longDescription';
        const kind = 'fake_kind';
        const id = 'fake_id';
        const reportedBy = 'fake_reportedBy';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          shortDescription,
          longDescription,
          kind,
          id,
          reportedBy,
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
        // required parameters for this method
        const requiredParams = [
          'accountId',
          'providerId',
          'shortDescription',
          'longDescription',
          'kind',
          'id',
          'reportedBy',
        ];

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
        // required parameters for this method
        const requiredParams = [
          'accountId',
          'providerId',
          'shortDescription',
          'longDescription',
          'kind',
          'id',
          'reportedBy',
        ];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'noteId'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'noteId'];

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
        const shortDescription = 'fake_shortDescription';
        const longDescription = 'fake_longDescription';
        const kind = 'fake_kind';
        const id = 'fake_id';
        const reportedBy = 'fake_reportedBy';
        const relatedUrl = 'fake_relatedUrl';
        const expirationTime = 'fake_expirationTime';
        const createTime = 'fake_createTime';
        const updateTime = 'fake_updateTime';
        const shared = 'fake_shared';
        const finding = 'fake_finding';
        const kpi = 'fake_kpi';
        const card = 'fake_card';
        const section = 'fake_section';
        const params = {
          accountId,
          providerId,
          noteId,
          shortDescription,
          longDescription,
          kind,
          id,
          reportedBy,
          relatedUrl,
          expirationTime,
          createTime,
          updateTime,
          shared,
          finding,
          kpi,
          card,
          section,
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
        expect(options.body['short_description']).toEqual(shortDescription);
        expect(options.body['long_description']).toEqual(longDescription);
        expect(options.body['kind']).toEqual(kind);
        expect(options.body['id']).toEqual(id);
        expect(options.body['reported_by']).toEqual(reportedBy);
        expect(options.body['related_url']).toEqual(relatedUrl);
        expect(options.body['expiration_time']).toEqual(expirationTime);
        expect(options.body['create_time']).toEqual(createTime);
        expect(options.body['update_time']).toEqual(updateTime);
        expect(options.body['shared']).toEqual(shared);
        expect(options.body['finding']).toEqual(finding);
        expect(options.body['kpi']).toEqual(kpi);
        expect(options.body['card']).toEqual(card);
        expect(options.body['section']).toEqual(section);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
        expect(options.path['note_id']).toEqual(noteId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const noteId = 'fake_noteId';
        const shortDescription = 'fake_shortDescription';
        const longDescription = 'fake_longDescription';
        const kind = 'fake_kind';
        const id = 'fake_id';
        const reportedBy = 'fake_reportedBy';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          noteId,
          shortDescription,
          longDescription,
          kind,
          id,
          reportedBy,
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
        // required parameters for this method
        const requiredParams = [
          'accountId',
          'providerId',
          'noteId',
          'shortDescription',
          'longDescription',
          'kind',
          'id',
          'reportedBy',
        ];

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
        // required parameters for this method
        const requiredParams = [
          'accountId',
          'providerId',
          'noteId',
          'shortDescription',
          'longDescription',
          'kind',
          'id',
          'reportedBy',
        ];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'noteId'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'noteId'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'occurrenceId'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'occurrenceId'];

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
        const noteName = 'fake_noteName';
        const kind = 'fake_kind';
        const id = 'fake_id';
        const resourceUrl = 'fake_resourceUrl';
        const remediation = 'fake_remediation';
        const createTime = 'fake_createTime';
        const updateTime = 'fake_updateTime';
        const context = 'fake_context';
        const finding = 'fake_finding';
        const kpi = 'fake_kpi';
        const replaceIfExists = 'fake_replaceIfExists';
        const params = {
          accountId,
          providerId,
          noteName,
          kind,
          id,
          resourceUrl,
          remediation,
          createTime,
          updateTime,
          context,
          finding,
          kpi,
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
        expect(options.body['note_name']).toEqual(noteName);
        expect(options.body['kind']).toEqual(kind);
        expect(options.body['id']).toEqual(id);
        expect(options.body['resource_url']).toEqual(resourceUrl);
        expect(options.body['remediation']).toEqual(remediation);
        expect(options.body['create_time']).toEqual(createTime);
        expect(options.body['update_time']).toEqual(updateTime);
        expect(options.body['context']).toEqual(context);
        expect(options.body['finding']).toEqual(finding);
        expect(options.body['kpi']).toEqual(kpi);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const noteName = 'fake_noteName';
        const kind = 'fake_kind';
        const id = 'fake_id';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          noteName,
          kind,
          id,
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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'noteName', 'kind', 'id'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'noteName', 'kind', 'id'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'noteId'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'noteId'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'occurrenceId'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'occurrenceId'];

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
        const noteName = 'fake_noteName';
        const kind = 'fake_kind';
        const id = 'fake_id';
        const resourceUrl = 'fake_resourceUrl';
        const remediation = 'fake_remediation';
        const createTime = 'fake_createTime';
        const updateTime = 'fake_updateTime';
        const context = 'fake_context';
        const finding = 'fake_finding';
        const kpi = 'fake_kpi';
        const params = {
          accountId,
          providerId,
          occurrenceId,
          noteName,
          kind,
          id,
          resourceUrl,
          remediation,
          createTime,
          updateTime,
          context,
          finding,
          kpi,
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
        expect(options.body['note_name']).toEqual(noteName);
        expect(options.body['kind']).toEqual(kind);
        expect(options.body['id']).toEqual(id);
        expect(options.body['resource_url']).toEqual(resourceUrl);
        expect(options.body['remediation']).toEqual(remediation);
        expect(options.body['create_time']).toEqual(createTime);
        expect(options.body['update_time']).toEqual(updateTime);
        expect(options.body['context']).toEqual(context);
        expect(options.body['finding']).toEqual(finding);
        expect(options.body['kpi']).toEqual(kpi);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['provider_id']).toEqual(providerId);
        expect(options.path['occurrence_id']).toEqual(occurrenceId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const providerId = 'fake_providerId';
        const occurrenceId = 'fake_occurrenceId';
        const noteName = 'fake_noteName';
        const kind = 'fake_kind';
        const id = 'fake_id';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          providerId,
          occurrenceId,
          noteName,
          kind,
          id,
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
        // required parameters for this method
        const requiredParams = [
          'accountId',
          'providerId',
          'occurrenceId',
          'noteName',
          'kind',
          'id',
        ];

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
        // required parameters for this method
        const requiredParams = [
          'accountId',
          'providerId',
          'occurrenceId',
          'noteName',
          'kind',
          'id',
        ];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'occurrenceId'];

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
        // required parameters for this method
        const requiredParams = ['accountId', 'providerId', 'occurrenceId'];

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
        const limit = 'fake_limit';
        const skip = 'fake_skip';
        const startProviderId = 'fake_startProviderId';
        const endProviderId = 'fake_endProviderId';
        const params = {
          accountId,
          limit,
          skip,
          startProviderId,
          endProviderId,
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
        expect(options.qs['limit']).toEqual(limit);
        expect(options.qs['skip']).toEqual(skip);
        expect(options.qs['start_provider_id']).toEqual(startProviderId);
        expect(options.qs['end_provider_id']).toEqual(endProviderId);
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
        // required parameters for this method
        const requiredParams = ['accountId'];

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
        // required parameters for this method
        const requiredParams = ['accountId'];

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
