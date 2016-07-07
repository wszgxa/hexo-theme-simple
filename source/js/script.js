;(function (win, doc){
  var simple = {
    init: function () {
      this.bind()
    },
    bind: function () {
      var self = this;
      $(doc).on('click', '#nav-btn' ,function(e) {
        self.toggleBodyClass()
      })
    },
    // sidebar状态机
    sidebarState: (function () {
      var state = false;
      return function () {
        return state = !state;
      }
    })(),
    toggleBodyClass: function () {
      var b = $('body');
      this.sidebarState() ? b.addClass('sideShow') : b.removeClass('sideShow');  
      return;
    }
  }
  simple.init();
})(window, document)