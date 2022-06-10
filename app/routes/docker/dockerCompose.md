# Docker Compose

- when running CI you can have multiple builds running the same services (or 2 different projects which both use `mongod` for example) in isolated environments
- dev, test, stage, and prod builds running on the same server
- docker compose keeps track of previous volumes used by previous container runs and reuses them
- caches container configuration and doesnt make a new container if the configuration has changed (quicker environments!)

## Networking
- if I'm exposing port 27017 for mongo on my machine, I probably shouldn't forward that container's port to 27017
