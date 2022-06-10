# Prologue

- you should not design for humans to be perfect, you should design for humans to make errors
- `SRE implements DevOps`

# Chapter 1

- SREs and software engineers have very similar skill sets - where lacking in software engineering is made up in unix fundamentals and networking skills
- when not automating operational work, working on projects that an SWE would be working on
- "operational" work was not considered engineering (pointing and clicking)
  - engineering is designing a self-healing system instead of requiring a sys admin to point and click
- monitoring
- logging
- limit of number of on-call reactions per engineer
- when calculating an availability SLA, call it $A$, then $1-A$ is your error budget. this time can be used for deployments. 100% is almost never a good target as it limits opportunity for change
  **machine** - VM, "hardware"
  **server** - software which accepts requests
  **rack** - multiple machines with a switch at the "top"
  **row** - multiple racks
  **cluster** - multiple rows
  **toil** - manual "operational" work that should be automated

## Borg

- first iteration of k8s
- allowed for cluster level computing. note that rack level computing would leave a single point of failure: the network switch

  **MTTR** - mean time to recovery.

  - a novice engineer armed with a playbook has a better MTTR than a seasoned engineer winging it 70% of the time
  - playbooks reduce MTTR

  **MTTF** - mean time to failure
  **ticket** - immediate action not necessary
  **alert** - immediate action necessary

# Chapter 2

## gRPC

- open source remote procedural call

## protobuff

- allowed you to define a "class" which would define outputs of a gRPC

# Chapter 3

## error budget

- when calculating an SLO (service level objective), leave yourself an error budget (downtime) to push upgrades
- a database optimizing for throughput (full queue at all times) naturally cannot optimize for low latency (no queue at all times)
- product owner **picks** SLO but SRE **enforces** it: common goal
