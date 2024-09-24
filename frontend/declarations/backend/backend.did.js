export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getJokeCounter' : IDL.Func([], [IDL.Nat], []),
    'incrementJokeCounter' : IDL.Func([], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
