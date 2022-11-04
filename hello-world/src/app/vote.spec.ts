import { Vote } from './vote';

describe('Vote', () => {
  const vote = new Vote();

  it('should increment total votes when upvoted', () => {
    vote.upVote()
    
    expect(vote.totalVotes).toBe(1);
  });

  it('should decreement total votes when downvoted', () => {
    
    vote.downVote()
    
    expect(vote.totalVotes).toBe(-1);
  });
});
