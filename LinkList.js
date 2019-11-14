function LinkList() {
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }

    var length = 0;
    var head = null;
    var tail = null;
    this.append = function(data) {
        var node = new Node(data);
        if(head == null) {
            head = node;
            tail = head;
        } else {
            tail.next = node;
            tail = node;
        }
        length+=1;
        return true;
    }
    this.print = function() {
        var curr_node = head;
        var str = '';
        while(curr_node) {
            str += curr_node.data.toString() + '=>';
            curr_node = curr_node.next;
        }

        str+= 'null';
        console.log(str);
        console.log("长度为" + length.toString());
    }
    // 在指定位置插入一个元素
    this.insert = function(index, data) {
        if(index > length || index < 0) {
            return null;
        }
        if(index === length) {
            return this.append(data);
        }

        var node = new Node(data);
        if(index === 0) {
            node.next = head;
            head = node;
            return true;
        }
        let insertIndex = 1;
        let curr_node = head;
        while(insertIndex < index) {
            insertIndex++;
            curr_node = curr_node.next;
        }

        node.next = curr_node.next;
        curr_node.next = node;
        length++;
        return true;
    }
    this.remove = function(index) {
        if(index > length - 1 || index < 0) {
            return null;
        }
        let del_node = null;
        if(index === 0) {
            del_node = head;
            head = head.next;
            length--;
            return del_node.data;
        }
        let del_index = 0;
        let curr_node = head;
        let pre_node = null;
        while(del_index < index) {
            del_index++;
            pre_node = curr_node;
            curr_node = curr_node.next;
        }
        del_node = curr_node;
        pre_node.next = curr_node.next;
        if(curr_node.next === null) {
            tail = pre_node;
        }
        length--;
        del_node.next = null;
        return del_node.data;
    }
    this.remove_tail = function() {
        return this.remove(length - 1)
    }
    this.remove_head = function() {
        return this.remove(0);
    }
    this.get = function(index) {
        if(index >= length || index < 0) {
            return null;
        }
        let curr_index = 0;
        let curr_node = head;
        while(curr_index < index) {
            curr_index++;
            curr_node = curr_node.next;
        }
        return curr_node.data;
    }
    this.head = function() {
        return this.get(0);
    }
    this.tail = function() {
        return this.get(length - 1);
    }
    this.indexOf = function(data) {
        let curr_node = head;
        let curr_index = 0;
        while(curr_index < length) {
            if(curr_node.data === data) {
                return curr_index;
            }
            curr_index++;
            curr_node = curr_node.next;
        }
        return -1;
    }
    this.isEmpty = function() {
        return length === 0;
    }
    this.clear = function() {
        length = 0;
        head = null;
        tail = null;
    }
}