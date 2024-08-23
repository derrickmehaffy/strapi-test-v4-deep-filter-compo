import type { Schema, Attribute } from '@strapi/strapi';

export interface TestRankingStreams extends Schema.Component {
  collectionName: 'components_test_ranking_streams';
  info: {
    displayName: 'rankingStreams';
    icon: 'alien';
  };
  attributes: {
    rankingPublisher: Attribute.Relation<
      'test.ranking-streams',
      'oneToOne',
      'api::publisher.publisher'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.ranking-streams': TestRankingStreams;
    }
  }
}
