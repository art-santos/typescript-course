/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['ui', 'functions']);

module.exports = withTM({
  reactStrictMode: true,
});