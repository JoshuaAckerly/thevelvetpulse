# The Velvet Pulse API Documentation

## Overview

The Velvet Pulse API provides endpoints for message management and contact form submissions. All endpoints return JSON responses.

**Base URL**: `https://thevelvetpulse.local` (or your configured domain)

## Authentication

Message-related endpoints require **Bearer token authentication** in the `Authorization` header:

```
Authorization: Bearer YOUR_AUTH_TOKEN
```

Public endpoints (contact) do not require authentication.

## API Endpoints

### 1. Get Messages

Retrieves all messages for the authenticated user.

**Endpoint**: `GET /api/messages`

**Authentication**: Required (Bearer token)

**Response Format**:
```json
[
  {
    "id": "string",
    "subject": "string",
    "body": "string",
    "read": false,
    "created_at": "ISO 8601 timestamp",
    "updated_at": "ISO 8601 timestamp"
  }
]
```

**Success Response** (200):
```json
[
  {
    "id": "msg_001",
    "subject": "Welcome to The Velvet Pulse",
    "body": "Welcome to our community!",
    "read": false,
    "created_at": "2026-04-09T10:30:00Z",
    "updated_at": "2026-04-09T10:30:00Z"
  }
]
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing authentication token
- `500 Internal Server Error`: Server error retrieving messages

---

### 2. Mark All Messages as Read

Marks all unread messages for the authenticated user as read.

**Endpoint**: `PATCH /api/messages/read-all`

**Authentication**: Required (Bearer token)

**Request Body**: (empty)

**Success Response** (200):
```json
{
  "success": true
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing authentication token
- `500 Internal Server Error`: Server error updating messages

---

### 3. Mark Single Message as Read

Marks a specific message as read.

**Endpoint**: `PATCH /api/messages/{id}/read`

**Authentication**: Required (Bearer token)

**URL Parameters**:
- `id` (required): Message ID

**Request Body**: (empty)

**Success Response** (200):
```json
{
  "success": true
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing authentication token
- `404 Not Found`: Message not found or not owned by user
- `500 Internal Server Error`: Server error updating message

---

### 4. Contact Form Submission

Submits a contact form message.

**Endpoint**: `POST /api/contact`

**Authentication**: Not required

**Content-Type**: `application/json` or `application/x-www-form-urlencoded`

**Request Body**:
```json
{
  "name": "string (required, max: 255)",
  "email": "string (required, valid email, max: 255)",
  "subject": "string (required, max: 255)",
  "message": "string (required, 10-5000 characters)"
}
```

**Example Request**:
```json
{
  "name": "Alex Johnson",
  "email": "alex@example.com",
  "subject": "Inquiry about services",
  "message": "I'm interested in learning more about your offerings and would like to discuss potential collaboration opportunities."
}
```

**Success Response** (200):
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We'll get back to you soon!"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid input format
  ```json
  {
    "success": false,
    "message": "Validation failed",
    "errors": {
      "email": ["Invalid email format"],
      "message": ["Message must be between 10 and 5000 characters"]
    }
  }
  ```
- `500 Internal Server Error`: Server error (message is logged even if email fails to send)

**Validation Rules**:
- Name: required, max 255 characters
- Email: required, valid email format, max 255 characters
- Subject: required, max 255 characters
- Message: required, minimum 10 characters, maximum 5000 characters

**Email Notification**:
- Contact messages are sent to: `contact@thevelvetpulse.com` (when mail is configured)
- If email sending fails, the submission is still logged and returned as successful

---

## Error Handling

All error responses follow a consistent format:

```json
{
  "success": false,
  "message": "Human-readable error message",
  "errors": {
    "field_name": ["Error description"]
  }
}
```

## Common HTTP Status Codes

- `200 OK`: Request successful
- `400 Bad Request`: Invalid request format or validation failed
- `401 Unauthorized`: Authentication required or invalid token
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

---

## Integration Examples

### JavaScript Fetch

```javascript
// Get messages
const response = await fetch('/api/messages', {
  headers: {
    'Authorization': `Bearer ${authToken}`,
    'Accept': 'application/json'
  }
});

const messages = await response.json();

// Submit contact form
const contactResponse = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Question about your work',
    message: 'I would like to know more about your services and how we can collaborate.'
  })
});

const result = await contactResponse.json();
```

### PHP cURL

```php
// Submit contact form
$ch = curl_init('https://thevelvetpulse.local/api/contact');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
  'name' => 'Jane Smith',
  'email' => 'jane@example.com',
  'subject' => 'Collaboration inquiry',
  'message' => 'I am interested in discussing potential opportunities with your team.'
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
$result = json_decode($response, true);
```

---

## Best Practices

1. **Always include the Authorization header** for authenticated endpoints
2. **Validate message length** on the client side (10-5000 characters)
3. **Implement client-side validation** before submitting forms
4. **Handle errors gracefully** and display user-friendly messages
5. **Store auth tokens securely** (preferably in secure HTTP-only cookies)
6. **Use HTTPS** in production for all API requests
7. **Consider implementing CSRF tokens** if using form-based submissions
