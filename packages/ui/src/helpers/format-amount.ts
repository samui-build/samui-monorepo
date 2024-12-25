export function formatAmount(amount: number | string, decimals = 2) {
    return Intl.NumberFormat('en-US', { maximumFractionDigits: decimals }).format(parseFloat(amount.toString()));
}
