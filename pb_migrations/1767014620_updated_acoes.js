/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfq8uablza78a5l")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = ""
  collection.createRule = "@request.auth.perfil = 'admin'"
  collection.updateRule = "@request.auth.perfil = 'admin' || @request.auth.perfil = 'operador'"
  collection.deleteRule = "@request.auth.perfil = 'admin'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfq8uablza78a5l")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
