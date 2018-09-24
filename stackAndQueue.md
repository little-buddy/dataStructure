# 栈和队列

## 栈 stack
> 限定仅在表尾进行插入和删除操作的线性表，不含任何数据元素的栈称为空栈
<br>允许插入和删除的一端称为 `栈顶`
<br>另一端称为 `栈底`
<br>特性：后进先出 last in first out LIFO，按一定顺序入栈，但出栈的顺序不唯一

### 顺序栈
    栈的顺序存储结构称为顺序栈，顺序栈本质上是顺序表的简化，下标为0的一端作为栈底

> top指针为-1时表示空栈
<br> `两栈共享空间`
<br> 由于顺序栈的单向延伸的特性，使用一个数组来存储两个栈，一个栈的栈底为该数组的始端，另一个栈的栈底为该数组的末端，每个栈的端点向中间延伸
<br> 临界点是 top1 = top2 -1
<br> 比较适合当两个栈的空间需求相反时

### 链栈
    栈的链接存储结构称为链栈
> 结构的话是与单链表的结点结构相同，因为只能在栈顶进行增删，那单链表的头部做栈顶是最方便的,且不需要一个头结点的
<br> 其实就是单链表的头插法去构建一个单链表
<br> 判空操作 top == NULL

### 顺序栈和链栈的比较
    其实还是从顺序表和单链表的优缺点进行比较，由于栈只需要在栈顶进行增删，所以对于线性表的操作时间复杂度都是O(1)的常量
    对于顺序栈来说需要提前确定栈的空间长度，容易造成上溢或者空间浪费，而链栈会有一个多余的空间去存储数据之间的关系
    在同比空间消耗上是比顺序栈大的，但是它不需要提前确定空间的长度
    总的来说，如果数据元素的个数变化较大的时候会选择链栈，这也是选择线性表的数据结构时的一个考量

## 队列(queue)
    队列是只允许在一端进行插入操作在另一端进行删除操作的线性表
> `队头` 删除（出队）
<br> `队尾` 插入（入队、进队）

### 顺序存储结构队列 -- 循环队列
> * 要求把表中的n个元素都存储在数组的前n个单元，这样就造成了出队的时候会将剩下n-1个元素向前移动，导致时间复杂度为O(N)
> * 优化一个点就是，设置 front 表示队头 rear 表示队尾进行操作的话，时间复杂度编程了O(1) 但是在入队出队的过程中，整个队列会整体
往右移动，导致明明存在数组空间，但上溢了 `假溢出`
> * 解决假溢出的办法就是允许队列直接从数组小标最大的位置移动到延续到数组下表最小的位置
> * 又出来一个问题就是队满的条件和队空的条件都是 front = rear，所以会浪费一个空间来使队头区分开来
<br> 满足 `(rear+1)%QueueSize=front` 队满条件，队空依旧是rear = front
<br> `front -> 队头元素的前一位置` `rear -> 队尾元素`
<br> 本质上来说，他是用2个指针，通过求余来进行指针的延续从而达到循环的效果，跟循环链表还是有明显的差别的

### 链接存储结构队列 -- 链队列
    为了使空队列和非空队列的操作一致，链队列也加上头结点，队头指向头结点，队尾指向终端结点，大部分是头插法的方式

## 循环队列与链队列的比较
    基本等同于顺序表与单链表的比较，一种数据结构的不同实现方案嘛

## 栈的应用举例 -- 表达式求值
> * 中缀表达式求值
> * 火车车厢重排
<br> 一列货运列车共有n节车厢，每节车厢将停放在不同的车站。假定n个车站的编号为1~n，按照第n 至 第1 的次序经过这些车站。为了便于从列车上卸掉对应的车厢
<br> 车厢的编号应该与车站的编号相同，使各车厢从前至后按照编号1 到 n的次序排列。这样在每个车站只需要卸掉列车的最后一节车厢即可。
<br> 给定任意次序的车厢，必须重新排列它们。可以通过转轨完成车厢的重排工作。转轨中有1个入轨 1个出轨 k个缓冲轨，缓冲轨位于出轨和入轨之间
说实话，这问题有点像移积木的问题，还可以类比为，通过n个队列的数据结构，将一个无序数组变得有序但是又不一样，一旦元素进入队列只能等待出队别无选择
<br> 这里有一个关键的条件是 ： 用来暂存车厢的缓冲轨的数目为 k-1有一个上限条件的

