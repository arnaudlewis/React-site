/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav className="sidebar-nav" ref={node => (this.root = node)}>
        <Link className="" to="/">Overview</Link>
        <Link className="" to="/about">Visual Identity</Link>
        <Link className="" to="/">Brand Assets</Link>
        <span>More</span>
        <Link className="" to="en-testing.appspot.com/legal/trademark-use" target="_blank">Trademark</Link>
      </nav>
    );
  }

}

export default Navigation;
