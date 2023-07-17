```javascript
// Importing the crypto module for data encryption
const crypto = require('crypto');

// Function to sanitize user input
function sanitizeInput(input) {
    let sanitizedInput = input.replace(/<[^>]*>/g, '');
    return sanitizedInput;
}

// Function to encrypt data
function encryptData(data, secretKey) {
    const cipher = crypto.createCipher('aes-256-cbc', secretKey);
    let encryptedData = cipher.update(data, 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
}

// Function to set HTTP headers
function setHTTPHeaders(res) {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
}

module.exports = {
    sanitizeInput,
    encryptData,
    setHTTPHeaders
};
```