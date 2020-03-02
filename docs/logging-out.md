# blinkmobile / identity-cli

## Logging Out

Once you have finished using the CLI tools that required authentication, please remember to logout.

To start the logout process:

```sh
bm identity logout
```

- `--tenant <tenant>` Log out for a specific tenant. Supported tenants are `oneblink` and `civicplus` (case in-sensitive). Omitting <tenant> will default to `oneblink`.
