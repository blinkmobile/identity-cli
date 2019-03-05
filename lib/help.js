'use strict'

module.exports = `
Usage: blinkm identity <command>

Where command is one of:

  login, logout

Login

  login                       => start the login process, if no flags are passed, a browser based login will begin
    --username <username>     => username to login with, if password is not specified, you will be prompted for it
    --password <password>     => password to login with, requires the username flag as well

Logout

  logout                      => logout of the service being extended


Examples
  bm identity login --username
  bm identity login --username email@provider.com
  bm identity login

  bm identity logout
`
