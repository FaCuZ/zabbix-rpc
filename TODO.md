# TO DO:
## Basic
- [ ] Load config from .env file.
- [ ] Sync version of all methods.
- [ ] Throw exceptions. 
- [ ] Autologin.
- [ ] Autoversion.

## Methods Implemented:
Progress: 72 of 223 = 32%
- [x] action
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [x] alert
	- [x] get

- [x] apiinfo
	- [x] version

- [ ] application
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] massadd
	- [ ] update

- [x] map
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [ ] configuration
	- [ ] export
	- [ ] import

- [ ] iconmap
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update

- [x] correlation
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [x] trigger
	- [x] create
	- [x] delete
	- [x] get
	- [x] update
	- [x] prototype (triggerprototype)
		- [x] create
		- [x] delete
		- [x] get
		- [x] update
	- [x] dependencies
		- [x] add (adddependencies)
		- [x] delete (deletedependencies)

- [ ] screen
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update
	- [ ] item (screenitem)
		- [ ] create
		- [ ] delete
		- [ ] get
		- [ ] update
		- [ ] updatebyposition

- [ ] item
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update
	- [ ] prototype (itemprototype)
		- [ ] create
		- [ ] delete
		- [ ] get
		- [ ] update

- [ ] event
	- [ ] acknowledge
	- [ ] get

- [ ] graph
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update
	- [ ] item (graphitem)
		- [ ] get
	- [ ] prototype (graphprototype)
		- [ ] create
		- [ ] delete
		- [ ] get
		- [ ] update

- [x] history
	- [x] get

- [ ] host
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] massadd
	- [ ] massremove
	- [ ] massupdate
	- [ ] update
	- [ ] group (hostgroup)
		- [ ] create
		- [ ] delete
		- [ ] get
		- [ ] massadd
		- [ ] massremove
		- [ ] massupdate
		- [ ] update
	- [ ] interface (hostinterface)
		- [ ] create
		- [ ] delete
		- [ ] get
		- [ ] massadd
		- [ ] massremove
		- [ ] replacehostinterfaces
		- [ ] update
	- [ ] prototype (hostprototype)
		- [ ] create
		- [ ] delete
		- [ ] get
		- [ ] update

- [x] image
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [x] maintenance
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [ ] template
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] massadd
	- [ ] massremove
	- [ ] massupdate
	- [ ] update
	- [ ] screen (templatescreen)
		- [ ] copy
		- [ ] create
		- [ ] delete
		- [ ] get
		- [ ] update
		- [ ] item (templatescreenitem) 
			- [ ] get

- [x] problem
	- [x] get

- [x] proxy
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [ ] script
	- [ ] create
	- [ ] delete
	- [ ] execute
	- [ ] get
	- [ ] getscriptsbyhosts
	- [ ] update

- [ ] httptest
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update

- [ ] service
	- [ ] adddependencies
	- [ ] addtimes
	- [ ] create
	- [ ] delete
	- [ ] deletedependencies
	- [ ] deletetimes
	- [ ] get
	- [ ] getsla
	- [ ] update

- [ ] dservice
	- [ ] get

- [ ] dhost
	- [ ] get
	
- [ ] dcheck
	- [ ] get

- [ ] drule
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update

- [ ] discoveryrule
	- [ ] copy
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update

- [ ] dashboard
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update

- [ ] valuemap
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update

- [ ] trend
	- [ ] get

- [ ] mediatype
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update

- [ ] task
	- [ ] create

- [x] user
	- [x] checkauthentication
	- [x] create
	- [x] delete
	- [x] get
	- [x] login
	- [x] logout
	- [x] update
	- [x] group (usergroup)
		- [x] create
		- [x] delete
		- [x] get
		- [x] update
	- [x] macro (usermacro)
		- [x] create
		- [x] createglobal
		- [x] delete
		- [x] deleteglobal
		- [x] get
		- [x] update
		- [x] updateglobal
