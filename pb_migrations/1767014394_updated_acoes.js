/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfq8uablza78a5l")

  // update
  collection.schema.addField(new SchemaField({
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
        "Aguardando materiais",
        "Programado",
        "Em execução",
        "Concluído"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfq8uablza78a5l")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
