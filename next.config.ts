import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: 'build',
	fallback: 'false'
};
 
export default withNextIntl(nextConfig);