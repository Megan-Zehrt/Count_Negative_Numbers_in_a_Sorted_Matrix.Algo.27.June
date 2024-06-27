// 1351. Count Negative Numbers in a Sorted Matrix



// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.









/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

    let count = 0
    
    for(let g of grid){
        for(let i = 0; i < g.length; i++){
            if(g[i] < 0){
                count ++
            }
        }
    }

    return count
};







// Binary Search




/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

    let count = 0

    function NegativeIndex(row){
        let low = 0
        let high = row.length-1

        while(low <= high){
            let mid = Math.floor((low + high) / 2)

            if(row[mid] < 0){
                high = mid - 1
            }
            else{
                low = mid + 1
            }
        }

        return low
    }

    for(let i = 0; i < grid.length; i++){
        let NegIndex = NegativeIndex(grid[i])

        count += grid[i].length - NegIndex
    }
    
    return count
};