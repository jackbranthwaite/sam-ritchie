/* eslint-disable @typescript-eslint/no-require-imports */
require('@next/env').loadEnvConfig('.');

module.exports = {
  schema: {
    'https://graphql.datocms.com': {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
        'X-Environment': process.env.NEXT_PUBLIC_DATO_ENVIRONMENT
          ? process.env.NEXT_PUBLIC_DATO_ENVIRONMENT
          : 'main',
      },
    },
  },
  documents: 'src/graphql/**/*.graphql',
  extensions: {
    codegen: {
      overwrite: true,
      generates: {
        'src/graphql/generated/': {
          preset: 'client',
          plugins: [],
          presetConfig: {
            fragmentMasking: false, // HERE
          },
        },
      },
    },
  },
};
