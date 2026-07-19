class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        nums = nums.sort((a,b) => a-b)
        let count = 1;
        let max = 0;
        for (let i=0; i< nums.length; i++) {
            if (nums[i] + 1 === nums[i+1]) {
                count++;
            } else if (nums[i] === nums[i+1]) {
                continue;
            } else if (nums[i] + 1 !== nums[i+1]) {
                if (max < count) {
                    max= count;
                }
                count=1;
            }
        }
        console.log('max>>>>>>>>>>', max)
        return max;
    }
}
