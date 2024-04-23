module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias : {
            "@themes": "./src/themes",
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@assets": "./src/assets"
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
