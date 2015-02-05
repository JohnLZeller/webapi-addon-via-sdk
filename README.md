# webapi-addon-via-sdk

The purpose of this repo is to build an extension that runs on b2g-desktop

* .gaia.diff holds all changes I make to gaia

To build gaia with changes, run 'make DESKTOP_SHIMS=1 NOFTU=1 DEBUG=1'

Run 'jpm xpi' to generate an xpi

## Troubleshooting
* The xpi that jpm generates sets the following in install.rdf
	* bootstrap = true
	* unpack = false
* Discovered that the install.rdf in the xpi that jpm generates had the guid of firefox and not b2g
  * Firefox GUID: ec8030f7-c20a-464f-9b0e-13a3a9e97384
  * B2G GUID: 3c2e2abc-06d4-11e1-ac3b-374f68613e61
* Also discovered that the install.rdf in the xpi that jpm generates had min and max versions set for Firefox
	* Reset to have minVersion=6.0 and maxVersion=*