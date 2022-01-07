import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
};

export type Query = {
  __typename?: 'Query';
  location?: Maybe<Location>;
  locations?: Maybe<Array<Maybe<Location>>>;
  locationsConnection?: Maybe<LocationConnection>;
  profile?: Maybe<Profile>;
  /** Get profiles */
  profiles?: Maybe<Array<Maybe<Profile>>>;
  profilesConnection?: Maybe<ProfileConnection>;
  request?: Maybe<Request>;
  /** Get requests */
  requests?: Maybe<Array<Maybe<Request>>>;
  requestsConnection?: Maybe<RequestConnection>;
  test?: Maybe<Test>;
  /** Return the restaurants open by the chef */
  tests?: Maybe<Array<Maybe<Test>>>;
  testsConnection?: Maybe<TestConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLocationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryProfilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProfilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRequestArgs = {
  id: Scalars['ID'];
};


export type QueryRequestsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRequestsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTestArgs = {
  id: Scalars['ID'];
};


export type QueryTestsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTestsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};


export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
};


export type LocationConnection = {
  __typename?: 'LocationConnection';
  values?: Maybe<Array<Maybe<Location>>>;
  groupBy?: Maybe<LocationGroupBy>;
  aggregate?: Maybe<LocationAggregator>;
};

export type LocationGroupBy = {
  __typename?: 'LocationGroupBy';
  id?: Maybe<Array<Maybe<LocationConnectionId>>>;
  created_at?: Maybe<Array<Maybe<LocationConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<LocationConnectionUpdated_At>>>;
  lat?: Maybe<Array<Maybe<LocationConnectionLat>>>;
  lng?: Maybe<Array<Maybe<LocationConnectionLng>>>;
  created_by?: Maybe<Array<Maybe<LocationConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<LocationConnectionUpdated_By>>>;
};

