POST /product/_search
{
  "query": {
    "bool": {
      "must": {
        "term": {
          "placeid": "IFladG4BPKIsN-IUkHva"
        }
      }
    }
  },
  "aggs": {
      "categories_group": {
        "terms": {
          "field": "categories",
          "size": 10
        },
        "aggs": {
          "collection": {
            "terms": {
              "field": "collection"
            }
          }
        }
      }
    }
}

PUT /product_v2
{
  "settings": {
    "index": {
      "number_of_shards": 3,
      "number_of_replicas": 2
    }
  },
  "mappings": {
    "properties": {
      "id": {
        "type": "keyword"
      },
      "name": {
        "type": "keyword"
      },
      "categories": {
        "type": "keyword"
      },
      "gastronomies": {
        "type": "keyword"
      },
      "collection": {
        "type": "keyword"
      },
      "recipes": {
        "type": "keyword"
      },
      "description": {
        "type": "text"
      },
      "spicy": {
        "type": "integer"
      },
      "price": {
        "type": "float"
      },
      "discount": {
        "type": "float"
      },
      "quantity": {
        "type": "float"
      },
      "size": {
        "type": "keyword"
      },
      "notation": {
        "type": "integer"
      },
      "likes": {
        "type": "integer"
      },
      "placeid": {
        "type": "keyword"
      },
      "placename": {
        "type": "keyword"
      },
      "placelogo": {
        "type": "keyword"
      },
      "placezone": {
        "type": "keyword"
      },
      "location": {
        "type": "geo_point"
      },
      "pictures": {
        "type": "object"
      },
      "menu_available": {
        "type": "boolean"
      },
      "created_at": {
        "type": "date"
      },
      "modified_at": {
        "type": "date"
      },
      "last_user_modified": {
        "type": "keyword"
      }
    }
  }
}

POST /_reindex
{
  "source":{
    "index": "product"
  },
  "dest": {
    "index": "product_v2"
  }
}

POST /_aliases
{
  "actions": [
    {
      "add": {
        "alias": "product",
        "index": "product_v2"
      }
    }
  ]
}

GET /product/_search