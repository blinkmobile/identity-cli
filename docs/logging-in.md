# blinkmobile / identity-cli

## Logging In

The OneBlink CLI tools require users to be authenticated before use.
The `login` command will allow user to authenticate themselves with OneBlink via a variety of login providers

`bm identity login` Start a browser based login process.

- `--tenant <tenant>` Log in for a specific tenant. Support tenants are `oneblink` and `civicplus` (case in-sensitive). Omitting <tenant> will default to `oneblink`.
- `--username <username>` Start a username and password login process. Omitting <username> will prompt for username.
- `--password <password>` Specify password instead of being prompted.

To start a browser based login process, this is how users can login using a social account e.g. Google:

```sh
bm identity login
```

To start a username and password login process and be prompted for password:

```sh
bm identity login --username username@email.com
```
