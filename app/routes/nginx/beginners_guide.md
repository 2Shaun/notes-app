#[Beginner's Guide](http://nginx.org/en/docs/beginners_guide.html#conf_structure)

- nginx has one master process and uses an event model to pass requests to specific worker processes
```
http {
	server {
		location / {
		}
		location /images/ {
			# the location parameter matches a URI and appends the match to the root directive
			# meaning, https://guesstimoji.com/images/emoji.png is mapped to /data/images/emoji.png
			root /data/
		}
	}
}
```
- the default listen directive is port 80 when it is not specified
- to use a proxy server, set up both a listen and root directive in the server block
  - this will send all requests to a `root` (note that a `location` block may not correspond to a path in the file system but a URL by the `proxy_pass` directive)
- location parameters use `~` before a regular expression (like gitlab-ci.yml)
