class RecentCounter {
    queue : number[] = []

    constructor() {
    }


    ping(t: number): number {
        while(this.queue.length>0 && this.queue[0] < t - 3000){
            this.queue.shift()
        }
        
        this.queue.push(t)
        return this.queue.length
    }
}