/**
 * @func 设置我们屏幕全屏
 * @param Boolean isFullscreen 是否全屏
 */
export default function _fullscreen(isFullscreen) {
    const element = document.documentElement;
    if (!isFullscreen) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else {
            alert('你的浏览器暂不支持全屏显示');
        }
    } else {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
        } else {
            alert('你的浏览器暂不支持全屏显示');
        }
    }
}
