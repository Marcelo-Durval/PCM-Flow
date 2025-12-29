/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iayyrlsf0zb5ztt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "syarta3f",
    "name": "fornecedor",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iayyrlsf0zb5ztt")

  // remove
  collection.schema.removeField("syarta3f")

  return dao.saveCollection(collection)
})
