# blinkmobile / identity-cli

## Manage Tenants

Some BlinkMobile CLI tools require the user to select the Tenant they are currently working on
The `tenant` command will allow user to:
- Display current and previous tenants
- Set a new tenant
- Remove the current tenant and also remove from the list of previous

`bm identity tenant` Show current and previous tenants
- `<tenantName>` Set as current and add <tenantName> to previous if new.
- `<tenantName> --remove` Remove <tenantName> from previous tenants.

To display current and previous tenants:
```sh
bm identity tenant
```

To set a new or previously used tenant
```sh
bm identity tenant nameoftenant
```

To remove a tenant
```sh
bm identity tenant nameoftenant --remove
```
