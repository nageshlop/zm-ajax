/*
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2005, 2006, 2007 Zimbra, Inc.
 * 
 * The contents of this file are subject to the Yahoo! Public License
 * Version 1.0 ("License"); you may not use this file except in
 * compliance with the License.  You may obtain a copy of the License at
 * http://www.zimbra.com/license.
 * 
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied.
 * ***** END LICENSE BLOCK *****
 */


DwtDisposeEvent = function(init) {
	if (arguments.length == 0) return;
	DwtEvent.call(this, true);
}

DwtDisposeEvent.prototype = new DwtEvent;
DwtDisposeEvent.prototype.constructor = DwtDisposeEvent;

DwtDisposeEvent.prototype.toString = 
function() {
	return "DwtDisposeEvent";
}
