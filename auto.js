timeout = prompt("每多少秒自動重新載入一次？");
count = 0
current = location.href;
if (timeout > 0)
    setTimeout('reload()', 1000 * timeout);
else
    location.replace(current);
function reload() {
    setTimeout('reload()', 1000 * timeout);
    count++;
    console.log('每' + timeout + '秒自動重新載入一次，重新載入的次數：' + count + '次');
    pre = '<frameset cols=\'*\'>\n<frame src=\'' + current + '\'/>';
    pre += '</frameset>';
    with (document) { write(pre); void (close()) };
}
