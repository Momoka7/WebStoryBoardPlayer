# WebStoryBoardPlayer
A JS-based Osu BoardPlayer

# 食用方法
1. 用VSCode打开此项目
2. 部署LiveServer，并用其打开template.html
3. 在黑色stage下方有四个框分别代表：需要解析的osb文件、音频文件、延时播放毫秒数、osb所属文件夹
4. 分别按照**文件夹路径->音频->osb文件**的顺序配置所需解析的Storyboard
5. 等待加载，即可完成

# 注意事项
1. 由于JS单线程特性及其性能所限，想要通过此项目来解析带有复杂/大量粒子特效是不实际的
2. 如何判断能否解析某个osb:代码行数最好小于10w行，1-5w行为佳
3. 注意暂不支持Animation的解析
4. 如若发现和osu编辑器中演示的不同，例如在osu编辑器中某些Storyboard有物件追踪，而此项目所解析的没有，那么则注意.osu文件中是可以包含Storyboard描述代码的，所以若要在此项目中解析，则可直接将某.osu文件中[Event]下的代码复制到所要解析的.osb文件中即可

