
var Person = function(first, last, middle) { //TODO
    this.first = first; //TODO
    this.middle = middle; 
    this.last = last; 
};

Person.prototype = { 

    whoAreYou : function() { 
        return this.first + (this.middle ? ' ' + 'foo' + this.middle: '') + ' ' + this.last; 
    }

};
