class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = {};
        for (let i=0; i<s.length; i++) {
            map[s[i]] === undefined ? map[s[i]] = 1 : map[s[i]]++;
        }
        for (let j=0; j<t.length; j++) {
            if (map[t[j]] === undefined) {
                return false;
            } else {
                map[t[j]]--;
            }
        }
        for (let key in map) {
            if (map[key] !== 0) {
                return false;
            }
        }
        return true;
    }
}
