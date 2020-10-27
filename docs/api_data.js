define({ "api": [
  {
    "type": "get",
    "url": "/authors",
    "title": "Request all authors",
    "name": "GetAllAuthors",
    "group": "Authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "authors",
            "description": "<p>All Authors basic information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "200 OK\n [{\n   \"id\": 1,\n   \"name\": \"Douglas Adams\",\n   \"image\": \"https://upload.wikimedia.org/wikipedia/commons/c/c0/Douglas_adams_portrait_cropped.jpg\",\n   \"createdAt\": \"2020-10-25T20:13:51.399Z\",\n   \"updatedAt\": \"2020-10-25T20:13:51.399Z\"\n}]",
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
            "field": "AuthorsNotFound",
            "description": "<p>There isn't any data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/authors.js",
    "groupTitle": "Authors"
  },
  {
    "type": "get",
    "url": "/authors/:id",
    "title": "Request one author by id",
    "name": "GetOneAuthor",
    "group": "Authors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Author's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "author",
            "description": "<p>All basic information from an author</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorNotFound",
            "description": "<p>There isn't any data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/authors.js",
    "groupTitle": "Authors"
  },
  {
    "type": "post",
    "url": "/books/new",
    "title": "Add a new book",
    "name": "AddNewBook",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Book's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "edition",
            "description": "<p>Book's edition</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isbn",
            "description": "<p>Book's unique ISBN number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "publisherId",
            "description": "<p>Book's publisher unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "published",
            "description": "<p>Book's publication date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Book's description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadValue",
            "description": "<p>Some field has bad information</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "delete",
    "url": "/books/:id",
    "title": "Delete a book",
    "name": "DeleteBook",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Book's unique id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadValue",
            "description": "<p>Some field has bad information</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/books.js",
    "groupTitle": "Books"
  },
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
            "type": "Array",
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
            "description": "<p>There isn't any data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/books/:id",
    "title": "Request one book by id",
    "name": "GetOneBook",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Book's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "book",
            "description": "<p>All basic information from a book</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BookNotFound",
            "description": "<p>There isn't any data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "put",
    "url": "/books/:id",
    "title": "Update a book",
    "name": "UpdateBook",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Book's unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Book's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "edition",
            "description": "<p>Book's edition</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isbn",
            "description": "<p>Book's unique ISBN number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "publisherId",
            "description": "<p>Book's publisher unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "published",
            "description": "<p>Book's publication date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Book's description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadValue",
            "description": "<p>Some field has bad information</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/links",
    "title": "Request all links",
    "name": "GetAllLinks",
    "group": "Links",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "links",
            "description": "<p>All links basic information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "200 OK\n [{\n   \"id\": 1,\n   \"pdf\": \"https://github.com/Tashima42/books/raw/main/en/Douglas%20Adams/Life%2C%20The%20universe%20and%20everything/Life%2C-The-Universe-and-Everything_Douglas-Adams.pdf\",\n   \"mobi\": \"https://github.com/Tashima42/books/raw/main/en/Douglas%20Adams/Life%2C%20The%20universe%20and%20everything/Life%2C-The-Universe-and-Everything_Douglas-Adams.mobi\",\n   \"epub\": \"https://github.com/Tashima42/books/raw/main/en/Douglas%20Adams/Life%2C%20The%20universe%20and%20everything/Life%2C-The-Universe-and-Everything_Douglas-Adams.epub\",\n   \"other\": null,\n   \"bookId\": 1,\n   \"createdAt\": \"2020-10-25T20:13:51.399Z\",\n   \"updatedAt\": \"2020-10-25T20:13:51.399Z\"\n}]",
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
            "field": "LinksNotFound",
            "description": "<p>There isn't any data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/links.js",
    "groupTitle": "Links"
  },
  {
    "type": "get",
    "url": "/links/:id",
    "title": "Request a group of Links by id",
    "name": "GetLinksGroup",
    "group": "Links",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Link's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "link",
            "description": "<p>All basic information from a group of links</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LinksNotFound",
            "description": "<p>There isn't any data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/links.js",
    "groupTitle": "Links"
  },
  {
    "type": "post",
    "url": "/publishers/new",
    "title": "Add a new publisher",
    "name": "AddNewPublisher",
    "group": "Publishers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Publisher's name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadValue",
            "description": "<p>Some field has bad information</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/publishers.js",
    "groupTitle": "Publishers"
  },
  {
    "type": "delete",
    "url": "/publishers/:id",
    "title": "Delete a publisher",
    "name": "DeletePublisher",
    "group": "Publishers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Publisher's unique id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadValue",
            "description": "<p>Some field has bad information</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/publishers.js",
    "groupTitle": "Publishers"
  },
  {
    "type": "get",
    "url": "/publishers",
    "title": "Request all publishers",
    "name": "GetAllPublishers",
    "group": "Publishers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "publishers",
            "description": "<p>All publishers basic information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "200 OK\n [{\n   \"id\": 1,\n   \"name\": \"Pam Books\",\n   \"createdAt\": \"2020-10-25T20:13:51.399Z\",\n   \"updatedAt\": \"2020-10-25T20:13:51.399Z\"\n}]",
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
            "field": "PublishersNotFound",
            "description": "<p>There isn't any data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/publishers.js",
    "groupTitle": "Publishers"
  },
  {
    "type": "get",
    "url": "/publishers/:id",
    "title": "Request one publisher by id",
    "name": "GetOnePublisher",
    "group": "Publishers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Publisher's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "publisher",
            "description": "<p>All basic information from a publisher</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PublisherNotFound",
            "description": "<p>There isn't any data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/publishers.js",
    "groupTitle": "Publishers"
  },
  {
    "type": "put",
    "url": "/publishers/:id",
    "title": "Update a publisher",
    "name": "UpdatePublisher",
    "group": "Publishers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Publisher's name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadValue",
            "description": "<p>Some field has bad information</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/publishers.js",
    "groupTitle": "Publishers"
  }
] });
