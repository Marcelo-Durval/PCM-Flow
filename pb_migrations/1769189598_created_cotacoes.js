/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "te8p271atupbh9j",
    "created": "2026-01-23 17:33:18.724Z",
    "updated": "2026-01-23 17:33:18.724Z",
    "name": "cotacoes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z3xelu2c",
        "name": "titulo",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "usfjgckz",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Aberta",
            "Fechada",
            "Cancelada"
          ]
        }
      },
      {
        "system": false,
        "id": "4v41ta1h",
        "name": "fornecedores",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "vti5wj9u",
        "name": "condicoes_pagamento",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "aizincnf",
        "name": "mapa_precos",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "dyy571k9",
        "name": "vencedores",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "kkmeygbo",
        "name": "materiais_vinculados",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "iayyrlsf0zb5ztt",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("te8p271atupbh9j");

  return dao.deleteCollection(collection);
})
