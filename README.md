# PROXUS
I guess you could say I forked some obfuscated React code from [Lucide](https://lucideon.top) and rewrote a tabbed web proxy for cheating to whatever I wanted to make.


it's like I'm adhd with the random side projects (no offense to the adhd community, 💙 you guys) should I get tested 😭(like actually, not as a joke)


_______________________________________________
# PROXUS

PROXUS is a custom web-viewing and search workspace built by modifying Lucide's original source and then combining it with my own web-development work and experience from the 360 project.

It is not a completely original implementation from scratch. The project started from Lucide's source structure and visual direction, then I changed, extended, and rebuilt large parts of the behavior, interface, proxy/viewer flow, search experience, settings, animations, and Electron packaging.

## What PROXUS is

PROXUS is a browser-style web workspace with a custom interface around a proxied web viewer. It includes search, tabs, bookmarks, a web-viewing surface, custom navigation behavior, themes, cursor/caret settings, and an Electron desktop build.

The project also contains work influenced by the techniques and patterns I developed while working on 360, especially around frontend web development, proxy/web-viewer behavior, search UI, JavaScript integration, and desktop packaging.

### Setup

## Requirements

Node.js 24 or newer

`npm`

`Git`

Electron is installed through the project's npm dependencies

Clone the repository

`git clone https://github.com/Zakii360/PROXUS.git
cd PROXUS`

Replace the repository URL with the actual PROXUS repository URL.

Install dependencies

`npm install --legacy-peer-deps`

Start PROXUS locally

`npm start`

This launches the Electron desktop application and loads the local index.html through the Electron shell.

Build the desktop app

Build for the current platform with:

`npm run build`

The packaged application is written to the dist/ directory.

Platform-specific scripts are also available:
`
npm run build:win
npm run build:linux
npm run build:mac
`
The exact output format depends on the target configured in package.json and electron-builder.
To install desktop apps, check actions history for old productions do download. If they aren't available, fork the repo, enable actions and run it yourself for the download.
## Actions

The repository includes separate workflows for Windows, Linux, and macOS builds.

They install the Node dependencies, run the Electron build, and upload the generated desktop artifacts. The workflows can also be used for tagged releases depending on the event configuration in each YAML file.

For local development, GitHub Actions is not required. `npm start` is enough to run PROXUS on a development machine.
_____________________________________
# How the project came together

PROXUS is basically a combination of two parts:

Lucide source - the starting point for the original structure, interface ideas, and base project being modified.

My own 360/web-development work - the implementation knowledge and techniques I brought in from building 360, including frontend architecture, web-viewer behavior, search interfaces, proxy-related client logic, animations, interaction design, and Electron packaging.

The result is a heavily modified project rather than a fresh implementation written from zero, otherwise this would look too good to be true (especially with the implementation of react!)
____________________

# Privacy and networking

PROXUS is designed around its web-viewing/proxy architecture rather than simply opening arbitrary pages in the system browser. The desktop Electron shell provides the application window; the web-viewing behavior remains part of the PROXUS application itself.

A PROXUS location selector should not be treated as proof that the computer's system-wide network connection has changed. Geographic routing, when implemented, belongs to the upstream web-viewer/proxy layer.

Of course, the desktop app is not required.
______________________________________________________________
# Credits: 
[ap5z](https://github.com/coinbaselarper) for Lucide's site source code
[mingzew2](https://github.com/mingzew2) for the basic web-viewer implementation guide in the 360 repo
[google](https://github.com/google) for cse which powers search

Respect the licenses and notices of the upstream Lucide project and any other third-party code or services used by PROXUS.
