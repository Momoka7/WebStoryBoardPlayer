function playMusic(){//播放音乐
    document.getElementById("audioNode").play();
}

function loadMusic(dom) {//加载音乐
    mr=new FileReader();
    mr.readAsDataURL(dom.files[0]);
    mr.onload=function(e){//加载完毕后
        //console.log(mr.result);
        //创建audio DOM节点
        let a=document.getElementById("musicSrc");
        a.setAttribute("src",""+mr.result);
        document.getElementById("audioNode").load();
    }
}