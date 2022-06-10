- Linux package manager which creates a hash from source code (name-semver), build arguments/scripts, environment vars, and build time dependencies. any dependent would use that hash to create a hash chain (like bitcoin blocks if you're familiar) so it can't be missed. hashes are stored in the directory name and the directories are read only. stores all previous hashes on upgrade so rollbacks are easy. called nix
  **spec file** - `rpm` for example refers to its dependencies by name and not by any specification
  **nominal dependency** - referring to a dependency by name, inexact
  **contract dependency** - referring to the properties of a dependency
- in Linux, a name and a version do not always specify the same thing: binaries can be built with different compiler flags, have vendor patches, computer architectures
  **ABI** - how an application interacts with itself, how it interacts with the kernel, how it interacts with libraries. a binary must conform to specifications to work on a particular architecture
  **interference** - when two applications depend on the same dependencies, trouble can arise when you upgrade apps (dependencies) or remove apps (dependencies). during upgrade, since only one version can exist, there is a time when the system is in an inconsistent state. of course, if the dependency is changed or removed, the system is permanently in an inconsistent state
  - this was particularly a problem with the `C:\Windows-System` folder
    **`ports`** - a popular source deployment system with Makefiles. downside is storage cost: not only do you need runtime dependencies, you need buildtime dependencies
    **static linking** - depedencies a part of the exe or main binary
    **private namespace** - the directory tree of the application itself
- Mac OS applications are generally self contained directories which of course do not depend on external registry settings
- editing Windows registries makes server migration more complex
  **strong identifier** - guid (global unique identifier) which is signed by the .NET assembly producer
  **GAC** - guid index of **shared .NET** assemblies, which solves the interference problem
- deployment systems should support a wide variety of platforms
  **hash chain of dependencies** - removes undeclared dependencies
- the hash functions used are collision _resistant_, meaning it is computationally infeasible to find two inputs which share the same hash

# Nix store terminology

**component** - basic unit of deployment, set of files in a file system
