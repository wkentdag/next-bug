module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': {
        page: '/',
        query: { activeSection: 'about' },
      },
      '/shows': {
        page: '/',
        query: { activeSection: 'shows' },
      },
      '/gallery': {
        page: '/',
        query: { activeSection: 'gallery' },
      },
      '/store': {
        page: '/',
        query: { activeSection: 'store' },
      },
    };
  },
}
