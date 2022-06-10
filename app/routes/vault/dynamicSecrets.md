# Secrets Engine Configuration Path
- `aws/config/root`
- Vault will communicate with the official AWS SDK with these credentials
- these credentials need the ability to dynamically create IAM users
# AWS credentials


# Active Directory
- passwords are only rotated if they are requested **and** over TTL from the secret engine