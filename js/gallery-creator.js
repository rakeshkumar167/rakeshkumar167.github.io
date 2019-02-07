function createGallery(destination, imageList) {
    var length = imageList.length;
    for(var i=0;i<length;i++){
        $(destination).append('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/'+imageList[i].path+'/'+imageList[i].filename+'" data-sub-html="<h4>'+imageList[i].name+'</h4><p>'+imageList[i].text+'</p>"><a href="#"><img src="images/'+imageList[i].path+'/'+imageList[i].filename+'" alt="IMage" class="img-fluid"></a></div>');
    }
}