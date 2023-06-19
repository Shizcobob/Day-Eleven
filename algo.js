/* 
    Balance Index

    Here, a balance point is ON an index, not between indices.

    Return the balance index where sums are equal on either side
    (exclude its own value).
    
    Return -1 if none exist.
*/
rightSide[i] = array[array.length - 1 - i];


const nums1 = [-2, 5, 7, 0, 1, 2];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;


const nums1 = [-2, 5, 7, 0, 1, 2];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [1,2,5,5,7,2,1,3,6,-134,24,75,24,57,65,75,10,55,35,46,56,4,1,1,0,3,4,5,8]
const expected3 = 16;

function balanceIndex(nums) {
    // check if nums length is valid
    if (nums.length < 3){
        // return -1 if length is too short
        return -1
    }
    // set empty check variables.
    let leftSum = 0, rightSum = 0;
    // iterate through whole array
    for (let i = 1; i < nums.length-1; i++){
        // iterate through left side of array
        for (let j = 0; j < i; j++){
            leftSum += nums[j];
        }
        // iterate through right side of array
        for (let k = i+1; k < nums.length; k++){
            rightSum += nums[k];
        }
        // check if left/right sides match
        if (leftSum == rightSum){
            return i
        }
        // reset counters
        leftSum = 0;
        rightSum = 0;
    }
    return -1
}
console.log(balanceIndex(nums1)) // expected 2
console.log(balanceIndex(nums2)) // expected -1
console.log(balanceIndex(nums3)) // expected 16

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    // left = 0;


    // right= 0;
    // for(let i = 0; i= nums.length/2; i ++){
    //     // left.push([i]);
    //     left += numbs[i];
    //     return left
    // } 

    // for(let j = numbs.length-1; j = nums.length/2; j--){
    //     // right.push([j])
    //     right += numbs[j];
    //     return right
    // } 
    // sum = right + left;

    for(let i = 0; i = numbs.length/2; i++){
        let countLeft = 0;
        countLeft += numbs[i];
        for(left j=0; j = numbs.length/2; j--){
            let countRight = 0;
            countRight += numbs[j]

            if countLeft != countRight{


            }

    }
    }

    function balancedSum(array) {
        if (array.length < 3) {
            
            return -1;
            
        }
        
        const midpoint = array[Math.floor((array.length - 1) / 2)];
        
        const leftSide = [];
        let leftSideSum = 0;
        
        const rightSide = [];
        let rightSideSum = 0;
        
        for (let i = 0; i < array.length; ++ i) {
            
            leftSide[i] = array[i];
            
            leftSideSum = leftSide.reduce((a, b) => a + b, 0);
            
            rightSide[i] = array[array.length - 1 - i];
            
            rightSideSum = rightSide.reduce((a, b) => a + b, 0);
            
            if (leftSideSum === rightSideSum) {
                
                return Math.floor((array.length - 1) / 2);
                
            }
            
        }
        
        return -1;
        
    }
    
    const nums1 = [-2, 5, 7, 0, 1, 2];
    console.log(`\n\nOutput for nums1:\n${balancedSum(nums1)}\n\n`);
    
    const nums2 = [9, 9];
    console.log(`\n\nOutput for nums2:\n${balancedSum(nums2)}\n\n`);



    // Construct a while or a for loop, travelling from the left side.
    // Another one for traveling from the right side.
    // These loops do NOT need to be nested, they can be seperate. 

    // One way we can find the middle of an array is dividing the length by 2. (This works primarily for when we have odd numbers, but is not needed!)

    // Sum of the right and sum of the left should have declared values.
    // Use the sums to evaluate that the left and right side are equal.

    // Return the index of the point between the left and right.


}

/*****************************************************************************/