;(function (win, doc, $) {
  var simple = {
    init: function () {
      this.bind()
      this.initSidebar()
    },
    bind: function () {
      var self = this
      $(doc).on('click', '#nav-btn' , function () {
        self.toggleBodyClass()
      })
      .on('click', '#back-top', function () {
        $('html, body').animate({scrollTop:0}, 'slow')
      })
    },
    // sidebar状态机
    sidebarState: (function () {
      var state = false
      var sideState = localStorage.getItem('sidebarState')
      if (sideState != undefined) {
        state = !(sideState == 'true')
      }
      return function () {
        return state = !state
      }
    })(),
    // sidebar 初始化
    initSidebar: function() {
      var sidebarState = localStorage.getItem('sidebarState')
      if (sidebarState) {
        this.toggleBodyClass(sidebarState)
      }
      return
    },
    toggleBodyClass: function (tag) {
      var b = $('body')
      var state = this.sidebarState()
      if (tag != undefined) {
        tag == 'true' ? b.addClass('sideShow') : b.removeClass('sideShow')
        return
      }
      state ? b.addClass('sideShow') : b.removeClass('sideShow')
      localStorage.setItem('sidebarState', state)
      return
    }
  }
  simple.init()
})(window, document, Zepto);