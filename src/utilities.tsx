export const roundNumberOfPages = (number: number, arrayLength: number) =>
  Math.ceil(number / arrayLength);

export const parseAgents = (
  agents: Array<{ id: number; person: string; type: string }>,
) => {
  return agents.map((agent, i) => {
    if (i === 0) return `${agent.person}`;
    else return `; ${agent.person}`;
  });
};

export const gbaScrollBar = {
  "&::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#DDDDDD",
    borderRadius: "0px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#BBBBBB",
    borderRadius: "30px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#A19CA1",
  },
};
