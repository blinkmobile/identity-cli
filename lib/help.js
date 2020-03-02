'use strict'

module.exports = `
Usage: blinkm identity <command>

Where command is one of:

  login, logout

Login

  login                       => start the login process, if no flags are passed, a browser based login will begin
    --tenant <tenant>         => tenant to login to, if not specific defaults to "oneblink", valid tenants "oneblink" and "civicplus"
    --username <username>     => username to login with, if password is not specified, you will be prompted for it
    --password <password>     => password to login with, requires the username flag as well

Logout

  logout                      => logout of the service being extended
    --tenant <tenant>         => tenant to logout of, if not specific defaults to "oneblink", valid tenants "oneblink" and "civicplus"


Examples
  bm identity login --username
  bm identity login --username email@provider.com
  bm identity login
  bm identity login --tenant oneblink
  bm identity login --tenant civicplus

  bm identity logout
  bm identity logout --tenant oneblink
  bm identity logout --tenant civicplus
`
