export default function removeSymbols(value: string): number {
    return Number(value.replace("$", ""))
}
