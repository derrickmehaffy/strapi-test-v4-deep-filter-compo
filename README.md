# Testing deep filtering

## Seed data

Seed data is provided in the seed.tar

## Query used for testing

This is using QS to construct the LHS bracket syntax

```js
const qs = require('qs');

const query = qs.stringify({
  populate: ['rankingStreams.rankingPublisher'],
  filters: {
    rankingStreams: {
      rankingPublisher: {
        publisherName: {
          "$eq": "test1"
        }
      }
    }
  }
}, {
  encodeValuesOnly: true,
});


console.log('\n' + query)
```

Output of LHS bracket syntax:

`populate[0]=rankingStreams.rankingPublisher&filters[rankingStreams][rankingPublisher][publisherName][$eq]=test1`

## HTTP Request showing correct response:

`localhost:1337/api/univeristies?populate[0]=rankingStreams.rankingPublisher&filters[rankingStreams][rankingPublisher][publisherName][$eq]=test2`

Response:

```json
{
    "data": [
        {
            "id": 1,
            "attributes": {
                "createdAt": "2024-08-23T17:44:26.961Z",
                "updatedAt": "2024-08-23T17:48:56.382Z",
                "name": "test1",
                "rankingStreams": [
                    {
                        "id": 1,
                        "rankingPublisher": {
                            "data": {
                                "id": 1,
                                "attributes": {
                                    "createdAt": "2024-08-23T17:44:09.577Z",
                                    "updatedAt": "2024-08-23T17:44:09.577Z",
                                    "publisherName": "test1"
                                }
                            }
                        }
                    },
                    {
                        "id": 4,
                        "rankingPublisher": {
                            "data": {
                                "id": 2,
                                "attributes": {
                                    "createdAt": "2024-08-23T17:44:14.115Z",
                                    "updatedAt": "2024-08-23T17:44:14.115Z",
                                    "publisherName": "test2"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "id": 2,
            "attributes": {
                "createdAt": "2024-08-23T17:44:33.796Z",
                "updatedAt": "2024-08-23T17:44:33.796Z",
                "name": "test2",
                "rankingStreams": [
                    {
                        "id": 2,
                        "rankingPublisher": {
                            "data": {
                                "id": 2,
                                "attributes": {
                                    "createdAt": "2024-08-23T17:44:14.115Z",
                                    "updatedAt": "2024-08-23T17:44:14.115Z",
                                    "publisherName": "test2"
                                }
                            }
                        }
                    }
                ]
            }
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 2
        }
    }
}
```

