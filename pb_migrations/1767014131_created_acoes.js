/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nfq8uablza78a5l",
    "created": "2025-12-29 13:15:31.806Z",
    "updated": "2025-12-29 13:15:31.806Z",
    "name": "acoes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "knkut53t",
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
        "id": "4ozz5xad",
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
        "id": "04a04bon",
        "name": "ordem_servico",
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
        "id": "indag3qg",
        "name": "categoria",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Segurança",
            "Qualidade",
            "Máquina parada",
            "Estoque"
          ]
        }
      },
      {
        "system": false,
        "id": "yks0ybbv",
        "name": "urgencia",
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
        "id": "ubxcnqn6",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Aguardando AF",
            "Aguardando aprovação diretoria",
            "Aguardando pagamento",
            "Aguardando chegada",
            "Material entregue"
          ]
        }
      },
      {
        "system": false,
        "id": "c7fgmh7m",
        "name": "prazo_vencimento",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "hcxik5l2",
        "name": "responsavel",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
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
  const collection = dao.findCollectionByNameOrId("nfq8uablza78a5l");

  return dao.deleteCollection(collection);
})
