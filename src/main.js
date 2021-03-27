import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Natacha Tomkinson",
    languages: ["Javascript", "Node", "Ruby", "Elixir"],
    frameworks: ["React", "Rails", "Phoenix"],
    tools: [
      "intellij",
      "vscode",
      "github",
      "docker",
      "docker-compose",
      "aws",
      "zoxide",
    ],
    interests: ["C", "Svelte"],
  },
});

export default app;
