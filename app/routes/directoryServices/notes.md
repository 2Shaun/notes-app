# LDAP
- meant to be a directory lookup protocol
- authN was bolted on later (causes heavy load on server compared to Kerberos tickets)
- PAM vs. Kerberos
**directory service** - store users, groups, computers, policies (authZ) and *passwords*
- does LDAP handle authN?

- 

# Kerberos
- symmetric key crypto (AES) rules out public key algos (RSA)
- private keys are used for **encryption** AND decryption (in public key crypto, private keys are used for decryption only)
- authentication 