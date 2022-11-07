import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Bookmark = {
  __typename?: 'Bookmark';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  links?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type CreateBookmarkInput = {
  name: Scalars['String'];
};

export type CreateBookmarkOutput = {
  __typename?: 'CreateBookmarkOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetBookmarksOutput = {
  __typename?: 'GetBookmarksOutput';
  bookmarks?: Maybe<Array<Bookmark>>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetUserInput = {
  id: Scalars['Int'];
};

export type GetUserOutput = {
  __typename?: 'GetUserOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBookmark: CreateBookmarkOutput;
  createUser: CreateUserOutput;
};


export type MutationCreateBookmarkArgs = {
  input: CreateBookmarkInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getBookmarks: GetBookmarksOutput;
  getUser: GetUserOutput;
};


export type QueryGetUserArgs = {
  input: GetUserInput;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'CreateUserOutput', ok: boolean, error?: string | null } };

export type GetBookmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBookmarksQuery = { __typename?: 'Query', getBookmarks: { __typename?: 'GetBookmarksOutput', ok: boolean, error?: string | null, bookmarks?: Array<{ __typename?: 'Bookmark', id: number, name: string, links?: Array<string> | null, createdAt: any, updatedAt: any, userId: number }> | null } };

export type CreateBookmarkMutationVariables = Exact<{
  input: CreateBookmarkInput;
}>;


export type CreateBookmarkMutation = { __typename?: 'Mutation', createBookmark: { __typename?: 'CreateBookmarkOutput', ok: boolean, error?: string | null } };

export const CreateUserDocument = gql`
    mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    ok
    error
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBookmarksDocument = gql`
    query getBookmarks {
  getBookmarks {
    ok
    error
    bookmarks {
      id
      name
      links
      createdAt
      updatedAt
      userId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBookmarksGQL extends Apollo.Query<GetBookmarksQuery, GetBookmarksQueryVariables> {
    document = GetBookmarksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateBookmarkDocument = gql`
    mutation createBookmark($input: CreateBookmarkInput!) {
  createBookmark(input: $input) {
    ok
    error
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateBookmarkGQL extends Apollo.Mutation<CreateBookmarkMutation, CreateBookmarkMutationVariables> {
    document = CreateBookmarkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }