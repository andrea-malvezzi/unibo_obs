"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
class HeaderSummaryPlugin extends obsidian_1.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            // create a ribbon on the leftside toolbar
            this.addRibbonIcon('list-tree', 'Show Header Summary', (evt) => {
                this.showOptionsMenu(evt);
            });
            // add to doc start
            this.addCommand({
                id: 'insert-header-summary',
                name: 'Insert an headers summary at the start of the document.',
                callback: () => {
                    this.showHeaderSummary(true);
                }
            });
            // add to new file
            this.addCommand({
                id: 'create-header-summary-file',
                name: 'Create an header summary inside a new file.',
                callback: () => {
                    this.showHeaderSummary(false);
                }
            });
            // show a notice to set up hotkeys if not shown before
            const hasShownTip = this.loadData();
            if (!hasShownTip) {
                new obsidian_1.Notice('Header Summary: Set up hotkeys in Settings → Hotkeys for faster access!', 8000);
                this.saveData(true);
            }
        });
    }
    showOptionsMenu(evt) {
        const menu = new obsidian_1.Menu();
        menu.addItem((item) => {
            item
                .setTitle('Add the summary to the start of the current file')
                .setIcon('arrow-up-to-line')
                .onClick(() => {
                this.showHeaderSummary(true);
            });
        });
        menu.addItem((item) => {
            item
                .setTitle('Create a new file for the summary')
                .setIcon('file-plus')
                .onClick(() => {
                this.showHeaderSummary(false);
            });
        });
        menu.showAtMouseEvent(evt);
    }
    // error notices remain until clicked on
    showHeaderSummary(insertAtStart) {
        const activeView = this.app.workspace.getActiveViewOfType(obsidian_1.MarkdownView);
        if (!activeView) {
            new obsidian_1.Notice('No active markdown file. Did you open/click on a markdown file?');
            return;
        }
        const editor = activeView.editor;
        const content = editor.getValue();
        const headers = this.extractHeaders(content);
        if (headers.length === 0) {
            new obsidian_1.Notice('No headers found in this document. Did you add any headers (#, ##, ###, etc...)?');
            return;
        }
        if (activeView.file == null) {
            new obsidian_1.Notice('Active file is not saved. Please save the file first.');
            return;
        }
        const fileName = activeView.file.basename;
        const summary = this.buildHierarchicalSummary(headers, fileName);
        if (insertAtStart) {
            this.insertAtStart(editor, summary);
        }
        else {
            this.displaySummary(summary, fileName);
        }
    }
    extractHeaders(content) {
        const lines = content.split('\n');
        const headers = [];
        const headerRegex = /^(#{1,6})\s+(.+)$/;
        const codeBlockRegex = /^```/;
        let inCodeBlock = false;
        lines.forEach((line, index) => {
            // skip code snippets
            if (codeBlockRegex.test(line)) {
                inCodeBlock = !inCodeBlock;
                return;
            }
            if (!inCodeBlock) {
                const match = line.match(headerRegex);
                if (match) {
                    headers.push({
                        level: match[1].length,
                        text: match[2].trim(),
                        line: index
                    });
                }
            }
        });
        return headers;
    }
    buildHierarchicalSummary(headers, fileName) {
        let summary = '';
        const headerStack = []; // track the hierarchy path
        headers.forEach(header => {
            const indent = '  '.repeat(header.level - 1);
            const bullet = header.level === 1 ? '##' : '-';
            // update the stack to current level
            headerStack[header.level - 1] = header.text;
            // remove any deeper levels
            headerStack.splice(header.level);
            // build the full path: document-name#h1#h2#...#hn
            const fullPath = `${fileName}#${headerStack.join('#')}`;
            summary += `${indent}${bullet} [[${fullPath}|${header.text}]]\n`;
        });
        return summary;
    }
    // confirmation notices last 5 seconds
    insertAtStart(editor, summary) {
        const currentContent = editor.getValue();
        const summaryMarker = '%%headers summary%%';
        // check if there's already a summary (starts with the marker)
        if (currentContent.startsWith(summaryMarker)) {
            // find the separator after the marker
            const separatorIndex = currentContent.indexOf('\n---\n');
            if (separatorIndex !== -1) {
                // a %% marker exists and a --- separator was found - we replace the existing summary
                const contentAfterSeparator = currentContent.substring(separatorIndex + 5); // +5 to skip '\n---\n'
                const newContent = summaryMarker + '\n' + summary + '\n---\n\n' + contentAfterSeparator;
                editor.setValue(newContent);
                new obsidian_1.Notice('Updated the existing headers summary!', 5000);
            }
            else {
                // a %% marker exists but no separator was found - treat as corrupted and simply add at the start
                const newContent = summaryMarker + '\n' + summary + '\n---\n\n' + currentContent;
                editor.setValue(newContent);
                new obsidian_1.Notice('Inserted an headers summary at the start of the document!', 5000);
            }
        }
        else {
            // no existing summary - we just insert it at the start
            const newContent = summaryMarker + '\n' + summary + '\n---\n\n' + currentContent;
            editor.setValue(newContent);
            new obsidian_1.Notice('Inserted an headers summary at the start of the document!', 5000);
        }
    }
    displaySummary(summary, fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const leaf = this.app.workspace.getLeaf('split', 'vertical');
            // create a new .md file with the current daytime in the name to avoid overwriting
            yield leaf.openFile(yield this.app.vault.create(`Header Summary - ${fileName} - ${Date.now()}.md`, summary));
            new obsidian_1.Notice('Created a new file with the headers summary!', 5000);
        });
    }
}
exports.default = HeaderSummaryPlugin;
