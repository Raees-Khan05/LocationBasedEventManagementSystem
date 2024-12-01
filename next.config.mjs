/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {hostname : "images.unsplash.com"},
            {hostname : "res.cloudinary.com"},
            {hostname : "lh3.googleusercontent.com"},
            {
                protocol: "https",
                hostname: "www.huaweicentral.com", // Added the required domain
              },
        ]
    }
};

export default nextConfig;
