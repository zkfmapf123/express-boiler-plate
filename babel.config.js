module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: '12' }, loose: true }],
    ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
  ],
  plugins: [
    '@babel/proposal-object-rest-spread',
    [
      'module-resolver',
      {
        alias: {
          '^#(.+)': './src/\\1',
        },
        extensions: ['.ts', '.js', '.json'],
      },
    ],
    [
      '@babel/proposal-decorators',
      {
        legacy: true,
      },
    ],
    'babel-plugin-parameter-decorator',
    ['@babel/proposal-class-properties', { loose: true }],
    ['inline-json-import', {}],
  ],
}
