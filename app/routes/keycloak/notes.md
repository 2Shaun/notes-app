**federate** - consider active directory users a member of keycloak's database
**realm** - isolated groups of apps and users
**client** - a relying party for OpenID connect (OIDC) or service provider (SP) for SAML. can request keycloak for auth, typically an application/service. any entity that wants ID information via an id token or access a service secured by keycloak via an access token. each client gets a built in service account
**users** - can have attributes such as first name, last name, birthday, etc. attached to them. they can be *assigned* groups and roles. check how this maps to an `id_token`
**roles** - best practice is to assign perms and access via a role. check how this maps to an `access_token`
**composite roles** - when a user is assigned a role, they inherit the access of all composed roles 
**credentials** - a means to identify (authN) a user. passwords, certs, fingerprints
**groups** - attributes and roles can be mapped to a group so that all users in the group receive these
**realm** - auth (N and Z) space (set of users, credentials, groups, roles)
# Key Concepts
- applications never see user's credentials, but it **will** see identity attributes
- application only sees an `id_token` or SAML assertion that it can verify is signed by keycloak
# Tokens (OIDC)
`id_token` - mostly for displaying front end information
`access_token` - authZ, accessing back end APIs
**consent** - a user must give permission to a **client** 
**client scopes** - useful for standardizing client settings. which claims/roles are output by the `scope` parameter (OIDC concept)
**protocol mappers** - client level configuration for what is displayed on OIDC tokens and SAML assertions
**role scope mapping** - 
**client role** - a member of the client level role namespace
**assertion** - typically a XML blob for SAML authN providing ID metadata, but can be any information about a user
**direct grant** - a client method of obtaining an access token via a REST call
**session** - when the user logged in and what clients have participated in SSO
**user federation provider** - although keycloak can store users, if there is an existing user store such as AD, you may configure keycloak to point to AD to authn. what does "pull in identity information" mean?
**IdP federation** - delegate authN to any OIDC or SAML provider
**required action** - actions required for authN, such as resetting your password

# In-Memory DB
- the inmemory database is to reduce calls to the SQL db, but it can become stale if cached data is modified by a DBA

**OTP** - one-time password
**realm keys** - used for authenticating a realm, keys can be rotated as old keys are placed in "passive" so that signatures may still be verified by users after rotated, cookies and tokens are signed with these keys. passive keys 

# Login Flow
## Default Master Realm Login Flow
1. request to `/auth/admin/master/console`
2. request to `/auth/realms/master/protocol/openid-connect/auth`
- contains query parameters with the following:
  - `client_id=security-admin-console`
  - `redirect_uri`
  - `response_mode=fragment`
  - `response_type=code`
  - `scope=openid`
  - `nonce`
  - `code_challenge`
  - `code_challenge_method`
- response contains the `Set-Cookie` header with the following
  - `AUTH_SESSION_ID`
  - `KC_RESTART`
    - more `code_challenge` stuff, probably saying it successfully completed the code challenge
4. request to `/auth/realms/master/login-actions/authenticate`
- contains query parameters with the following:
  - `session_code`
  - `execution`
  - `client_id`
  - `tab_id`
- response contains the `Set-Cookie` header with the following
  - `KEYCLOAK_LOCALE`
    - empty
  - `KC_RESTART`
    - empty
  - `KEYCLOAK_IDENTITY`
3. request to `/token` endpoint
- request contains a `Cookie` header with the following:
  - `AUTH_SESSION_ID`
  - `KEYCLOAK_IDENTITY`
  - `KEYCLOAK_SESSION`
.
.
.
7. request to `auth/admin/master/console/whoami` endpoint
- request contains a `Authorization` header with a bearer token
- response body contains a JSON with the following:
  - `userId`
  - `realm`
  - `displayName`
  - `locale`
  - `createRealm`
  - `realm_access`
    - dictionary with an array of roles per realm
