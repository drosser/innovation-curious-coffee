const config = {
    app: {
        port: (process.env.APP_PORT as string)
    },
    db: {
        url: {
            server: (process.env.DB_URL_SERVER as string),
            port: (process.env.DB_URL_PORT as string)
        },
        name: (process.env.DB_NAME as string),
        collections: (process.env.DB_COLLECTIONS as string)
    },
    admin: {
        password: (process.env.ADMIN_PASSWORD as string),
    },
    verify: {
        signature: (process.env.VERIFY_SIGNATURE as string),
        url: (process.env.VERIFY_URL as string)
    },
    env: (process.env.NODE_ENV as string)
};

export default config;