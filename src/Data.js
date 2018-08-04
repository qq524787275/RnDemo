const imageList=[
    "http://bos.pgzs.com/otherres/pic/2016/11/19/9782d0df4b7f4572949ad5a71b126b7c/1462842388436809_636151688017912505.jpeg",
    "http://attach.bbs.miui.com/forum/201302/19/133238rarcztftrka05xay.jpg",
    "http://i9.download.fd.pchome.net/t_600x1024/g1/M00/05/07/oYYBAFIMTb2IatgKAAIdoaIVq_IAAAyCAEcxrcAAh25438.jpg",
    "http://cdn2.image.apk.gfan.com/asdf/PImages/2014/5/16/827669_2cf399b01-cb41-49ed-bef9-cd60f459beae.jpg",
    "http://www.285868.com/uploadfile/2016/0928/20160928071105215.jpg",
    "http://img.25pp.com/uploadfile/bizhi/ipad/2014/0626/20140626091409889_ipadm.jpg",
    "http://img.18183.com/uploads/allimg/160209/94-1602091F105.jpg"
]

export const getBackgroundImage=()=>{

    return imageList[Math.floor(Math.random()*imageList.length)]
}