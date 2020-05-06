
export const trait = (word: string): string => {
    if (word.length > 9) {
        const chx = word.slice(0, 9) + "...";
        return chx
    } else {
        return word
    }
}
