//1232

var checkStraightLine = function(coordinates) {
    let [c1, c2] = coordinates
    const targetScope = (c2[0] - c1[0]) === 0 ? "NA" : (c2[1] - c1[1]) / (c2[0] - c1[0])
    for(let i=1; i < coordinates.length-1; i++){
        let c1 = coordinates[i]
        let c2 = coordinates[i+1]

        const slope = (c2[0] - c1[0]) === 0 ? "NA" :  (c2[1] - c1[1]) / (c2[0] - c1[0])
        if(targetScope !== slope){
            return false
        }
    }
    return true
};