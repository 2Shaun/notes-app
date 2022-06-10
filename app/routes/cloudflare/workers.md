## Isolates

- no cold starts since isolates are on standby
- isolates will close if they detect malicious scripts attempting to leave
- one runtime with multiple isolates
- not containerized
  - if each isolate was a container, it would have its own runtime

# Serverless vs. Containerized Microservices

- generally containers need to stay running
- containers may take a few seconds to spin up, whereas serverless functions take milliseconds
- you may have to deploy multiple containers to meet demand, whereas functions scale to meet demand (bucket of water vs. faucet)
