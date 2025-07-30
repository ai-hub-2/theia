// *****************************************************************************
// Copyright (C) 2024 Theia Contributors.
//
// This program and the accompanying materials are made available under the
// terms of the Eclipse Public License v. 2.0 which is available at
// http://www.eclipse.org/legal/epl-2.0.
//
// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-only WITH Classpath-exception-2.0
// *****************************************************************************

import { injectable, inject } from '@theia/core/shared/inversify';
import { CommandContribution, CommandRegistry } from '@theia/core/lib/common';
import { TerminalFrontendContribution, TerminalCommands } from '@theia/terminal/lib/browser/terminal-frontend-contribution';
import { WidgetManager } from '@theia/core/lib/browser';
import { TerminalManagerWidget } from './terminal-manager-widget';

// TODO re-reregister commands, define expected behavior for new commands (i.e. spawn in new page/group or try to find focussed one), toggleable to spawn as tab or in manager?
/**
 * Re-registers terminal commands (e.g. new terminal) to execute them via the terminal manager
 * instead of creating new, separate terminals.
 */
@injectable()
export class TerminalManagerFrontendContribution implements CommandContribution {
    @inject(TerminalFrontendContribution)
    protected readonly terminalFrontendContribution: TerminalFrontendContribution;

    @inject(WidgetManager)
    protected readonly widgetManager: WidgetManager;

    registerCommands(commands: CommandRegistry): void {
        console.log('TerminalManagerFrontendContribution - REGISTER - NEW');
        commands.unregisterCommand(TerminalCommands.NEW);
        // New Terminal
        commands.registerCommand(TerminalCommands.NEW, {
            execute: async () => {
                console.log('TerminalManagerFrontendContribution - NEW');
                const managerWidget = await this.widgetManager.getOrCreateWidget<TerminalManagerWidget>(TerminalManagerWidget.ID);
                if (managerWidget instanceof TerminalManagerWidget) {
                    const terminalWidget = await managerWidget.createTerminalWidget();
                    managerWidget.addTerminalPage(terminalWidget);
                }
            }
        });
        // New Terminal (In Active Workspace)
        commands.registerCommand(TerminalCommands.NEW_ACTIVE_WORKSPACE, {
            execute: async () => {
                console.log('TerminalManagerFrontendContribution - NEW_ACTIVE_WORKSPACE');
                const managerWidget = await this.widgetManager.getOrCreateWidget<TerminalManagerWidget>(TerminalManagerWidget.ID);
                if (managerWidget instanceof TerminalManagerWidget) {
                    const terminalWidget = await managerWidget.createTerminalWidget();
                    managerWidget.addTerminalPage(terminalWidget);
                }
            }
        });
        // TODO New Terminal from Profile
        // commands.registerCommand(TerminalCommands.PROFILE_NEW, {
        //     execute: async () => {
        //         const profile = await this.terminalFrontendContribution.selectTerminalProfile(
        //             nls.localize('theia/terminal/selectProfile', 'Select a profile for the new terminal')
        //         );
        //         if (!profile) {
        //             return;
        //         }
        //         const managerWidget = await this.widgetManager.getOrCreateWidget<TerminalManagerWidget>(TerminalManagerWidget.ID);
        //         if (managerWidget instanceof TerminalManagerWidget) {
        //             const options = { profile: profile[1] as TerminalProfile };
        //             const terminalWidget = await managerWidget.createTerminalWidget(options);
        //             managerWidget.addTerminalPage(terminalWidget);
        //         }
        //     }
        // });

        // Split Terminal (add terminal in current group or as new child)
        commands.registerCommand(TerminalCommands.SPLIT, {
            execute: async () => {
                console.log('TerminalManagerFrontendContribution - SPLIT');
                const managerWidget = await this.widgetManager.getOrCreateWidget<TerminalManagerWidget>(TerminalManagerWidget.ID);
                if (managerWidget instanceof TerminalManagerWidget) {
                    const terminalWidget = await managerWidget.createTerminalWidget();
                    managerWidget.addTerminalPage(terminalWidget);
                }
            }
        });
    }
}
