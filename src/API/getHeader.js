export const getHeader = (method = 'GET') => {
    return {
        method: method,
        accept: 'application/json',
        headers: { 'Content-Type': 'application/json' },
    }
}