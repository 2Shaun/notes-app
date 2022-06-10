## ACID

### Atomic
- transactions can **NOT** be broken into "atoms" that can individually fail
### Consistent
- schema?
- if a transaction does not comply with "rules", it will not be successful
- **NOT** to be confused with the consistency in the CAP theorem, which states that any read must contain the most recent write or an error
### Isolated
- transactions should not depend on each other
### Durable
- if a database shuts off, data persists

## Non-transactional document model
A transactional model is necessary if you cannot predict which two documents must be changed at the same time. For example, accounts sending currency to one another must be changed in one **atomic** transaction. This presents a problem for document databases since you can not predict which accounts (documents) will send money between each other. This problem led to the collapse of Flexcoin. MongoDB implemented multi-document transactions in 2018, possibly in response to this bitcoin theft.

**network partition** - when a gateway fails and two subnets cannot communicate

availability fails when there is an error
consistency fails when you don't receive the most recent write