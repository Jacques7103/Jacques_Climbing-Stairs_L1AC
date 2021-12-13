function climbingStairs(stairs_cost) {
    for (let index = stairs_cost.length - 3; index > -1; index--) {
        stairs_cost[index] += Math.min(stairs_cost[index + 1], stairs_cost[index + 2])
    }
    var result = Math.min(stairs_cost[0], stairs_cost[1])
    return result || 0
}

console.log(climbingStairs([0, 2, 2, 1]))
console.log(climbingStairs([0, 2, 3, 2]))
console.log(climbingStairs([10, 15, 20]))
console.log(climbingStairs([0, 0, 0, 0, 0]))
console.log(climbingStairs([0, 0, 2, 5, 3]))
console.log(climbingStairs([0, 0, 5, 4, 6, 7]))
console.log(climbingStairs([0, 0, 5, 4, 6, 7, 9]))