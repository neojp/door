## door

Minimalistic HTTP proxy server with config auto-reloading and static file serving.

![](https://dl.dropboxusercontent.com/s/h7h40tl3j56jqtx/door.png)

## Install

```bash
$ npm install -g door
```

## Usage

Create a configuration file:

```json
{
  "*": "localhost:3000",
  "foo.com": "localhost:3001",
  "bar.net": "localhost:3002",
  "static.org": "/home/azer/sites/bar.org"
}
```

And start the server on `:8000`:

```bash
$ door config.json
```

To change the port number:

```bash
$ door config.json -p 80
```

No need to restart the server after changes. It watches the config file for changes and
updates its proxy table *(if no error occurred)* automatically.

![](https://dl.dropboxusercontent.com/s/lz5re7hq3qmc6wm/npmel_20.jpg)
