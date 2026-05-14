
import type {NextConfig} from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserOrOrgPagesRepo = repositoryName?.endsWith('.github.io');
const basePath =
  isGithubActions && repositoryName && !isUserOrOrgPagesRepo
    ? `/${repositoryName}`
    : '';

const nextConfig: NextConfig = {
  output: 'export',
  // trailingSlash ensures that each route gets its own directory with an index.html file,
  // which is the most reliable way to handle routing on static hosts like GitHub Pages.
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
