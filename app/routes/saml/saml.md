# [What is SAML and How Does it Work?](https://www.varonis.com/blog/what-is-saml)

**federation** - allow users from company A to authenticate with an app hosted on company B
**SAML Assertion** - an XML document provided by the IdP (OAuth is similar to SAML but is newer and uses JSON)
    - is this XML document stored in the browser and then sent or sent directly to the SP?
**kerberos** - Microsoft authentication (verifying identity)

- IdPs (identity providers, e.g., Keycloak, B2C, ADFS) can pass authorization credentials to SPs (CRM, web apps, etc.) via SAML (Security Assertion Markup Language) 
- SAML provides the ability to do SSO. SSO is secure because you can
- an SP may request data from an IdP
- SAML metadata contains: entity ID, public encryption key (dynamic by nature), public signature decoding key, protocol endpoints (where to send SAML messages)
  - SAML metadata is naturally dynamic because private keys can be compromised, endpoints can be compromised, etc.


## Assertions
- authentication
  - time
  - method (Kerberos, 2fa, etc.)
- attribution
- authorization