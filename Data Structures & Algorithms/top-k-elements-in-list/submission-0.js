class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for (let i=0; i<nums.length; i++) {
            map[nums[i]] === undefined ? map[nums[i]] = 1 : map[nums[i]]++;
        }

        const sortedArrayWithValues = Object.entries(map).sort((a,b) => b[1] - a[1]).slice(0,k)

        const highestFreqNums = [];
        for(let i=0; i<sortedArrayWithValues.length; i++) {
            const [key, freq] = sortedArrayWithValues[i];
            highestFreqNums.push(key)
        }
        return highestFreqNums;
    }
}
