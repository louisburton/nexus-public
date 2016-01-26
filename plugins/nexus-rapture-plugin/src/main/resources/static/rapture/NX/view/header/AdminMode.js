/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-present Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/*global Ext*/

/**
 * "admin" mode button.
 *
 * @since 3.0
 */
Ext.define('NX.view.header.AdminMode', {
  extend: 'Ext.button.Button',
  alias: 'widget.nx-header-admin-mode',
  requires: [
    'NX.I18n'
  ],

  /**
   * @override
   */
  initComponent: function() {
    Ext.apply(this, {
      ui: 'nx-header',
      cls: 'nx-modebutton',
      scale: 'medium',
      height: 39,
      width: 39,

      /**
       * @cfg mode Mode name
       */
      mode: 'admin',
      toggleGroup: 'mode',
      allowDepress: false,

      /**
       * @cfg autoHide If button should auto hide when no features are available for selected mode
       */
      autoHide: true,

      title: NX.I18n.get('Header_AdminMode_Title'),
      tooltip: NX.I18n.get('Header_AdminMode_Tooltip'),
      glyph: 'xf013@FontAwesome', /* fa-gear */

      collapseMenu: false
    });

    this.callParent();
  }
});