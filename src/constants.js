
const prod = {
    api: "https://talant.xyz/smart-api",
}

const dev = {
    api: "https://asolo.herokuapp.com/https://talant.xyz/smart-api",
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;

