/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iayyrlsf0zb5ztt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "joeb4neh",
    "name": "num_af",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xvlhz1td",
    "name": "valor",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5yj55irk",
    "name": "data_entrega",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iayyrlsf0zb5ztt")

  // remove
  collection.schema.removeField("joeb4neh")

  // remove
  collection.schema.removeField("xvlhz1td")

  // remove
  collection.schema.removeField("5yj55irk")

  return dao.saveCollection(collection)
})
