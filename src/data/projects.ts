export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  status: 'live' | 'wip' | 'concept';
  emoji: string;
}

/**
 * Add new projects here!
 * status options: 'live' | 'wip' | 'concept'
 */
export const projects: Project[] = [
  // Example (uncomment and edit to add your first real project):
  // {
  //   title: "Agent Framework X",
  //   description: "A lightweight framework for building autonomous AI agents that can reason and act.",
  //   tags: ["AI", "Agents", "TypeScript"],
  //   url: "https://youragent.ai",
  //   github: "https://github.com/yourusername/agent-x",
  //   status: "live",
  //   emoji: "🤖",
  // },
];
