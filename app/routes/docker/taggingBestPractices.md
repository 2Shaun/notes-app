# Self-healing
- `docker run --restart always myunstableimage:v0`
- it's a bad idea to use stable (unchanging) tags for a deployment because when a node fails, it will do a new `docker pull`. with multiple nodes, your environment will go out of sync
- base images should use stable tagging to automatically recieve updates to OS's/frameworks