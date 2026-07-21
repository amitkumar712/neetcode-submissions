class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left: number = 0;
        let right: number = heights.length -1;

        let max_water: number = 0
        while(left < right) {
            const contained_water: number = (right-left) * Math.min(heights[left], heights[right])
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
            if (max_water < contained_water) {
                max_water= contained_water;
            }
        }
        return max_water;
    }
}