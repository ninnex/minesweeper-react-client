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
    return "badge m-2 " +(num === 0 ? "badge-primary": "badge-warning" )
} 
