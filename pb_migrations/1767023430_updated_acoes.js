/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfq8uablza78a5l")

  collection.updateRule = "@request.auth.perfil = 'admin'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfq8uablza78a5l")

  collection.updateRule = "@request.auth.perfil = 'admin' || @request.auth.perfil = 'operador'"

  return dao.saveCollection(collection)
})
