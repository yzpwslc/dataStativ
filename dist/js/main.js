/**
 * Created by yzp1011 on 18-2-10.
 */

/**
 *init
 */
var i = 0;
var blockarr = ['img1'];
var myChart = [];
var paramOptionArr = [];
var optionArr = [];

$().ready(function(){
    actionInit();
    blockInit();
    chartInit();
});

function actionInit(){
    $("#addBtn").bind("click",function () {
        addBlock();
    });
}

/**
 * charts handler
 */
function chartInit(){
    newChart();
}

function newChart(){
    var divName = "mainimg";
    var imgDiv = document.getElementById(divName);
    var url = "./json.php";
    optionArr[divName] = createOption(1);
    //optionArr[divName]['tooltip'] = {trigger: 'axis'};
    myChart[divName] = echarts.init(imgDiv);
    myChart[divName].showLoading("加载中");
    $.get(url).done(function (data0) {
       // console.log(data0);
        optionArr[divName].dataset.source = data0;
        myChart[divName].setOption(optionArr[divName]);
    });
    createOption(1);
}

function newOption(){
    var option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 32, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };
    return option;
}

function createOption(para){
    var option = {
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source:[]
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                gridIndex: 0
            },
            series: [
                {
                    type: 'line',
                    seriesLayoutBy: 'row',
                    encode:{
                        x:0,
                        y:2
                    }
                }
            ]
        };
   //console.log(option);

    return option;
}

function addLine(param){

}

function updateChart(chart,option){

}

function delChart(index){
    myChart[index] = null;
}

/**
 * Blocks handler
 */

function blockInit(){

}

function addBlockDiaglog(){
    $("#addBlockDig").show(10);
}

function paramOption(){
    if(!paramOptionArr.length){

    }
}

function addBlock(){
    i = i + 1;
    var dId = "img0" +  i.toString();
    var addBaseDiv = "#addimg";
    var divClass = "";
    var blockNew =  '<div id="' + dId + '"></div>';
    var mainBlock = "#" + dId;
    var imgId = "main0" + i.toString();
    var imgHtml = '<div class="imgShow" id="' + imgId + '>';
    $(blockNew).insertBefore(addBaseDiv);
    $('<div class = "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">').appendTo("#" + dId);
    $('<h1 class="h4">IMG TITLE</h1>').appendTo(mainBlock + "> div");
    $('<div class="btn-group mr-2">').appendTo(mainBlock + "> div");
    $('<button class="btn btn-sm btn-outline-secondary">叠加</button>').appendTo(mainBlock + "> div > div");
    $('<button class="btn btn-sm btn-outline-secondary" onclick="removeBlock($(this))">删除</button>').appendTo(mainBlock + "> div > div");
    $(imgHtml).appendTo(mainBlock);
    blockarr.push(dId);
}

function removeBlock(dom){
    var blockRoot = dom.parent().parent().parent();
    var rmBlock = blockRoot.attr("id");
    blockRoot.remove();
    blockarr.splice(blockarr.indexOf(rmBlock),1);
    delChart(rmBlock);
}