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
  links?: Maybe<Array<Link>>;
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

export type GetBookmarkInput = {
  id: Scalars['Int'];
};

export type GetBookmarkOutput = {
  __typename?: 'GetBookmarkOutput';
  bookmark?: Maybe<Bookmark>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetBookmarksOutput = {
  __typename?: 'GetBookmarksOutput';
  bookmarks?: Maybe<Array<Bookmark>>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetLinksInput = {
  bookmarkId: Scalars['Int'];
};

export type GetLinksOutput = {
  __typename?: 'GetLinksOutput';
  error?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Link>>;
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

export type Link = {
  __typename?: 'Link';
  bookmarkId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  images?: Maybe<Array<Scalars['String']>>;
  siteName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBookmark: CreateBookmarkOutput;
  createUser: CreateUserOutput;
  updateBookmark: UpdateBookmarkOutput;
};


export type MutationCreateBookmarkArgs = {
  input: CreateBookmarkInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateBookmarkArgs = {
  input: UpdateBookmarkInput;
};

export type Query = {
  __typename?: 'Query';
  getBookmark: GetBookmarkOutput;
  getBookmarks: GetBookmarksOutput;
  getLinks: GetLinksOutput;
  getUser: GetUserOutput;
};


export type QueryGetBookmarkArgs = {
  input: GetBookmarkInput;
};


export type QueryGetLinksArgs = {
  input: GetLinksInput;
};


export type QueryGetUserArgs = {
  input: GetUserInput;
};

export type UpdateBookmarkInput = {
  id: Scalars['Int'];
  url: Scalars['String'];
};

export type UpdateBookmarkOutput = {
  __typename?: 'UpdateBookmarkOutput';
  bookmark?: Maybe<Bookmark>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
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

export type GetLinksQueryVariables = Exact<{
  input: GetLinksInput;
}>;


export type GetLinksQuery = { __typename?: 'Query', getLinks: { __typename?: 'GetLinksOutput', ok: boolean, error?: string | null, links?: Array<{ __typename?: 'Link', id: number, url: string, title?: string | null, images?: Array<string> | null, bookmarkId: number, siteName?: string | null, createdAt: any, updatedAt: any }> | null } };

export type UpdateBookmarkMutationVariables = Exact<{
  input: UpdateBookmarkInput;
}>;


export type UpdateBookmarkMutation = { __typename?: 'Mutation', updateBookmark: { __typename?: 'UpdateBookmarkOutput', ok: boolean, error?: string | null, bookmark?: { __typename?: 'Bookmark', id: number, name: string, createdAt: any, updatedAt: any, userId: number, links?: Array<{ __typename?: 'Link', id: number, url: string, title?: string | null, images?: Array<string> | null, bookmarkId: number, siteName?: string | null, createdAt: any, updatedAt: any }> | null } | null } };

export type GetBookmarkQueryVariables = Exact<{
  input: GetBookmarkInput;
}>;


export type GetBookmarkQuery = { __typename?: 'Query', getBookmark: { __typename?: 'GetBookmarkOutput', ok: boolean, error?: string | null, bookmark?: { __typename?: 'Bookmark', id: number, name: string, createdAt: any, updatedAt: any, userId: number, links?: Array<{ __typename?: 'Link', id: number, url: string, title?: string | null, images?: Array<string> | null, bookmarkId: number, siteName?: string | null, createdAt: any, updatedAt: any }> | null } | null } };

export type GetBookmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBookmarksQuery = { __typename?: 'Query', getBookmarks: { __typename?: 'GetBookmarksOutput', ok: boolean, error?: string | null, bookmarks?: Array<{ __typename?: 'Bookmark', id: number, name: string, createdAt: any, updatedAt: any, userId: number, links?: Array<{ __typename?: 'Link', id: number, url: string, title?: string | null, images?: Array<string> | null, bookmarkId: number, siteName?: string | null, createdAt: any, updatedAt: any }> | null }> | null } };

export type CreateBookmarkMutationVariables = Exact<{
  input: CreateBookmarkInput;
}>;


export type CreateBookmarkMutation = { __typename?: 'Mutation', createBookmark: { __typename?: 'CreateBookmarkOutput', ok: boolean, error?: string | null } };

export type BookmarkFragmentFragment = { __typename?: 'Bookmark', id: number, name: string, createdAt: any, updatedAt: any, userId: number, links?: Array<{ __typename?: 'Link', id: number, url: string, title?: string | null, images?: Array<string> | null, bookmarkId: number, siteName?: string | null, createdAt: any, updatedAt: any }> | null };

export type LinkFragmentFragment = { __typename?: 'Link', id: number, url: string, title?: string | null, images?: Array<string> | null, bookmarkId: number, siteName?: string | null, createdAt: any, updatedAt: any };

export const LinkFragmentFragmentDoc = gql`
    fragment LinkFragment on Link {
  id
  url
  title
  images
  bookmarkId
  siteName
  createdAt
  updatedAt
}
    `;
export const BookmarkFragmentFragmentDoc = gql`
    fragment BookmarkFragment on Bookmark {
  id
  name
  links {
    ...LinkFragment
  }
  createdAt
  updatedAt
  userId
}
    ${LinkFragmentFragmentDoc}`;
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
export const GetLinksDocument = gql`
    query GetLinks($input: GetLinksInput!) {
  getLinks(input: $input) {
    ok
    error
    links {
      ...LinkFragment
    }
  }
}
    ${LinkFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLinksGQL extends Apollo.Query<GetLinksQuery, GetLinksQueryVariables> {
    document = GetLinksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateBookmarkDocument = gql`
    mutation UpdateBookmark($input: UpdateBookmarkInput!) {
  updateBookmark(input: $input) {
    ok
    error
    bookmark {
      ...BookmarkFragment
    }
  }
}
    ${BookmarkFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateBookmarkGQL extends Apollo.Mutation<UpdateBookmarkMutation, UpdateBookmarkMutationVariables> {
    document = UpdateBookmarkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBookmarkDocument = gql`
    query GetBookmark($input: GetBookmarkInput!) {
  getBookmark(input: $input) {
    ok
    error
    bookmark {
      ...BookmarkFragment
    }
  }
}
    ${BookmarkFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBookmarkGQL extends Apollo.Query<GetBookmarkQuery, GetBookmarkQueryVariables> {
    document = GetBookmarkDocument;
    
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
      ...BookmarkFragment
    }
  }
}
    ${BookmarkFragmentFragmentDoc}`;

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