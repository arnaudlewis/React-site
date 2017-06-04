/**
 * React Site
 *
 *
 * Copyright © 2017-present Craig Aucutt. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';
import s from './Footer.css';

function Footer() {
  return (
    <footer className="">
    <div className={s.footerleft}>
      <ul className="mdl-mini-footer__link-list">
        <li><Link to="/">Overview</Link></li>
        <li><Link to="./assets">Brand Assets</Link></li>
        <li><Link to="http://www.evernote.com">Evernote.com</Link></li>
        <li><Link to="http://www.evernote.com/careers" target="_blank">Careers</Link></li>
      </ul>
    </div>
    <div className={s.footerright}>
      <ul>
        <li><Link to="">Follow</Link></li>
        <li><Link to="">M</Link></li>
        <li><Link to="">F</Link></li>
        <li><Link to="">T</Link></li>
        <li><Link to="">I</Link></li>
      </ul>
      </div>
    </footer>
  );
}

export default Footer;
