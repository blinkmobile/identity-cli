# blinkmobile / identity-cli

## Logging In

Some BlinkMobile CLI tools require users to be authenticated before use.
The `login` command will allow user to authenticate themselves with BlinkMobile via a variety of login providers

`bm identity login` Start a browser based login process.
- `--username <username>` Start a username and password login process. Omitting <username> will prompt for username.
- `--password <password>` Specify password instead of being prompted.
- `--email <emailAddress>` Start a passwordless email login process. Omitting <emailAddress> will prompt for email address.
- `--sms <phoneNumber>` Start a passwordless sms login process. Omitting <phoneNumber> will prompt for phone number.

To start a browser based login process, this is how users can login using a social account e.g. Google:
```sh
bm identity login
```

To start a username and password login process and be prompted for password:
```sh
bm identity login --username username@email.com
```
