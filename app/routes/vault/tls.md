- TLS is handled at the application layer, therefore it is up to the application to implement it. .NET 4.7 for example uses SCHANNEL which is an OS level TLS implementation.
**trust store** - aka cert store. Chrome will, for example, trust root CA certs in the Windows cert store. these can be deployed as a DER to an organization's cert store via a GPO (group policy object) public key policy. applications need a store to decide which root (self-signed) certs to trust.
- certificates are a method for authN. webservers authN with you (to prevent MITM attack) using certs. you may present certs to email clients, for example, to authN yourself, without knowledge of this
# Types of CA certs
## Domain Validated (DV)
- prove you control the domain
## Ogranization Validated (OV)
- checks that the organization applying is the same organziation which owns the domain
## Extended Validation (EV)
- need to provide documentation that your organization is who it says it is

# Cipher Suite
TLS
ECDHE -     key-exchange algo, derives session keys for encryption, send pub key across, both keep secret value
  - keys are **not** physically exchanged, instead, parameters are exchanged to generated the shared key
RSA -       authN algo, pubkey encryption, how website authNs with YOU
AES -       cipher 
128 -       keysize
GCM -       cipher mode
SHA256 -    MAC, secret -> key, 

**MAC** - hash function. hash functions can serve several purposes including: 
  1. one-way so it is deliberately difficult to derive the input value 
  2. ability to validate integrity. if data is sent with a hash, receiver can input data into hash function and check that it matches the given hash
  3. summarizing data.

1. TCP handshake (SYN, SYN ACK, ACK)
2. prior to ANY application data, TLS handshake:
a. Client Hello - which TLS version it can handle, which cipher suites it can handle, client random (ECDHE)
b. Server Hello - which TLS version it will use, which cipher suite it will use, server random (ECDHE)
c. Server Certificate (pub key (for RSA) server-key exchange (ECDHE elliptic curve parameters, big prime number)) + Signature (verified with cert pub key)
d. Client Key - another random (premaster secret, encrypted with cert pub key) (premaster secret is for ECDHE, but it is encrypted using RSA)
e. Server decrypts premaster secret with priv key
f. using ECDHE, the client and the server should obtain the same session key using the parameters and randoms above.
g. Change cipher spec message (client -> server) - finished message. start encrypting HTTP content, I'm ready. encrypted with session key using AES cipher
h. Change cipher spec message (server -> client)

# Warning: Partial Encryption
- going to another server for a resource requires a new TLS handshake, but they may not be using https

# X.509 Certificate
- PKI (public key infrastructure) standard
- binds a public key to an identity using a digital signature
  - this public key may serve two purposes, verifying the signature and encrypting communication
- a cert may be signed by a certificate authority (CA) or self-signed
  - self-signed carries more risk because it is very easy to create a self-signed certificate
  - why is it harder to obtain a CA signed cert when the acme communication can be automated? how does the CA verify who is sending the acme requests?
- end-entity certs, aka leaf certs, can not issue child certs like CA certs can

# CRL (certificate revokation list) and OCSP (online certificate status protocol)
- one can check if a certification is valid by checking a CRL via OCSP
- multiple OCSP requests can bog down a CA's server, so OCSP stapling was implemented. also, sometimes third-parties will maintain a CRL
- the CRL blacklist will contain certs that are revoked prior to their expiration date (removed after expiration)
- a CT log contains a list of certificates issued to a particular domain

# PKI
- for ADCS, the boundary is the AD forest
- to bind a pub key to an identity (via **registration** and **issuance** by a CA)
- CAs may delegate requests and identity verification to RAs
- RAs can revoke certs, reject requests (cert applications, re-key certs, renew certs)
- signatures are done by CA
- internal CAs are **servers** that are deployed
## Microsoft Enterprise CA
- leverages ADCS (active directory cert service)
- cert policy via cert templates
- auto-enrollment
- key archival
- the root CA server is usually kept offline and off domain for security reasons
  - doesn't need all features of enterprise CA
  - comes online to publish root CRL and renew subordinate CA cert
- the subordinate CA is usually online as all AD members must trust it and use many Enterprise features
- interesting that the Microsoft Enterprise CA docs mention standalone fairly often considering a CA outage could be quite catastrophic
**infrastructure CA** - issues certs to computers and apps
**user CA** - issues certs to users
- issuing CAs need to prove they're trusted by intermediate CAs, and so on to the root CA
## Certificate Template
- can private keys be exported?
- which users/computers can request certs
  - users can request certs with `certmgr.msc`
- cert enrollment process (manual or automated) and perms
## CSR (Cert Signing Request)
- themselves signed (includes digital signature)
- typical required info:
  - `DN` or distinguished name, FQDN (fully-qualified domain name)
  - `O` or organization
  - `OU` or organizational unit, e.g., IT
  - location info and email
- signature algo ID
## Automated Cert Management Protocols
### ACME
- automates CSR generation 
- CSRs are themsev
- CA sends a randomly generated nonce for the ACME client to sign, to verify key pair ownership
- issues DV certs which require no human interaction
  - validated with DNS and/or HTTPs challenges
- uses HTTPS for transferring JSON web signatures (JWS)
- client needs to authZ to make   

### CMP
### SCEP
- used by ADCS