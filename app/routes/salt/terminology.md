## Jinja

- provides simple logical structures and substitution, rendering a yaml configuration file

## returner

- an alternative location to send data (in addition to the master)

## reactor

- performs actions in response to events
- useful in auto scaling systems to configure nodes which are added

## pillar

- kv store
- have access control based on assigned minions
- useful for secrets
- able to substitute

## ZeroMQ

- library
- encrypted communication
- authenticated with a public key share on first boot
- written in C++
- more performant than `salt-ssh`

## execution module

- "functions"
- there are built-in execution modules that come installed by default but there are also community modules
- intended to abstract away granular data

## formula

- set of **state** module calls

## grain

- provides data for a minion and allows for more flexible targeting based on grain data
- granular data can also be applied to configuration files

## state module

- **not** an execution module but many state modules mirror execution modules