```javascript
// 数组Q[N]用来表示一个循环队列，front为当前队头的前一个位置，rear为队尾元素的位置，计算队列中元素个数的公式
        num = (rear-front+n)%n
//  一个+n然后求余数把所有的一切都解决了，满足了 rear比front大的情况，以及rear比front小的情况
/*
    rear 比 front 大 num = rear -front
    rear 比 front 小 num = n + (rear-front) 其实这里为什么会加n，那是应为rear比front小的情况是因为rear延伸到了数组的开头
    然后就通过余数统一成那个公式，说实话，这个通过求余统一的。我真的没想到
*/
```
> 跟栈有关的大多 会牵扯到 卡塔兰数 Catalan
<br> 买票问题可以理解成 将5角入栈之后再出栈，有多少种出栈方式 ,本质上来说 这是一个 pop push 的排列组合
<br> 最终是根据数据模型 一个坐标轴来证明 取反操作是与之一一对应的，来证明不符合条件的数列是C2n(n+1)

```javascript
circular queue 循环队列

function circularLinked(rear){
    this.rear = rear
}
circularLinked.prototype.enqueue = function(x){
    var obj = {},
        rear = this.rear
    obj.data = x
    obj.next = rear -> next
    rear ->next = obj
    rear = obj
}
circularLinked.prototype.dequeue = function(){
    var x = rear.data
    rear->next = rear -> next -> next

    return x
}

顺序栈 S 中有2n个元素，从栈顶到栈底 a2n -> a1 ，通过一个循环队列重新排列栈中元素，使得栈顶到栈底的元素 a2n -> a2 -> a2n-1 -> a1,设计算法实现，要求空间和时间复杂度为O(N)

var seqStack,circularQueue

// 弹出 2n-1 次
for(var i=1;i<2n;i++){
    circularQueue.enQueue(seqStack.pop())
}
// 掉头
for(var i=1;i<2n;i++){
    seqStack.push(circularQueue.deQueue())
}
// 放到队列中
for(var i=1;i<2n;i++){
    circularQueue.enQueue(seqStack.pop())
}
for(var i=0;i<2n;i++){
    if(i<n){
        circularQueue.enQueue(circularQueue.deQueue())
    }
    seqStack.push(circularQueue.deQueue())
}
其实我满足条件，但似乎效率还是差点，还是在第一次出入栈的时候就区分奇偶数来的效率高点，减少了不必要的重复操作

设计算法把十进制数转换成 2-9进制之间的任一进制输出

// 首先是个队列，因为必然先进先出，如果以10进制的形式输出，则是每次的余数再乘以对应位数
function changeBit(num,bit){
    var queue = new Queue()
    while(num!=0){
        var quotient = num /bit,
            remainder = num % bit
        queue.enQueue(remainder)
        num = quotient
    }

    var sum =0,
        count =1;
    while(queue!=null){
        sum+=queue.deQueue()*count
        cout*=10
    }
    return sum
}
// 这里还有一种方式是用栈，然后按后进先出的顺序输出，这个方法也不错

对于迷宫的问题有一个巧妙的设计，就是将访问过的置为1 即访问过就成为一个障碍点，避免了去重操作（重复访问），我的烂脑子想到的是取到下一个结点然后将该结点与

经历过迷宫的栈算法后，我觉得n个数组的排列组合也可以用这个改良
已有的栈进行比较里面是否存在这个值，大大的增加了性能损耗，哎~~~

{[()]} 三种括号是否匹配，目测需要三个栈来分别记录 是否匹配
我的想法是用3个栈来进行分别的处理，而答案是用一个栈进行处理，在出栈的时候再作一层判断，我觉得能减少消耗就减少消耗

我觉得 树 和 栈 之间还是有很多渊源的， 栈更多的算法其实与 回溯 有关 DFS 深度优先搜索

8皇后问题考察的还是栈的问题

// 可以 以横轴为起始轴，也可以以竖轴为起始轴，我们以竖轴为例 0~7
// 横轴每选一个，剩下选的空间就小了
function fn(result,cur,restChoice){

   curPoint = {x,y}
   if(x=7||x=0)

   关键是，是否需要我这样的nextRange，这个nextRange 如何产生
   nextRange if(nextRange.length==0&&count!=8){console.log('无效解')}
}

// n皇后问题
function Queue(n){
    var count =0,
        result = [], // 这里用来记录结果
        mark = [] // 这里用来标记

    fn(0,)
}

// 对每行都要有一个标记
function fn(cur,n){
    if(cur==n){
        count++
        return;
    }

    for(var i=0;i<n;i++){
    存在下一个点与当前点的判断
        if(mark[i]!=1&&(Math.abs(cur-i)!=Math.abs(result[cur]-result[i]))){

        }
        result.push(i)
        mark[i]=1
        if(mark[i]!=1&&)
        fn(result,cur+1,n)
        result.pop()
        mark[i]=0
    }
}

/*  问题规模 n

*/
mark 的下标表示的是第几行已经被占有，这里是以竖排为例的
(function(n){
    var stack = [],
        mark = new Array(n),
        count = 0
    mark.fill(0)
    for(var i=0;i<n;i++){
       stack.push(i)
       mark[i]=1
       fn(stack,mark,0,n)
       stack.pop()
       mark[i]=0
    }

    console.log(count)

    function fn(stack,mark,cur,n){
    //debugger
        if(cur+1==n){
            console.log(stack)
            count++
            return;
        }
        // cur 表示第几位，这个i表示下一位的值
        for(var i=0;i<n;i++){
            if(mark[i]!=1&&(Math.abs(stack[cur]-i)>1)){
                stack.push(i)
                mark[i]=1
                fn(stack,mark,cur+1,n)
                stack.pop()
                mark[i]=0
            }
        }
    }
})(4)

// ~ 按位取反运算 col列 ld左对角 rd右对角 board天花板

#include<iostream>
int n_queen(int col,int ld,int rd,int board){
    if(col == board) return 1;
    int tot = 0;
    for(int pos = board & (~(col | ld | rd)); pos != 0;pos -= (pos & (-pos))) tot+=n_queen(col | (pos & (-pos)) , (ld | (pos & (-pos))) << 1,(rd | (pos & (-pos))) >> 1,board);
    return tot;
}
int main(){
    std::cout<<n_queen(0,0,0,(1<<8)-1);
}

双端队列问题，双端队列是限定在线性表的两端（LEFT端和RIGHT端）都可以进行插入和删除操作的线性表
    要求  定义双端队列的存储结构
          给出队列为空的判断条件和队列为满的判断条件
          给出在指定端 L 和 R，进行插入和删除操作的算法，要求当队满时正好有一个单元为空，插入和删除不允许移动元素

function DoubleQueue(n){
    this.queue =  new Array(n)
    this.leftfront = this.leftrear = -1
    this.rightfront = this.rightrear = n

}
DoubleQueue.prototype={
    constructor : DoubleQueue,
    isNull : function(){
        return (this.leftrear == this.leftfront)&&(this.rightrear == this.rightfront)
    },
    isMax : function(){
        return (n+(this.leftrear-this.leftfront)-(this.rightrear-this.rightfront)) % n == n 诺等于就是满的
    },
    leftEn : function(x){
        if(!this.isMax()){
            if(++this.leftrear==this.rightrear)
                this.queue[0] = x
            else
                this.queue[this.leftrear]=x
        }
    },
    leftDe : function(){
        if(!this.isNull()){
            this.leftfront++
        }
    },
    rightEn : function(x){
        if(!this.isMax()){
            if(--this.rightrear == this.leftrear){
                this.queue[n-1] = x
            }
            else{
                this.queue[this.rightrear] = x
            }
        }
    },
    rightDe : function(){
        if(!this.isNull()){
            this.rightfront--
        }
    }

}

其实是2个节点的问题，上一个节点与下一个节点之间的差为1，对应的取值差要大于1，下一节点在标记数组里面是没有标记的，然后回溯的时候，这个标记节点还要回溯
若要存在上一节点与下一节点之间的关系。我就要初始化一个根节点

如何去把一个问题分析成 较优的解，对于我来说是一个值得去分析思考的

这个8皇后问题一直卡在这里，让我不知道该怎么去弄。。。


其实对于队列来说实现数据结构的同时要保证线程的开全兴，往往会在外置位添加一个开关标志 switchFlag

