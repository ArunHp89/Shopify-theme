	var accItem = document.getElementsByClassName('set');
    var accHD = document.querySelectorAll('a');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'set close';
        }
        if (itemClass == 'set close') {
            this.parentNode.className = 'set open';
        }
    }
