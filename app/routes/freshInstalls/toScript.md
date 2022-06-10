# Ubuntu Desktop

- add user to `/etc/sudoers`
- install software
  1. `sudo apt update && sudo apt upgrade && sudo apt install build-essential net-tools vim curl kitty fonts-firacode zsh htop tmux wireshark nodejs npm chromium-browser ncdu docker`
- launch `tmux` everytime you start `kitty`
  1. modify `/usr/share/applications/kitty.desktop` `Exec=kitty` -> `Exec=kitty -e tmux`
- install snaps
  1. `sudo snap install --classic code`
  2. `sudo snap install discord`
  2. `sudo snap install okteta`
- install oh-my-zsh
  1. `wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh && sh install.sh`
- add user to wireshark group
  1. `sudo adduser $USER wireshark`
- login to git
  1. `git config --global user.email "tom.w.oshaughnessy@gmail.com"`
  2. `git config --global user.name "2Shaun"`
- clone dotfiles and run script
  1. `git clone https://github.com/2Shaun/dotfiles.git`
  2. `cd dotfiles`
  3. `git checkout master`
  4. `./dotfileLinker.sh`
- install yarn
  1. `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
  2. `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
  3. `sudo apt update && sudo apt install yarn`
- install chrome
  1. `wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb`
  2. `sudo apt install ./google-chrome-stable_current_amd64.deb`
- install GitKraken
  1. `wget https://release.gitkraken.com/linux/gitkraken-amd64.deb`
  2. `sudo dpkg -i gitkraken-amd64.deb`
- set focus follows mouse
  1. `gsettings set org.gnome.desktop.wm.preferences focus-mode 'sloppy'`

# Latex in VS Code

- `sudo apt-get install texlive-latex-base texlive-fonts-recommended texlive-fonts-extra texlive-latex-extra

# not sure how to script

- [generate github PAT](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)
- add keyboard shortcut for kitty tmux 2. set alt+return to run `kitty -e tmux`
- install vs code snap
  - install extensions
    - vim
    - turbo console log
    -
- show bookmarks bar in Chrome

# Thinkpad W510

- `iwlwifi`
  - add non-free apt source to `/etc/apt/sources.list`
  - `sudo apt update && sudo apt install firmware-iwlwifi`
  - `sudo modprobe -r iwlwifi`
  - `sudo modprobe iwlwifi`
