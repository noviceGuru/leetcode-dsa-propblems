class MovingAverage {
    queue = []
    sum = 0
    size: number
    
    constructor(size: number) {
        this.size = size
    }

    next(val: number): number {
        if(this.queue.length < (this.size)) {
            this.queue.push(val)
            this.sum = this.sum + val
        } else {
            this.sum = this.sum - this.queue[0]
            this.queue.shift()
            this.queue.push(val)
            this.sum = this.sum + val
        }
        
        console.log(this.queue.length, this.sum)
        
        return this.sum/this.queue.length
    }

}