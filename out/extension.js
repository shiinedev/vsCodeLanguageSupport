// The module 'vscode' contains the VS Code extensibility API
const vscode = require("vscode");
const path = require("path");
const { formatSoplangCode } = require("../src/formatter");

const { registerAutoComplete } = require("../src/autoComplate/autoComplete");


const { SoplangDiagnostics } = require("../src/diagnostics");
const { SoplangHoverProvider } = require("../src/hoverProvider");
const { provideSoplangSignatureHelp } = require("../src/signatureHelp");



/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Handle spell checker integration if it's installed
  setupSpellChecker(context);

  // Register the formatter
  setupFormatter(context);

  //Auto complete
  registerAutoComplete(context);


  // Setup diagnostics for error detection
  setupDiagnostics(context);

  // Setup hover provider for keyword documentation
  setupHoverProvider(context);

  // Setup Soplang execution
  setupSoplangExecution(context);

   // Register Signature Help
   setupSignatureHelp(context)
   
}

/**
 * Sets up the hover provider for Soplang keywords
 * @param {vscode.ExtensionContext} context
 */
function setupHoverProvider(context) {
  // Create and register the hover provider
  const hoverProvider = new SoplangHoverProvider();
  hoverProvider.register(context);
}

/**
 * Sets up the diagnostics for error detection in Soplang files
 * @param {vscode.ExtensionContext} context
 */
function setupDiagnostics(context) {
  // Check if diagnostics are enabled in configuration
  const config = vscode.workspace.getConfiguration("soplang");
  const diagnosticsEnabled = config.get("enableDiagnostics", false);

  if (!diagnosticsEnabled) {
    console.log("Soplang diagnostics are disabled via configuration.");
    return;
  }

  // Create and activate the diagnostics provider
  const diagnostics = new SoplangDiagnostics();
  diagnostics.activate(context);

  console.log("Soplang diagnostics registered successfully.");

}

/**
 * Sets up the formatter for Soplang files
 * @param {vscode.ExtensionContext} context
 */
function setupFormatter(context) {
  // Register document formatting provider
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider("soplang", {
      provideDocumentFormattingEdits(document) {
        return formatSoplangCode(document);
      },
    })
  );

  // Register selection formatting provider
  context.subscriptions.push(
    vscode.languages.registerDocumentRangeFormattingEditProvider("soplang", {
      provideDocumentRangeFormattingEdits(document, range) {
        // For simplicity, we're formatting the whole document
        // You could enhance this to only format the selection if needed
        return formatSoplangCode(document);
      },
    })
  );

  // Register format command
  context.subscriptions.push(
    vscode.commands.registerCommand("soplang.formatDocument", async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor && editor.document.languageId === "soplang") {
        const edits = formatSoplangCode(editor.document);
        const edit = new vscode.WorkspaceEdit();
        edit.set(editor.document.uri, edits);
        await vscode.workspace.applyEdit(edit);
      }
    })
  );

  console.log("Soplang formatter registered successfully.");
}

/**
 * Sets up integration with the Code Spell Checker if it's installed
 * @param {vscode.ExtensionContext} context
 */

function setupSignatureHelp(context){
  context.subscriptions.push(
    vscode.languages.registerSignatureHelpProvider(
      { language: 'soplang', scheme: 'file' },
      { provideSignatureHelp: provideSoplangSignatureHelp },
      '(', ',' // Trigger characters
    )
  );
}

/**
 * Sets up integration with the Code Spell Checker if it's installed
 * @param {vscode.ExtensionContext} context
 */
