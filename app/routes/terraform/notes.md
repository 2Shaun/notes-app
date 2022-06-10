# mutation with chef/ansible
- data being consumed on the resource can persist (no creation of new resources)
- changes can fail for many reasons (`apt install` could fail for network reasons)
- if you manage an entire fleet, a spectrum of failures is possible across the whole fleet

# immutable
- never upgrade in place
- need to externalize data (shared database)
- many cloud data sources even externalize the physical disk (mutable) but have an immutable VM (with MySQL) reading from it

# Provisioning vs Configuration Management
# procedural IAC
- although tools like Chef and Ansible can do infrastructure provisioning, it's not idiomatic which is what these tools champion as a best practice
- provisioning with Ansible is not as simple as changing settings, e.g., changing a ec2 deployment count from 5 to 10 would leave you with 15 ec2 instances, building upon the last 5. terraform however, would just create 5 additional servers. 
- the code interpreted by procedural tools generally has no knowledge of what is currently deployed
- code written earlier may be unusable becuase the state of your infrastructure has changed
# declarative
- **agentless** the "master" does not need to have any access to the infrastructure itself

# What is IaC
**churn** - lots of VMs going in and out
- point and click was fine when churn was low and VM lifecycle was months to years
- point and click wasn't possible for elasticity (auto horizontal scaling) 
- auto "ticketing" system

# Infrastructure as Code in a Private or Public Cloud
- change follows a failure as most are resistant to change
- Day 0: terraform's job, initial creation/provisioning and configuration
- Day 1: OS and application configuration and udpates

- write
- plan
- apply

- terraform core takes config and state files and creates a graph (lifecycle management)
# Terraform Cloud
- state files should be centrally managed
- apply step should only happen once at a time
- central and encrypted variables

# Terraform Enterprise
- private registry of modules
**whizziwig** - WYSIWYG
- developer self-service of infrastructure that is still security compliant

# Vault Provider
- vault crud operations
- 

# Backends
- where terraform state is stored
- since terraform state contains sensitive data, it should be encrypted at rest (this depends on the backend being used) and require access credentials
- state can be "locked", particularly when operations are being performed
- since there is a `backend` block and a `cloud` block, they are mutually exclusive

# Review
## Explain the benefits of state
- terraform used to bind real world (cloud) resources to configuration with tags, but not all cloud providers supported tags
- when configuration is deleted, dependency metadata is lost.  terraform uses dependency metadata in state to determine which order to delete resources
- state is used as a cache when setting `-refresh=false` in `plan` and `apply` so providers aren't needed, cloud APIs can be slow
## Describe plug-in based architecture
- terraform plugins (providers and provisioners) serve as in interface/abstraction to a target API (cloud API, etc.)
- running `terraform init` will cause terraform core to look for providers (remotely in the Terraform Registry and locally in the plugins directory)
## Explain when to use and not use provisioners and when to use local-exec or remote-exec
- terraform can not model provisioner actions as part of the plan
- provisioners require information that terraform does not usually deal with (direct server access, software prerequisites, credentials etc.)
### local-exec
- local-exec let's you interpolate terraform variables in local commands (on the machine running terraform)
- you can set things like perl, python, and powershell as the interpreter
### remote-exec
- ssh connections to the target machine
## cloud vs enterprise
### Free cloud
- centralized state management
- private module registry
### Paid cloud (team & governance)
- sentinel policy checking against plans
- team management
### Enterprise
- SSO!!!
- private module repositories
- self hosted terraform cloud
- self hosted runners
### cli workspaces
- same configuration
- different variables
### cloud workspaces
- different configuration
- different state data
- different variables
- RBAC