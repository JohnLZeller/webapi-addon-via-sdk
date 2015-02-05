var { Class } = require('sdk/core/heritage');
var { Unknown, Factory } = require('sdk/platform/xpcom');
var { Cc, Ci, Cu } = require('chrome');
var { XPCOMUtils } = Cu.import("resource://gre/modules/XPCOMUtils.jsm");

//
var webapiname = 'helloworld',
    contractId = '@me.org/' + webapiname;

// Define a component
var HelloWorld = Class({
  extends: Unknown,

  // XPCOM goop
  get wrappedJSObject() {
    return this;
  },
  QueryInterface: XPCOMUtils.generateQI([
    Ci.nsIDOMGlobalPropertyInitializer,
    Ci.nsIObserver,
    Ci.nsISupportsWeakReference
  ]),

  // Everything below here is implementation of your component

  hello: function() {
    return 'Hello World';
  }
});

// Create and register the factory
var factory = Factory({
  contract: contractId,
  Component: HelloWorld
});

// Register as a new navigator api
var Cm = Cc["@mozilla.org/categorymanager;1"].
         getService(Ci.nsICategoryManager);

Cm.addCategoryEntry("JavaScript-navigator-property",
                    webapiname, contractId, false, true);

// XPCOM clients can retrieve and use this new
// component in the normal way
var wrapper = Cc[contractId].createInstance(Ci.nsISupports);
var helloWorld = wrapper.wrappedJSObject;

// Test the xpcom component
dump('HEREHEREHEREHERE');

// Test the navigator api it adds
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
  include: "*",
  contentScript: 'console.log("Testing...", navigator.' + webapiname + ');'
});
