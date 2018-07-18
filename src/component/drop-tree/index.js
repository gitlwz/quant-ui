import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import { Input, Icon, AutoComplete } from 'antd';
import classNames from 'classnames';

let $ = window.jQuery
export default class DropTree extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onReset: PropTypes.func,
    dataSource: PropTypes.array,
  };

  static defaultProps = {
    onReset: () => { },
    className: '',
    dataSource: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSourse: props.dataSource,
    };
    this.dataSourseCP = cloneDeep(this.state.dataSourse)
  }
  onReset = () =>{
    console.log("onReset调用了")
  }
  componentWillMount = () => {
    (function($) {

      $.fn.jOrgChart = function(options) {
        var opts = $.extend({}, $.fn.jOrgChart.defaults, options);
        var $appendTo = $(opts.chartElement);
    
        // build the tree
        var $this = $(this);
        var $container = $("<div class='" + opts.chartClass + "'/>");
        if($this.is("ul")) {
          buildNode($this.find("li:first"), $container, 0, opts);
        }
        else if($this.is("li")) {
          buildNode($this, $container, 0, opts);
        }
        $appendTo.append($container);
    
        // add drag and drop if enabled
        if(opts.dragAndDrop){
            $('div.node').draggable({
                cursor      : 'move',
                distance    : 40,
                helper      : 'clone',
                opacity     : 0.8,
                revert      : 'invalid',
                revertDuration : 100,
                snap        : 'div.node.expanded',
                snapMode    : 'inner',
                stack       : 'div.node'
            });
            
            $('div.node').droppable({
                accept      : '.node',          
                activeClass : 'drag-active',
                hoverClass  : 'drop-hover'
            });
            
          // Drag start event handler for nodes
          $('div.node').bind("dragstart", function handleDragStart( event, ui ){
            
            var sourceNode = $(this);
            sourceNode.parentsUntil('.node-container')
                       .find('*')
                       .filter('.node')
                       .droppable('disable');
          });
    
          // Drag stop event handler for nodes
          $('div.node').bind("dragstop", function handleDragStop( event, ui ){
    
            /* reload the plugin */
            $(opts.chartElement).children().remove();
            $this.jOrgChart(opts);      
          });
        
          // Drop event handler for nodes
          $('div.node').bind("drop", function handleDropEvent( event, ui ) {    
        
            var targetID = $(this).data("tree-node");
            var targetLi = $this.find("li").filter(function() { return $(this).data("tree-node") === targetID; } );
            var targetUl = targetLi.children('ul');
        
            var sourceID = ui.draggable.data("tree-node");		
            var sourceLi = $this.find("li").filter(function() { return $(this).data("tree-node") === sourceID; } );		
            var sourceUl = sourceLi.parent('ul');
            // changeNode(sourceLi[0].firstChild.id,targetLi[0].firstChild.id)
            
    
            if (targetUl.length > 0){
              targetUl.append(sourceLi);
            } else {
              targetLi.append("<ul></ul>");
              targetLi.children('ul').append(sourceLi);
            }
            
            //Removes any empty lists
            if (sourceUl.children().length === 0){
              sourceUl.remove();
            }
        
          }); // handleDropEvent
            
        } // Drag and drop
      };
    
      // Option defaults
      $.fn.jOrgChart.defaults = {
        chartElement : 'body',
        depth      : -1,
        chartClass : "jOrgChart",
        dragAndDrop: false
      };
      
      var nodeCount = 0;
      // Method that recursively builds the tree
      function buildNode($node, $appendTo, level, opts) {
        var $table = $("<table cellpadding='0' cellspacing='0' border='0'/>");
        var $tbody = $("<tbody/>");
    
        // Construct the node container(s)
        var $nodeRow = $("<tr/>").addClass("node-cells");
        var $nodeCell = $("<td/>").addClass("node-cell").attr("colspan", 2);
        var $childNodes = $node.children("ul:first").children("li");
        var $nodeDiv;
        
        if($childNodes.length > 1) {
          $nodeCell.attr("colspan", $childNodes.length * 2);
        }
        // Draw the node
        // Get the contents - any markup except li and ul allowed
        var $nodeContent = $node.clone()
                                .children("ul,li")
                                .remove()
                                .end()
                                .html();
      
          //Increaments the node count which is used to link the source list and the org chart
        nodeCount++;
        $node.data("tree-node", nodeCount);
        $nodeDiv = $("<div>").addClass("node")
                                         .data("tree-node", nodeCount)
                                         .append($nodeContent);
    
        // Expand and contract nodes
        if ($childNodes.length > 0) {
          $nodeDiv.click(function() {
              var $this = $(this);
              var $tr = $this.closest("tr");
    
              if($tr.hasClass('contracted')){
                $this.css('cursor','n-resize');
                $tr.removeClass('contracted').addClass('expanded');
                $tr.nextAll("tr").css('visibility', '');
    
                // Update the <li> appropriately so that if the tree redraws collapsed/non-collapsed nodes
                // maintain their appearance
                $node.removeClass('collapsed');
              }else{
                $this.css('cursor','s-resize');
                $tr.removeClass('expanded').addClass('contracted');
                $tr.nextAll("tr").css('visibility', 'hidden');
    
                $node.addClass('collapsed');
              }
            });
        }
        
        $nodeCell.append($nodeDiv);
        $nodeRow.append($nodeCell);
        $tbody.append($nodeRow);
    
        if($childNodes.length > 0) {
          // if it can be expanded then change the cursor
          $nodeDiv.css('cursor','n-resize');
        
          // recurse until leaves found (-1) or to the level specified
          if(opts.depth == -1 || (level+1 < opts.depth)) { 
            var $downLineRow = $("<tr/>");
            var $downLineCell = $("<td/>").attr("colspan", $childNodes.length*2);
            $downLineRow.append($downLineCell);
            
            // draw the connecting line from the parent node to the horizontal line 
            var $downLine = $("<div></div>").addClass("line down");
            $downLineCell.append($downLine);
            $tbody.append($downLineRow);
    
            // Draw the horizontal lines
            var $linesRow = $("<tr/>");
            $childNodes.each(function() {
              var $left = $("<td>&nbsp;</td>").addClass("line left top");
              var $right = $("<td>&nbsp;</td>").addClass("line right top");
              $linesRow.append($left).append($right);
            });
    
            // horizontal line shouldn't extend beyond the first and last child branches
            $linesRow.find("td:first")
                        .removeClass("top")
                     .end()
                     .find("td:last")
                        .removeClass("top");
    
            $tbody.append($linesRow);
            var $childNodesRow = $("<tr/>");
            $childNodes.each(function() {
               var $td = $("<td class='node-container'/>");
               $td.attr("colspan", 2);
               // recurse through children lists and items
               buildNode($(this), $td, level+1, opts);
               $childNodesRow.append($td);
            });
    
          }
          $tbody.append($childNodesRow);
        }
    
        // any classes on the LI element get copied to the relevant node in the tree
        // apart from the special 'collapsed' class, which collapses the sub-tree at this point
        if ($node.attr('class') != undefined) {
            var classList = $node.attr('class').split(/\s+/);
            $.each(classList, function(index,item) {
                if (item == 'collapsed') {
                    console.log($node);
                    $nodeRow.nextAll('tr').css('visibility', 'hidden');
                        $nodeRow.removeClass('expanded');
                        $nodeRow.addClass('contracted');
                        $nodeDiv.css('cursor','s-resize');
                } else {
                    $nodeDiv.addClass(item);
                }
            });
        }
    
        $table.append($tbody);
        $appendTo.append($table);
        
        /* Prevent trees collapsing if a link inside a node is clicked */
        $nodeDiv.children('a').click(function(e){
            console.log(e);
            e.stopPropagation();
        });
      };
    
    })(window.jQuery);
  };
  componentDidMount = () => {
    //模拟异步
    setTimeout(() => {
      $("#jOrgChart").empty()
      var result = {
        "data": [{ "id": 1, "name": "企业主体信用得分", "pid": null, "childrens": [{ "id": 2, "name": "企业素质", "pid": 1, "childrens": [{ "id": 5, "name": "基本信息", "pid": 2, "childrens": [{ "id": 10, "name": "企业主体信息识别", "pid": 5, "childrens": [] }, { "id": 11, "name": "企业持续注册时间", "pid": 5, "childrens": [] }, { "id": 12, "name": "注册资本", "pid": 5, "childrens": [] }] }, { "id": 6, "name": "管理认证", "pid": 2, "childrens": [] }] }, { "id": 3, "name": "履约记录", "pid": 1, "childrens": [{ "id": 7, "name": "税务执行情况", "pid": 3, "childrens": [{ "id": 14, "name": "是否按时缴纳税款", "pid": 7, "childrens": [{ "id": 13, "name": "国际性管理认证", "pid": 14, "childrens": [] }] }] }, { "id": 8, "name": "网贷情况", "pid": 3, "childrens": [{ "id": 15, "name": "网贷逾期", "pid": 8, "childrens": [] }] }] }, { "id": 4, "name": "公共监督", "pid": 1, "childrens": [{ "id": 9, "name": "行政处罚", "pid": 4, "childrens": [{ "id": 16, "name": "处罚信息", "pid": 9, "childrens": [] }] }] }] }
        ]
      }
      var showlist = $("<ul id='org' style='display:none'></ul>");
      
      this.showall(result.data, showlist);
      $("#jOrgChart").append(showlist);
      $("#org").jOrgChart({
        chartElement: '#jOrgChart',//指定在某个dom生成jorgchart
        dragAndDrop: true //设置是否可拖动
      });
    }, 500)
  };
  showall = (menu_list,parent) => {
    let that = this;
    $.each(menu_list, function(index, val) {
      if(val.childrens.length > 0){

          var li = $("<li></li>");
          li.append("<a id="+ val.id + "," + val.pid +" href='javascript:void(0)'>"+val.name+"</a>").append("<ul></ul>").appendTo(parent);
          //递归显示
          that.showall(val.childrens, $(li).children().eq(1));
      }else{
          $("<li></li>").append("<a id="+ val.id + "," + val.pid +" href='javascript:void(0)'>"+val.name+"</a>").appendTo(parent);
      }
    });
  }
  render() {
    const { className, ...restProps } = this.props;
    const { dataSourse } = this.state;
    return (
      <div id='jOrgChart'></div>
    );
  }
}
