class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        const zerothPosition = [];
        for (let i=0; i < nums.length; i++) {
            if (nums[i] === 0) {
                zerothPosition.push(i)
            } else {
                product *=nums[i]
            }
        }

        let output = [];
        for (let i=0; i< nums.length; i++) {
            if (zerothPosition.length > 1) {
                output.push(0)
            } else if (zerothPosition.length === 1) {
                if (zerothPosition[0] === i) {
                    output.push(product)
                } else {
                    output.push(0)
                }
            } else {
                output.push(product/nums[i])
            }
        }
        return output;
    }
}
