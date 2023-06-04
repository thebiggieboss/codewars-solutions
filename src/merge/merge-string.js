function isMerge(s, part1, part2) {
    if (part1.length + part2.length !== s.length) {
        return false;
    }

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < s.length) {
        if (j < part1.length && s[i] === part1[j]) {
            j++;
        } else if (k < part2.length && s[i] === part2[k]) {
            k++;
        } else {
            return false;
        }
        i++;
    }

    return j === part1.length && k === part2.length;
}

const s = "Bananas from Bahamas";
const part1 = "Bahas";
const part2 = "Bananas from am";

console.log(isMerge(s, part1, part2)); // Output: true
