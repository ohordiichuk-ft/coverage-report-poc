import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json', 'html', 'lcov'],
      reportOnFailure: true,
      exclude: [
        'node_modules/',
        'coverage/',
        'dist/',
        '**/*.config.js',
        '**/*.config.mjs'
      ]
    }
  }
}) 