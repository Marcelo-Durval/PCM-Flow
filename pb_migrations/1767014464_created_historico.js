/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1s1nyiy574wj5e3",
    "created": "2025-12-29 13:21:04.506Z",
    "updated": "2025-12-29 13:21:04.506Z",
    "name": "historico",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kutr3m4p",
        "name": "acao_vinculada",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "nfq8uablza78a5l",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "gg1wkaxn",
        "name": "usuario",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "w8pccya5",
        "name": "tipo",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Sistema",
            "Comentário"
          ]
        }
      },
      {
        "system": false,
        "id": "ulqfjoob",
        "name": "mensagem",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("1s1nyiy574wj5e3");

  return dao.deleteCollection(collection);
})
