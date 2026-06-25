class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // method-1
        // for (let i =0; i<nums.length-1; i++) {
        //     for (let j=i+1; j<nums.length; j++) {
        //         if (nums[i] === nums[j]) {
        //             return true;
        //         }
        //     }
        // }
        // return false;

        // method-2

        const map = {};
        for(let i=0; i<nums.length; i++) {
            if (map[nums[i]] === null || map[nums[i]] === undefined){
                map[nums[i]] = 0;
            } else {
                return true;
            }
        }
        return false;
    }
}
