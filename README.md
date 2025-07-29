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
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coverage-report-poc
```

2. Install dependencies:
```bash
npm install
```

### Running Tests

#### Run tests in watch mode:
```bash
npm test
```

#### Run tests once:
```bash
npm run test:run
```

#### Run tests with coverage:
```bash
npm run test:coverage
```

#### Run tests once with coverage:
```bash
npm run test:run:coverage
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
3. Installs dependencies
4. Runs tests with coverage
5. Uploads coverage reports to Codecov (optional)
6. Stores coverage artifacts for 30 days

### Coverage Reports

Coverage reports are generated in multiple formats:
- **Text**: Console output
- **JSON**: `coverage/coverage-final.json`
- **HTML**: `coverage/index.html` (viewable in browser)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass with coverage
6. Submit a pull request

## License

MIT License - see LICENSE file for details. 