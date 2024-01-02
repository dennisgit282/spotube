migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pevn93oxbnovw0s")

  collection.createRule = "@request.auth.id != ''"
  collection.updateRule = "@request.auth.id != ''"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pevn93oxbnovw0s")
  // is this correct? There is an issue open saying the same song is being played rather than a collection. I am seeing "pevn93oxbnovw0s" in all the code files.

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
