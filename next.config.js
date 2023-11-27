/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  babel: {
    styledComponents: {
      // Enable or disable the displayName generation for styled components.
      // Set to `true` to enable or provide an object for more configuration options.
      displayName: true,

      // Enable or disable styled components server-side rendering (SSR).
      // Set to `true` to enable.
      ssr: true,

      // Enable or disable the generation of file names for styled components.
      // Set to `true` to enable.
      fileName: true,

      // Enable or disable the automatic injection of the `css` prop in styled components.
      // Set to `true` to enable.
      cssProp: true,

      // Enable or disable the namespace for styled components.
      // Set to `true` to enable.
      namespace: true,

      // Not supported yet.
      // Minify the output of the styled components.
      minify: true,

      // Not supported yet.
      // Transpile template literals in styled components.
      transpileTemplateLiterals: true,

      // Not supported yet.
      // Remove unnecessary calls to `React.memo` for pure styled components.
      pure: true,
    },
  },
};

module.exports = nextConfig;
