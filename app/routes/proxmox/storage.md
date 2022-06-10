on the proxmox box you configured, `zpool create proxmox-mirror-pool mirror /dev/sdb /dev/sda` created a mirror pool with those 2 devices, mounted it at `/proxmox-mirror-pool` (seen with `df`), and let you read/write files to `/proxmox-mirror-pool`
## Block storage

## File storage


# File Systems
## ZFS
- utilizes asynchronous (writes to RAM buffer for perceived speed to be written later) and synchronous writes directly to disk
- asynchronous writes may be lost in kernel panic/power loss

### `zpool`
- upper most structure in ZFS hierarchy
- contain `vdev`s which are **exclusive** to that `zpool`
- there is no redundancy between `zpool`s
- described as a complex "JBOD" (just a bunch of disks)
- if one storage `vdev` or `SPECIAL vdev` is lost, the entire `zpool` is lost

### `vdev`s
#### support `vdev`s
##### LOG
- contains the ZSH Intent Log (ZIL)
- generally can be emptied in a power loss without data loss
- 

## APFS
- the 14" M1 pro is using APFS by default (found by `df -T apfs`)

**volumes** - can contain multiple partitions. can be contracted/expanded. disks can contain multiple volumes.
**partition** - only on one physical disk
**logical volume** - can span multiple disks. one large volume can be created using RAID 0 or LVM. LVM seems to offer flexibility whereas RAID 5 offers redundancy. ZFS offers both
