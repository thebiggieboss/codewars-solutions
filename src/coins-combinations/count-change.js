function countChange(money, coins) {
    const ways = new Array(money + 1).fill(0)
    ways[0] = 1;
    for (let coin of coins) {
        for (let i = coin; i <= money; i++) {
            ways[i] += ways[i - coin];
        }
    }
    return ways[money];

}
module.exports = countChange;