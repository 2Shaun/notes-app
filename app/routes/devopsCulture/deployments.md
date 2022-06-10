# Canary
- relies on a sophisticated load balancer
- relies on good monitoring tools which have version information
- expand and contract database deployment:
  1. Add new fields to schema without removing any, update new fields with correct data (write but not read)
  2. Have software read from new fields but write to both (note that since this is canary, some software will still be reading both fields)
  3. Drop old schema
# Blue-Green
# Recreate Strategy
# Shadow Deployment
# A/B Testing Deployment