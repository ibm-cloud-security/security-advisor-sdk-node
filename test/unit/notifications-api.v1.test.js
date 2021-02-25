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
const NotificationsApiV1 = require('../../dist/notifications-api/v1');

const { getOptions, checkUrlAndMethod, checkMediaHeaders, expectToBePromise } = unitTestUtils;

const service = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://us-south.secadvisor.cloud.ibm.com/notifications',
};

const notificationsApi = new NotificationsApiV1(service);
const createRequestMock = jest.spyOn(notificationsApi, 'createRequest');

// dont actually create a request
createRequestMock.mockImplementation(() => Promise.resolve());

afterEach(() => {
  createRequestMock.mockClear();
});

describe('NotificationsApiV1', () => {
  describe('listAllChannels', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const limit = 'fake_limit';
        const skip = 'fake_skip';
        const params = {
          accountId,
          limit,
          skip,
        };

        const listAllChannelsResult = notificationsApi.listAllChannels(params);

        // all methods should return a Promise
        expectToBePromise(listAllChannelsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/notifications/channels', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['limit']).toEqual(limit);
        expect(options.qs['skip']).toEqual(skip);
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

        notificationsApi.listAllChannels(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['accountId'];

        let err;
        try {
          await notificationsApi.listAllChannels({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['accountId'];

        const listAllChannelsPromise = notificationsApi.listAllChannels();
        expectToBePromise(listAllChannelsPromise);

        listAllChannelsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('createNotificationChannel', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const name = 'fake_name';
        const type = 'fake_type';
        const endpoint = 'fake_endpoint';
        const description = 'fake_description';
        const severity = 'fake_severity';
        const enabled = 'fake_enabled';
        const alert_source = 'fake_alertSource';
        const params = {
          accountId,
          name,
          type,
          endpoint,
          description,
          severity,
          enabled,
          alert_source,
        };

        const createNotificationChannelResult = notificationsApi.createNotificationChannel(params);

        // all methods should return a Promise
        expectToBePromise(createNotificationChannelResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/notifications/channels', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['name']).toEqual(name);
        expect(options.body['type']).toEqual(type);
        expect(options.body['endpoint']).toEqual(endpoint);
        expect(options.body['description']).toEqual(description);
        expect(options.body['severity']).toEqual(severity);
        expect(options.body['enabled']).toEqual(enabled);
        expect(options.body['alert_source']).toEqual(alert_source);
        expect(options.path['account_id']).toEqual(accountId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const name = 'fake_name';
        const type = 'fake_type';
        const endpoint = 'fake_endpoint';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          name,
          type,
          endpoint,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        notificationsApi.createNotificationChannel(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['accountId', 'name', 'type', 'endpoint'];

        let err;
        try {
          await notificationsApi.createNotificationChannel({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['accountId', 'name', 'type', 'endpoint'];

        const createNotificationChannelPromise = notificationsApi.createNotificationChannel();
        expectToBePromise(createNotificationChannelPromise);

        createNotificationChannelPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteNotificationChannels', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const body = 'fake_body';
        const params = {
          accountId,
          body,
        };

        const deleteNotificationChannelsResult = notificationsApi.deleteNotificationChannels(
          params
        );

        // all methods should return a Promise
        expectToBePromise(deleteNotificationChannelsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/notifications/channels', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
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

        notificationsApi.deleteNotificationChannels(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['accountId', 'body'];

        let err;
        try {
          await notificationsApi.deleteNotificationChannels({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['accountId', 'body'];

        const deleteNotificationChannelsPromise = notificationsApi.deleteNotificationChannels();
        expectToBePromise(deleteNotificationChannelsPromise);

        deleteNotificationChannelsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteNotificationChannel', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const channelId = 'fake_channelId';
        const params = {
          accountId,
          channelId,
        };

        const deleteNotificationChannelResult = notificationsApi.deleteNotificationChannel(params);

        // all methods should return a Promise
        expectToBePromise(deleteNotificationChannelResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/{account_id}/notifications/channels/{channel_id}',
          'DELETE'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['channel_id']).toEqual(channelId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const channelId = 'fake_channelId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          channelId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        notificationsApi.deleteNotificationChannel(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['accountId', 'channelId'];

        let err;
        try {
          await notificationsApi.deleteNotificationChannel({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['accountId', 'channelId'];

        const deleteNotificationChannelPromise = notificationsApi.deleteNotificationChannel();
        expectToBePromise(deleteNotificationChannelPromise);

        deleteNotificationChannelPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getNotificationChannel', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const channelId = 'fake_channelId';
        const params = {
          accountId,
          channelId,
        };

        const getNotificationChannelResult = notificationsApi.getNotificationChannel(params);

        // all methods should return a Promise
        expectToBePromise(getNotificationChannelResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/notifications/channels/{channel_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['channel_id']).toEqual(channelId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const channelId = 'fake_channelId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          channelId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        notificationsApi.getNotificationChannel(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['accountId', 'channelId'];

        let err;
        try {
          await notificationsApi.getNotificationChannel({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['accountId', 'channelId'];

        const getNotificationChannelPromise = notificationsApi.getNotificationChannel();
        expectToBePromise(getNotificationChannelPromise);

        getNotificationChannelPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('updateNotificationChannel', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const channelId = 'fake_channelId';
        const name = 'fake_name';
        const type = 'fake_type';
        const endpoint = 'fake_endpoint';
        const description = 'fake_description';
        const severity = 'fake_severity';
        const enabled = 'fake_enabled';
        const alert_source = 'fake_alertSource';
        const params = {
          accountId,
          channelId,
          name,
          type,
          endpoint,
          description,
          severity,
          enabled,
          alert_source,
        };

        const updateNotificationChannelResult = notificationsApi.updateNotificationChannel(params);

        // all methods should return a Promise
        expectToBePromise(updateNotificationChannelResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/notifications/channels/{channel_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['name']).toEqual(name);
        expect(options.body['type']).toEqual(type);
        expect(options.body['endpoint']).toEqual(endpoint);
        expect(options.body['description']).toEqual(description);
        expect(options.body['severity']).toEqual(severity);
        expect(options.body['enabled']).toEqual(enabled);
        expect(options.body['alert_source']).toEqual(alert_source);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['channel_id']).toEqual(channelId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const channelId = 'fake_channelId';
        const name = 'fake_name';
        const type = 'fake_type';
        const endpoint = 'fake_endpoint';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          channelId,
          name,
          type,
          endpoint,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        notificationsApi.updateNotificationChannel(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['accountId', 'channelId', 'name', 'type', 'endpoint'];

        let err;
        try {
          await notificationsApi.updateNotificationChannel({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['accountId', 'channelId', 'name', 'type', 'endpoint'];

        const updateNotificationChannelPromise = notificationsApi.updateNotificationChannel();
        expectToBePromise(updateNotificationChannelPromise);

        updateNotificationChannelPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('testNotificationChannel', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const channelId = 'fake_channelId';
        const params = {
          accountId,
          channelId,
        };

        const testNotificationChannelResult = notificationsApi.testNotificationChannel(params);

        // all methods should return a Promise
        expectToBePromise(testNotificationChannelResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/{account_id}/notifications/channels/{channel_id}/test',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['channel_id']).toEqual(channelId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'fake_accountId';
        const channelId = 'fake_channelId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          accountId,
          channelId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        notificationsApi.testNotificationChannel(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['accountId', 'channelId'];

        let err;
        try {
          await notificationsApi.testNotificationChannel({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['accountId', 'channelId'];

        const testNotificationChannelPromise = notificationsApi.testNotificationChannel();
        expectToBePromise(testNotificationChannelPromise);

        testNotificationChannelPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getPublicKey', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const accountId = 'fake_accountId';
        const params = {
          accountId,
        };

        const getPublicKeyResult = notificationsApi.getPublicKey(params);

        // all methods should return a Promise
        expectToBePromise(getPublicKeyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/notifications/public_key', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
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

        notificationsApi.getPublicKey(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['accountId'];

        let err;
        try {
          await notificationsApi.getPublicKey({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['accountId'];

        const getPublicKeyPromise = notificationsApi.getPublicKey();
        expectToBePromise(getPublicKeyPromise);

        getPublicKeyPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
});
