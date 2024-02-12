 $(".activity-title").mouseenter(function(){
        if($(this).index()/2 == activity){
            return;
        }else{
            $(this).children().eq(1).show();
        }
    })
    $(".activity-title").mouseleave(function(){
        if($(this).index()/2 == activity){
            return;
        }else{
            $(this).children().eq(1).hide();
        }
    })
    $(".activity-title").click(function(){
        if($(this).index()/2 == activity){
            return;
        }else{
            activity = $(this).index()/2;
            console.log(activity);
            for(let i=0;i<3;i++){
                if(i == activity){
                    $(".activity-title").eq(i).children().eq(1).show();
                    $(".activity-content").eq(i).css("width","555px");
                }else{
                    $(".activity-title").eq(i).children().eq(1).hide();
                    $(".activity-content").eq(i).css("width","0");
                }
            }
        }
    })
