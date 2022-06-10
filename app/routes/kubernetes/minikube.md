**namespace** - naming scope for resources
  - `kube-system` created automatically and contained the `etcd` keystore
  - namespaces can be set at the request level to assure you get the right resource for the name

**deployment** - yaml file which specifies a declarative state

# Kinds
## Objects
## Lists
## Simple

# Config files
- facilitate REST calls to the kubernetes api
- `kind` specifies the JSON schema for the calls, e.g., `Deployment`, `Service`
- `kind`s are usually seperated by resouces (seen by `kubectl get all`)

## `azure-vote-all-in-one-redis.yaml`
