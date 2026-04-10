# Testing Guide - The Velvet Pulse

Comprehensive guide to testing The Velvet Pulse application.

## 📋 Table of Contents

- [Testing Philosophy](#testing-philosophy)
- [Test Types](#test-types)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Test Coverage](#test-coverage)
- [Best Practices](#best-practices)

## 🎯 Testing Philosophy

1. **Test Behavior**: What code does, not how
2. **Arrange-Act-Assert**: Clear test structure
3. **Test Isolation**: Independent tests
4. **Meaningful Names**: Descriptive test names
5. **Fast Execution**: Quick feedback loop
6. **Real Scenarios**: Realistic test cases

## 🔬 Test Types

### 1. Unit Tests

Test individual classes in isolation.

**Location**: `tests/Unit/`

**Example**:
```php
<?php
namespace Tests\Unit;

use App\Services\ExampleService;
use Tests\TestCase;

class ExampleServiceTest extends TestCase
{
    public function test_service_processes_data(): void
    {
        $service = new ExampleService();
        $result = $service->process(['data']);
        
        $this->assertNotEmpty($result);
    }
}
```

### 2. Feature Tests

Test complete features and endpoints.

**Location**: `tests/Feature/`

**Example**:
```php
<?php
namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactFormTest extends TestCase
{
    use RefreshDatabase;

    public function test_contact_form_submission(): void
    {
        $response = $this->post('/api/contact', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'subject' => 'Test',
            'message' => 'This is a test message',
        ]);

        $response->assertStatus(200);
        $response->assertJsonPath('success', true);
    }

    public function test_contact_form_validates_input(): void
    {
        $response = $this->post('/api/contact', [
            'name' => 'John Doe',
            'email' => 'invalid-email',
            'subject' => 'Test',
            'message' => 'Too short',
        ]);

        $response->assertStatus(400);
        $response->assertJsonPath('success', false);
    }
}
```

### 3. API Tests

Test message and contact endpoints.

**Example**:
```php
<?php
namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MessageApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_messages_endpoint_requires_auth(): void
    {
        $response = $this->get('/api/messages');
        $response->assertStatus(401);
    }

    public function test_messages_endpoint_with_auth(): void
    {
        $response = $this->withHeader('Authorization', 'Bearer test-token')
            ->get('/api/messages');
        
        $response->assertStatus(200);
        $response->assertJsonIsArray();
    }
}
```

## 🏃 Running Tests

### PHPUnit (Backend)

```bash
# Run all tests
./vendor/bin/phpunit

# Run by suite
./vendor/bin/phpunit tests/Unit
./vendor/bin/phpunit tests/Feature

# Run specific file
./vendor/bin/phpunit tests/Feature/ContactFormTest.php

# Run specific test
./vendor/bin/phpunit --filter test_contact_form_submission

# With coverage
./vendor/bin/phpunit --coverage-html coverage

# Stop on failure
./vendor/bin/phpunit --stop-on-failure
```

### Jest (Frontend)

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Specific file
npm test -- ContactForm

# Coverage
npm test -- --coverage
```

## ✍️ Writing Tests

### Naming Convention

```php
// Good
test_contact_form_validates_message_length()
test_messages_api_requires_authentication()

// Bad
test_contact()
test_messages()
```

### AAA Pattern

```php
public function test_contact_submission(): void
{
    // Arrange
    $contactData = [
        'name' => 'Jane Smith',
        'email' => 'jane@example.com',
        'subject' => 'Inquiry',
        'message' => 'I would like to know more.',
    ];
    
    // Act
    $response = $this->post('/api/contact', $contactData);
    
    // Assert
    $response->assertStatus(200);
    $response->assertJsonPath('success', true);
}
```

## 📊 Test Coverage

```bash
# Generate coverage report
./vendor/bin/phpunit --coverage-html coverage

# Text output
./vendor/bin/phpunit --coverage-text
```

Target coverage:
- Controllers: 85%+
- Services: 90%+
- Models: 75%+

## 🎯 Best Practices

1. **Test API contracts** - verify request/response format
2. **Test validation** - cover all validation rules
3. **Test error cases** - not just happy path
4. **Test authentication** - verify protected endpoints
5. **Use factories** - consistent test data
6. **Mock external services** - don't send real emails
7. **Test edge cases** - boundary conditions
8. **Fast feedback** - keep tests quick

## 🔍 Debugging

```bash
# Verbose output
./vendor/bin/phpunit -v

# Stop on first failure
./vendor/bin/phpunit --stop-on-failure

# Display incomplete tests
./vendor/bin/phpunit --display-incomplete
```

## 📚 Resources

- [PHPUnit Documentation](https://phpunit.de/)
- [Jest Documentation](https://jestjs.io/)
- [Laravel Testing](https://laravel.com/docs/testing)
