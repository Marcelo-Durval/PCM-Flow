/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1s1nyiy574wj5e3")

  // update
  collection.schema.addField(new SchemaField({
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
        "sistema",
        "comentario"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1s1nyiy574wj5e3")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
