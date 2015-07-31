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
  // Description: Insert content, specified by the parameter, to the end of each element in the set of matched elements.
  DomNodeCollection.prototype.append = function(thing) {
    if (type instanceof DomNodeCollection) {
      this.collection.concat(thing.collection);
    } else if (typeof thing === "string") {
      this.collection[0].outerHTML += thing;
    } else {
      this.collection.push(thing);
    }
  };

  DomNodeCollection.prototype.attr = function(attrName) {
    var val;
    this.collection.forEach(function(node) {
      if (node.hasAttribute(attrName)) {
        val = node.getAttribute(attrName);
      }
    });

    return val;
  };

  DomNodeCollection.prototype.addClass = function(className) {
    this.collection.forEach(function(node) {
      node.className = node.className.replace(className, "");
      if (node.className === "") {
        node.className += className;
      } else {
        node.className += " " + className;
      }
    });

    return this.collection;
  };

  DomNodeCollection.prototype.removeClass= function(className) {
    this.collection.forEach(function(node) {
      if (something) {
        node.className = node.classNamereplace(className + " ", "");
      } else {
        node.className = node.className.replace(className, "");
      }
    });
  };



})();
