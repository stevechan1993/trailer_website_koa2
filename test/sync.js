const doSync= (sth, time) => new Promise(resolve => {
    setTimeout(() => {
        console.log(sth + '用了' + time + '毫秒');
        resolve();
    }, time);
})

const doAsync = (sth, time, cb) => {
    setTimeout(() => {
        console.log(sth + '用了' + time + '毫秒');
        cb && cb();
    }, time);
}

const doElse = (sth) => {
    console.log(sth);
}

const Steve = { doSync, doAsync };
const Jack = { doSync, doAsync, doElse};

;(async () => {
    console.log('case 1: Jack来到门口');
    await Steve.doSync('Steve 刷牙', 1000);
    console.log('啥也没干，一直等');
    await Jack.doSync('Jack洗澡', 2000)
    Jack.doElse('Jack去忙别的了');

    console.log('case 3: Jack来到门口按下通知开关');
    Steve.doAsync('Steve 刷牙', 1000, () => {
        console.log('卫生间通知Jack来洗澡')
        Jack.doAsync('Jack洗澡', 2000);
    })
    Jack.doElse('Jack去忙别的了');
})()