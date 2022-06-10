# AKS

## Control plane (AKS managed)

- see logs in Azure Monitor

1. `kube-apiserver`
   a. used by `kubectl`
2. `etcd`
   a. manage state
3. `kube-scheduler`
   a. deploys to available nodes when scaling out
4. `kube-controller-manager`
   a. handles replicas
   b. node controls?

## Clusers (customer managed)

1. kubeproxy
   a. enforces network rules for communication to Pods from outside and within the cluster
2. nodes with `kubelet`s
   a. processes requests from the scheduler
   b. pulls images from registries: `ImagePullBackoff`
   - this happened when the AKS resource wasn't configured with the ACR: `az aks update -n myAKSCluster -g myResourceGroup --attach-acr <acr-name>`
3. container runtime

### Cluster networking

#### Pod to Pod

- each pod gets its own IP address so pods can be treated like VMs from a networking perspective (the goal of pods), e.g., a loadbalancer
- rules:
  1. NATs are not required for cross node pod to pod communication
  2. on a given node, node services (system daemons and the kubelet) can communicate with all of its pods
- containers within the same pod can reach each others ports via `localhost`

#### DNS for Services and Pods

- every service in the cluster is given a DNS name (notice I didn't say pods)

##### `graph-api` pod is failing with `getaddrinfo ENOTFOUND mongo`

- this may be because pod hostnames have SHAs attached to their names and `mongo` is not resolvable

## Node Pools

- a collection of nodes which share configuration
- multiple node pools are especially important if running an application on Windows Server since you would not want to run ingress on Windows Server
  - `nodeSelector` let's you define which node pool the scheduler should put a given pod
    - by running `kubectl get nodes --show-labels | grep [.spec.template.spec.nodeSelector]` you can see if that node will be selected for a deployment pod
- `kubectl describe node [NODE_NAME]` is sort of like checking PRTG for the node
- on every node there is `kube-reserved` memory for the `kubectl` daemon to process requests
- the `kubelet` also has a threshold of available memory at which, when reached, will kill pods and free up memory

# Pods

- all pods should have resource limits to avoid the node from being overwhelmed and aid the scheduler
- a pod's DNS search includes all pods in its namespace
- `nodeSelector` will assign pods
- one of the best ways to debug `CrashLoopBackOff` is by running `kubectl logs [POD_NAME]`

# Deployments

- a deployment represents identical pods (replicas)
- it is the deployment controller's job to drain and create new replicas
- pod disruption budget is the minimum number of replicas to be present at a time

**huge pages** - pages are

# Package management with Helm

- yaml template + key value pairs = valid kubernetes yaml
- easily upgrade an image version of a deployment

# Context

- can be seen by running `kubectl config view`

## How did `kubectl apply` deploy the website?
