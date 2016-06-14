// Knick Focks
var DragAndDrop = function(opt){
	var self = this;
    self.prefix, self.el, self.options = opt;
	self.init = function(){
		self.getPrefix();
        for(var i = 0; i < self.options.id.length; i++){
            el = document.getElementById(self.options.id[i]);
            if(self.isTouchDevice()){
                el.addEventListener('touchstart',self.handleMouseDown);
                window.addEventListener('touchmove', self.handleMouseMove);
        		el.addEventListener('touchend', self.handleMouseUp);
            }else{
                el.addEventListener('mousedown',self.handleMouseDown);
                window.addEventListener('mousemove', self.handleMouseMove);
        		el.addEventListener('mouseup', self.handleMouseUp);
            }
        }
	}

	self.remove = function(){
        for(var i = 0; i < self.options.id.length; i++){
            el = document.getElementById(self.options.id[i]);
            if(self.isTouchDevice()){
                el.removeEventListener('touchstart',self.handleMouseDown);
                window.removeEventListener('touchmove', self.handleMouseMove);
                el.removeEventListener('touchend', self.handleMouseUp);
            }else{
                el.removeEventListener('mousedown',self.handleMouseDown);
                window.removeEventListener('mousemove', self.handleMouseMove);
        		el.removeEventListener('mouseup', self.handleMouseUp);
            }
        }
	}

	self.handleMouseDown = function(event){
        event.preventDefault();
        self.options.mouseDown = true;
        self.options.startClientX = event.clientX || event.touches[0].screenX;
		self.options.startClientY = event.clientY || event.touches[0].screenY;
        el = document.getElementById(event.target.id);

        if(self.options.id.length > 1){
            self.options.zIndex++;
            el.style.zIndex = self.options.zIndex;
        }else{
            el.style.zIndex = self.options.zIndex;
        }

        if(self.options.elementSettings.animate){
            el.style.setProperty(self.prefix + 'transition', 'left ' + self.options.elementSettings.animateDuration + ' ' + self.options.elementSettings.animateEase + ' ' + self.options.elementSettings.animateDelay + ', top ' + self.options.elementSettings.animateDuration + ' ' + self.options.elementSettings.animateEase + ' ' + self.options.elementSettings.animateDelay);
        }

        if(self.options.elementSettings.centerToElement){
            el.style.left = self.options.startClientX - (el.offsetWidth / 2) + 'px';
            el.style.top = self.options.startClientY - (el.offsetHeight / 2) + 'px';
        }else{
            el.style.left = self.options.startClientX + 'px';
            el.style.top = self.options.startClientY + 'px';
        }
        if(self.options.dragStartEvent){
            self.options.dragStartEvent(self.options);
        }
	}

    self.handleMouseMove = function(event){
        if(self.options.mouseDown){
            event.preventDefault();
            el.style.setProperty(self.prefix + 'transition', '');
            self.options.endClientX = event.clientX || event.touches[0].screenX;
    		self.options.endClientY = event.clientY || event.touches[0].screenY;
            if(self.options.elementSettings.centerToElement){
                el.style.left = self.options.endClientX - (el.offsetWidth / 2) + 'px';
                el.style.top = self.options.endClientY - (el.offsetHeight / 2) + 'px';
            }else{
                el.style.left = self.options.endClientX + 'px';
                el.style.top = self.options.endClientY + 'px';
            }
            if(self.options.dragMoveEvent){
                self.options.dragMoveEvent(self.options);
            }
        }
	}

    self.handleMouseUp = function(event){
        self.options.mouseDown = false;
        self.options.endClientX = event.clientX || self.options.endClientX;
        self.options.endClientY = event.clientY || self.options.endClientY;
        if(self.options.dragEndEvent){
            self.options.dragEndEvent(self.options);
        }
	}

    self.getPrefix = function(){
        if(/mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase())){
            self.prefix = '-moz-';
        }else if(/webkit/.test(navigator.userAgent.toLowerCase())){
            self.prefix = '-webkit-';
        }else if(/msie/.test(navigator.userAgent.toLowerCase())){
            self.prefix = '-ms-';
        }else if(/opera/.test(navigator.userAgent.toLowerCase())){
            self.prefix = '-o-';
        }else{
            self.prefix = '';
        }
    }

    self.isTouchDevice = function(){
        try{
            document.createEvent('TouchEvent');
            return true;
        }catch(e){
            return false;
        }
    }
}
