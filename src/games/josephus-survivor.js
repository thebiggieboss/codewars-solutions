function josephusSurvivor(n,k){
    let arr = [];
    for(let i = 1; i <= n; i++) {
        arr.push(i)
    }
    while(arr.length > 1) {
        for (let i = 0; i < k - 1; i++) {
            arr.push(arr[i]);
        }
        arr.splice(0, k)
    }
    return Number(arr.join(""))

}

module.exports = josephusSurvivor;