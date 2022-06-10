# AMI (Amazon Machine Image)
## `aws ec2 describe-images`
### DTO
- Architecture : "arm64" | "i386" | "x86_64" | "x86_64_mac"
- ImageType : "kernel" | "machine" | "ramdisk"
- PlatformDetails : "Linux/UNIX" | "Red Hat Enterprise Linux with SQL Server Web" ...
  - values can be seen at [Sample data: usage operation by platform](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html)
- VirtualizationType : "hvm" | "paravirtual"
- Description - sometimes contains distribution and software installed
- ImageOwnerAlias : "amazon" | ...
  - human readable name attached to the owner id
### `--filters`
- `"Name=owner-alis,Values=amazon" "Name=description,Values=*docker*"` returned a bunch EKS images
# ECS Task
- multiple containers with set docker images
- launch type (ec2 vs. fargate)
- docker networking mode
- logging configuration
- task continue running if container fails
  - does the task spin up a new container?
- command the container should run
- IAM role of the task
  - is this how it can authenticate with ecr?
- related containers should be in their own task definition
## parameters
**family** - name to be associated with versioning
**lauch type** : EC2 | FARGATE | EXTERNAL
# Task Role Policy ARN
- arn:partition:service:region:account:resource
  - partition - typically `aws`
  - service - `iam`
  - region - blank (IAM resources are global)
  - account - aws account id
  - resource - `role/role-name-with-path`
## Example 
- `arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy`
  - service - `iam`
  - account - `aws` managed
  - resource - `policy/service-role/AmazonECSTaskExecutionRolePolicy` 

# ECS Service
- runs a specified number of tasks in an ECS cluster

# Fargate networking


# IAM Role
## IAM Policy Document
- json
- AWS Security Token Service (AWS STS) `AssumeRole` API operation provides temporary security credentials that enable access to AWS resources in your account (trusting account)
  - here the trusting account is likely which ever credentials Terraform is using to access the AWS API
**principal** - person of authority. can remember this is a person by seeing "pal" at the end of principal
`Principal` - the trusted account, here being `ecs-tasks.amazonaws.com` service

## IAM Role
- accepts a json for `assume_role_policy`
## IAM Role Policy Attachment

# VPCs and subnets
**dual-stack** - IPv6 and IPv4
**IGW** - allows instances with public IPs to access the internet. applied at the VPC level. one per VPC
**NGW** - allows instances with private IPs to access the internet
- a resource in a private subnet must go from a NGW to an IGW to reach the internet
- a VPC does not need an IGW if it wants to access the internet, but it will need to do so through a VPN
**public subnet** - a subnet which has a route to *the* IGW
**private subnet** - can only access internet with a route to a NGW
**vpn-only subnet** - has a route to a virtual private gateway
**secondary CIDR block** - adding an additional CIDR block to your VPC (**not** a new subnet or vpc peering)
- a secondary CIDR block needs to be routed to `local`, which means that the IP addresses in the block cannot overlap with any existing routes

# [How Amazon ECS manages CPU and memory resources](https://aws.amazon.com/blogs/containers/how-amazon-ecs-manages-cpu-and-memory-resources/)
- containers use all cpu and memory on a given host unless capped
- containers share cpu and memory the same way other processes do
(containers behave like other linux processes with respect to CPU and memory)