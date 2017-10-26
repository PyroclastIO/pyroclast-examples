export function initializeView(params) {
  return {involvedUsers: {}};
}

export function updateView(params, state, record) {
  state.involvedUsers[record.user] = (state.involvedUsers[record.user] || 0) + 1;

  let count = Object.values(state.involvedUsers)
      .reduce((n, u) => n + u, 0);

  if (count >= params.threshold) {
    let users = Object.keys(state.involvedUsers)
        .map((u) => {
          return {
            user: u,
            ip: record.ip,
            page: record.page
          };
        });

    state.suspiciousUsers = (state.suspiciousUsers || []).concat(users);
    state.involvedUsers = {};

    return state;
  } else {
    return state;
  }
}
