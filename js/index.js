$(function(){

    //请求数据
    $.getJSON('data/city.json',function(data){
        var citys = data.citylist;
        console.log(citys);

        //初始化省份选项
        initProvince(citys);
        //初始化二级城市
        getCity(0,citys);
        //初始化三级城市
        getArea(0,0,citys);



        //省份绑定change事件
        $("#province").change(function(){
            var p = $(this).val();//获取选择的省份
            //生成二级城市
            getCity(p,citys);
            //获取二级城市
            getArea(p,0,citys);
        })

        //二级城市绑定change事件
        $("#city").change(function(){
            var p = $("#province").val();//获取当前选择的省份
            var c = $(this).val();//获取当前选择的二级城市
            getArea(p,c,citys);
        })
    })
})

    //定义一个初始化省份选项的函数
    function initProvince(citys){//citys 城市列表数据（数组）
        var htmlStr = '';//用于存储option
        for(var i=0;i<citys.length;i++){
            htmlStr += '<option value="'+i+'">'+citys[i].p+'</option>';
        }
        //将生成的option标签插入到省份下拉列表
        $("#province").html(htmlStr);
}
    //定义一个获取二级城市的函数
    function getCity(p,citys){
        var htmlStr = '';
        var citys2 = citys[p].c;//获取二级城市列表的数据
        for(var i=0;i<citys2.length;i++){
            htmlStr += '<option value="'+i+'">'+citys2[i].n+'</option>';
        }
        $("#city").html(htmlStr);
    }

    //定义一个获取三级城市的函数
    function getArea(p,c,citys){//p 省份  c 市级
        //判断是否为直辖市，根据对象中a属性来判断是否包含三级城市
        if(citys[p].c[c].hasOwnProperty('a')){
            var citys3 = citys[p].c[c].a;//获取三级城市列表数据
            console.log(citys3)
            var htmlStr = '';
            for(var i=0;i<citys3.length;i++){
                htmlStr += '<option value="'+i+'">'+citys3[i].s+'</option>';
            }
            $("#area").html(htmlStr).show();
        }else{
            //隐藏三级城市的下拉列表
            $("#area").empty().hide();
        }


    }