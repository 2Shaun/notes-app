# IAM Role
- IAM identity with permissions
- attended to be **assumable**
  - each role has a trust policy declaring the principal, i.e., who can call `AssumeRole`
**principal** - IAM role or IAM user or AWS service
- no long-term credentials (no password or access key)
- temporary security credentials
- `AssumeRole` returns a resource with an arn from the `sts` service with an `assumed-role` resource type and a "role session name" as `resource-id`. for an instance profile, this will be the instance ID
- instance profiles allow an AWS service (such as `ec2.amazonaws.com`) to assume an IAM role
## Best Practices
- tightly restrict who can call `AssumeRole` and `UpdateAssumeRolePolicy`
- closely monitor calls to these with CloudTrail
## Using IAM roles
- 
# AWS STS
- used to request temporary, limited-privilege, security credentials
- all AWS STS requests go through a single endpoint (global) `https://sys.amazonaws.com` but regional requests are recommended

## AWS Credentials
### `iam_user`
### `sts:AssumeRole`
- credentials are an access key ID, access key secret, and security token
- allows for cross account authentication
### `sts:FederationToken`
- credentials are an access key ID, access key secret, and security token
- vault will use "long term" security credentials to call `sts:FederationToken` to retrieve temporary security credentials
### IAM User vs AWS Account owner
1. **the** root user
2. IAM users created by the root user or IAM administrator of the account
## Roles
(who (trust), what (perms)) -> role
  - note that trust policies have principals and permission policies have resources. both have actions
  - note that `sts:AssumeRole` action can be given to a principal or a resource (role)
who - AWS Accounts
### sts:AssumeRole
(role?, session policies) -> (temporary access key ID, temporary secret access key, temporary security token)
### IAM Policies
- [overview](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/IAM_Auth_Access_Overview.html#IAM_Auth_Access_ResourceOwner)
  - if a user assumes one of your roles to create a resource, you are still the owner
  - if you grant permissions to a user to create a resource, you are still the owner
- policy attached to an identity, identity-based policy
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "iam:AttachUserPolicy",
                "iam:CreateAccessKey",
                "iam:CreateUser",
                "iam:DeleteAccessKey",
                "iam:DeleteUser",
                "iam:DeleteUserPolicy",
                "iam:DetachUserPolicy",
                "iam:ListAccessKeys",
                "iam:ListAttachedUserPolicies",
                "iam:ListGroupsForUser",
                "iam:ListUserPolicies",
                "iam:PutUserPolicy",
                "iam:AddUserToGroup",
                "iam:RemoveUserFromGroup"
            ],
            "//": "the account ID section here is the resource owner, i.e., the creator of the resource or who authenticated the creation of the resource",
            "//": "this could be the root user, an IAM admin, or an IAM role",
            "Resource": ["arn:aws:iam::ACCOUNT-ID-WITHOUT-HYPHENS:user/vault-*"]
        }
    ]
}
```
