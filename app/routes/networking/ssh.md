- I was getting `Error opening terminal: xterm-kitty.` errors while ssh'd into my webserver droplet (also issues with backspacing and pasting)
- ssh spawns a remote (on the other server) shell and commands on the local terminal are sent to that shell

1. on the local machine, a key pair (private/public) must be generated
2. the public key must be added to `~/.authorized-keys` on the remote host

- on things like gitlab and github, they manage the `git` users authorized keys and your public keys are added through a GUI

3. upon connection to the remote host, the local machine will inform it of the public key that its received data must be encrypted with
4. the remote host will encrypt data with the public key and it will be decrypted on your local machine with the private key
