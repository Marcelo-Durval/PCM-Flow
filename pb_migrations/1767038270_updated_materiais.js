/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iayyrlsf0zb5ztt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1xjpoufa",
    "name": "qtd_atendida",
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
  const collection = dao.findCollectionByNameOrId("iayyrlsf0zb5ztt")

  // remove
  collection.schema.removeField("1xjpoufa")

  return dao.saveCollection(collection)
})
