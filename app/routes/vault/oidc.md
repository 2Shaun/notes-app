SAML (XML) -> OAuth 2.0 (JSON) -> OIDC
# OAuth 2.0 
- supports scopes but scope names are left to implementers
- access token format is up to implementers
# SAML
- username, first name, last name, are sent as XML
- SAML assertions will be signed by one entity and validated by another entity using a X509 certificate


# OIDC
- specific scopes are defined
- access tokens and ID tokens (JWT)
- OAuth 2.0 does not specify a format for tokens but many implementers saw the benefits of JWTs. OIDC **mandates** that `id_token`s be JWTs. Many implementers also format `access_token`s and `refresh_token`s as JWTs
**OpenID Provider (OP)** - an OAuth 2.0 server capable of providing identity to an RP
**Relying Party (RP)** - relies on the OP to handle authN requests
1. GET to `/authorization` endpoint with query parameters indicating what you expect after authN and scope (authZ)
  - `response_type` query parameter determines the flow to use: hybrid, implicit, or authZ code
  - `openid` is a required scope
2. POST to `/token` to receive a token for further requests
  - tokens contain scopes which grant authZ to claims
3. `/introspect` to verify token, `/userinfo` for ID info about user
  - generally requires an `access_token`
- all endpoints defined above are *convention* but are controlled by the OP
`/.well-known/openid-configuration` - contains metadata along with all available endpoints (required)
- `profile` scope gives access to profile claims, which include `family_name`, `given_name`, `middle_name`, etc.
- `email` and `phone` scopes also give access to a verified version of the claims
## Flows
### Implicit
- `response_type=id_token`
- typical for front end applications (user agents)
### Hybrid
### AuthZ Code
- `response_type=code`
  - can be exchanged for an `access_token` and `id_token`
  - if a malicious actor gets ahold of an `access_token`, they can masquerade as any user
- requires a `client id` and `client secret` when exchanging `code` for tokens at the `/token` endpoint
  - PKCE is an extension of this which enables the `client secret` to be dynamic
- typical for back end (or middle tier) applications
#### PKCE
- SHA256: `code_verifier` -> `code_challenge`
- after submitting your `client_id` and `code_challenge`, you still have to authN at a login screen to receive the `code`
  - note that if the `code_verifier` was sent first, the server itself could impersonate the client by running SHA256 on it
  - theoretically there are infinite possible values to obtain the `code_challenge` but are so large that it's practically impossible for the server to impersonate
- after receiving the `code`, you submit the `code` along with the `code_verifier` to receive the `access_token`
## Tokens
### `refresh_token`
- long lived
- get more `access_token`s
- can be revoked at any point
### `id_token`
- authN
- **must** be a JWT as specified by OIDC
- header contains a `kid` which is looked up at a `/keys` (`jwks_uri`) endpoint. this endpoint contains the `n` claim (pub key) which is used to validate signature
### `access_token`
- authZ
- used in bearer token header