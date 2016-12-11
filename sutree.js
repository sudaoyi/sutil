var data = [{"id":"1","pid":"","name":"node1","node":"001"},  
                    {"id":"2","pid":"1","name":"node2","node":"001001"},  
                    {"id":"5","pid":"2","name":"node5","node":"001001001"},  
                    {"id":"6","pid":"2","name":"node6","node":"001001002"},  
                    {"id":"7","pid":"2","name":"node7","node":"001001003"},  
                    {"id":"8","pid":"7","name":"node8","node":"001001003001"},  
                    {"id":"9","pid":"7","name":"node9","node":"001001003002"},  
                    {"id":"10","pid":"7","name":"node10","node":"001001003003"},  
                    {"id":"11","pid":"10","name":"node11","node":"001001003003001"},  
                    {"id":"12","pid":"10","name":"node12","node":"001001003003002"},  
                    {"id":"13","pid":"10","name":"node13","node":"001001003003003"},  
                    {"id":"16","pid":"10","name":"node16","node":"001001003003004"},  
                    {"id":"15","pid":"2","name":"node15","node":"001001004"},  
                    {"id":"3","pid":"1","name":"node3","node":"001002"},  
                    {"id":"4","pid":"1","name":"node4","node":"001003"},  
                    {"id":"14","pid":"1","name":"node14","node":"001004"}];  

                    function log(data){console.log(data)}



function createTree(data,pid){
    var node={}
    data.filter(function(v){return v['pid']===pid})
    .forEach(function(v,i,a){
        node[v['id']]=createTree(data,v['id'])
        node[v['id']]['name']=v['name']
    })

    return node
}


log(JSON.stringify(createTree(data,''),null,2))
