# Contributing to The Velvet Pulse

Thank you for your interest in contributing to The Velvet Pulse!

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing Requirements](#testing-requirements)

## 🤝 Code of Conduct

We maintain a welcoming community for all contributors.

### Expected Behavior
- Use inclusive language
- Respect diverse viewpoints
- Accept constructive feedback
- Focus on community good
- Show respect and empathy

### Unacceptable Behavior
- Harassment
- Personal attacks
- Unwanted disclosure
- Inappropriate conduct

## 🚀 Getting Started

### Prerequisites

- PHP 8.2+ with Composer
- Node.js 18+ with npm
- MySQL 8.0+
- Git

### Development Setup

```bash
# Fork and clone
git clone https://github.com/YOUR-USERNAME/thevelvetpulse.git
cd thevelvetpulse

# Add upstream
git remote add upstream https://github.com/JoshuaAckerly/thevelvetpulse.git

# Install
composer install
npm install

# Environment
cp .env.example .env
php artisan key:generate

# Database
php artisan migrate

# Start
composer dev
```

## 🔄 Development Workflow

### 1. Create Branch

```bash
# Feature
git checkout -b feat/add-new-messaging

# Bug fix
git checkout -b fix/contact-validation

# Docs
git checkout -b docs/update-api-docs

# Tests
git checkout -b test/add-contact-tests
```

### 2. Make Changes

```bash
# Edit code
# Test locally
./vendor/bin/phpunit
npm test

# Commit
git commit -m "feat: add new feature"

# Keep updated
git fetch upstream
git rebase upstream/main
```

### 3. Quality Checks

```bash
# Tests
./vendor/bin/phpunit
npm test

# Analysis
./vendor/bin/phpstan analyse
vendor/bin/pint
npm run lint

# Types
npm run types
```

## 📝 Coding Standards

### PHP

- **PSR-12** code style
- Type all parameters and returns
- Use meaningful names
- Single responsibility

**Example**:
```php
<?php
namespace App\Services;

class ContactService
{
    public function handleSubmission(array $data): bool {
        $this->validate($data);
        $this->dispatch($data);
        return true;
    }
}
```

### TypeScript/JavaScript

- Type variables where possible
- Follow ESLint rules
- Meaningful component names
- Single-purpose components

**Example**:
```typescript
interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export function ContactForm(): JSX.Element {
    const handleSubmit = (form: ContactForm): void => {
        // Handle
    };
    
    return <form onSubmit={handleSubmit}>{/* Fields */}</form>;
}
```

## 📋 Commit Guidelines

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:
- `feat`: Feature
- `fix`: Bug fix
- `docs`: Documentation
- `test`: Tests
- `refactor`: Refactoring
- `perf`: Performance

**Example**:
```
feat(contact): add contact form email validation

Implements email validation for contact submissions.
- Client-side validation
- Server-side verification
- Error messages

Closes #123
```

## 🔄 Pull Request Process

### Before Submitting

- [ ] Tests pass
- [ ] QA checks pass
- [ ] Documentation updated
- [ ] Branch updated
- [ ] Clear commit history

### PR Title

```
feat: add messaging feature
fix: resolve contact form bug
docs: update guides
```

### PR Description

```markdown
## Description
What are the changes?

## Motivation
Why needed?

## Types
- [ ] Feature
- [ ] Bug fix
- [ ] Docs
- [ ] Breaking change

## Testing
How tested?

## Checklist
- [ ] Tests pass
- [ ] Checks pass
- [ ] Docs updated
```

## ✅ Testing

### Backend

```bash
./vendor/bin/phpunit
./vendor/bin/phpunit --coverage-html coverage
```

Include:
- API tests
- Contact form tests
- Message tests
- Error cases

### Frontend

```bash
npm test
npm test -- --coverage
```

Include:
- Component tests
- Form tests
- Integration tests

## 🎯 Contribution Ideas

- **Features**: New messaging features, contact improvements
- **Bugs**: Fix reported issues
- **Tests**: Increase coverage
- **Docs**: Improve guides
- **Performance**: Optimize code

## 📞 Need Help?

- Open an issue
- Check documentation
- Comment on PRs
- Contact maintainers

Thank you for contributing! 💜
