import nextMDX from '@next/mdx';
/** @type {import('next').NextConfig} */

const withMDX = nextMDX({
    extension: /\.mdx?$/,
});

const nextConfig = {
    compiler: {
        styledComponents: true
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);

