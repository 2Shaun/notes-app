- context bound and data ownership
- 

# Edge service
ELB -> Zuul (dynamic routing) -> NCCP () -> API Gateway

# Middle Tier
## Product
- Bucket testing
- Subscriber
- Recommendations
## Platform
- Routing (microservice can find each other)
- Configuration
- Crypto
## Persistance
- Cache (priority, keep it hot after database calls)
- Database

# Dependencies
- by going to another box, you introduced network latency, congestion, and hardware failure
- cascading failure

# Client Libraries
- 

# Persistence (CAP Theorem)
- when a database is down, failover, accept inconsistency between databases, and fix it after

# Stateless
**affinity** - spontaneous liking for something
- no instance affinity, customers don't stick to a specific instance
- no cache or database
- 

- databases can't generally handle heavy loads

# Polyglot & Containers
**polyglot** - using several languages

**canary** - snitch