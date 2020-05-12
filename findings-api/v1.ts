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

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import {
  Authenticator,
  BaseService,
  getAuthenticatorFromEnvironment,
  getMissingParams,
  UserOptions,
} from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * The Findings API
 */

class FindingsApiV1 extends BaseService {
  static DEFAULT_SERVICE_URL: string = 'https://us-south.secadvisor.cloud.ibm.com/findings';
  static DEFAULT_SERVICE_NAME: string = 'findings-api';

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of FindingsApiV1 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The URL for the service
   * @returns {FindingsApiV1}
   */

  public static newInstance(options: UserOptions): FindingsApiV1 {
    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new FindingsApiV1(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }

  /**
   * Construct a FindingsApiV1 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base url to use when contacting the service (e.g. 'https://us-south.secadvisor.cloud.ibm.com/findings'). The base url may differ between IBM Cloud regions.
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {FindingsApiV1}
   */
  constructor(options: UserOptions) {
    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    } else {
      this.setServiceUrl(FindingsApiV1.DEFAULT_SERVICE_URL);
    }
  }

  /*************************
   * findingsGraph
   ************************/

  /**
   * query findings.
   *
   * query findings.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.body - Body for query findings.
   * @param {string} [params.contentType] - The type of the input.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.Empty>>}
   */
  public postGraph(
    params: FindingsApiV1.PostGraphParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.Empty>> {
    const _params = extend({}, params);
    const requiredParams = ['accountId', 'body'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = _params.body;
      const path = {
        account_id: _params.accountId,
      };

      const sdkHeaders = getSdkHeaders(FindingsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'postGraph');

      const parameters = {
        options: {
          url: '/v1/{account_id}/graph',
          method: 'POST',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
              'Content-Type': _params.contentType,
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /*************************
   * findingsNotes
   ************************/

  /**
   * Creates a new `Note`.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.providerId - Part of `parent`. This field contains the provider_id for example:
   * providers/{provider_id}.
   * @param {string} params.shortDescription - A one sentence description of this `Note`.
   * @param {string} params.longDescription - A detailed description of this `Note`.
   * @param {ApiNoteKind} params.kind - Output only. This explicitly denotes which kind of note is specified. This
   * field can be used as a filter in list requests.
   * @param {string} params.id -
   * @param {Reporter} params.reportedBy - Details about the reporter of this `Note`.
   * @param {ApiNoteRelatedUrl[]} [params.relatedUrl] -
   * @param {string} [params.expirationTime] - Time of expiration for this note, null if note does not expire.
   * @param {string} [params.createTime] - Output only. The time this note was created. This field can be used as a
   * filter in list requests.
   * @param {string} [params.updateTime] - Output only. The time this note was last updated. This field can be used as a
   * filter in list requests.
   * @param {boolean} [params.shared] - True if this `Note` can be shared by multiple accounts.
   * @param {FindingType} [params.finding] - The finding details of the note.
   * @param {KpiType} [params.kpi] - The KPI details of the note.
   * @param {Card} [params.card] - The card details of the note.
   * @param {Section} [params.section] - The section details of the note.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.ApiNote>>}
   */
  public createNote(
    params: FindingsApiV1.CreateNoteParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.ApiNote>> {
    const _params = extend({}, params);
    const requiredParams = [
      'accountId',
      'providerId',
      'shortDescription',
      'longDescription',
      'kind',
      'id',
      'reportedBy',
    ];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        short_description: _params.shortDescription,
        long_description: _params.longDescription,
        kind: _params.kind,
        id: _params.id,
        reported_by: _params.reportedBy,
        related_url: _params.relatedUrl,
        expiration_time: _params.expirationTime,
        create_time: _params.createTime,
        update_time: _params.updateTime,
        shared: _params.shared,
        finding: _params.finding,
        kpi: _params.kpi,
        card: _params.card,
        section: _params.section,
      };

      const path = {
        account_id: _params.accountId,
        provider_id: _params.providerId,
      };

      const sdkHeaders = getSdkHeaders(FindingsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'createNote');

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers/{provider_id}/notes',
          method: 'POST',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /**
   * Lists all `Notes` for a given provider.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.providerId - Part of `parent`. This field contains the provider_id for example:
   * providers/{provider_id}.
   * @param {number} [params.pageSize] - Number of notes to return in the list.
   * @param {string} [params.pageToken] - Token to provide to skip to a particular spot in the list.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.ApiListNotesResponse>>}
   */
  public listNotes(
    params: FindingsApiV1.ListNotesParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.ApiListNotesResponse>> {
    const _params = extend({}, params);
    const requiredParams = ['accountId', 'providerId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        page_size: _params.pageSize,
        page_token: _params.pageToken,
      };

      const path = {
        account_id: _params.accountId,
        provider_id: _params.providerId,
      };

      const sdkHeaders = getSdkHeaders(FindingsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'listNotes');

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers/{provider_id}/notes',
          method: 'GET',
          qs: query,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /**
   * Returns the requested `Note`.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.providerId - First part of note `name`: providers/{provider_id}/notes/{note_id}.
   * @param {string} params.noteId - Second part of note `name`: providers/{provider_id}/notes/{note_id}.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.ApiNote>>}
   */
  public getNote(
    params: FindingsApiV1.GetNoteParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.ApiNote>> {
    const _params = extend({}, params);
    const requiredParams = ['accountId', 'providerId', 'noteId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        account_id: _params.accountId,
        provider_id: _params.providerId,
        note_id: _params.noteId,
      };

      const sdkHeaders = getSdkHeaders(FindingsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'getNote');

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers/{provider_id}/notes/{note_id}',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /**
   * Updates an existing `Note`.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.providerId - First part of note `name`: providers/{provider_id}/notes/{note_id}.
   * @param {string} params.noteId - Second part of note `name`: providers/{provider_id}/notes/{note_id}.
   * @param {string} params.shortDescription - A one sentence description of this `Note`.
   * @param {string} params.longDescription - A detailed description of this `Note`.
   * @param {ApiNoteKind} params.kind - Output only. This explicitly denotes which kind of note is specified. This
   * field can be used as a filter in list requests.
   * @param {string} params.id -
   * @param {Reporter} params.reportedBy - Details about the reporter of this `Note`.
   * @param {ApiNoteRelatedUrl[]} [params.relatedUrl] -
   * @param {string} [params.expirationTime] - Time of expiration for this note, null if note does not expire.
   * @param {string} [params.createTime] - Output only. The time this note was created. This field can be used as a
   * filter in list requests.
   * @param {string} [params.updateTime] - Output only. The time this note was last updated. This field can be used as a
   * filter in list requests.
   * @param {boolean} [params.shared] - True if this `Note` can be shared by multiple accounts.
   * @param {FindingType} [params.finding] - The finding details of the note.
   * @param {KpiType} [params.kpi] - The KPI details of the note.
   * @param {Card} [params.card] - The card details of the note.
   * @param {Section} [params.section] - The section details of the note.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.ApiNote>>}
   */
  public updateNote(
    params: FindingsApiV1.UpdateNoteParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.ApiNote>> {
    const _params = extend({}, params);
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

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        short_description: _params.shortDescription,
        long_description: _params.longDescription,
        kind: _params.kind,
        id: _params.id,
        reported_by: _params.reportedBy,
        related_url: _params.relatedUrl,
        expiration_time: _params.expirationTime,
        create_time: _params.createTime,
        update_time: _params.updateTime,
        shared: _params.shared,
        finding: _params.finding,
        kpi: _params.kpi,
        card: _params.card,
        section: _params.section,
      };

      const path = {
        account_id: _params.accountId,
        provider_id: _params.providerId,
        note_id: _params.noteId,
      };

      const sdkHeaders = getSdkHeaders(FindingsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'updateNote');

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers/{provider_id}/notes/{note_id}',
          method: 'PUT',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /**
   * Deletes the given `Note` from the system.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.providerId - First part of note `name`: providers/{provider_id}/notes/{note_id}.
   * @param {string} params.noteId - Second part of note `name`: providers/{provider_id}/notes/{note_id}.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.Empty>>}
   */
  public deleteNote(
    params: FindingsApiV1.DeleteNoteParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.Empty>> {
    const _params = extend({}, params);
    const requiredParams = ['accountId', 'providerId', 'noteId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        account_id: _params.accountId,
        provider_id: _params.providerId,
        note_id: _params.noteId,
      };

      const sdkHeaders = getSdkHeaders(FindingsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteNote');

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers/{provider_id}/notes/{note_id}',
          method: 'DELETE',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /**
   * Gets the `Note` attached to the given `Occurrence`.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.providerId - First part of occurrence `name`:
   * providers/{provider_id}/occurrences/{occurrence_id}.
   * @param {string} params.occurrenceId - Second part of occurrence `name`:
   * providers/{provider_id}/occurrences/{occurrence_id}.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.ApiNote>>}
   */
  public getOccurrenceNote(
    params: FindingsApiV1.GetOccurrenceNoteParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.ApiNote>> {
    const _params = extend({}, params);
    const requiredParams = ['accountId', 'providerId', 'occurrenceId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        account_id: _params.accountId,
        provider_id: _params.providerId,
        occurrence_id: _params.occurrenceId,
      };

      const sdkHeaders = getSdkHeaders(
        FindingsApiV1.DEFAULT_SERVICE_NAME,
        'v1',
        'getOccurrenceNote'
      );

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id}/note',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /*************************
   * findingsOccurrences
   ************************/

  /**
   * Creates a new `Occurrence`. Use this method to create `Occurrences` for a resource.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.providerId - Part of `parent`. This contains the provider_id for example:
   * providers/{provider_id}.
   * @param {string} params.noteName - An analysis note associated with this image, in the form
   * "{account_id}/providers/{provider_id}/notes/{note_id}" This field can be used as a filter in list requests.
   * @param {ApiNoteKind} params.kind - Output only. This explicitly denotes which of the `Occurrence` details are
   * specified.
   * This field can be used as a filter in list requests.
   * @param {string} params.id -
   * @param {string} [params.resourceUrl] - The unique URL of the resource, image or the container, for which the
   * `Occurrence` applies. For example, https://gcr.io/provider/image@sha256:foo. This field can be used as a filter in
   * list requests.
   * @param {string} [params.remediation] -
   * @param {string} [params.createTime] - Output only. The time this `Occurrence` was created.
   * @param {string} [params.updateTime] - Output only. The time this `Occurrence` was last updated.
   * @param {Context} [params.context] - Details about the context of this `Occurrence`.
   * @param {Finding} [params.finding] - Details of the occurrence of a finding.
   * @param {Kpi} [params.kpi] - Details of the occurrence of a KPI.
   * @param {boolean} [params.replaceIfExists] - It allows replacing an existing occurrence when set to true.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.ApiOccurrence>>}
   */
  public createOccurrence(
    params: FindingsApiV1.CreateOccurrenceParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.ApiOccurrence>> {
    const _params = extend({}, params);
    const requiredParams = ['accountId', 'providerId', 'noteName', 'kind', 'id'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        note_name: _params.noteName,
        kind: _params.kind,
        id: _params.id,
        resource_url: _params.resourceUrl,
        remediation: _params.remediation,
        create_time: _params.createTime,
        update_time: _params.updateTime,
        context: _params.context,
        finding: _params.finding,
        kpi: _params.kpi,
      };

      const path = {
        account_id: _params.accountId,
        provider_id: _params.providerId,
      };

      const sdkHeaders = getSdkHeaders(
        FindingsApiV1.DEFAULT_SERVICE_NAME,
        'v1',
        'createOccurrence'
      );

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers/{provider_id}/occurrences',
          method: 'POST',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Replace-If-Exists': _params.replaceIfExists,
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /**
   * Lists active `Occurrences` for a given provider matching the filters.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.providerId - Part of `parent`. This contains the provider_id for example:
   * providers/{provider_id}.
   * @param {number} [params.pageSize] - Number of occurrences to return in the list.
   * @param {string} [params.pageToken] - Token to provide to skip to a particular spot in the list.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.ApiListOccurrencesResponse>>}
   */
  public listOccurrences(
    params: FindingsApiV1.ListOccurrencesParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.ApiListOccurrencesResponse>> {
    const _params = extend({}, params);
    const requiredParams = ['accountId', 'providerId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        page_size: _params.pageSize,
        page_token: _params.pageToken,
      };

      const path = {
        account_id: _params.accountId,
        provider_id: _params.providerId,
      };

      const sdkHeaders = getSdkHeaders(FindingsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'listOccurrences');

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers/{provider_id}/occurrences',
          method: 'GET',
          qs: query,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /**
   * Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer providers.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.providerId - First part of note `name`: providers/{provider_id}/notes/{note_id}.
   * @param {string} params.noteId - Second part of note `name`: providers/{provider_id}/notes/{note_id}.
   * @param {number} [params.pageSize] - Number of notes to return in the list.
   * @param {string} [params.pageToken] - Token to provide to skip to a particular spot in the list.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.ApiListNoteOccurrencesResponse>>}
   */
  public listNoteOccurrences(
    params: FindingsApiV1.ListNoteOccurrencesParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.ApiListNoteOccurrencesResponse>> {
    const _params = extend({}, params);
    const requiredParams = ['accountId', 'providerId', 'noteId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        page_size: _params.pageSize,
        page_token: _params.pageToken,
      };

      const path = {
        account_id: _params.accountId,
        provider_id: _params.providerId,
        note_id: _params.noteId,
      };

      const sdkHeaders = getSdkHeaders(
        FindingsApiV1.DEFAULT_SERVICE_NAME,
        'v1',
        'listNoteOccurrences'
      );

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers/{provider_id}/notes/{note_id}/occurrences',
          method: 'GET',
          qs: query,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /**
   * Returns the requested `Occurrence`.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.providerId - First part of occurrence `name`:
   * providers/{provider_id}/occurrences/{occurrence_id}.
   * @param {string} params.occurrenceId - Second part of occurrence `name`:
   * providers/{provider_id}/occurrences/{occurrence_id}.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.ApiListOccurrencesResponse>>}
   */
  public getOccurrence(
    params: FindingsApiV1.GetOccurrenceParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.ApiListOccurrencesResponse>> {
    const _params = extend({}, params);
    const requiredParams = ['accountId', 'providerId', 'occurrenceId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        account_id: _params.accountId,
        provider_id: _params.providerId,
        occurrence_id: _params.occurrenceId,
      };

      const sdkHeaders = getSdkHeaders(FindingsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'getOccurrence');

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id}',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /**
   * Updates an existing `Occurrence`.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.providerId - First part of occurrence `name`:
   * providers/{provider_id}/occurrences/{occurrence_id}.
   * @param {string} params.occurrenceId - Second part of occurrence `name`:
   * providers/{provider_id}/occurrences/{occurrence_id}.
   * @param {string} params.noteName - An analysis note associated with this image, in the form
   * "{account_id}/providers/{provider_id}/notes/{note_id}" This field can be used as a filter in list requests.
   * @param {ApiNoteKind} params.kind - Output only. This explicitly denotes which of the `Occurrence` details are
   * specified.
   * This field can be used as a filter in list requests.
   * @param {string} params.id -
   * @param {string} [params.resourceUrl] - The unique URL of the resource, image or the container, for which the
   * `Occurrence` applies. For example, https://gcr.io/provider/image@sha256:foo. This field can be used as a filter in
   * list requests.
   * @param {string} [params.remediation] -
   * @param {string} [params.createTime] - Output only. The time this `Occurrence` was created.
   * @param {string} [params.updateTime] - Output only. The time this `Occurrence` was last updated.
   * @param {Context} [params.context] - Details about the context of this `Occurrence`.
   * @param {Finding} [params.finding] - Details of the occurrence of a finding.
   * @param {Kpi} [params.kpi] - Details of the occurrence of a KPI.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.ApiOccurrence>>}
   */
  public updateOccurrence(
    params: FindingsApiV1.UpdateOccurrenceParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.ApiOccurrence>> {
    const _params = extend({}, params);
    const requiredParams = ['accountId', 'providerId', 'occurrenceId', 'noteName', 'kind', 'id'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        note_name: _params.noteName,
        kind: _params.kind,
        id: _params.id,
        resource_url: _params.resourceUrl,
        remediation: _params.remediation,
        create_time: _params.createTime,
        update_time: _params.updateTime,
        context: _params.context,
        finding: _params.finding,
        kpi: _params.kpi,
      };

      const path = {
        account_id: _params.accountId,
        provider_id: _params.providerId,
        occurrence_id: _params.occurrenceId,
      };

      const sdkHeaders = getSdkHeaders(
        FindingsApiV1.DEFAULT_SERVICE_NAME,
        'v1',
        'updateOccurrence'
      );

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id}',
          method: 'PUT',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /**
   * Deletes the given `Occurrence` from the system.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.providerId - First part of occurrence `name`: providers/{provider_id}/notes/{occurrence_id}.
   * @param {string} params.occurrenceId - Second part of occurrence `name`:
   * providers/{provider_id}/notes/{occurrence_id}.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.Empty>>}
   */
  public deleteOccurrence(
    params: FindingsApiV1.DeleteOccurrenceParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.Empty>> {
    const _params = extend({}, params);
    const requiredParams = ['accountId', 'providerId', 'occurrenceId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        account_id: _params.accountId,
        provider_id: _params.providerId,
        occurrence_id: _params.occurrenceId,
      };

      const sdkHeaders = getSdkHeaders(
        FindingsApiV1.DEFAULT_SERVICE_NAME,
        'v1',
        'deleteOccurrence'
      );

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id}',
          method: 'DELETE',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }

  /*************************
   * findingsProviders
   ************************/

  /**
   * Lists all `Providers` for a given account id.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {number} [params.limit] - Limit the number of the returned documents to the specified number.
   * @param {number} [params.skip] - The offset is the index of the item from which you want to start returning data
   * from. Default is 0.
   * @param {string} [params.startProviderId] - The first provider_id to include in the result (sorted in ascending
   * order). Ignored if not provided.
   * @param {string} [params.endProviderId] - The last provider_id to include in the result (sorted in ascending order).
   * Ignored if not provided.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<FindingsApiV1.Response<FindingsApiV1.ApiListProvidersResponse>>}
   */
  public listProviders(
    params: FindingsApiV1.ListProvidersParams
  ): Promise<FindingsApiV1.Response<FindingsApiV1.ApiListProvidersResponse>> {
    const _params = extend({}, params);
    const requiredParams = ['accountId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        limit: _params.limit,
        skip: _params.skip,
        start_provider_id: _params.startProviderId,
        end_provider_id: _params.endProviderId,
      };

      const path = {
        account_id: _params.accountId,
      };

      const sdkHeaders = getSdkHeaders(FindingsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'listProviders');

      const parameters = {
        options: {
          url: '/v1/{account_id}/providers',
          method: 'GET',
          qs: query,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(
            true,
            sdkHeaders,
            {
              Accept: 'application/json',
            },
            _params.headers
          ),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  }
}

/*************************
 * interfaces
 ************************/

namespace FindingsApiV1 {
  /** An operation response. */
  export interface Response<T = any> {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface Empty {}

  /** A standard JS object, defined to avoid the limitations of `Object` and `object` */
  export interface JsonObject {
    [key: string]: any;
  }

  /*************************
   * request interfaces
   ************************/

  /** Parameters for the `postGraph` operation. */
  export interface PostGraphParams {
    /** Account ID. */
    accountId: string;
    /** Body for query findings. */
    body: string;
    /** The type of the input. */
    contentType?: PostGraphConstants.ContentType | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `postGraph` operation. */
  export namespace PostGraphConstants {
    /** The type of the input. */
    export enum ContentType {
      APPLICATION_GRAPHQL = 'application/graphql',
      APPLICATION_JSON = 'application/json',
    }
  }

  /** Parameters for the `createNote` operation. */
  export interface CreateNoteParams {
    /** Account ID. */
    accountId: string;
    /** Part of `parent`. This field contains the provider_id for example: providers/{provider_id}. */
    providerId: string;
    /** A one sentence description of this `Note`. */
    shortDescription: string;
    /** A detailed description of this `Note`. */
    longDescription: string;
    /** Output only. This explicitly denotes which kind of note is specified. This
     *  field can be used as a filter in list requests.
     */
    kind: ApiNoteKind;
    id: string;
    /** Details about the reporter of this `Note`. */
    reportedBy: Reporter;
    relatedUrl?: ApiNoteRelatedUrl[];
    /** Time of expiration for this note, null if note does not expire. */
    expirationTime?: string;
    /** Output only. The time this note was created. This field can be used as a filter in list requests. */
    createTime?: string;
    /** Output only. The time this note was last updated. This field can be used as a filter in list requests. */
    updateTime?: string;
    /** True if this `Note` can be shared by multiple accounts. */
    shared?: boolean;
    /** The finding details of the note. */
    finding?: FindingType;
    /** The KPI details of the note. */
    kpi?: KpiType;
    /** The card details of the note. */
    card?: Card;
    /** The section details of the note. */
    section?: Section;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listNotes` operation. */
  export interface ListNotesParams {
    /** Account ID. */
    accountId: string;
    /** Part of `parent`. This field contains the provider_id for example: providers/{provider_id}. */
    providerId: string;
    /** Number of notes to return in the list. */
    pageSize?: number;
    /** Token to provide to skip to a particular spot in the list. */
    pageToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getNote` operation. */
  export interface GetNoteParams {
    /** Account ID. */
    accountId: string;
    /** First part of note `name`: providers/{provider_id}/notes/{note_id}. */
    providerId: string;
    /** Second part of note `name`: providers/{provider_id}/notes/{note_id}. */
    noteId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateNote` operation. */
  export interface UpdateNoteParams {
    /** Account ID. */
    accountId: string;
    /** First part of note `name`: providers/{provider_id}/notes/{note_id}. */
    providerId: string;
    /** Second part of note `name`: providers/{provider_id}/notes/{note_id}. */
    noteId: string;
    /** A one sentence description of this `Note`. */
    shortDescription: string;
    /** A detailed description of this `Note`. */
    longDescription: string;
    /** Output only. This explicitly denotes which kind of note is specified. This
     *  field can be used as a filter in list requests.
     */
    kind: ApiNoteKind;
    id: string;
    /** Details about the reporter of this `Note`. */
    reportedBy: Reporter;
    relatedUrl?: ApiNoteRelatedUrl[];
    /** Time of expiration for this note, null if note does not expire. */
    expirationTime?: string;
    /** Output only. The time this note was created. This field can be used as a filter in list requests. */
    createTime?: string;
    /** Output only. The time this note was last updated. This field can be used as a filter in list requests. */
    updateTime?: string;
    /** True if this `Note` can be shared by multiple accounts. */
    shared?: boolean;
    /** The finding details of the note. */
    finding?: FindingType;
    /** The KPI details of the note. */
    kpi?: KpiType;
    /** The card details of the note. */
    card?: Card;
    /** The section details of the note. */
    section?: Section;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteNote` operation. */
  export interface DeleteNoteParams {
    /** Account ID. */
    accountId: string;
    /** First part of note `name`: providers/{provider_id}/notes/{note_id}. */
    providerId: string;
    /** Second part of note `name`: providers/{provider_id}/notes/{note_id}. */
    noteId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getOccurrenceNote` operation. */
  export interface GetOccurrenceNoteParams {
    /** Account ID. */
    accountId: string;
    /** First part of occurrence `name`: providers/{provider_id}/occurrences/{occurrence_id}. */
    providerId: string;
    /** Second part of occurrence `name`: providers/{provider_id}/occurrences/{occurrence_id}. */
    occurrenceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createOccurrence` operation. */
  export interface CreateOccurrenceParams {
    /** Account ID. */
    accountId: string;
    /** Part of `parent`. This contains the provider_id for example: providers/{provider_id}. */
    providerId: string;
    /** An analysis note associated with this image, in the form
     *  "{account_id}/providers/{provider_id}/notes/{note_id}" This field can be used as a filter in list requests.
     */
    noteName: string;
    /** Output only. This explicitly denotes which of the `Occurrence` details are specified.
     *  This field can be used as a filter in list requests.
     */
    kind: ApiNoteKind;
    id: string;
    /** The unique URL of the resource, image or the container, for which the `Occurrence` applies. For example,
     *  https://gcr.io/provider/image@sha256:foo. This field can be used as a filter in list requests.
     */
    resourceUrl?: string;
    remediation?: string;
    /** Output only. The time this `Occurrence` was created. */
    createTime?: string;
    /** Output only. The time this `Occurrence` was last updated. */
    updateTime?: string;
    /** Details about the context of this `Occurrence`. */
    context?: Context;
    /** Details of the occurrence of a finding. */
    finding?: Finding;
    /** Details of the occurrence of a KPI. */
    kpi?: Kpi;
    /** It allows replacing an existing occurrence when set to true. */
    replaceIfExists?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listOccurrences` operation. */
  export interface ListOccurrencesParams {
    /** Account ID. */
    accountId: string;
    /** Part of `parent`. This contains the provider_id for example: providers/{provider_id}. */
    providerId: string;
    /** Number of occurrences to return in the list. */
    pageSize?: number;
    /** Token to provide to skip to a particular spot in the list. */
    pageToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listNoteOccurrences` operation. */
  export interface ListNoteOccurrencesParams {
    /** Account ID. */
    accountId: string;
    /** First part of note `name`: providers/{provider_id}/notes/{note_id}. */
    providerId: string;
    /** Second part of note `name`: providers/{provider_id}/notes/{note_id}. */
    noteId: string;
    /** Number of notes to return in the list. */
    pageSize?: number;
    /** Token to provide to skip to a particular spot in the list. */
    pageToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getOccurrence` operation. */
  export interface GetOccurrenceParams {
    /** Account ID. */
    accountId: string;
    /** First part of occurrence `name`: providers/{provider_id}/occurrences/{occurrence_id}. */
    providerId: string;
    /** Second part of occurrence `name`: providers/{provider_id}/occurrences/{occurrence_id}. */
    occurrenceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateOccurrence` operation. */
  export interface UpdateOccurrenceParams {
    /** Account ID. */
    accountId: string;
    /** First part of occurrence `name`: providers/{provider_id}/occurrences/{occurrence_id}. */
    providerId: string;
    /** Second part of occurrence `name`: providers/{provider_id}/occurrences/{occurrence_id}. */
    occurrenceId: string;
    /** An analysis note associated with this image, in the form
     *  "{account_id}/providers/{provider_id}/notes/{note_id}" This field can be used as a filter in list requests.
     */
    noteName: string;
    /** Output only. This explicitly denotes which of the `Occurrence` details are specified.
     *  This field can be used as a filter in list requests.
     */
    kind: ApiNoteKind;
    id: string;
    /** The unique URL of the resource, image or the container, for which the `Occurrence` applies. For example,
     *  https://gcr.io/provider/image@sha256:foo. This field can be used as a filter in list requests.
     */
    resourceUrl?: string;
    remediation?: string;
    /** Output only. The time this `Occurrence` was created. */
    createTime?: string;
    /** Output only. The time this `Occurrence` was last updated. */
    updateTime?: string;
    /** Details about the context of this `Occurrence`. */
    context?: Context;
    /** Details of the occurrence of a finding. */
    finding?: Finding;
    /** Details of the occurrence of a KPI. */
    kpi?: Kpi;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteOccurrence` operation. */
  export interface DeleteOccurrenceParams {
    /** Account ID. */
    accountId: string;
    /** First part of occurrence `name`: providers/{provider_id}/notes/{occurrence_id}. */
    providerId: string;
    /** Second part of occurrence `name`: providers/{provider_id}/notes/{occurrence_id}. */
    occurrenceId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listProviders` operation. */
  export interface ListProvidersParams {
    /** Account ID. */
    accountId: string;
    /** Limit the number of the returned documents to the specified number. */
    limit?: number;
    /** The offset is the index of the item from which you want to start returning data from. Default is 0. */
    skip?: number;
    /** The first provider_id to include in the result (sorted in ascending order). Ignored if not provided. */
    startProviderId?: string;
    /** The last provider_id to include in the result (sorted in ascending order). Ignored if not provided. */
    endProviderId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /** Card provides details about a card kind of note. */
  export interface Card {
    /** The section this card belongs to. */
    section: string;
    /** The title of this card. */
    title: string;
    /** The subtitle of this card. */
    subtitle: string;
    /** The order of the card in which it will appear on SA dashboard in the mentioned section. */
    order?: number;
    /** The finding note names associated to this card. */
    finding_note_names: string[];
    requires_configuration?: boolean;
    /** The text associated to the card's badge. */
    badge_text?: string;
    /** The base64 content of the image associated to the card's badge. */
    badge_image?: string;
    /** The elements of this card. */
    elements: CardElement[];
  }

  /** CardElement provides details about the elements of a Card. */
  export interface CardElement {
    /** Kind of element
     *  - NUMERIC&#58; Single numeric value
     *  - BREAKDOWN&#58; Breakdown of numeric values
     *  - TIME_SERIES&#58; Time-series of numeric values.
     */
    kind: string;
    /** The default time range of this card element. */
    default_time_range?: string;
  }

  /** Note provider-assigned confidence on the validity of an occurrence - LOW&#58; Low Certainty - MEDIUM&#58; Medium Certainty - HIGH&#58; High Certainty. */
  export interface Certainty {}

  /** Context. */
  export interface Context {
    /** The IBM Cloud region. */
    region?: string;
    /** The resource CRN (e.g. certificate CRN, image CRN). */
    resource_crn?: string;
    /** The resource ID, in case the CRN is not available. */
    resource_id?: string;
    /** The user-friendly resource name. */
    resource_name?: string;
    /** The resource type name (e.g. Pod, Cluster, Certificate, Image). */
    resource_type?: string;
    /** The service CRN (e.g. CertMgr Instance CRN). */
    service_crn?: string;
    /** The service name (e.g. CertMgr). */
    service_name?: string;
    /** The name of the environment the occurrence applies to. */
    environment_name?: string;
    /** The name of the component the occurrence applies to. */
    component_name?: string;
    /** The id of the toolchain the occurrence applies to. */
    toolchain_id?: string;
  }

  /** It provides details about data transferred between clients and servers. */
  export interface DataTransferred {
    /** The number of client bytes transferred. */
    client_bytes?: number;
    /** The number of server bytes transferred. */
    server_bytes?: number;
    /** The number of client packets transferred. */
    client_packets?: number;
    /** The number of server packets transferred. */
    server_packets?: number;
  }

  /** Finding provides details about a finding occurrence. */
  export interface Finding {
    /** The common severity of this `Occurrence`. */
    severity?: Severity;
    /** The confidence level on this `Occurrence`. */
    certainty?: Certainty;
    /** Remediation steps for the issues reported in this finding. They override the note's next steps. */
    next_steps?: RemediationStep[];
    /** Network connection details of this finding. */
    network_connection?: NetworkConnection;
    /** Data transferred details of this finding. */
    data_transferred?: DataTransferred;
  }

  /** FindingCountValueType. */
  export interface FindingCountValueType {
    /** Kind of element - FINDING_COUNT&#58; Kind of value derived from a count of finding occurrences. */
    kind: string;
    /** the names of the finding note associated that act as filters for counting the occurrences. */
    finding_note_names: string[];
    /** The text of this element type. */
    text: string;
  }

  /** FindingType provides details about a finding note. */
  export interface FindingType {
    /** The default severity of the findings related to this `Note`. */
    severity: Severity;
    /** Common remediation steps for the finding of this type. */
    next_steps?: RemediationStep[];
  }

  /** Kpi provides details about a KPI occurrence. */
  export interface Kpi {
    /** The value of this KPI. */
    value: number;
    /** The total value of this KPI. */
    total?: number;
  }

  /** KpiType provides details about a KPI note. */
  export interface KpiType {
    /** The aggregation type of the KPI values.
     *  - SUM&#58; A single-value metrics aggregation type that sums up numeric values
     *    that are extracted from KPI occurrences.
     */
    aggregation_type: string;
  }

  /** It provides details about a network connection. */
  export interface NetworkConnection {
    /** The direction of this network connection. */
    direction?: string;
    /** The protocol of this network connection. */
    protocol?: string;
    /** The client socket address of this network connection. */
    client?: SocketAddress;
    /** The server socket address of this network connection. */
    server?: SocketAddress;
  }

  /** A remediation step description and associated URL. */
  export interface RemediationStep {
    /** Title of this next step. */
    title?: string;
    /** The URL associated to this next steps. */
    url?: string;
  }

  /** The entity reporting a note. */
  export interface Reporter {
    /** The id of this reporter. */
    id: string;
    /** The title of this reporter. */
    title: string;
    /** The url of this reporter. */
    url?: string;
  }

  /** Card provides details about a card kind of note. */
  export interface Section {
    /** The title of this section. */
    title: string;
    /** The image of this section. */
    image: string;
  }

  /** Note provider-assigned severity/impact ranking - LOW&#58; Low Impact - MEDIUM&#58; Medium Impact - HIGH&#58; High Impact. */
  export interface Severity {}

  /** It provides details about a socket address. */
  export interface SocketAddress {
    /** The IP address of this socket address. */
    address: string;
    /** The port number of this socket address. */
    port?: number;
  }

  /** the value type of a card element. */
  export interface ValueType {
    /** Kind of element
     *  - KPI&#58; Kind of value derived from a KPI occurrence
     *  - FINDING_COUNT&#58; Kind of value derived from a count of finding occurrences.
     */
    kind: string;
    /** The text of this element type. */
    text: string;
  }

  /** Response including listed occurrences for a note. */
  export interface ApiListNoteOccurrencesResponse {
    /** The occurrences attached to the specified note. */
    occurrences?: ApiOccurrence[];
    /** Token to receive the next page of notes. */
    next_page_token?: string;
  }

  /** Response including listed notes. */
  export interface ApiListNotesResponse {
    notes?: ApiNote[];
    /** The next pagination token in the list response. It should be used as page_token for the following request.
     *  An empty value means no more result.
     */
    next_page_token?: string;
  }

  /** Response including listed active occurrences. */
  export interface ApiListOccurrencesResponse {
    /** The occurrences requested. */
    occurrences?: ApiOccurrence[];
    /** The next pagination token in the list response. It should be used as
     *  `page_token` for the following request. An empty value means no more results.
     */
    next_page_token?: string;
  }

  /** Response including listed providers. */
  export interface ApiListProvidersResponse {
    providers?: ApiProvider[];
  }

  /** Provides a detailed description of a `Note`. */
  export interface ApiNote {
    /** A one sentence description of this `Note`. */
    short_description: string;
    /** A detailed description of this `Note`. */
    long_description: string;
    /** Output only. This explicitly denotes which kind of note is specified. This
     *  field can be used as a filter in list requests.
     */
    kind: ApiNoteKind;
    related_url?: ApiNoteRelatedUrl[];
    /** Time of expiration for this note, null if note does not expire. */
    expiration_time?: string;
    /** Output only. The time this note was created. This field can be used as a filter in list requests. */
    create_time?: string;
    /** Output only. The time this note was last updated. This field can be used as a filter in list requests. */
    update_time?: string;
    id: string;
    /** True if this `Note` can be shared by multiple accounts. */
    shared?: boolean;
    /** Details about the reporter of this `Note`. */
    reported_by: Reporter;
    /** The finding details of the note. */
    finding?: FindingType;
    /** The KPI details of the note. */
    kpi?: KpiType;
    /** The card details of the note. */
    card?: Card;
    /** The section details of the note. */
    section?: Section;
  }

  /** This must be 1&#58;1 with members of our oneofs, it can be used for filtering Note and Occurrence on their kind. - FINDING&#58; The note and occurrence represent a finding. - KPI&#58; The note and occurrence represent a KPI value. - CARD&#58; The note represents a card showing findings and related metric values. - CARD_CONFIGURED&#58; The note represents a card configured for a user account. - SECTION&#58; The note represents a section in a dashboard. */
  export interface ApiNoteKind {}

  /** Metadata for any related URL information. */
  export interface ApiNoteRelatedUrl {
    label?: string;
    url?: string;
  }

  /** `Occurrence` includes information about analysis occurrences for an image. */
  export interface ApiOccurrence {
    /** The unique URL of the resource, image or the container, for which the `Occurrence` applies. For example,
     *  https://gcr.io/provider/image@sha256:foo. This field can be used as a filter in list requests.
     */
    resource_url?: string;
    /** An analysis note associated with this image, in the form
     *  "{account_id}/providers/{provider_id}/notes/{note_id}" This field can be used as a filter in list requests.
     */
    note_name: string;
    /** Output only. This explicitly denotes which of the `Occurrence` details are specified.
     *  This field can be used as a filter in list requests.
     */
    kind: ApiNoteKind;
    remediation?: string;
    /** Output only. The time this `Occurrence` was created. */
    create_time?: string;
    /** Output only. The time this `Occurrence` was last updated. */
    update_time?: string;
    id: string;
    /** Details about the context of this `Occurrence`. */
    context?: Context;
    /** Details of the occurrence of a finding. */
    finding?: Finding;
    /** Details of the occurrence of a KPI. */
    kpi?: Kpi;
  }

  /** Provides a detailed description of a `Provider`. */
  export interface ApiProvider {
    name: string;
    id: string;
  }

  /** A card element with a breakdown of values. */
  export interface BreakdownCardElement extends CardElement {
    /** The text of this card element. */
    text: string;
    /** the value types associated to this card element. */
    value_types: ValueType[];
  }

  /** A card element with a single numeric value. */
  export interface NumericCardElement extends CardElement {
    /** The text of this card element. */
    text: string;
    value_type: any;
  }

  /** A card element with a time series chart. */
  export interface TimeSeriesCardElement extends CardElement {
    /** The text of this card element. */
    text: string;
    /** The default interval of the time series. */
    default_interval?: string;
    /** the value types associated to this card element. */
    value_types: FindingCountValueType[];
  }
}

export = FindingsApiV1;
