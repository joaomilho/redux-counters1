# Kevernote counters 1

Simple react counter + Simple redux counter, with server-side rendering.

Related to [https://github.com/joaomilho/redux-counters2](https://github.com/joaomilho/redux-counters2)

#### Running

After cloning, run:

```
npm install
```

##### Only server

```
node .server.js
```

Now go to [http://localhost:3000/](http://localhost:3000/) to see the server running. As you can see, it renders the counters right away, but they don't actually work.

##### Only client

```
npm start
```

Now go to [http://localhost:3001/](http://localhost:3001/) to see the client running. As you can see it takes some miliseconds to render and replace the `{{component}}` thing. But it works.

##### Both

```
npm start
```

Now go to [http://localhost:3000/](http://localhost:3000/) to see both running.
