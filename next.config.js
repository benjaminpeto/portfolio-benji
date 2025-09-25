/** @type {import('next').NextConfig} */
const nextConfig = {
    // async headers() {
    //     // Keep the CSP on a single line in production.
    //     // This version unblocks your existing inline scripts (via 'unsafe-inline')
    //     // and allows the LocationDB loader + iframe on preview/prod.
    //     const csp = ["default-src 'self';", "script-src 'self' https://locationdb.com https://preview.locationdb.com 'unsafe-inline';", "style-src 'self' 'unsafe-inline';", "img-src 'self' data: blob: https://locationdb.com https://preview.locationdb.com;", "frame-src https://locationdb.com https://preview.locationdb.com;", "connect-src 'self';", "base-uri 'self';", "form-action 'self';", "object-src 'none';"].join(" ");
    //     return [
    //         {
    //             source: "/(.*)",
    //             headers: [
    //                 {
    //                     key: "Content-Security-Policy",
    //                     value: csp,
    //                 },
    //             ],
    //         },
    //     ];
    // },
};

module.exports = nextConfig;
