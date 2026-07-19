class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string [][] {
        const mapObj: Map<string, string[]> = new Map();

        for (let s of strs) {
           const k = s.split('').sort().join('')
            if (!mapObj.has(k)) {
                mapObj.set(k, [])
            }
            mapObj.get(k).push(s)
        }
        return Array.from(mapObj.values())
    }
}
