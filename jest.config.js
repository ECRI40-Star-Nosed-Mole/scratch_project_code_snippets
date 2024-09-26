// jest.config.js

// configuration followed from https://jestjs.io/docs/webpack
module.exports = {
  // does this need a specific file path from our project?
  modulePaths: ['/shared/vendor/modules'],
  moduleFileExtensions: ['js', 'jsx'],
  testEnvironment: 'node',
  // adding this, not sure it's necessary since we're not testing static files
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '/__mocks__/fileMock.js',
    '\\.(s?css|less)$': '/__tests__/styleMock.js',

/*moduleNameMapper: {
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/test/jest/__mocks__/fileMock.js',
  '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
}*/

    
    //   '^react(.*)$': '/vendor/react-master$1',
    '^config$': '/configs/app-config.js',
  },
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
};