function setupSpellChecker(context) {
  // Check if Code Spell Checker is installed
  const codeSpellCheckerExtension = vscode.extensions.getExtension(
    "streetsidesoftware.code-spell-checker"
  );

  // Only set up the dictionary if Code Spell Checker is installed
  if (codeSpellCheckerExtension) {
    // Get the path to the soplang dictionary relative to the extension
    const dictionaryPath = path.join(
      context.extensionPath,
      "dictionaries",
      "soplang.txt"
    );

    // Try to register the dictionary with Code Spell Checker
    try {
      // Register the dictionary with Code Spell Checker
      const config = vscode.workspace.getConfiguration("cSpell");

      // Get current dictionaries or create empty array if none
      let dictionaryDefinitions = config.get("dictionaryDefinitions") || [];
      let dictionaries = config.get("dictionaries") || [];
      let languageSettings = config.get("languageSettings") || [];

      // Check if our dictionary is already registered
      const soplangDictExists = dictionaryDefinitions.some(
        (dict) => dict.name === "soplang"
      );

      if (!soplangDictExists) {
        // Add our dictionary definition
        dictionaryDefinitions.push({
          name: "soplang",
          path: dictionaryPath,
          description: "Soplang programming language keywords and syntax terms",
        });

        // Update the config
        config.update(
          "dictionaryDefinitions",
          dictionaryDefinitions,
          vscode.ConfigurationTarget.Global
        );
      }

      // Add our dictionary to the list of active dictionaries if not already there
      if (!dictionaries.includes("soplang")) {
        dictionaries.push("soplang");
        config.update(
          "dictionaries",
          dictionaries,
          vscode.ConfigurationTarget.Global
        );
      }

      // Check if we already have language settings for soplang
      const soplangLangExists = languageSettings.some(
        (setting) =>
          setting.languageId === "soplang" &&
          Array.isArray(setting.dictionaries) &&
          setting.dictionaries.includes("soplang")
      );

      if (!soplangLangExists) {
        // Add language settings for soplang
        languageSettings.push({
          languageId: "soplang",
          dictionaries: ["soplang"],
          enabled: true,
        });

        // Update the config
        config.update(
          "languageSettings",
          languageSettings,
          vscode.ConfigurationTarget.Global
        );
      }

      // Enable cSpell for soplang files
      const enableFiletypes = config.get("enableFiletypes") || [];
      if (!enableFiletypes.includes("soplang")) {
        enableFiletypes.push("soplang");
        config.update(
          "enableFiletypes",
          enableFiletypes,
          vscode.ConfigurationTarget.Global
        );
      }

      console.log(
        "Soplang dictionary has been registered with Code Spell Checker."
      );
    } catch (error) {
      // Just log the error and continue - we don't want to break the extension
      // if spell checking setup fails
      console.error("Error setting up Soplang dictionary:", error);
    }
  } else {
    console.log(
      "Code Spell Checker not installed. Soplang syntax highlighting will work, but spell checking features are not available."
    );
  }
}

/**
 * Sets up Soplang code execution functionality
 * @param {vscode.ExtensionContext} context
 */
function setupSoplangExecution(context) {
  // Register the runSoplangFile command
  const runSoplangCommand = vscode.commands.registerCommand(
    "soplang.runFile",
    runSoplangFile
  );
  context.subscriptions.push(runSoplangCommand);

  console.log("Soplang execution functionality registered successfully.");
}

/**
 * Runs the currently active Soplang file
 * This function:
 * 1. Checks if the active file is a Soplang file
 * 2. Saves the file automatically
 * 3. Executes 'soplang' in the integrated terminal
 */
async function runSoplangFile() {
  try {
    // Get the active text editor
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage(
        "No active editor found. Please open a Soplang file."
      );
      return;
    }

    // Check if it's a Soplang file
    const document = editor.document;
    const fileName = document.fileName;
    const fileExtension = path.extname(fileName).toLowerCase();

    if (fileExtension !== ".sop" && fileExtension !== ".so") {
      vscode.window.showErrorMessage(
        "Current file is not a Soplang file. Only .sop and .so files can be executed."
      );
      return;
    }

    // Save the file automatically
    await document.save();

    // Get or create a terminal
    let terminal = vscode.window.terminals.find(
      (t) => t.name === "Soplang Execution"
    );
    if (!terminal) {
      terminal = vscode.window.createTerminal("Soplang Execution");
    }

    // Show the terminal
    terminal.show();

    // Run the soplang command with the file
    terminal.sendText(`soplang "${fileName}"`);

    // Provide feedback to the user
    vscode.window.setStatusBarMessage("Running Soplang file...", 3000);
  } catch (error) {
    vscode.window.showErrorMessage(
      `Failed to run Soplang file: ${error.message}`
    );
    console.error("Error running Soplang file:", error);
  }
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
