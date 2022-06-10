- network: pod <-> pod -> service <- external
  - pod: container <-> container
- Azure CNI will assign pods IP addresses from a pool

# API Server Authorization Modes
## Node authorizer
- scope of kubelets can be limited by `NodeRestriction`
- kubelets must be identified as being in the `system:nodes` group to be authorized by the Node authorizer 
- kubelet registers the node name
## RBAC