import type Departement from '../utils/departement.interface'
const DB_NAME = 'france-travel-level'
const DB_VERSION = 3 // Use a long long for this value (don't use a float)
const DB_STORE_NAME = 'departements'
var db!: IDBDatabase

export const openDB = () => {
  console.log('openDb ...')
  var req = indexedDB.open(DB_NAME, DB_VERSION)
  req.onsuccess = function (evt) {
    // Equal to: db = req.result;
    db = this.result
    console.log('openDb DONE')
  }
  req.onerror = function (evt) {
    console.error('openDb:', evt.target?.errorCode)
  }

  req.onupgradeneeded = function (evt) {
    console.log('openDb.onupgradeneeded')
    var store = evt.currentTarget?.result.createObjectStore(DB_STORE_NAME, { keyPath: 'num_dep' })
    store.createIndex('dep_name', 'dep_name', { unique: false })
    store.createIndex('region_name', 'region_name', { unique: false })
  }
}

const getObjectStore = (store_name: string, mode: string) => {
  var tx = db.transaction(store_name, mode)
  return tx.objectStore(store_name)
}

export const getDptFromIndexDB = (num_dep: string, callback: (result:Departement | null)=>void): void => {
  let res: Departement | null = null
  const objectStore = getObjectStore(DB_STORE_NAME, 'readwrite')
  const request = objectStore.get(num_dep)
  request.onerror = (event) => {
    console.error('Error getting data:', (event.target as IDBRequest).error)
    callback(null)
  }
  request.onsuccess = (event) => {
    console.log('successfully got the data')
    res = (event.target as IDBRequest).result as Departement
    callback(res)
  }


}

export const storeDptInIndexDB = (dpt: Departement) => {
  const objectStore = getObjectStore(DB_STORE_NAME, 'readwrite')
  const request = objectStore.add(dpt)
  request.onsuccess = (event) => {
    console.log('stored')
  }
}
