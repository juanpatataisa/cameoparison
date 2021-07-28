<script>
  import { createEventDispatcher } from 'svelte';
  import { fly, crossfade, scale } from 'svelte/transition';
  import * as eases from 'svelte/easing';
  import { sleep, pickRandom, loadImage } from '../utils';
  import Card from '../components/Card.svelte';

  export let selection;

  const loadDetails = async (celeb) => {
    const res = await fetch(
      `https://cameo-explorer.netlify.app/celebs/${celeb}.json`
    );
    const details = await res.json();
    await loadImage(details.image);
    return details;
  };

  const promises = selection.map((round) =>
    Promise.all([loadDetails(round.a.id), loadDetails(round.b.id)])
  );

  const dispatch = createEventDispatcher();
  const [send, receive] = crossfade({
    easing: eases.cubicOut,
    duration: 300,
  });

  let ready = true;
  let i = 0;
  let lastResult;
  let showIcon;
  let gameEnd = false;
  const results = Array(selection.length);

  $: score = results.filter((x) => x === 'right').length;

  const submit = async (a, b, sign) => {
    lastResult = Math.sign(a.price - b.price) === sign ? 'right' : 'wrong';
    showIcon = true;
    await sleep(1200);
    showIcon = false;
    results[i] = lastResult;
    await sleep(400);
    if (i < selection.length - 1) {
      i += 1;
    } else {
      gameEnd = true;
    }
  };

  const pickEndMessage = (rightAnswers, questions) => {
    const ratio = rightAnswers / questions;
    if (ratio < 0.5)
      return pickRandom(['Ouch', `That wasn't very good`, 'Must try harder']);
    if (ratio < 0.8) return pickRandom(['Not bad!', 'Keep practicing!']);
    if (ratio < 1) return pickRandom(['So close!', 'Almost there!']);
    return pickRandom(['You rock!', 'Flawless victory']);
  };
</script>

<header>
  <p>
    {#if !gameEnd}
      Tap on the more monetisable celebrity's face, or tap 'same price' if
      society values them equally.
    {/if}
  </p>
</header>

<div class="game-container">
  {#if ready}
    {#if gameEnd}
      <div
        class="game-end"
        in:scale={{ easing: eases.elasticOut, duration: 800 }}
      >
        <p>Your score is...</p>
        <strong>{score}/{results.length}</strong>
        <p>{pickEndMessage(score, results.length)}</p>
        <button on:click={() => dispatch('restart')}>Back to main screen</button
        >
      </div>
    {:else}
      {#await promises[i]}
        <div class="loading">
          <div class="loading-animation">Loading</div>
        </div>
      {:then [a, b]}
        <div
          class="game"
          in:fly={{ duration: 200, y: 20 }}
          out:fly={{ duration: 200, y: -20 }}
          on:outrostart={() => (ready = false)}
          on:outroend={() => (ready = true)}
        >
          <div class="card-container">
            <!-- the sign is 1 because we're gessing that a.price > b.price, and therefore Math.sign(a.price - b.price) = 1 -->
            <Card
              celeb={a}
              on:select={() => {
                submit(a, b, 1);
              }}
              winner={a.price >= b.price}
              showPrice={showIcon}
            />
          </div>
          <div>
            <!-- the sign is 0 because we're gessing that a.price = b.price, and therefore Math.sign(a.price - b.price) = 0 -->
            <button
              class="same"
              on:click={() => {
                submit(a, b, 0);
              }}
            >
              Same price
            </button>
          </div>
          <div class="card-container">
            <!-- the sign is -1 because we're gessing that a.price < b.price, and therefore Math.sign(a.price - b.price) = -1 -->
            <Card
              celeb={b}
              on:select={() => {
                submit(a, b, -1);
              }}
              winner={b.price >= a.price}
              showPrice={showIcon}
            />
          </div>
        </div>
      {:catch}
        <p class="error">Ooops! Failed to load data</p>
      {/await}
    {/if}
  {/if}
</div>

{#if showIcon}
  <img
    in:fly={{ x: 100, duration: 200 }}
    out:send={{ key: i }}
    class="giant-result"
    src="/icons/{lastResult}.svg"
    alt="{lastResult} answer"
  />
{/if}

<div
  class="results"
  style="grid-template-columns: repeat({results.length}, 1fr);"
>
  {#each results as result, i}
    <span class="result">
      {#if result}
        <img
          src="/icons/{result}.svg"
          alt="{result} answer"
          in:receive={{ key: i }}
        />
      {/if}
    </span>
  {/each}
</div>

<style>
  .game-container {
    flex: 1;
  }

  .loading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
  }

  .loading-animation:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation: ellipsis steps(4, end) 750ms infinite;
    content: '\2026'; /* ascii code for the ellipsis character */
    width: 0px;
  }

  @keyframes ellipsis {
    to {
      width: 40px;
    }
  }

  .game {
    display: grid;
    grid-template-rows: 1fr 2em 1fr;
    grid-gap: 0.5em;
    width: 100%;
    height: 100%;
    max-width: min(100%, 40vh);
    margin: 0 auto;
  }

  .game > div {
    display: flex;
    align-items: center;
  }

  .same {
    width: 100%;
    margin: 0;
  }

  .error {
    color: red;
  }

  .giant-result {
    position: fixed;
    width: 50vmin;
    height: 50vmin;
    left: calc(50vw - 25vmin);
    top: calc(50vh - 25vmin);
    opacity: 0.5;
  }

  .results {
    display: grid;
    grid-gap: 0.2em;
    width: 100%;
    max-width: 320px;
    margin: 1em auto 0 auto;
  }

  .result {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    padding: 0 0 100% 0;
  }

  .result img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  @media (min-width: 640px) {
    .game {
      max-width: 100%;
      grid-template-rows: none;
      grid-template-columns: 1fr 8em 1fr;

      /* work around safari bug*/
      max-height: calc(100vh - 6em);
    }

    .same {
      height: 8em;
    }

    .game-end {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .game-end strong {
      font-size: 6em;
      font-weight: 700;
    }
  }
</style>
