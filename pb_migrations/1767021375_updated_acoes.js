/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfq8uablza78a5l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jkdpmljp",
    "name": "numero_sc",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfq8uablza78a5l")

  // remove
  collection.schema.removeField("jkdpmljp")

  return dao.saveCollection(collection)
})
