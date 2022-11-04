export class Vote {
    totalVotes=0;

    upVote(){
        this.totalVotes++;
    }
    downVote(){
        this.totalVotes--;
    }
}
