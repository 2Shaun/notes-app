**standalone** - single instance
- vault begins sealed and can be unsealed with an encryption key
- the master key can derive the encryption key, but 3/5 shared keys must be obtained to derive the master key
- unsealing the vault opens the core up to authenticated API requests
- the core will enforce ACLs (policies) and perform auditing and forward requests to an auth method
- policies (named ACLs) are stored at `sys/`
- the auth method will return a client token (which is managed by the token store) and that is used to make future requests
- the lease ID defines when the expiration manager can revoke a secret
