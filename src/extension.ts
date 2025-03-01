import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // Register the command to set or update the Laragon terminal profile.
  let disposable = vscode.commands.registerCommand(
    "laragon-terminal-config.setProfile",
    async () => {
      try {
        // Access the VS Code configuration
        const config = vscode.workspace.getConfiguration();

        // Read custom settings from the configuration.
        // The settings keys must match those defined in package.json.
        const laragonPath =
          config.get<string>("laragonTerminalConfig.laragonPath") ||
          "${env:windir}\\System32\\cmd.exe";
        const setAsDefault =
          config.get<boolean>("laragonTerminalConfig.setAsDefault") ?? true;

        // Retrieve the current terminal profiles for Windows (if any exist).
        const currentProfiles =
          (config.get("terminal.integrated.profiles.windows") as any) || {};

        // Update or create the Laragon terminal profile using the custom path.
        currentProfiles["laragon"] = {
          path: laragonPath,
          args: ["/k", "C:\\laragon\\bin\\cmder\\vendor\\bin\\vscode_init.cmd"],
        };

        // Update the terminal profiles configuration globally.
        await config.update(
          "terminal.integrated.profiles.windows",
          currentProfiles,
          vscode.ConfigurationTarget.Global
        );

        // If the setting is enabled, set the Laragon terminal as the default.
        if (setAsDefault) {
          await config.update(
            "terminal.integrated.defaultProfile.windows",
            "laragon",
            vscode.ConfigurationTarget.Global
          );
        }

        vscode.window.showInformationMessage(
          "Laragon terminal profile updated successfully!"
        );
      } catch (error) {
        vscode.window.showErrorMessage(
          "Error updating Laragon terminal profile: " + error
        );
      }
    }
  );

  // Add the disposable to the context's subscriptions so it is disposed automatically.
  context.subscriptions.push(disposable);

  // Optionally, if you want to run the command automatically on activation,
  // you can uncomment the line below. For now, it will only run when invoked via the Command Palette.
  vscode.commands.executeCommand('laragon-terminal-config.setProfile');
}

export function deactivate() {}
