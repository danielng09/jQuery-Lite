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
    this.collection = array || [];
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

  DomNodeCollection.prototype.removeClass = function(className) {
    this.collection.forEach(function(node) {
      if (something) {
        node.className = node.classNamereplace(className + " ", "");
      } else {
        node.className = node.className.replace(className, "");
      }
    });
  };

  DomNodeCollection.prototype.children = function() {
    var childCol = new DomNodeCollection();
    this.collection.forEach(function(node) {
      childCol.collection = childCol.collection.concat([].slice.call(node.children));
    });

    return childCol;
  };

  DomNodeCollection.prototype.parent = function() {
    var parentCol = new DomNodeCollection();
    var seen = {};
    this.collection.forEach(function(node) {
      if (!seen[node.parentNode.outerHTML]) {
        parentCol.collection.push(node.parentNode);
        seen[node.parentNode.outerHTML] = true;
      }
    });

    return parentCol;
  };

//Get the descendants of each element in the current set of matched elements,
//filtered by a selector, jQuery object, or element.
  DomNodeCollection.prototype.find = function(selector) {
    var results = [];

    if (typeof selector === "string") {
      this.collection.forEach(function(node) {
        results = results.concat([].slice.call(node.querySelectorAll(selector)));
      });
    } else if (selector instanceof DomNodeCollection) {

    } else if (selector instanceof HTMLElement) {

    }

    return new DomNodeCollection(results);
  };

  DomNodeCollection.prototype.remove = function() {
    this.collection.forEach(function(node) {
      node.remove();
    });

    return this.collection;
  };

// Attach an event handler function for one or more events to the selected elements.
  DomNodeCollection.prototype.on = function (eventType, selector, data, handler) {
    var collection = this.collection;
    if (selector) {
      collection = this.find(selector).collection;
    }

    collection.forEach(function(node) {
      node.addEventListener(eventType, handler.bind(null, data));
    });
  };

// Remove an event handler.
  DomNodeCollection.prototype.off = function () {
    
  };
})();
