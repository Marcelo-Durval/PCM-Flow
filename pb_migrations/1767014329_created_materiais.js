/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "iayyrlsf0zb5ztt",
    "created": "2025-12-29 13:18:49.408Z",
    "updated": "2025-12-29 13:18:49.408Z",
    "name": "materiais",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ooitq4w8",
        "name": "acao_vinculada",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "nfq8uablza78a5l",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "rcr82mib",
        "name": "codigo_item",
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
        "id": "qunyu1qn",
        "name": "descricao",
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
        "id": "hhgoxnho",
        "name": "quantidade",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "cgzejip0",
        "name": "num_req_compra",
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
        "id": "kflqklyg",
        "name": "urgencia_material",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Baixa",
            "Média",
            "Alta"
          ]
        }
      },
      {
        "system": false,
        "id": "traji2k4",
        "name": "status_compra",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Em cotação",
            "Aguardando aprovação",
            "Aguardando pagamento",
            "Aguardando entrega",
            "Entregue",
            "Cancelado"
          ]
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
  const collection = dao.findCollectionByNameOrId("iayyrlsf0zb5ztt");

  return dao.deleteCollection(collection);
})