export type LocationConnectionId = {
  __typename?: 'LocationConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionCreated_At = {
  __typename?: 'LocationConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionUpdated_At = {
  __typename?: 'LocationConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionLat = {
  __typename?: 'LocationConnectionLat';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionLng = {
  __typename?: 'LocationConnectionLng';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionCreated_By = {
  __typename?: 'LocationConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationConnectionUpdated_By = {
  __typename?: 'LocationConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LocationConnection>;
};

export type LocationAggregator = {
  __typename?: 'LocationAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<LocationAggregatorSum>;
  avg?: Maybe<LocationAggregatorAvg>;
  min?: Maybe<LocationAggregatorMin>;
  max?: Maybe<LocationAggregatorMax>;
};

export type LocationAggregatorSum = {
  __typename?: 'LocationAggregatorSum';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type LocationAggregatorAvg = {
  __typename?: 'LocationAggregatorAvg';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type LocationAggregatorMin = {
  __typename?: 'LocationAggregatorMin';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type LocationAggregatorMax = {
  __typename?: 'LocationAggregatorMax';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  dob: Scalars['Date'];
  group: Enum_Profile_Group;
  user?: Maybe<UsersPermissionsUser>;
  period: Enum_Profile_Period;
  isAvailable?: Maybe<Scalars['Boolean']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};


export enum Enum_Profile_Group {
  Aplus = 'Aplus',
  Amoins = 'Amoins',
  Bplus = 'Bplus',
  Bmoins = 'Bmoins',
  Oplus = 'Oplus',
  Omoins = 'Omoins',
  ABplus = 'ABplus',
  ABmoins = 'ABmoins'
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  profile?: Maybe<Profile>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export enum Enum_Profile_Period {
  Three = 'three',
  Four = 'four',
  Six = 'six'
}

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  values?: Maybe<Array<Maybe<Profile>>>;
  groupBy?: Maybe<ProfileGroupBy>;
  aggregate?: Maybe<ProfileAggregator>;
};

export type ProfileGroupBy = {
  __typename?: 'ProfileGroupBy';
  id?: Maybe<Array<Maybe<ProfileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProfileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProfileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ProfileConnectionName>>>;
  dob?: Maybe<Array<Maybe<ProfileConnectionDob>>>;
  group?: Maybe<Array<Maybe<ProfileConnectionGroup>>>;
  user?: Maybe<Array<Maybe<ProfileConnectionUser>>>;
  period?: Maybe<Array<Maybe<ProfileConnectionPeriod>>>;
  isAvailable?: Maybe<Array<Maybe<ProfileConnectionIsAvailable>>>;
  lat?: Maybe<Array<Maybe<ProfileConnectionLat>>>;
  lng?: Maybe<Array<Maybe<ProfileConnectionLng>>>;
  created_by?: Maybe<Array<Maybe<ProfileConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ProfileConnectionUpdated_By>>>;
};

export type ProfileConnectionId = {
  __typename?: 'ProfileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionCreated_At = {
  __typename?: 'ProfileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionUpdated_At = {
  __typename?: 'ProfileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionName = {
  __typename?: 'ProfileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionDob = {
  __typename?: 'ProfileConnectionDob';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionGroup = {
  __typename?: 'ProfileConnectionGroup';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionUser = {
  __typename?: 'ProfileConnectionUser';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionPeriod = {
  __typename?: 'ProfileConnectionPeriod';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionIsAvailable = {
  __typename?: 'ProfileConnectionIsAvailable';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionLat = {
  __typename?: 'ProfileConnectionLat';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionLng = {
  __typename?: 'ProfileConnectionLng';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionCreated_By = {
  __typename?: 'ProfileConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionUpdated_By = {
  __typename?: 'ProfileConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileAggregator = {
  __typename?: 'ProfileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ProfileAggregatorSum>;
  avg?: Maybe<ProfileAggregatorAvg>;
  min?: Maybe<ProfileAggregatorMin>;
  max?: Maybe<ProfileAggregatorMax>;
};

export type ProfileAggregatorSum = {
  __typename?: 'ProfileAggregatorSum';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type ProfileAggregatorAvg = {
  __typename?: 'ProfileAggregatorAvg';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type ProfileAggregatorMin = {
  __typename?: 'ProfileAggregatorMin';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type ProfileAggregatorMax = {
  __typename?: 'ProfileAggregatorMax';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type Request = {
  __typename?: 'Request';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  user?: Maybe<UsersPermissionsUser>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Enum_Request_Group>;
  phone: Scalars['Int'];
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export enum Enum_Request_Group {
  Aplus = 'Aplus',
  Amoins = 'Amoins',
  Bplus = 'Bplus',
  Bmoins = 'Bmoins',
  Oplus = 'Oplus',
  Omoins = 'Omoins',
  ABplus = 'ABplus',
  ABmoins = 'ABmoins'
}

export type RequestConnection = {
  __typename?: 'RequestConnection';
  values?: Maybe<Array<Maybe<Request>>>;
  groupBy?: Maybe<RequestGroupBy>;
  aggregate?: Maybe<RequestAggregator>;
};

export type RequestGroupBy = {
  __typename?: 'RequestGroupBy';
  id?: Maybe<Array<Maybe<RequestConnectionId>>>;
  created_at?: Maybe<Array<Maybe<RequestConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<RequestConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<RequestConnectionName>>>;
  lat?: Maybe<Array<Maybe<RequestConnectionLat>>>;
  lng?: Maybe<Array<Maybe<RequestConnectionLng>>>;
  user?: Maybe<Array<Maybe<RequestConnectionUser>>>;
  description?: Maybe<Array<Maybe<RequestConnectionDescription>>>;
  group?: Maybe<Array<Maybe<RequestConnectionGroup>>>;
  phone?: Maybe<Array<Maybe<RequestConnectionPhone>>>;
  created_by?: Maybe<Array<Maybe<RequestConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<RequestConnectionUpdated_By>>>;
};

export type RequestConnectionId = {
  __typename?: 'RequestConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RequestConnection>;
};

export type RequestConnectionCreated_At = {
  __typename?: 'RequestConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RequestConnection>;
};

export type RequestConnectionUpdated_At = {
  __typename?: 'RequestConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RequestConnection>;
};

export type RequestConnectionName = {
  __typename?: 'RequestConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RequestConnection>;
};

export type RequestConnectionLat = {
  __typename?: 'RequestConnectionLat';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<RequestConnection>;
};

export type RequestConnectionLng = {
  __typename?: 'RequestConnectionLng';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<RequestConnection>;
};

export type RequestConnectionUser = {
  __typename?: 'RequestConnectionUser';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RequestConnection>;
};

export type RequestConnectionDescription = {
  __typename?: 'RequestConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RequestConnection>;
};

export type RequestConnectionGroup = {
  __typename?: 'RequestConnectionGroup';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RequestConnection>;
};

export type RequestConnectionPhone = {
  __typename?: 'RequestConnectionPhone';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<RequestConnection>;
};

export type RequestConnectionCreated_By = {
  __typename?: 'RequestConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RequestConnection>;
};

export type RequestConnectionUpdated_By = {
  __typename?: 'RequestConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RequestConnection>;
};

export type RequestAggregator = {
  __typename?: 'RequestAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<RequestAggregatorSum>;
  avg?: Maybe<RequestAggregatorAvg>;
  min?: Maybe<RequestAggregatorMin>;
  max?: Maybe<RequestAggregatorMax>;
};

export type RequestAggregatorSum = {
  __typename?: 'RequestAggregatorSum';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
};

export type RequestAggregatorAvg = {
  __typename?: 'RequestAggregatorAvg';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
};

export type RequestAggregatorMin = {
  __typename?: 'RequestAggregatorMin';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
};

export type RequestAggregatorMax = {
  __typename?: 'RequestAggregatorMax';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
};

export type Test = {
  __typename?: 'Test';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  Teest?: Maybe<Scalars['String']>;
  Bool?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UsersPermissionsUser>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type TestConnection = {
  __typename?: 'TestConnection';
  values?: Maybe<Array<Maybe<Test>>>;
  groupBy?: Maybe<TestGroupBy>;
  aggregate?: Maybe<TestAggregator>;
};

export type TestGroupBy = {
  __typename?: 'TestGroupBy';
  id?: Maybe<Array<Maybe<TestConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TestConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TestConnectionUpdated_At>>>;
  Teest?: Maybe<Array<Maybe<TestConnectionTeest>>>;
  Bool?: Maybe<Array<Maybe<TestConnectionBool>>>;
  user?: Maybe<Array<Maybe<TestConnectionUser>>>;
  created_by?: Maybe<Array<Maybe<TestConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<TestConnectionUpdated_By>>>;
};

export type TestConnectionId = {
  __typename?: 'TestConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TestConnection>;
};

export type TestConnectionCreated_At = {
  __typename?: 'TestConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TestConnection>;
};

export type TestConnectionUpdated_At = {
  __typename?: 'TestConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TestConnection>;
};

export type TestConnectionTeest = {
  __typename?: 'TestConnectionTeest';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TestConnection>;
};

export type TestConnectionBool = {
  __typename?: 'TestConnectionBool';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<TestConnection>;
};

export type TestConnectionUser = {
  __typename?: 'TestConnectionUser';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TestConnection>;
};

export type TestConnectionCreated_By = {
  __typename?: 'TestConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TestConnection>;
};

export type TestConnectionUpdated_By = {
  __typename?: 'TestConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TestConnection>;
};

export type TestAggregator = {
  __typename?: 'TestAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Location | LocationConnection | LocationAggregator | LocationAggregatorSum | LocationAggregatorAvg | LocationAggregatorMin | LocationAggregatorMax | LocationGroupBy | LocationConnectionId | LocationConnectionCreated_At | LocationConnectionUpdated_At | LocationConnectionLat | LocationConnectionLng | LocationConnectionCreated_By | LocationConnectionUpdated_By | CreateLocationPayload | UpdateLocationPayload | DeleteLocationPayload | Profile | ProfileConnection | ProfileAggregator | ProfileAggregatorSum | ProfileAggregatorAvg | ProfileAggregatorMin | ProfileAggregatorMax | ProfileGroupBy | ProfileConnectionId | ProfileConnectionCreated_At | ProfileConnectionUpdated_At | ProfileConnectionName | ProfileConnectionDob | ProfileConnectionGroup | ProfileConnectionUser | ProfileConnectionPeriod | ProfileConnectionIsAvailable | ProfileConnectionLat | ProfileConnectionLng | ProfileConnectionCreated_By | ProfileConnectionUpdated_By | CreateProfilePayload | UpdateProfilePayload | DeleteProfilePayload | Request | RequestConnection | RequestAggregator | RequestAggregatorSum | RequestAggregatorAvg | RequestAggregatorMin | RequestAggregatorMax | RequestGroupBy | RequestConnectionId | RequestConnectionCreated_At | RequestConnectionUpdated_At | RequestConnectionName | RequestConnectionLat | RequestConnectionLng | RequestConnectionUser | RequestConnectionDescription | RequestConnectionGroup | RequestConnectionPhone | RequestConnectionCreated_By | RequestConnectionUpdated_By | CreateRequestPayload | UpdateRequestPayload | DeleteRequestPayload | Test | TestConnection | TestAggregator | TestGroupBy | TestConnectionId | TestConnectionCreated_At | TestConnectionUpdated_At | TestConnectionTeest | TestConnectionBool | TestConnectionUser | TestConnectionCreated_By | TestConnectionUpdated_By | CreateTestPayload | UpdateTestPayload | DeleteTestPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionCreated_By | UploadFileConnectionUpdated_By | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnectionCreated_By | UsersPermissionsRoleConnectionUpdated_By | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionProfile | UsersPermissionsUserConnectionCreated_By | UsersPermissionsUserConnectionUpdated_By | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type CreateLocationPayload = {
  __typename?: 'createLocationPayload';
  location?: Maybe<Location>;
};

export type UpdateLocationPayload = {
  __typename?: 'updateLocationPayload';
  location?: Maybe<Location>;
};

export type DeleteLocationPayload = {
  __typename?: 'deleteLocationPayload';
  location?: Maybe<Location>;
};

export type CreateProfilePayload = {
  __typename?: 'createProfilePayload';
  profile?: Maybe<Profile>;
};

export type UpdateProfilePayload = {
  __typename?: 'updateProfilePayload';
  profile?: Maybe<Profile>;
};

export type DeleteProfilePayload = {
  __typename?: 'deleteProfilePayload';
  profile?: Maybe<Profile>;
};

export type CreateRequestPayload = {
  __typename?: 'createRequestPayload';
  request?: Maybe<Request>;
};

export type UpdateRequestPayload = {
  __typename?: 'updateRequestPayload';
  request?: Maybe<Request>;
};

export type DeleteRequestPayload = {
  __typename?: 'deleteRequestPayload';
  request?: Maybe<Request>;
};

export type CreateTestPayload = {
  __typename?: 'createTestPayload';
  test?: Maybe<Test>;
};

export type UpdateTestPayload = {
  __typename?: 'updateTestPayload';
  test?: Maybe<Test>;
};

export type DeleteTestPayload = {
  __typename?: 'deleteTestPayload';
  test?: Maybe<Test>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  created_by?: Maybe<Array<Maybe<UploadFileConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UploadFileConnectionUpdated_By>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_By = {
  __typename?: 'UploadFileConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_By = {
  __typename?: 'UploadFileConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionUpdated_By>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionCreated_By = {
  __typename?: 'UsersPermissionsRoleConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionUpdated_By = {
  __typename?: 'UsersPermissionsRoleConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  profile?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProfile>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_By>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProfile = {
  __typename?: 'UsersPermissionsUserConnectionProfile';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_By = {
  __typename?: 'UsersPermissionsUserConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_By = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLocation?: Maybe<CreateLocationPayload>;
  updateLocation?: Maybe<UpdateLocationPayload>;
  deleteLocation?: Maybe<DeleteLocationPayload>;
  /** Create profile */
  createProfile?: Maybe<CreateProfilePayload>;
  updateProfile?: Maybe<UpdateProfilePayload>;
  deleteProfile?: Maybe<DeleteProfilePayload>;
  /** Create request */
  createRequest?: Maybe<CreateRequestPayload>;
  updateRequest?: Maybe<UpdateRequestPayload>;
  deleteRequest?: Maybe<DeleteRequestPayload>;
  createTest?: Maybe<CreateTestPayload>;
  updateTest?: Maybe<UpdateTestPayload>;
  deleteTest?: Maybe<DeleteTestPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateLocationArgs = {
  input?: Maybe<CreateLocationInput>;
};


export type MutationUpdateLocationArgs = {
  input?: Maybe<UpdateLocationInput>;
};


export type MutationDeleteLocationArgs = {
  input?: Maybe<DeleteLocationInput>;
};


export type MutationCreateProfileArgs = {
  input?: Maybe<CreateProfileInput>;
};


export type MutationUpdateProfileArgs = {
  input?: Maybe<UpdateProfileInput>;
};


export type MutationDeleteProfileArgs = {
  input?: Maybe<DeleteProfileInput>;
};


export type MutationCreateRequestArgs = {
  input?: Maybe<CreateRequestInput>;
};


export type MutationUpdateRequestArgs = {
  input?: Maybe<UpdateRequestInput>;
};


export type MutationDeleteRequestArgs = {
  input?: Maybe<DeleteRequestInput>;
};


export type MutationCreateTestArgs = {
  input?: Maybe<CreateTestInput>;
};


export type MutationUpdateTestArgs = {
  input?: Maybe<UpdateTestInput>;
};


export type MutationDeleteTestArgs = {
  input?: Maybe<DeleteTestInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type CreateLocationInput = {
  data?: Maybe<LocationInput>;
};

export type LocationInput = {
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateLocationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditLocationInput>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type EditLocationInput = {
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteLocationInput = {
  where?: Maybe<InputId>;
};

export type CreateProfileInput = {
  data?: Maybe<ProfileInput>;
};

export type ProfileInput = {
  name: Scalars['String'];
  dob: Scalars['Date'];
  group: Enum_Profile_Group;
  user?: Maybe<Scalars['ID']>;
  period: Enum_Profile_Period;
  isAvailable?: Maybe<Scalars['Boolean']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateProfileInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProfileInput>;
};

export type EditProfileInput = {
  name?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  group?: Maybe<Enum_Profile_Group>;
  user?: Maybe<Scalars['ID']>;
  period?: Maybe<Enum_Profile_Period>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteProfileInput = {
  where?: Maybe<InputId>;
};

export type CreateRequestInput = {
  data?: Maybe<RequestInput>;
};

export type RequestInput = {
  name: Scalars['String'];
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Enum_Request_Group>;
  phone: Scalars['Int'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRequestInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRequestInput>;
};

export type EditRequestInput = {
  name?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Enum_Request_Group>;
  phone?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteRequestInput = {
  where?: Maybe<InputId>;
};

export type CreateTestInput = {
  data?: Maybe<TestInput>;
};

export type TestInput = {
  Teest?: Maybe<Scalars['String']>;
  Bool?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateTestInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTestInput>;
};

export type EditTestInput = {
  Teest?: Maybe<Scalars['String']>;
  Bool?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteTestInput = {
  where?: Maybe<InputId>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};


export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UsersPermissionsMe' }
    & Pick<UsersPermissionsMe, 'email'>
  )> }
);

export type ProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfilesQuery = (
  { __typename?: 'Query' }
  & { profiles?: Maybe<Array<Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'name' | 'lat' | 'lng' | 'group'>
  )>>> }
);

export type RequestsQueryVariables = Exact<{
  sort?: Maybe<Scalars['String']>;
}>;


export type RequestsQuery = (
  { __typename?: 'Query' }
  & { requests?: Maybe<Array<Maybe<(
    { __typename?: 'Request' }
    & Pick<Request, 'name' | 'lat' | 'lng' | 'group' | 'description' | 'phone'>
  )>>> }
);

export type CreateProfileMutationVariables = Exact<{
  name: Scalars['String'];
  dob: Scalars['Date'];
  group: Enum_Profile_Group;
  period: Enum_Profile_Period;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
}>;


export type CreateProfileMutation = (
  { __typename?: 'Mutation' }
  & { createProfile?: Maybe<(
    { __typename?: 'createProfilePayload' }
    & { profile?: Maybe<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'id' | 'name'>
    )> }
  )> }
);

export type CreateRequestMutationVariables = Exact<{
  name: Scalars['String'];
  group: Enum_Request_Group;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  description: Scalars['String'];
  phone: Scalars['Int'];
}>;


export type CreateRequestMutation = (
  { __typename?: 'Mutation' }
  & { createRequest?: Maybe<(
    { __typename?: 'createRequestPayload' }
    & { request?: Maybe<(
      { __typename?: 'Request' }
      & Pick<Request, 'id' | 'name'>
    )> }
  )> }
);


export const MeDocument = gql`
    query Me {
  me {
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ProfilesDocument = gql`
    query profiles {
  profiles(sort: "created_at:DESC") {
    name
    lat
    lng
    group
  }
}
    `;

/**
 * __useProfilesQuery__
 *
 * To run a query within a React component, call `useProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfilesQuery(baseOptions?: Apollo.QueryHookOptions<ProfilesQuery, ProfilesQueryVariables>) {
        return Apollo.useQuery<ProfilesQuery, ProfilesQueryVariables>(ProfilesDocument, baseOptions);
      }
export function useProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfilesQuery, ProfilesQueryVariables>) {
          return Apollo.useLazyQuery<ProfilesQuery, ProfilesQueryVariables>(ProfilesDocument, baseOptions);
        }
export type ProfilesQueryHookResult = ReturnType<typeof useProfilesQuery>;
export type ProfilesLazyQueryHookResult = ReturnType<typeof useProfilesLazyQuery>;
export type ProfilesQueryResult = Apollo.QueryResult<ProfilesQuery, ProfilesQueryVariables>;
export const RequestsDocument = gql`
    query requests($sort: String) {
  requests(sort: $sort) {
    name
    lat
    lng
    group
    description
    phone
  }
}
    `;

/**
 * __useRequestsQuery__
 *
 * To run a query within a React component, call `useRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRequestsQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useRequestsQuery(baseOptions?: Apollo.QueryHookOptions<RequestsQuery, RequestsQueryVariables>) {
        return Apollo.useQuery<RequestsQuery, RequestsQueryVariables>(RequestsDocument, baseOptions);
      }
export function useRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RequestsQuery, RequestsQueryVariables>) {
          return Apollo.useLazyQuery<RequestsQuery, RequestsQueryVariables>(RequestsDocument, baseOptions);
        }
export type RequestsQueryHookResult = ReturnType<typeof useRequestsQuery>;
export type RequestsLazyQueryHookResult = ReturnType<typeof useRequestsLazyQuery>;
export type RequestsQueryResult = Apollo.QueryResult<RequestsQuery, RequestsQueryVariables>;
export const CreateProfileDocument = gql`
    mutation CreateProfile($name: String!, $dob: Date!, $group: ENUM_PROFILE_GROUP!, $period: ENUM_PROFILE_PERIOD!, $lat: Float!, $lng: Float!) {
  createProfile(input: {data: {name: $name, dob: $dob, group: $group, period: $period, lat: $lat, lng: $lng}}) {
    profile {
      id
      name
    }
  }
}
    `;
export type CreateProfileMutationFn = Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      name: // value for 'name'
 *      dob: // value for 'dob'
 *      group: // value for 'group'
 *      period: // value for 'period'
 *      lat: // value for 'lat'
 *      lng: // value for 'lng'
 *   },
 * });
 */
export function useCreateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>) {
        return Apollo.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, baseOptions);
      }
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;
export const CreateRequestDocument = gql`
    mutation CreateRequest($name: String!, $group: ENUM_REQUEST_GROUP!, $lat: Float!, $lng: Float!, $description: String!, $phone: Int!) {
  createRequest(input: {data: {name: $name, description: $description, group: $group, lat: $lat, lng: $lng, phone: $phone}}) {
    request {
      id
      name
    }
  }
}
    `;
export type CreateRequestMutationFn = Apollo.MutationFunction<CreateRequestMutation, CreateRequestMutationVariables>;

/**
 * __useCreateRequestMutation__
 *
 * To run a mutation, you first call `useCreateRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRequestMutation, { data, loading, error }] = useCreateRequestMutation({
 *   variables: {
 *      name: // value for 'name'
 *      group: // value for 'group'
 *      lat: // value for 'lat'
 *      lng: // value for 'lng'
 *      description: // value for 'description'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useCreateRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateRequestMutation, CreateRequestMutationVariables>) {
        return Apollo.useMutation<CreateRequestMutation, CreateRequestMutationVariables>(CreateRequestDocument, baseOptions);
      }
export type CreateRequestMutationHookResult = ReturnType<typeof useCreateRequestMutation>;
export type CreateRequestMutationResult = Apollo.MutationResult<CreateRequestMutation>;
export type CreateRequestMutationOptions = Apollo.BaseMutationOptions<CreateRequestMutation, CreateRequestMutationVariables>;