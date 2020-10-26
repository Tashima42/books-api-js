define({ "api": [
  {
    "type": "get",
    "url": "/books",
    "title": "Request all books",
    "name": "GetAllBooks",
    "group": "Books",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "books",
            "description": "<p>All books basic information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "200 OK\n [{\n   \"id\": 1,\n   \"name\": \"Life, the Universe and Everything\",\n   \"edition\": \"first\",\n   \"isbn\": \"0-345-39182-9\",\n   \"publisherId\": 1,\n   \"published\": \"1982-08-01\",\n   \"language\": \"en-UK\",\n   \"description\": \"Life, the Universe and Everything is the third book in the five-volume Hitchhiker's Guide to the Galaxy science fiction \\\"trilogy\\\" by British writer Douglas Adams. The title refers to the Answer to Life, the Universe, and Everything.\",\n   \"createdAt\": \"2020-10-25T20:13:51.399Z\",\n   \"updatedAt\": \"2020-10-25T20:13:51.399Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BooksNotFound",
            "description": "<p>There isn't any data`</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/books.js",
    "groupTitle": "Books"
  }
] });