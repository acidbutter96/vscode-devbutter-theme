const { getVariant } = require("./process");
const { getColors } = require("./primer");

function getTheme({ style, name }) {
  // Usage: `auto('pink')`
  const auto = (hex) => getVariant(hex, style);

  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = (options) => options[style];

  const primer = getColors(style);

  const workbenchForeground = pick({ light: primer.gray[8], dark: primer.gray[7] });
  const editorForeground = pick({ light: primer.gray[9], dark: primer.gray[7] });

  return {
    name: name,
    colors: {
      focusBorder: pick({ light: primer.blue[4], dark: primer.blue[3] }),
      foreground: pick({ light: primer.gray[7], dark: primer.gray[6] }),
      descriptionForeground: primer.gray[5],
      errorForeground: primer.red[6],

      "textLink.foreground": pick({ light: primer.blue[5], dark: primer.blue[6] }),
      "textLink.activeForeground": pick({ light: primer.blue[6], dark: primer.blue[7] }),
      "textBlockQuote.background": primer.gray[0],
      "textBlockQuote.border": primer.gray[2],
      "textCodeBlock.background": primer.gray[1],
      "textPreformat.foreground": primer.gray[6],
      "textSeparator.foreground": primer.gray[3],

      "button.background": pick({ light: "#00D26A", dark: primer.green[2] }),
      "button.foreground": pick({ light: primer.white, dark: primer.green[8] }),
      "button.hoverBackground": pick({ light: "#00D26A", dark: primer.green[3] }),

      "button.secondaryBackground": pick({ light: primer.gray[2], dark: primer.gray[2]}),
      "button.secondaryForeground": primer.black,
      "button.secondaryHoverBackground": pick({ light: primer.gray[3], dark: primer.gray[3]}),

      "checkbox.background": pick({ light: primer.gray[0], dark: primer.gray[2] }),
      "checkbox.border": pick({ light: primer.gray[3], dark: primer.white }),

      "dropdown.background": pick({ light: primer.gray[0], dark: primer.gray[1] }),
      "dropdown.border": pick({ light: primer.gray[2], dark: primer.white }),
      "dropdown.foreground": workbenchForeground,
      "dropdown.listBackground": pick({ light: primer.white, dark: primer.gray[0] }),

      "input.background": pick({ light: primer.gray[0], dark: primer.gray[1] }),
      "input.border": pick({ light: primer.gray[2], dark: primer.white }),
      "input.foreground": workbenchForeground,
      "input.placeholderForeground": pick({ light: primer.gray[4], dark: primer.gray[5] }),

      "badge.foreground": pick({ light: primer.blue[6], dark: primer.blue[7] }),
      "badge.background": pick({ light: primer.blue[1], dark: primer.blue[2] }),

      "progressBar.background": primer.blue[4],

      "titleBar.activeForeground": workbenchForeground,
      "titleBar.activeBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "titleBar.inactiveForeground": primer.gray[5],
      "titleBar.inactiveBackground": pick({ light: primer.gray[1], dark: "#1B1E32" }),
      "titleBar.border": pick({ light: primer.gray[2], dark: "#FF4FA3" }),

      "activityBar.foreground": workbenchForeground,
      "activityBar.inactiveForeground": primer.gray[4],
      "activityBar.background": pick({ light: primer.white, dark: primer.gray[0] }),
      "activityBarBadge.foreground": pick({ light: primer.white, dark: primer.black }),
      "activityBarBadge.background": pick({ light: primer.blue[4], dark: primer.blue[4] }),
      "activityBar.activeBorder": "#F64C6F",
      "activityBar.border": pick({ light: primer.gray[2], dark: "#FF4FA3" }),

      "sideBar.foreground": primer.gray[6],
      "sideBar.background": pick({ light: primer.gray[1], dark: "#1B1E32" }),
      "sideBar.border": pick({ light: primer.gray[2], dark: "#FF4FA3" }),
      "sideBarTitle.foreground": workbenchForeground,
      "sideBarSectionHeader.foreground": workbenchForeground,
      "sideBarSectionHeader.background": pick({ light: primer.gray[1], dark: "#1B1E32" }),
      "sideBarSectionHeader.border": pick({ light: primer.gray[2], dark: primer.white }),

      "list.hoverForeground": workbenchForeground,
      "list.inactiveSelectionForeground": workbenchForeground,
      "list.activeSelectionForeground": workbenchForeground,
      "list.hoverBackground": pick({ light: "#FFFFFF", dark: "#1B1E32" }),
      "list.inactiveSelectionBackground": pick({ light: "#FFFFFF", dark: "#1B1E32" }),
      "list.activeSelectionBackground": pick({ light: "#FFFFFF", dark: "#1B1E32" }),
      "list.inactiveFocusBackground": pick({ light: primer.blue[1], dark: "#1B1E32" }),
      "list.focusBackground": pick({ light: "#FFFFFF", dark: primer.blue[2] }),

      "tree.indentGuidesStroke": pick({ light: primer.gray[2], dark: primer.gray[1] }),

      "notificationCenterHeader.foreground": primer.gray[5],
      "notificationCenterHeader.background": pick({ light: primer.gray[2], dark: primer.gray[0] }),
      "notifications.foreground": workbenchForeground,
      "notifications.background": pick({ light: primer.gray[0], dark: primer.gray[1] }),
      "notifications.border": pick({ light: primer.gray[2], dark: primer.white }),
      "notificationsErrorIcon.foreground": primer.red[5],
      "notificationsWarningIcon.foreground": primer.pink[6],
      "notificationsInfoIcon.foreground": primer.blue[6],

      "pickerGroup.border": primer.gray[2],
      "pickerGroup.foreground": workbenchForeground,
      "quickInput.background": primer.gray[0],
      "quickInput.foreground": workbenchForeground,

      "statusBar.foreground": primer.gray[6],
      "statusBar.background": pick({ light: primer.white, dark: primer.gray[0] }),
      "statusBar.border": pick({ light: primer.gray[2], dark: "#FF4FA3" }),
      "statusBar.noFolderBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "statusBar.debuggingBackground": auto("#F64C6F"),
      "statusBar.debuggingForeground": pick({ light: primer.white, dark: primer.black }),
      "statusBarItem.prominentBackground": pick({ light: "#FFFFFF", dark: "#1B1E32" }),
      "statusBarItem.remoteForeground": primer.gray[6],
      "statusBarItem.remoteBackground": pick({ light: primer.white, dark: primer.gray[0] }),

      "editorGroupHeader.tabsBackground": pick({ light: primer.gray[1], dark: "#1B1E32" }),
      "editorGroupHeader.tabsBorder": pick({ light: primer.gray[2], dark: primer.white }),
      "editorGroup.border": pick({ light: primer.gray[2], dark: "#FF4FA3" }),

      "tab.activeForeground": workbenchForeground,
      "tab.inactiveForeground": primer.gray[5],
      "tab.inactiveBackground": pick({ light: primer.gray[1], dark: "#1B1E32" }),
      "tab.activeBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.hoverBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.unfocusedHoverBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.border": pick({ light: primer.gray[2], dark: primer.white }),
      "tab.unfocusedActiveBorderTop": pick({ light: primer.gray[2], dark: primer.white }),
      "tab.activeBorder": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.unfocusedActiveBorder": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.activeBorderTop": "#F64C6F",

      "breadcrumb.foreground": primer.gray[5],
      "breadcrumb.focusForeground": workbenchForeground,
      "breadcrumb.activeSelectionForeground": primer.gray[6],
      "breadcrumbPicker.background": pick({ light: primer.gray[0], dark: "#1B1E32" }),

      "editor.foreground": editorForeground,
      "editor.background": pick({ light: primer.white, dark: primer.gray[0] }),
      "editorWidget.background": pick({ light: primer.gray[1], dark: "#1B1E32" }),
      "editor.foldBackground": pick({ light: "#FFFFFF", dark: "#1B1E32" }), // needs opacity
      "editor.lineHighlightBackground": pick({ light: primer.gray[1], dark: "#1B1E32" }),
      "editorLineNumber.foreground": pick({ light: "#141628", dark: primer.gray[2] }),
      "editorLineNumber.activeForeground": editorForeground,
      "editorIndentGuide.background": pick({ light: "#FFFFFF", dark: primer.gray[1] }),
      "editorIndentGuide.activeBackground": pick({ light: "#FFFFFF", dark: primer.gray[2] }),
      "editorWhitespace.foreground": pick({ light: primer.gray[3], dark: primer.gray[2] }),
      "editorCursor.foreground": primer.blue[7],
      "editorError.foreground": primer.red[6],
      "editorWarning.foreground": "#F6D98B",

      "editor.findMatchBackground": pick({ light: primer.pink[4], dark: "#F8A0B6" }),
      "editor.findMatchHighlightBackground": pick({ light: "#F8A0B6", dark: "#F8A0B6" }),
      "editor.linkedEditingBackground": pick({ light: "#28B1BE", dark: "#28B1BE" }),
      "editor.inactiveSelectionBackground": pick({ light: "#28B1BE", dark: "#28B1BE" }),
      "editor.selectionBackground": pick({ light: "#28B1BE", dark: "#28B1BE" }),
      "editor.selectionHighlightBackground": pick({ light: "#00D26A", dark: "#28B1BE" }),
      "editor.selectionHighlightBorder": pick({ light: "#00D26A", dark: "#28B1BE" }),
      "editor.wordHighlightBackground": pick({ light: "#00D26A", dark: "#28B1BE" }),
      "editor.wordHighlightStrongBackground": pick({ light: "#00D26A", dark: "#28B1BE" }),
      "editor.wordHighlightBorder": pick({ light: "#00D26A", dark: "#28B1BE" }),
      "editor.wordHighlightStrongBorder": pick({ light: "#00D26A", dark: "#28B1BE" }),
      "editorBracketMatch.background": pick({ light: "#00D26A", dark: "#28B1BE" }),
      "editorBracketMatch.border": pick({ light: "#00D26A", dark: "#28B1BE" }),

      "editorGutter.modifiedBackground": pick({ light: primer.blue[4], dark: primer.blue[5] }),
      "editorGutter.addedBackground": pick({ light: primer.green[5], dark: primer.green[4] }),
      "editorGutter.deletedBackground": primer.red[5],

      "diffEditor.insertedTextBackground": pick({ light: "#00D26A", dark: "#00D26A" }),
      "diffEditor.removedTextBackground": pick({ light: "#F64C6F", dark: "#F64C6F" }),

      "scrollbar.shadow": pick({ light: "#28B1BE", dark: "#0F1115" }),
      "scrollbarSlider.background": pick({ light: "#79E59B", dark: "#28B1BE" }),
      "scrollbarSlider.hoverBackground": pick({ light: "#79E59B", dark: "#28B1BE" }),
      "scrollbarSlider.activeBackground": pick({ light: "#79E59B", dark: "#28B1BE" }),
      "editorOverviewRuler.border": primer.white,

      "panel.background": pick({ light: primer.gray[1], dark: "#1B1E32" }),
      "panel.border": pick({ light: primer.gray[2], dark: "#FF4FA3" }),
      "panelTitle.activeBorder": "#F64C6F",
      "panelTitle.activeForeground": workbenchForeground,
      "panelTitle.inactiveForeground": primer.gray[5],
      "panelInput.border": pick({ light: primer.gray[2], dark: primer.gray[1] }),

      "terminal.foreground": primer.gray[6],
      "terminal.tab.activeBorder": "#F64C6F",
      "terminalCursor.background": primer.gray[3],
      "terminalCursor.foreground": primer.blue[6],

      // Test ANSI colors with:
      // echo -e "\033[0mNC (No color)"
      // echo -e "\033[1;37mWHITE\t\033[0;30mBLACK"
      // echo -e "\033[0;34mBLUE\t\033[1;34mLIGHT_BLUE"
      // echo -e "\033[0;32mGREEN\t\033[1;32mLIGHT_GREEN"
      // echo -e "\033[0;36mCYAN\t\033[1;36mLIGHT_CYAN"
      // echo -e "\033[0;31mRED\t\033[1;31mLIGHT_RED"
      // echo -e "\033[0;35mPURPLE\t\033[1;35mLIGHT_PURPLE"
      // echo -e "\033[0;33mYELLOW\t\033[1;33mLIGHT_YELLOW"
      // echo -e "\033[1;30mGRAY\t\033[0;37mLIGHT_GRAY"
      "terminal.ansiBrightWhite": pick({ light: primer.gray[3], dark: primer.gray[9] }), // WHITE
      "terminal.ansiWhite": pick({ light: primer.gray[5], dark: primer.gray[6] }),  // LIGHT_GRAY
      "terminal.ansiBrightBlack": pick({ light: primer.gray[4], dark: primer.gray[5] }), // GRAY
      "terminal.ansiBlack": pick({ light: primer.gray[9], dark: primer.gray[3] }), // BLACK
      "terminal.ansiBlue": primer.blue[5],
      "terminal.ansiBrightBlue": primer.blue[6],
      "terminal.ansiGreen": primer.green[5],
      "terminal.ansiBrightGreen": primer.green[6],
      "terminal.ansiCyan": pick({ light: "#28B1BE", dark: "#28B1BE" }),
      "terminal.ansiBrightCyan": pick({ light: "#28B1BE", dark: "#70E1EC" }),
      "terminal.ansiRed": primer.red[5],
      "terminal.ansiBrightRed": primer.red[6],
      "terminal.ansiMagenta": primer.purple[6],
      "terminal.ansiBrightMagenta": primer.purple[6],
      "terminal.ansiYellow": pick({ light: primer.pink[7], dark: primer.pink[6] }),
      "terminal.ansiBrightYellow": pick({ light: primer.pink[8], dark: primer.pink[6] }),

      "editorBracketHighlight.foreground1": primer.blue[6],
      "editorBracketHighlight.foreground2": primer.pink[6],
      "editorBracketHighlight.foreground3": primer.purple[6],
      "editorBracketHighlight.foreground4": primer.blue[6],
      "editorBracketHighlight.foreground5": primer.pink[6],
      "editorBracketHighlight.foreground6": primer.purple[6],

      "gitDecoration.addedResourceForeground": primer.green[5],
      "gitDecoration.modifiedResourceForeground": primer.blue[6],
      "gitDecoration.deletedResourceForeground": primer.red[5],
      "gitDecoration.untrackedResourceForeground": primer.green[5],
      "gitDecoration.ignoredResourceForeground": primer.gray[4],
      "gitDecoration.conflictingResourceForeground": primer.pink[6],
      "gitDecoration.submoduleResourceForeground": primer.gray[4],

      "debugToolBar.background": pick({ light: primer.white, dark: "#1B1E32" }),
      "editor.stackFrameHighlightBackground": pick({ light: "#F8A0B6", dark: "#F64C6F" }), // needs opacity (yellow)
      "editor.focusedStackFrameHighlightBackground": pick({ light: "#00D26A", dark: "#1B1E32" }), // needs opacity (green)

      "peekViewEditor.matchHighlightBackground": pick({ dark: "#F8A0B6" }),
      "peekViewResult.matchHighlightBackground": pick({ dark: "#F8A0B6" }),
      "peekViewEditor.background": pick({ dark: "#1B1E32" }),
      "peekViewResult.background": pick({ dark: "#1B1E32" }),

      "settings.headerForeground": workbenchForeground,
      "settings.modifiedItemIndicator": primer.blue[4],
      "welcomePage.buttonBackground": primer.gray[1],
      "welcomePage.buttonHoverBackground": primer.gray[2],
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: pick({ light: primer.gray[5], dark: primer.gray[4] }),
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.language",
        ],
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
        },
      },
      {
        scope: "variable.parameter.function",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: pick({ light: primer.red[5], dark: primer.red[6] }),
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: pick({ light: primer.red[5], dark: primer.red[6] }),
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: pick({ light: primer.blue[8], dark: "#70E1EC" }),
        },
      },
      {
        scope: "support",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: primer.pink[6],
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: pick({ light: primer.red[5], dark: primer.red[6] }),
          foreground: primer.gray[0],
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: primer.green[6],
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: primer.pink[6],
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: editorForeground,
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: editorForeground,
        },
      },
      {
        scope: ["markup.underline"],
        settings: {
          fontStyle: "underline",
        },
      },
      {
        scope: ["markup.strikethrough"],
        settings: {
          fontStyle: "strikethrough",
        },
      },
      {
        scope: "markup.inline.raw",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: primer.pink[1],
          foreground: primer.pink[6],
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: primer.gray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: primer.gray[6],
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: primer.blue[8],
          fontStyle: "underline",
        },
      },
    ],
  };
}

module.exports = getTheme;
