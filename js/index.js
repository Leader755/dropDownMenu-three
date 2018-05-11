$(function(){

    //��������
    $.getJSON('data/city.json',function(data){
        var citys = data.citylist;
        console.log(citys);

        //��ʼ��ʡ��ѡ��
        initProvince(citys);
        //��ʼ����������
        getCity(0,citys);
        //��ʼ����������
        getArea(0,0,citys);



        //ʡ�ݰ�change�¼�
        $("#province").change(function(){
            var p = $(this).val();//��ȡѡ���ʡ��
            //���ɶ�������
            getCity(p,citys);
            //��ȡ��������
            getArea(p,0,citys);
        })

        //�������а�change�¼�
        $("#city").change(function(){
            var p = $("#province").val();//��ȡ��ǰѡ���ʡ��
            var c = $(this).val();//��ȡ��ǰѡ��Ķ�������
            getArea(p,c,citys);
        })
    })
})

    //����һ����ʼ��ʡ��ѡ��ĺ���
    function initProvince(citys){//citys �����б����ݣ����飩
        var htmlStr = '';//���ڴ洢option
        for(var i=0;i<citys.length;i++){
            htmlStr += '<option value="'+i+'">'+citys[i].p+'</option>';
        }
        //�����ɵ�option��ǩ���뵽ʡ�������б�
        $("#province").html(htmlStr);
}
    //����һ����ȡ�������еĺ���
    function getCity(p,citys){
        var htmlStr = '';
        var citys2 = citys[p].c;//��ȡ���������б������
        for(var i=0;i<citys2.length;i++){
            htmlStr += '<option value="'+i+'">'+citys2[i].n+'</option>';
        }
        $("#city").html(htmlStr);
    }

    //����һ����ȡ�������еĺ���
    function getArea(p,c,citys){//p ʡ��  c �м�
        //�ж��Ƿ�ΪֱϽ�У����ݶ�����a�������ж��Ƿ������������
        if(citys[p].c[c].hasOwnProperty('a')){
            var citys3 = citys[p].c[c].a;//��ȡ���������б�����
            console.log(citys3)
            var htmlStr = '';
            for(var i=0;i<citys3.length;i++){
                htmlStr += '<option value="'+i+'">'+citys3[i].s+'</option>';
            }
            $("#area").html(htmlStr).show();
        }else{
            //�����������е������б�
            $("#area").empty().hide();
        }


    }