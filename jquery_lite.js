(function () {
  window.$l = function(selector) {
    var elementList = [];
    if (typeof selector === "string") {
      elementList = elementList.concat(Array.prototype.slice.call(document.querySelectorAll(selector)));
    } else if (selector instanceof HTMLElement) {
      console.log("HTML ELEMENT!");
      elementList.push(selector);
    }
    return new DomNodeCollection(elementList);
  };

  var DomNodeCollection = function(array) {
    this.collection = array;
  };

  DomNodeCollection.prototype.html = function(string) {
    if (string) {
      this.collection.forEach(function(node) {
        node.innerHTML = string;
      });
    } else {
      return this.collection[0].innerHTML;
    }
  };

  DomNodeCollection.prototype.empty = function() {
    this.collection.forEach(function(node) {
      node.innerHTML = "";
    });
  };

  // this method should be able to accept either a jQuery-lite wrapped collection, an HTML element, or a string.
  DomNodeCollection.prototype.append = function(thing) {
    if (type instanceof DomNodeCollection) {

    } else if (typeof thing === "string") {

    } else {
      
    }
  };

})();
