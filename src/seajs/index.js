let myLoader={
  conf:{
    root:'aynsc'
  },
  modules : {}
}

function use(ids,callback){
  if(!Array.isArray(ids)) ids = [ids]

  Promise.all(ids.map(function(id){
    return load(myLoader.conf.root+id)
  })).then((list)=>{
    callback.apply(global, list)
  }).catch((e)=>{
    throw e
  })
}

function load(id){
  return new Promise(function(resolve,reject){

  })
}