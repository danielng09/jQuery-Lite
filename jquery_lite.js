(function () {
  window.$l = function(selector) {
    var elementList = [];
    if (typeof selector === "string") {
      elementList.concat(Array.prototype.slice.call(document.querySelectorAll(selector)));
    } else if (selector instanceof HTMLElement) {
      console.log("HTML ELEMENT!");
      elementList.push(selector);
    }
    return new DomNodeCollection(elementList);
  };

  var DomNodeCollection = function(array) {
    this.collection = array;
  };

  DomNodeCollection.prototype.html = function() {

  };


})();
