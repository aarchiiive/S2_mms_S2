function dataURLtoBlob(dataurl) {

    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], {
        type: mime
    });
}

function downloadImg(imgSrc) {

    var image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imgSrc;

    var fileName = image.src.split("/").pop();

    image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.getContext('2d').drawImage(this, 0, 0);

        if (typeof window.navigator.msSaveBlob !== 'undefined') {
            window.navigator.msSaveBlob(dataURLtoBlob(canvas.toDataURL()), fileName);
        } 
        else {
            var link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = fileName;
            link.click();
        }
    };
}