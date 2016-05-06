/* eslint-env browser */

'use strict';

export default class EncryptionHelper {

}

if (typeof window !== 'undefined') {
  window.gauntface = window.gauntface || {};
  window.gauntface.EncryptionHelper = EncryptionHelper;
}
