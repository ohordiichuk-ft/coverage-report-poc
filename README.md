# Coverage Report POC

A simple proof of concept project demonstrating test coverage reporting with Node.js, Vitest, and GitHub Actions CI.

## Features

- Simple math utility functions (add, subtract, multiply, divide, power)
- Comprehensive test suite with Vitest
- Code coverage reporting
- GitHub Actions CI pipeline
- Support for multiple Node.js versions

## Project Structure

```
coverage-report-poc/
├── src/
│   ├── index.js              # Main utility functions
│   └── __tests__/
│       └── index.test.js     # Test suite
├── .github/
│   └── workflows/
│       └── ci.yml            # GitHub Actions CI
├── package.json              # Project configuration
├── vitest.config.js          # Vitest configuration
└── README.md                 # This file
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- Yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coverage-report-poc
```

2. Install dependencies:
```bash
yarn install
```

### Running Tests

#### Run tests in watch mode:
```bash
yarn test
```

#### Run tests once:
```bash
yarn test:run
```

#### Run tests with coverage:
```bash
yarn test:coverage
```

#### Run tests once with coverage:
```bash
yarn test:run:coverage
```

## Available Functions

The project includes the following utility functions:

- `add(a, b)` - Adds two numbers
- `subtract(a, b)` - Subtracts second number from first
- `multiply(a, b)` - Multiplies two numbers
- `divide(a, b)` - Divides first number by second (throws error for division by zero)
- `power(base, exponent)` - Calculates base raised to the power of exponent

## Test Coverage

The test suite covers:
- Positive and negative numbers
- Zero values
- Decimal numbers
- Edge cases (like division by zero)
- Error handling

## CI/CD Pipeline

The GitHub Actions workflow (`/.github/workflows/ci.yml`) automatically:

1. Runs on push to main/master branch and pull requests
2. Tests against Node.js 18.x and 20.x
3. Installs dependencies using Yarn
4. Runs tests with coverage
5. Uploads coverage reports to Codecov (optional)
6. Stores coverage artifacts for 30 days
7. **Comments on pull requests with coverage information** 📊

### Coverage Reports

Coverage reports are generated in multiple formats:
- **Text**: Console output
- **JSON**: `coverage/coverage-final.json`
- **HTML**: `coverage/index.html` (viewable in browser)
- **LCOV**: `coverage/lcov.info` (used for PR comments)

#### Pull Request Coverage Comments

When you create a pull request, the CI pipeline will automatically:
- Run tests with coverage
- Generate a coverage report
- Add a comment to the PR showing:
  - Overall coverage percentage
  - Coverage for files changed in the PR
  - Coverage trends
  - Uncovered lines

This helps reviewers understand the impact of changes on test coverage.

**Note**: We use the actively maintained `j-g00da/lcov-action` for reliable PR coverage reporting with LCOV format support.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass with coverage
6. Submit a pull request

## License

MIT License - see LICENSE file for details. 