class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const threeSums: Set<string> = new Set();
        for (let i=0; i<nums.length-2; i++) {
            const mySet: Set<number> = new Set()
            for (let j=i+1; j<nums.length; j++) {
                const third: number = nums[i] + nums[j] === 0 ? nums[i] + nums[j] : -(nums[i] + nums[j]);
                if (mySet.has(third)) {
                    const threeSumArr: number[] = [nums[i], nums[j], third].sort((a,b) => a-b)
                    const threeSumStr = threeSumArr.join(',')
                    threeSums.add(threeSumStr)
                } else {
                    mySet.add(nums[j])
                }
            }
        }

        console.log('threeSum>>>>>>>>>', threeSums)

        const result = Array.from(threeSums).map(str => str.split(',').map(Number))
        console.log('result>>>>.', result)

        return result;

        //return [...threeSums]
    }

}
