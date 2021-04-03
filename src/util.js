export function convertMatriz(mat){

    var newmat = []

    for(var i in mat){
        
        var row = [];
        for(var j in mat[i]){
            
            var obj = { "i" : i, "j" : j, val : mat[i][j] }
            row.push(obj)
        }
        newmat.push(row);
    }

    
    return newmat;
    

}

export function getBoardKey(i, j){
    return i + "-" + j;
}

export function getColor(num){ 
    var comp
    switch (num ){
        case 9 : comp = "badge-warning"; break;
        case 0 : comp = "badge-primary"; break;
        case 10 : comp = "badge-danger"; break;
        default : comp = "badge-primary"; break;
    }
          
    
    return "badge m-2 " + comp;
} 
