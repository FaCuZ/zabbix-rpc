# TO DO:
## Basic
- [x] Documentation.
- [x] Testing and coveralls.
- [ ] Load config from .env file.
- [x] ~~Sync version of all methods.~~
- [x] ~~Throw exceptions.~~ Retrun JSON error.
- [x] ~~Auto login.~~
- [x] Auto check version.
- [ ] Extra methods like .count()
- [ ] Login, logout shortcut
- [ ] Remove Axios dependency.

## Methods Implemented:
Progress: 231 of 231 = 100%
- [x] action
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [x] alert
	- [x] get

- [x] apiinfo
	- [x] version

- [ ] auditlog
	- [ ] get

- [ ] authentication
	- [ ] get
	- [ ] update

- [x] application
	- [x] create
	- [x] delete
	- [x] get
	- [x] update
	- [x] mass
		- [x] add (massadd)

- [x] map
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [x] configuration
	- [x] export
	- [x] import

- [x] iconmap
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

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

- [x] screen
	- [x] create
	- [x] delete
	- [x] get
	- [x] update
	- [x] item (screenitem)
		- [x] create
		- [x] delete
		- [x] get
		- [x] update
		- [x] updatebyposition

- [x] item
	- [x] create
	- [x] delete
	- [x] get
	- [x] update
	- [x] prototype (itemprototype)
		- [x] create
		- [x] delete
		- [x] get
		- [x] update

- [x] event
	- [x] acknowledge
	- [x] get

- [x] graph
	- [x] create
	- [x] delete
	- [x] get
	- [x] update
	- [x] item (graphitem)
		- [x] get
	- [x] prototype (graphprototype)
		- [x] create
		- [x] delete
		- [x] get
		- [x] update

- [ ] hanode
	- [ ] get

- [x] history
	- [x] get

- [x] host
	- [x] create
	- [x] delete
	- [x] get
	- [x] update
	- [x] mass
		- [x] add (massadd)
		- [x] remove (massremove)
		- [x] update (massupdate)
	- [x] group (hostgroup)
		- [x] create
		- [x] delete
		- [x] get
		- [x] update
		- [ ] propagate
		- [x] mass
			- [x] add (massadd)
			- [x] remove (massremove)
			- [x] update (massupdate)
	- [x] interface (hostinterface)
		- [x] create
		- [x] delete
		- [x] get
		- [x] update
		- [x] replacehostinterfaces
		- [x] mass
			- [x] add (massadd)
			- [x] remove (massremove)
	- [x] prototype (hostprototype)
		- [x] create
		- [x] delete
		- [x] get
		- [x] update

- [ ] housekeeping
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

- [x] template
	- [x] create
	- [x] delete
	- [x] get
	- [x] update
	- [x] mass
		- [x] add (massadd)
		- [x] remove (massremove)
		- [x] update (massupdate)
	- [x] screen (templatescreen)
		- [x] copy
		- [x] create
		- [x] delete
		- [x] get
		- [x] update
		- [x] item (templatescreenitem)
			- [x] get
	- [ ] dashboard (templatedashboard)
		- [ ] create
		- [ ] delete
		- [ ] get
		- [ ] update
	- [ ] group (templategroup)
		- [ ] create
		- [ ] delete
		- [ ] get
		- [ ] propagate
		- [ ] update
		- [ ] mass
			- [ ] add (massadd)
			- [ ] remove (massremove)
			- [ ] update (massupdate)

- [ ] token
	- [ ] create
	- [ ] delete
	- [ ] generate
	- [ ] get
	- [ ] update

- [x] problem
	- [x] get

- [x] proxy
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [ ] regexp
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update

- [ ] report
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update

- [ ] role
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] update

- [x] script
	- [x] create
	- [x] delete
	- [x] execute
	- [x] get
	- [x] getscriptsbyhosts
	- [x] update

- [ ] settings
	- [ ] get
	- [ ] update


- [ ] sla
	- [ ] create
	- [ ] delete
	- [ ] get
	- [ ] getsli
	- [ ] update

- [x] httptest
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [x] service
	- [x] create
	- [x] delete
	- [x] get
	- [x] getsla
	- [x] update
	- [x] times
		- [x] add (addtimes)
		- [x] delete (deletetimes)
	- [x] dependencies
		- [x] add (adddependencies)
		- [x] delete (deletedependencies)

- [x] discovered
	- [x] service (dservice)
		- [x] get
	- [x] host (dhost)
		- [x] get

- [x] discovery
	- [x] dcheck (dcheck)
		- [x] get
	- [x] drule (drule)
		- [x] create
		- [x] delete
		- [x] get
		- [x] update
	- [ ] rule (discoveryrule)
		- [ ] copy
		- [ ] create
		- [ ] delete
		- [ ] get
		- [ ] update

- [x] autoregistration
	- [x] get
	- [x] update

- [x] dashboard
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [x] valuemap
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [x] trend
	- [x] get

- [x] mediatype
	- [x] create
	- [x] delete
	- [x] get
	- [x] update

- [x] task
	- [x] create
	- [ ] get

- [x] user
	- [x] check (checkauthentication)
	- [x] create
	- [x] delete
	- [x] get
	- [x] login
	- [x] logout
	- [ ] unblock
	- [x] update
	- [x] group (usergroup)
		- [x] create
		- [x] delete
		- [x] get
		- [x] update
	- [ ] directory (userdirectory)
		- [ ] create
		- [ ] delete
		- [ ] get
		- [ ] test
		- [ ] update
	- [x] macro (usermacro)
		- [x] create
		- [x] createglobal
		- [x] delete
		- [x] deleteglobal
		- [x] get
		- [x] update
		- [x] updateglobal
