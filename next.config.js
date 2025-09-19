/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        // keep on one line in prod; this is an example policy
                        value:
                            "default-src 'self'; " +
                            "script-src 'self' https://locationdb.com https://preview.locationdb.com; " +
                            "frame-src https://locationdb.com https://preview.locationdb.com; " +
                            "img-src 'self' data: https:; " +
                            "style-src 'self' 'unsafe-inline'; " +
                            "connect-src 'self';",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
