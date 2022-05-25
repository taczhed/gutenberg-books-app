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
