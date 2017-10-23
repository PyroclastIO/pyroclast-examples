const rewards = 1;

export function initializeView(params) {
  return {
    rewardsLeft: rewards,
    threshold: 0.20,
    results: []
  };
}

export function updateView(params, state, record) {
  if (record.action === 'restart') {
    state.rewardsLeft = rewards;
    return state;
  } else {
    if (state.rewardsLeft > 0)  {
      state.rewardsLeft--;
      if (Math.random() <= state.threshold) {
        state.results = (state.results || [])
          .concat({eventType: 'lotteryResult',
                   id: record.id,
                   user: record.user,
                   status: 'win'});
      } else {
        state.results = (state.results || [])
          .concat({eventType: 'lotteryResult',
                   id: record.id,
                   user: record.user,
                   status: 'lose'});
      }

      return state;
    } else {
      state.results = (state.results || [])
        .concat({eventType: 'lotteryResult',
                 id: record.id,
                 status: 'drained'});
      return state;
    }
  }
}
