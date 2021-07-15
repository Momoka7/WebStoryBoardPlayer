function showObj(obj) {//在动画开始时才把物件放到stage上
    obj.visible=true;
}


function eliminateObj(obj) {
    if(gsap.getTweensOf(obj).length==0&&obj.visible){
        //console.log(obj.parent);
        //if(obj.parent!=null)obj.parent.removeChild(obj);//则将其移除
        if(obj.father=="FG"){
            layers[1].removeChild(obj);
        }else{
            layers[0].removeChild(obj);
        }
        obj.destroy();
        //console.log("eliminated!!!");
    }
}

function removeSprites(){//移除已使用过的Sprite,用于优化性能
    sprites.forEach((e,i) => {
        if(gsap.getTweensOf(e).length==0&&e.visible&&e.alpha==0){//若已没有动画需要过渡、已绘制过且透明度为0
            sprites.splice(i,1);
            e.parent.removeChild(e);//则将其移除
        }
    });
    //console.log(sprites.length);
}

function animateS(params,obj){//对缩放进行设置动画
    //[1]：变化曲线、[2]：起始时间、[3]：结束时间、[4]：起始量、[5]：结束量 ||注：时间为毫秒数
    let sStartTime = (params[2]<0?0:params[2])/1000;
    let sDuration = (params[3].length==0?sStartTime*1000:params[3])/1000-sStartTime;
    let startVal=Number(params[4]);
    let endVal=Number(params.length<6?params[4]:params[5]);
    if(sDuration==0) sDuration=0.01;//用极短时间代替瞬间

    timeline.fromTo(obj,{
        pixi:{
            scale:startVal
        }
    },{
        pixi:{
            scale:endVal
        },
        duration:sDuration,
        onStart:showObj,
        onStartParams:[obj],
        onComplete:eliminateObj,
        onCompleteParams:[obj]
    },sStartTime)
}

function animateF(params,obj){//变化不透明度
    let sStartTime = (params[2]<0?0:params[2])/1000;
    let sDuration = (params[3].length==0?sStartTime*1000:params[3])/1000-sStartTime;
    let startVal=Number(params[4]);
    let endVal=Number(params.length<6?params[4]:params[5]);
    //console.log(sStartTime+"==="+sDuration+"==="+startVal+"==="+endVal);
    if(sDuration==0) sDuration=0.01;//用极短时间代替瞬间

    timeline.fromTo(obj,{
        pixi:{
            alpha:startVal
        }
    },{
        pixi:{
            alpha:endVal
        },
        duration:sDuration,
        onStart:showObj,
        onStartParams:[obj],
        onComplete:eliminateObj,
        onCompleteParams:[obj]
    },sStartTime)

}

function animateMX(params,obj){//移动对象的X轴坐标
    let sStartTime = (params[2]<0?0:params[2])/1000;
    let sDuration = (params[3].length==0?sStartTime*1000:params[3])/1000-sStartTime;
    let startVal=params[4];
    let endVal=params.length<6?params[4]:params[5];
    //console.log(sStartTime+"==="+sDuration+"==="+startVal+"==="+endVal);
    if(sDuration==0) sDuration=0.01;//用极短时间代替瞬间

    timeline.fromTo(obj,{
        pixi:{
            x:startVal
        }
    },{
        pixi:{
            x:endVal
        },
        duration:sDuration,
        onStart:showObj,
        onStartParams:[obj],
        onComplete:eliminateObj,
        onCompleteParams:[obj]
    },sStartTime)
}

function animateMY(params,obj){//移动对象的Y轴坐标
    let sStartTime = (params[2]<0?0:params[2])/1000;
    let sDuration = (params[3].length==0?sStartTime*1000:params[3])/1000-sStartTime;
    let startVal=params[4];
    let endVal=params.length<6?params[4]:params[5];
    //console.log(sStartTime+"==="+sDuration+"==="+startVal+"==="+endVal);
    if(sDuration==0) sDuration=0.01;//用极短时间代替瞬间

    timeline.fromTo(obj,{
        pixi:{
            y:startVal
        }
    },{
        pixi:{
            y:endVal
        },
        duration:sDuration,
        onStart:showObj,
        onStartParams:[obj],
        onComplete:eliminateObj,
        onCompleteParams:[obj]
    },sStartTime)
}

