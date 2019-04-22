import { deepClone } from "@/util/deepClone.js";

let demoArr = [1, 9, 5, 6, 2, 8, 7]; //实例数组
/**
 * 冒泡排序
 * 原理:
 * 从左到右,相邻两个位置排序,把大的置换到最后
 * 每次可选出一个最大/最小值，比较n-1轮(数组长度位n)
 */

//第一版
export function bubbleSort(arr) {
    console.time("bubbleSort_time");
    let len = arr.length,
        sortNum = 0;
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            ++sortNum;
        }
        console.log(`bubbleSort_第${i}遍：${arr}`);
    }
    // console.log(`bubbleSort_比较次数：${sortNum}`);
    console.timeEnd("bubbleSort_time");
    return arr;
}

bubbleSort(deepClone(demoArr));
/**
 *问题：第2遍其实就可以终止了
 *bubbleSort_第1遍：1,5,6,2,8,7,9
  bubbleSort_第2遍：1,5,2,6,7,8,9
  bubbleSort_第3遍：1,2,5,6,7,8,9
  bubbleSort_第4遍：1,2,5,6,7,8,9
  bubbleSort_第5遍：1,2,5,6,7,8,9
  bubbleSort_第6遍：1,2,5,6,7,8,9
  bubbleSort_比较次数：21
  bubbleSort: 17.9130859375ms
 */

/**
 * 第二版优化：检查有排序好了，终止排序
 */
export function bubbleSort2(arr) {
    console.time("bubbleSort2_time");
    let len = arr.length,
        sortNum = 0;
    let isStop = false;

    for (let i = 1; i < len; i++) {
        if (isStop) break;
        isStop = true;
        for (let j = 0; j < len - i; j++) {
            //注意:由于每次遍历完都可以知道最后的一个是最值,所以这个len也要变化
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                isStop = false;
            }
            ++sortNum;
        }

        console.log(`bubbleSort2_第${i}遍：${arr}`);
    }

    // console.log(`bubbleSort_比较次数：${sortNum}`);
    console.timeEnd("bubbleSort2_time");
    return arr;
}

bubbleSort2(deepClone(demoArr));

/**
 * 优化输出：
 * bubbleSort2_第1遍：1,5,6,2,8,7,9
   bubbleSort2_第2遍：1,5,2,6,7,8,9
   bubbleSort2_第3遍：1,2,5,6,7,8,9
   bubbleSort2_第4遍：1,2,5,6,7,8,9
   bubbleSort_比较次数：18
   bubbleSort2_time: 0.94091796875ms
 */

/**
 * 第三版优化：
 * 从第二版输出可以看出，尾部6,7,8,9其实已经是有序的了，不需再重新排序
 * 添加上一轮最后交换index标志
 */
export function bubbleSort3(arr) {
    console.time("bubbleSort3_time");
    let len = arr.length,
        sortNum = 0;
    let isStop = false;
    let lastChangeIndex = 0; //上次交换index
    let sortBorder = len - 1;

    for (let i = 1; i < len; i++) {
        if (isStop) break;
        isStop = true;
        for (let j = 0; j < sortBorder; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                isStop = false;
                lastChangeIndex = j;
            }
            ++sortNum;
        }
        sortBorder = lastChangeIndex;

        console.log(`bubbleSort3_第${i}遍：${arr}`);
    }

    // console.log(`bubbleSort3_比较次数：${sortNum}`);
    console.timeEnd("bubbleSort3_time");
    return arr;
}

bubbleSort3(deepClone(demoArr));

/**
 * 优化输出：
 * bubbleSort3_第1遍：1,5,6,2,8,7,9
   bubbleSort3_第2遍：1,5,2,6,7,8,9
   bubbleSort3_第3遍：1,2,5,6,7,8,9
   bubbleSort3_第4遍：1,2,5,6,7,8,9
   bubbleSort_比较次数：16
   bubbleSort3_time: 0.89111328125ms
 */

/**
 * 第四版优化-冒泡排序->鸡尾酒算法,头尾开始冒泡
 */
export function bubbleUpgrade(arr) {
    console.time("bubbleUpgrade_time");
    let len = arr.length
    let left = 0,
        right = len - 1,
        shift = 0;

    while (left < right) {
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                shift = i;
            }
        }

        right = shift;
        // console.log(`bubbleUpgrade_第${sortNum}遍,right:${right}`, arr);

        for (let i = right; i > left; i--) {
            if (arr[i - 1] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;

                shift = i;
            }
        }
        left = shift;

        // console.log(`bubbleUpgrade_第${sortNum}遍left:${left}`, arr);
    }
    // console.log(`bubbleUpgrade_比较次数：${sortNum}`);
    console.timeEnd("bubbleUpgrade_time");
    return arr;
}

bubbleUpgrade(deepClone(demoArr));
/**
 * bubbleUpgrade_time: 0.029052734375ms
 */

//参考：https://juejin.im/post/5bbc7c6de51d450e5c47a26c
