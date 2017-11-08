export default {
  server: {
    dev: {
      url: 'dev-server-url'
    },
    mock: {
      url: 'http://private-4df451-mptprojekt.apiary-mock.com/'
    }
  }[process.env.NODE_ENV]
}
