- bind mounts allow you to mount a file or directory in the container, which is referenced by the host machine's absolute path. this gives docker power over the host machines filesystem
- volumes are created within the Docker storage directory of the host machine
- if `/var/run/docker.sock` is mounted to a container, that container can spawn sibling containers (as opposed to children)