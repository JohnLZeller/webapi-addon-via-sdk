# webapi-addon-via-sdk

The purpose of this repo is to build an extension that runs on b2g-desktop

* .gaia.diff holds all changes I make to gaia

To build gaia with changes, run 'make DESKTOP_SHIMS=1 NOFTU=1 DEBUG=1'

Run 'jpm xpi' to generate an xpi

## Troubleshooting
* The xpi that jpm generates sets the following in install.rdf
	* bootstrap = true
	* unpack = false