# Laragon Terminal Config

A VS Code extension that configures the integrated terminal on Windows to use Laragon's Cmder, with a customizable executable path and an option to set it as the default terminal.

## Features

- **Custom Terminal Profile:** Automatically configures a terminal profile for Laragon Cmder.
- **Settings Integration:**  
  - **laragonTerminalConfig.laragonPath:** Set the path to your Laragon Cmder executable.  
    _Default: `${env:windir}\\System32\\cmd.exe`_
  - **laragonTerminalConfig.setAsDefault:** Choose whether to set Laragon as the default terminal.  
    _Default: `true`_
- **Command Palette:** Run the command **Set Laragon Terminal as Default** to update your terminal configuration manually.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- VS Code installed.

### Installation & Running in Development

1. **Clone or Download the Repository:**

   Clone this repository or download the extension code to your local machine.

2. **Install Dependencies:**

   Open a terminal in the extension’s root directory and run:

   ```bash
   npm install
