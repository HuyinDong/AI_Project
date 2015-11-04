/**
 * Created by dongyin on 10/27/15.
 */

/*
 *  Priority Queue
 */

var PriorityQueue = function(){
       this.list = [];

};

PriorityQueue.prototype.enQueue = function(obj){
    this.list.push(obj);
    this.list.sort(function(a,b) {
        if (a.weight > b.weight) {
            return -1;
        } else if (a.weight < b.weight) {
            return 1;
        } else {
            return 0;
        }
    });
};

PriorityQueue.prototype.deQueue = function(){
    return this.list.pop();
};

PriorityQueue.prototype.isEmpty = function(){
    return this.list.length == 0 ;
};


/*
 *    Queue
 */

var Queue = function(){
    this.list = [];
};

Queue.prototype.enQueue = function(obj){
    this.list.push(obj);
};

Queue.prototype.deQueue = function(){
    var temp =  this.list[0];
    this.list.splice(0,1);
    return temp;
};

Queue.prototype.isEmpty = function(){
    return this.list.length == 0 ;
};

/*
 *  Stack
 */

var Stack = function(){
    this.list = [];
};

Stack.prototype.push = function(obj){
    this.list.push(obj);
};

Stack.prototype.pop = function(){
    var temp =  this.list[this.list.length-1];
    this.list.splice(this.list.length-1,1);
    return temp;
};

Stack.prototype.isEmpty = function(){
    return this.list.length == 0 ;
};
