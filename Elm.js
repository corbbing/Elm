//Elm.js
//Version 0.0.2

function lm(name,tag,className,parent){
	this.name = name;
	this.class = className;
	this.element = document.createElement(tag);
	this.element.innerHTML = this.name;
	this.element.className = className;
	this.children = [];
	if (parent instanceof lm){
		if (parent.element){
			parent.element.appendChild(this.element);
			parent.children.push(this);
		}
	}
	else if (typeof parent == "string"){
		var prt = document.getElementById(parent);
		prt.appendChild(this.element);
	}
	else {
			parent.appendChild(this.element);
		}
}

lm.prototype.setName = function(n){
	this.name = n;
	this.element.innerHTML = n;
	for (var i = 0; i < this.children.length; i++){
		this.element.appendChild(this.children[i].element);
	}
}

lm.prototype.setClassName = function(n){
	this.className = n;
	this.element.className = n;
}

lm.prototype.addChild = function(c){
	this.children.push(c);
}
