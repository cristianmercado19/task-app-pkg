module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ["jasmine", "karma-typescript"],
    plugins: [
      require('karma-typescript'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-mocha-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-sourcemap-loader')
    ],
    files: [
      { pattern: "lib/**/*.ts" },
      { pattern: "tests/**/*.ts" }
    ],
    preprocessors: {
      "lib/**/*.ts": ["karma-typescript"],
      "tests/**/*.ts": ["karma-typescript", 'sourcemap']
    },

    coverageIstanbulReporter: {
      reports: ['html', 'cobertura', 'json'],
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: false,
      // thresholds: {
      //   statements: 50,
      //   lines: 50,
      //   branches: 50,
      //   functions: 50
      // },
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        },
        cobertura: {
          file: './cobertura/cobertura.txt'
        },
        json: {
          file: './json/coverage-final.json'
        }

      },
    },

    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
    },
    exclude: [
    ],
    reporters: ['mocha', 'kjhtml'],
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    mime: {
      'text/x-typescript': ['ts','tsx']
    }
  })
}