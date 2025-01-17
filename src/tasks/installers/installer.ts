/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import Command from '@oclif/command'
import * as Listr from 'listr'

import { OLMTasks } from './olm'
import { OperatorTasks } from './operator'

/**
 * Tasks related to installation way.
 */
export class InstallerTasks {
  updateTasks(flags: any, command: Command): ReadonlyArray<Listr.ListrTask> {
    const operatorTasks = new OperatorTasks()
    const olmTasks = new OLMTasks()

    let title: string
    let task: any

    if (flags.installer === 'operator') {
      title = '🏃‍  Running the CodeReady Workspaces operator Update'
      task = () => {
        return operatorTasks.updateTasks(flags, command)
      }
    } else if (flags.installer === 'olm') {
      title = '🏃‍  Running the CodeReady Workspaces operator Update using OLM'
      task = () => {
        return olmTasks.updateTasks(flags, command)
      }
    } else {
      title = '🏃‍  Installer preflight check'
      task = () => { command.error(`Installer ${flags.installer} does not support update ¯\\_(ツ)_/¯`) }
    }

    return [{
      title,
      task
    }]
  }

  preUpdateTasks(flags: any, command: Command): ReadonlyArray<Listr.ListrTask> {
    const operatorTasks = new OperatorTasks()
    const olmTasks = new OLMTasks()

    let title: string
    let task: any

    if (flags.installer === 'operator') {
      title = '🏃‍  Running the CodeReady Workspaces operator Update'
      task = () => {
        return operatorTasks.preUpdateTasks(flags, command)
      }
    } else if (flags.installer === 'olm') {
      title = '🏃‍  Running the CodeReady Workspaces operator Update using OLM'
      task = () => {
        return olmTasks.preUpdateTasks(flags, command)
      }
    } else {
      title = '🏃‍  Installer preflight check'
      task = () => { command.error(`Installer ${flags.installer} does not support update ¯\\_(ツ)_/¯`) }
    }

    return [{
      title,
      task
    }]
  }

  installTasks(flags: any, command: Command): ReadonlyArray<Listr.ListrTask> {
    const operatorTasks = new OperatorTasks()
    const olmTasks = new OLMTasks()

    let title: string
    let task: any

    if (flags.installer === 'operator') {
      title = '🏃‍  Running the CodeReady Workspaces operator'
      task = () => {
        // The operator installs CodeReady Workspaces in multiuser mode by default
        if (!flags.multiuser) {
          flags.multiuser = true
        }

        return operatorTasks.deployTasks(flags, command)
      }
    } else if (flags.installer === 'olm') {
      title = '🏃‍  Running Olm installaion CodeReady Workspaces'
      // The olm installs CodeReady Workspaces in multiuser mode by default
      if (!flags.multiuser) {
        flags.multiuser = true
      }
      task = () => olmTasks.startTasks(flags, command)
    } else {
      title = '🏃‍  Installer preflight check'
      task = () => { command.error(`Installer ${flags.installer} is not supported ¯\\_(ツ)_/¯`) }
    }

    return [{
      title,
      task
    }]
  }
}
