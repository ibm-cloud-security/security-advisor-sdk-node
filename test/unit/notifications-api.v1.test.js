/**
 * (C) Copyright IBM Corp. 2021.
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

// need to import the whole package to mock getAuthenticatorFromEnvironment
const core = require('ibm-cloud-sdk-core');
const { NoAuthAuthenticator, unitTestUtils } = core;

const NotificationsApiV1 = require('../../dist/notifications-api/v1');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkUserHeader,
} = unitTestUtils;

const service = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://notifications-api.cloud.ibm.com/notifications',
};

const notificationsApiService = new NotificationsApiV1(service);

// dont actually create a request
const createRequestMock = jest.spyOn(notificationsApiService, 'createRequest');
createRequestMock.mockImplementation(() => Promise.resolve());

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(core, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

afterEach(() => {
  createRequestMock.mockClear();
  getAuthenticatorMock.mockClear();
});

describe('NotificationsApiV1', () => {
  describe('the newInstance method', () => {
    test('should use defaults when options not provided', () => {
      const testInstance = NotificationsApiV1.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(NotificationsApiV1.DEFAULT_SERVICE_NAME);
      expect(testInstance.baseOptions.serviceUrl).toBe(NotificationsApiV1.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(NotificationsApiV1);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = NotificationsApiV1.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(NotificationsApiV1);
    });
  });
  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new NotificationsApiV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new NotificationsApiV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(NotificationsApiV1.DEFAULT_SERVICE_URL);
    });
  });
  describe('listAllChannels', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listAllChannels
        const accountId = 'testString';
        const transactionId = 'testString';
        const limit = 38;
        const skip = 38;
        const params = {
          accountId: accountId,
          transactionId: transactionId,
          limit: limit,
          skip: skip,
        };

        const listAllChannelsResult = notificationsApiService.listAllChannels(params);

        // all methods should return a Promise
        expectToBePromise(listAllChannelsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/notifications/channels', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Transaction-Id', transactionId);
        expect(options.qs['limit']).toEqual(limit);
        expect(options.qs['skip']).toEqual(skip);
        expect(options.path['account_id']).toEqual(accountId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          accountId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        notificationsApiService.listAllChannels(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await notificationsApiService.listAllChannels({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listAllChannelsPromise = notificationsApiService.listAllChannels();
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
      // Request models needed by this operation.

      // NotificationChannelAlertSourceItem
      const notificationChannelAlertSourceItemModel = {
        provider_name: 'testString',
        finding_types: ['testString'],
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation createNotificationChannel
        const accountId = 'testString';
        const name = 'testString';
        const type = 'Webhook';
        const endpoint = 'testString';
        const description = 'testString';
        const severity = ['low'];
        const enabled = true;
        const alertSource = [notificationChannelAlertSourceItemModel];
        const transactionId = 'testString';
        const params = {
          accountId: accountId,
          name: name,
          type: type,
          endpoint: endpoint,
          description: description,
          severity: severity,
          enabled: enabled,
          alertSource: alertSource,
          transactionId: transactionId,
        };

        const createNotificationChannelResult = notificationsApiService.createNotificationChannel(
          params
        );

        // all methods should return a Promise
        expectToBePromise(createNotificationChannelResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/notifications/channels', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Transaction-Id', transactionId);
        expect(options.body['name']).toEqual(name);
        expect(options.body['type']).toEqual(type);
        expect(options.body['endpoint']).toEqual(endpoint);
        expect(options.body['description']).toEqual(description);
        expect(options.body['severity']).toEqual(severity);
        expect(options.body['enabled']).toEqual(enabled);
        expect(options.body['alert_source']).toEqual(alertSource);
        expect(options.path['account_id']).toEqual(accountId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'testString';
        const name = 'testString';
        const type = 'Webhook';
        const endpoint = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
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

        notificationsApiService.createNotificationChannel(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await notificationsApiService.createNotificationChannel({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const createNotificationChannelPromise = notificationsApiService.createNotificationChannel();
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
        // Construct the params object for operation deleteNotificationChannels
        const accountId = 'testString';
        const requestBody = ['testString'];
        const transactionId = 'testString';
        const params = {
          accountId: accountId,
          body: requestBody,
          transactionId: transactionId,
        };

        const deleteNotificationChannelsResult = notificationsApiService.deleteNotificationChannels(
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
        checkUserHeader(createRequestMock, 'Transaction-Id', transactionId);
        expect(options.body).toEqual(requestBody);
        expect(options.path['account_id']).toEqual(accountId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'testString';
        const body = ['testString'];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          accountId,
          body,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        notificationsApiService.deleteNotificationChannels(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await notificationsApiService.deleteNotificationChannels({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteNotificationChannelsPromise = notificationsApiService.deleteNotificationChannels();
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
        // Construct the params object for operation deleteNotificationChannel
        const accountId = 'testString';
        const channelId = 'testString';
        const transactionId = 'testString';
        const params = {
          accountId: accountId,
          channelId: channelId,
          transactionId: transactionId,
        };

        const deleteNotificationChannelResult = notificationsApiService.deleteNotificationChannel(
          params
        );

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
        checkUserHeader(createRequestMock, 'Transaction-Id', transactionId);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['channel_id']).toEqual(channelId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'testString';
        const channelId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          accountId,
          channelId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        notificationsApiService.deleteNotificationChannel(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await notificationsApiService.deleteNotificationChannel({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteNotificationChannelPromise = notificationsApiService.deleteNotificationChannel();
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
        // Construct the params object for operation getNotificationChannel
        const accountId = 'testString';
        const channelId = 'testString';
        const transactionId = 'testString';
        const params = {
          accountId: accountId,
          channelId: channelId,
          transactionId: transactionId,
        };

        const getNotificationChannelResult = notificationsApiService.getNotificationChannel(params);

        // all methods should return a Promise
        expectToBePromise(getNotificationChannelResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/notifications/channels/{channel_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Transaction-Id', transactionId);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['channel_id']).toEqual(channelId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'testString';
        const channelId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          accountId,
          channelId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        notificationsApiService.getNotificationChannel(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await notificationsApiService.getNotificationChannel({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getNotificationChannelPromise = notificationsApiService.getNotificationChannel();
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
      // Request models needed by this operation.

      // NotificationChannelAlertSourceItem
      const notificationChannelAlertSourceItemModel = {
        provider_name: 'testString',
        finding_types: ['testString'],
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation updateNotificationChannel
        const accountId = 'testString';
        const channelId = 'testString';
        const name = 'testString';
        const type = 'Webhook';
        const endpoint = 'testString';
        const description = 'testString';
        const severity = ['low'];
        const enabled = true;
        const alertSource = [notificationChannelAlertSourceItemModel];
        const transactionId = 'testString';
        const params = {
          accountId: accountId,
          channelId: channelId,
          name: name,
          type: type,
          endpoint: endpoint,
          description: description,
          severity: severity,
          enabled: enabled,
          alertSource: alertSource,
          transactionId: transactionId,
        };

        const updateNotificationChannelResult = notificationsApiService.updateNotificationChannel(
          params
        );

        // all methods should return a Promise
        expectToBePromise(updateNotificationChannelResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/notifications/channels/{channel_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Transaction-Id', transactionId);
        expect(options.body['name']).toEqual(name);
        expect(options.body['type']).toEqual(type);
        expect(options.body['endpoint']).toEqual(endpoint);
        expect(options.body['description']).toEqual(description);
        expect(options.body['severity']).toEqual(severity);
        expect(options.body['enabled']).toEqual(enabled);
        expect(options.body['alert_source']).toEqual(alertSource);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['channel_id']).toEqual(channelId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'testString';
        const channelId = 'testString';
        const name = 'testString';
        const type = 'Webhook';
        const endpoint = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
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

        notificationsApiService.updateNotificationChannel(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await notificationsApiService.updateNotificationChannel({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const updateNotificationChannelPromise = notificationsApiService.updateNotificationChannel();
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
        // Construct the params object for operation testNotificationChannel
        const accountId = 'testString';
        const channelId = 'testString';
        const transactionId = 'testString';
        const params = {
          accountId: accountId,
          channelId: channelId,
          transactionId: transactionId,
        };

        const testNotificationChannelResult = notificationsApiService.testNotificationChannel(
          params
        );

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
        checkUserHeader(createRequestMock, 'Transaction-Id', transactionId);
        expect(options.path['account_id']).toEqual(accountId);
        expect(options.path['channel_id']).toEqual(channelId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'testString';
        const channelId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          accountId,
          channelId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        notificationsApiService.testNotificationChannel(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await notificationsApiService.testNotificationChannel({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const testNotificationChannelPromise = notificationsApiService.testNotificationChannel();
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
        // Construct the params object for operation getPublicKey
        const accountId = 'testString';
        const transactionId = 'testString';
        const params = {
          accountId: accountId,
          transactionId: transactionId,
        };

        const getPublicKeyResult = notificationsApiService.getPublicKey(params);

        // all methods should return a Promise
        expectToBePromise(getPublicKeyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/{account_id}/notifications/public_key', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Transaction-Id', transactionId);
        expect(options.path['account_id']).toEqual(accountId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const accountId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          accountId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        notificationsApiService.getPublicKey(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await notificationsApiService.getPublicKey({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getPublicKeyPromise = notificationsApiService.getPublicKey();
        expectToBePromise(getPublicKeyPromise);

        getPublicKeyPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
});
