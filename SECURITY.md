# Security Policy

## Environment Variables

This application uses environment variables to store sensitive configuration. Make sure to:

1. **Never commit `.env` files to version control**
2. **Use `.env.example` as a template** for required variables
3. **Set environment variables in production** deployment

### Required Environment Variables:
- Currently no environment variables are required for this application

## Security Headers

The application implements several security headers:
- **Content Security Policy (CSP)**: Prevents XSS attacks
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing
- **X-XSS-Protection**: Browser XSS protection
- **Referrer-Policy**: Controls referrer information

## Production Security Features

1. **Console statements removed** automatically in production builds
2. **Source maps disabled** to prevent code exposure
3. **Terser minification** with debug info removal
4. **Dependency vulnerability scanning** via npm audit

## Reporting Security Issues

If you discover a security vulnerability, please send an email to security@holyspiritrevival.in. Do not open public issues for security vulnerabilities.

## Security Checklist

- [ ] No hardcoded secrets in code
- [ ] CSP headers configured
- [ ] Dependencies regularly updated
- [ ] Production builds minified and console-free