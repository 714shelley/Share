/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-09 10:14:51
 * @version $Id$
 */
Ext.onReady(function() {
    var tree = Ext.create('Ext.tree.Panel', {
        renderTo: document.body,
        height: 600,
        title: 'Sales Areas - using typeProperty',
        rootVisible: false
    });

    var data = {
        "success": true,
        "children": [
            { "id": 1, "name": "Phil" },
            { "id": 2, "name": "Nico", "children": [
                { "id": 3, "name": "Mitchell-1" },
                { "id": 4, "name": "Mitchell-2" },
                { "id": 5, "name": "Mitchell-3" }
            ]},
            { "id": 6, "name": "Sue", "children": [
                { "id": 7, "name": "Mitchell-4" },
                { "id": 8, "name": "Mitchell-5" },
                { "id": 9, "name": "Mitchell-6", "children": [
                    { "id": 10, "name": "Mitchell-7" },
                    { "id": 11, "name": "Mitchell-8" },
                    { "id": 12, "name": "Mitchell-9" }
                ] }
            ] }
        ]
    };

    //循环数组，生成树
    var loadTree = function(root, node){
        if (node) {
            $.each(node, function(i, item){

                //是否有子节点
                if (node[i].children) {
                    //追加第一节子节点
                    var parent = root.appendChild({
                        text: node[i].name
                    });

                    // $.each(node[i].children, function(j, item){
                        //追加第二节子节点

                        // parent.appendChild({
                        //     text: node[i].children[j].name,
                        //     leaf: true
                        // });

                        loadTree(parent, node[i].children);
                    // });
                }else{
                    //追加第一节子节点，并设为叶子节点
                    root.appendChild({
                        text: node[i].name,
                        leaf: true
                    });
                } 
            }); 
        };
    };

    //获得根节点
    var root = tree.getRootNode();

    var node = data.children;

    //生成树
    loadTree(root, node);

    //树全部展开
    tree.expandAll();

    // root.removeChild(root,false);

    //删除所有节点
    // root.removeAll(false); 
    
    //追加子节点1
    var parent = root.appendChild({
        text: 'Parent 1'
    });
   
    parent.appendChild({
        text: 'Child 3',
        leaf: true
    });

    var child = parent.insertChild(0, {
        text: '我是插入的节点.我在第0个位置',
        leaf: true
    });

    parent.insertBefore({
        text: '我是插入的节点,我的位置是刚才插入的节点的下一个节点之前',
        leaf: true
    }, child.nextSibling);

    //追加子节点1的子节点
    var parent11 = parent.appendChild({
        text: 'Parent 11'
    });
     
    parent11.appendChild({
        text: 'Child 4',
        leaf: true
    });

});