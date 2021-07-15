function showObj(obj) {//在动画开始时才把物件放到stage上
    obj.visible=true;
    console.log("now Started!!!");
}

function animateS(params,obj){//对缩放进行设置动画
    //[1]：变化曲线、[2]：起始时间、[3]：结束时间、[4]：起始量、[5]：结束量 ||注：时间为毫秒数
    let sStartTime = params[2]/1000;
    let sDuration = (params[3].length==0?params[2]:params[3])/1000-sStartTime;
    let startVal = params[4];
    let endVal = sDuration==0|params[5]==undefined?params[4]:params[5];
    console.log(sStartTime+"==="+sDuration+"==="+startVal+"==="+endVal);
    if(gsap.getTweensOf(obj).length==0){//最开始的动画，需要使用fromTo
        gsap.fromTo(obj,
        {
            pixi:{
                scale:startVal
            }
        },
        {
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                scale:endVal
            },
            onStart:showObj,
            onStartParams:[obj]
        });
    }else{//后续的动画使用to而不是fromTo
        gsap.to(obj,{
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                scale:endVal
            }
        })
    }
}

function animateF(params,obj){//变化不透明度
    let sStartTime=params[2]/1000;
    let sDuration = (params[3].length==0?params[2]:params[3])/1000-sStartTime;
    let startVal=params[4];
    let endVal=params[5];
    console.log(sStartTime+"==="+sDuration+"==="+startVal+"==="+endVal);
    if(gsap.getTweensOf(obj).length==0){//最开始的动画，需要使用fromTo
        gsap.fromTo(obj,
        {
            pixi:{
                alpha:startVal
            }
        },
        {
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                alpha:endVal
            },
            onStart:showObj,
            onStartParams:[obj]
        });
    }else{//后续的动画使用to而不是fromTo
        gsap.to(obj,{
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                alpha:endVal
            }
        })
    }
}

function animateMX(params,obj){//移动对象的X轴坐标
    let sStartTime=params[2]/1000;
    let sDuration = (params[3].length==0?params[2]:params[3])/1000-sStartTime;
    let startVal=params[4];
    let endVal=params[5];
    //console.log(sStartTime+"==="+sDuration+"==="+startVal+"==="+endVal);
    if(gsap.getTweensOf(obj).length==0){//最开始的动画，需要使用fromTo
        gsap.fromTo(obj,
        {
            pixi:{
                x:startVal
            }
        },
        {
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                x:endVal
            },
            onStart:showObj,
            onStartParams:[obj]
        });
    }else{//后续的动画使用to而不是fromTo
        gsap.to(obj,{
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                x:endVal
            }
        })
    }
}

function animateMY(params,obj){//移动对象的Y轴坐标
    let sStartTime=params[2]/1000;
    let sDuration = (params[3].length==0?params[2]:params[3])/1000-sStartTime;
    let startVal=params[4];
    let endVal=params[5];
    //console.log(sStartTime+"==="+sDuration+"==="+startVal+"==="+endVal);
    if(gsap.getTweensOf(obj).length==0){//最开始的动画，需要使用fromTo
        gsap.fromTo(obj,
        {
            pixi:{
                y:startVal
            }
        },
        {
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                y:endVal
            }
        });
    }else{//后续的动画使用to而不是fromTo
        gsap.to(obj,{
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                y:endVal
            }
        })
    }
}

function animateM(params,obj){//移动对象的XY轴坐标
    let sStartTime=params[2]/1000;
    let sDuration = (params[3].length==0?params[2]:params[3])/1000-sStartTime;
    let startXVal=params[4];
    let startYVal=params[5];
    let endXVal=params[6];
    let endYVal=params[7];
    //console.log(sStartTime+"==="+sDuration+"==="+startVal+"==="+endVal);
    if(gsap.getTweensOf(obj).length==0){//最开始的动画，需要使用fromTo
        gsap.fromTo(obj,
        {
            pixi:{
                x:startXVal,
                y:startYVal
            }
        },
        {
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                x:endXVal,
                y:endYVal
            }
        });
    }else{//后续的动画使用to而不是fromTo
        gsap.to(obj,{
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                x:endXVal,
                y:endYVal
            }
        })
    }
}

function animateR(params,obj){//对象的旋转角度
    let sStartTime=params[2]/1000;
    let sDuration = (params[3].length==0?params[2]:params[3])/1000-sStartTime;
    let startVal=params[4];
    let endVal=params[5];
    //console.log(sStartTime+"==="+sDuration+"==="+startVal+"==="+endVal);
    if(gsap.getTweensOf(obj).length==0){//最开始的动画，需要使用fromTo
        gsap.fromTo(obj,
        {
            pixi:{
                rotation:startVal
            }
        },
        {
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                rotation:endVal
            }
        });
    }else{//后续的动画使用to而不是fromTo
        gsap.to(obj,{
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                rotation:endVal
            }
        })
    }
}

function animateV(params,obj){//对象的矢量操作（压缩伸长）
    let sStartTime=params[2]/1000;
    let sDuration = (params[3].length==0?params[2]:params[3])/1000-sStartTime;
    let startWVal=params[4];//横宽
    let endWVal=params[5];
    let startHVal=params[6];//竖长
    let endHVal=params[7];
    //console.log(sStartTime+"==="+sDuration+"==="+startVal+"==="+endVal);
    if(gsap.getTweensOf(obj).length==0){//最开始的动画，需要使用fromTo
        gsap.fromTo(obj,
        {
            pixi:{
                scaleX:startWVal,
                scaleY:startHVal
            }
        },
        {
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                scaleX:endWVal,
                scaleY:endHVal
            }
        });
    }else{//后续的动画使用to而不是fromTo
        gsap.to(obj,{
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                scaleX:endWVal,
                scaleY:endHVal
            }
        })
    }
}

function animateC(params,obj){//对象的色调操作
    let sStartTime=params[2]/1000;
    let sDuration = (params[3].length==0?params[2]:params[3])/1000-sStartTime;
    //开始的RGB
    let sR=params[4];
    let sG=params[5];
    let sB=params[6];
    let sTintHex="#" + ((1 << 24) + (sR << 16) + (sG << 8) + sB).toString(16).slice(1);
    //结束的RGB
    let eR=params[7];
    let eG=params[8];
    let eB=params[9];
    let eTintHex="#" + ((1 << 24) + (eR << 16) + (eG << 8) + eB).toString(16).slice(1);
    if(gsap.getTweensOf(obj).length==0){//最开始的动画，需要使用fromTo
        gsap.fromTo(obj,
        {
            pixi:{
                tint:sTintHex
            }
        },
        {
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                tint:eTintHex
            }
        });
    }else{//后续的动画使用to而不是fromTo
        gsap.to(obj,{
            delay:sStartTime,
            duration:sDuration,
            pixi:{
                tint:eTintHex
            }
        })
    }
}
