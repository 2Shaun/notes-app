**OLTP** - transactional processing (changes frequently)
**OLAP** - analytical processing (searched frequently)
**normalized** - category of relational databases, requires many joins (slows down analysis but speeds up transactions), lowers redundancy and increases integrity (accuracy), many tables, OLTP friendly
**denormalized** - category of document databases, hierarchal structure, complex objects, OLAP friendly

- think about **use case** and **access pattern**

# Relational
## Use Cases
- lift and shift
- CRM (customer relationship management)
- ERP (enterprise resource planning)
## Tools
- RDS
# Ledger

## Use Cases
- systems of record


## Characteristics
- immutable, each change requires a new transaction in the journal
- the current value of something can be derived from the journal
- the history of a values of a resource can be derived from the journal

## Tools
- QL DB

# Time-Series
## Use Cases
- IoT
- event tracking
## Tools
- Timestream

# Document
## Use Cases
- content management
- personalization
## Tools
- DynamoDB
# Key Value

## Tools
- DynamoDB

# In Memory

## Use Cases
- caching

## Characteristics
- sorted set

## Tools
- Redis
- ElastiCache

# Graph
- network
- recommendations
- followers also bought
## Tools
- TinkerPop
- Neptune