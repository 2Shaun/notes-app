# Revokation
**dynamic secret** - dynamically created, valid for bounded period, gives moving target for attackers (no single PEM to rule them all or long lived SSL certs)
**unique credential** - without uniqueness, if you have 50 web servers, revoking a secret during a compromise will have a large blast radius

## Encrypt as a Service
- keys are abstracted away as strings: devs and apps never need to see the actual key value but instead a name which represents what it is encrypting: `SSN`, `creditCardNumber`, etc.
- high-level API exposed with functions, e.g., encrypt, decrypt, sign, verify

# Storage Backend
- has no means to decrypt data without vault

# vault CLI
- CAREFUL when using the vault CLI becuase shell commands are often logged in history

# Secrets Engines
- store, generate, encrypt secrets
- CRUD operations are forwarded to secrets engines
- the K/V engine is enabled the `/secret` path
- each path at root may match a secret engine
- engines seem to be classified based on what they're storing and where they're storing it

# Dynamic secrets
- vault can create an IAM user with the AWS API but it does not know what permissions, policies, or groups to assign the user
- credentials to generate keys are stored at `root` path
- access keys are based on a set of IAM policies written to the `roles/` path
**role** - human friendly identifier to an action
**policy** - named ACL rule
- created upon request
## Undo `vault write aws/config/root`

# Authentication
- vault will use `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` by default
- vault will also use EC2 instance profile role credentials if available

# Threat Model
- Vault abort processing a transaction if it detects tampering
- any transactions must be audited before succeeding for accountability
## not responsible for
- if a client has access to storage backend, it may be able to tell that secret material **exists** but not its value
- randomized client tokens are used for authN
# Internal Threats
- unseal keys can be encrypted by public PGP keys upon creation so no one receives them in plain text
- if an attacker is trying to obtain a secret they are not authZ to, it is considered an internal threat if they already have some login access
- policy is matched using long prefix which matches a glob pattern
# Telemetry
- `[C]` counters provide aggregate data
- `[G]` gauges provide real time measurements
- `[S]` timing durations
# Key Rotation
## Rekey
- requires 3/5 unseal keys
- invalidates existing master key and old unseal keys
- new master key created
- gives operator opportunity to change seal key count
## Rotate
- creates a new encryption key to encrypt new data
- old encryption key is kept to decrypt old data

# Auth methods
- Vault will authN any request from a client, but it will typically delegate the job to a mounted (`auth/` prefix) auth method
- auth methods are configured using the standard `read` `write` API
## LDAP
- user/pass credentials are forwarded to an existing LDAP server
- the `user/` and `group/` paths are responsible for mapping users and groups to vault policies
**DN** - distinguished name that refers to an LDAP object. a bind DN must be specified to obtain an identity to perform certain operations (most LDAP operations are not anonymous)
# TLS
- HTTPS = HTTP + TLS but TLS is completely decoupled from HTTP