function animateM(params,obj){//移动对象的XY轴坐标
    let sStartTime = (params[2]<0?0:params[2])/1000;
    let sDuration = (params[3].length==0?sStartTime*1000:params[3])/1000-sStartTime;
    let startXVal=params[4];
    let startYVal=params[5];
    let endXVal=params.length<7?params[4]:params[6];
    let endYVal=params.length<7?params[5]:params[7];
    //console.log(sStartTime+"==="+sDuration+"==="+startVal+"==="+endVal);

    if(sDuration==0) sDuration=0.01;//用极短时间代替瞬间

    timeline.fromTo(obj,{
        pixi:{
            x:startXVal,
            y:startYVal
        }
    },{
        pixi:{
            x:endXVal,
            y:endYVal
        },
        duration:sDuration,
        onStart:showObj,
        onStartParams:[obj],
        onComplete:eliminateObj,
        onCompleteParams:[obj]
    },sStartTime)
}

function testRepeat(obj) {
    console.log("repeated!!!"+obj)
}

function animateR(params,obj){//对象的旋转角度
    let sStartTime = (params[2]<0?0:params[2])/1000;
    let sDuration = (params[3].length==0?sStartTime*1000:params[3])/1000-sStartTime;
    let startVal=Number(params[4]);
    let endVal=Number(params.length<6?params[4]:params[5]);
    //console.log(params.length+"==="+sStartTime+"RR"+sDuration+"RR"+startVal+"RR"+endVal);
    if(sDuration==0) sDuration=0.01;//用极短时间代替瞬间

    timeline.fromTo(obj,{
        rotation:startVal
    },{
        rotation:endVal,
        duration:sDuration,
        onStart:showObj,
        onStartParams:[obj],
        onComplete:eliminateObj,
        onCompleteParams:[obj]
    },sStartTime)
}

function animateV(params,obj){//对象的矢量操作（压缩伸长）
    let sStartTime = (params[2]<0?0:params[2])/1000;
    let sDuration = (params[3].length==0?sStartTime*1000:params[3])/1000-sStartTime;
    let startWVal=params[4];//横宽
    let startHVal=params[5];//竖长
    let endWVal=params.length<7?params[4]:params[6];
    let endHVal=params.length<7?params[5]:params[7];
    //console.log(sStartTime+"==="+sDuration+"==="+startWVal+"==="+endWVal);
    if(sDuration==0) sDuration=0.01;//用极短时间代替瞬间

    timeline.fromTo(obj,{
        pixi:{
            scaleX:startWVal,
            scaleY:startHVal
        }
    },{
        pixi:{
            scaleX:startWVal,
            scaleY:startHVal
        },
        duration:sDuration,
        onStart:showObj,
        onStartParams:[obj],
        onComplete:eliminateObj,
        onCompleteParams:[obj]
    },sStartTime)
}

function animateC(params,obj){//对象的色调操作
    let sStartTime = (params[2]<0?0:params[2])/1000;
    let sDuration = (params[3].length==0?sStartTime*1000:params[3])/1000-sStartTime;
    //开始的RGB
    let sR=Number(params[4]).toString(16);
    let sG=Number(params[5]).toString(16);
    let sB=Number(params[6]).toString(16);
    let sTintHex="#"+sR+sG+sB;
    //结束的RGB
    let eR=params.length<8?Number(params[4]).toString(16):Number(params[7]).toString(16);
    let eG=params.length<8?Number(params[5]).toString(16):Number(params[8]).toString(16);
    let eB=params.length<8?Number(params[6]).toString(16):Number(params[9]).toString(16);
    let eTintHex="#" +eR+eG+eB;;
    
    //console.log(sTintHex+"-=-="+eTintHex)
    if(sDuration==0) sDuration=0.01;//用极短时间代替瞬间

    timeline.fromTo(obj,{
        pixi:{
            tint:sTintHex
        }
    },{
        pixi:{
            tint:sTintHex
        },
        duration:sDuration,
        onStart:showObj,
        onStartParams:[obj],
        onComplete:eliminateObj,
        onCompleteParams:[obj]
    },sStartTime)
}
