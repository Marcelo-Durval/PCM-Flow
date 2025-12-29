/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1s1nyiy574wj5e3")

  collection.listRule = "@request.auth.id != \"\""
  collection.createRule = "@request.auth.perfil = 'admin' || @request.auth.perfil = 'operador'"
  collection.updateRule = "@request.auth.perfil = 'admin'"
  collection.deleteRule = "@request.auth.perfil = 'admin'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1s1nyiy574wj5e3")

  collection.listRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
