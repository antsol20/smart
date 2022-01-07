
const prod = {
    API: "https://split-z.com/api/",
}

const dev = {
    API: "https://asolo.herokuapp.com/https://split-z.com/api/",
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
