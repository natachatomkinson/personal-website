<script>
  export let name, frameworks, tools, languages, interests;
</script>

<main>
  <h1>Hello, I am {name}!</h1>
  <div class="home-main-description">
    <p>Well, I have been busy</p>
    <p>writing production apps in these languages: {languages.join(", ")}</p>
    <p>using these frameworks: {frameworks.join(", ")}</p>
    <p>with some of these really cool tools: {tools.join(", ")}</p>
    <p>while learning more about: {interests.join(", ")}</p>
  </div>
  <a
    href="mailto:website@natachatomkinson.co.uk"
    target="_blank"
    rel="noopener noreferrer"
  >
    Email me
  </a>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2.5em;
    font-weight: 100;
  }

  .home-main-description {
    max-width: 900px;
    margin: 100px auto;
  }

  .home-main-description p {
    padding-left: 10px;
    text-align: left;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
