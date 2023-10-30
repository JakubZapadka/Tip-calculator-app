<script>
  import logo from './assets/logo.svg'
  const percent_data = [5, 10, 15, 25, 50]

  let total_cash
  let radioWithInput = {}
  let inputRadio = {}
  let percent_group
  let nr_of_people
  let dynamicErrorText = ''

  function checkRadio(e) {
    radioWithInput.checked = true
    percent_group = e.target.value
  }
  
  $: nr_of_people == 0 ? dynamicErrorText = "Can't be zero" : dynamicErrorText = ""

  let amount_tip_person
  let amount_tip_total = 0
  let amount_tip_person_num

  $: amount_tip_person = ((total_cash/100)*percent_group / nr_of_people).toFixed(2)
  $: amount_tip_person_num = parseFloat(amount_tip_person)
  $: amount_tip_total = (total_cash/nr_of_people+amount_tip_person_num).toFixed(2)

  let isDisabled = true

  $: isDisabled = (total_cash == undefined || total_cash == '') && (percent_group == undefined || percent_group == '') && (nr_of_people == undefined || nr_of_people == '')

  function reset(){
    [total_cash, percent_group, nr_of_people, inputRadio.value] = [undefined, undefined, undefined, '']
  }
</script>

<main class="bg-light-grayish-cyan min-h-screen flex flex-col items-center overflow-hidden lg:justify-center">
  <div class="flex justify-center pt-10 pb-10">
    <img src={logo} alt="" class="">
  </div>
  <section id="calculator" class="bg-white-custom rounded-2xl w-full max-w-[500px] lg:max-w-[800px]">
    <form class="flex flex-col gap-6 p-6 lg:flex-row">
      <div class="flex gap-4 flex-col lg:w-1/2">
        <label for="cash" class="text-dark-grayish-cyan">Bill</label>
        <input type="number" name="cash" id="cash" bind:value={total_cash} class="bg-no-repeat bg-scroll bg-[url('./assets/icon-dollar.svg')] bg-left-10 text-very-dark-cyan rounded-md pl-8 pr-4 text-right bg-very-light-grayish-cyan focus:outline-none focus:ring focus:ring-strong-cyan text-2xl" placeholder="0">

        <label for="percent" class="text-dark-grayish-cyan">Select Tip %</label>
        <div class="grid grid-cols-2 grid-flow-row gap-4 text-center lg:grid-cols-3" id="percent_box">
          {#each percent_data as percent, index}
            <input type="radio" name="percent_group" id={"prc"+index} value={percent} bind:group={percent_group} class="hidden text-2xl">
            <label for={"prc"+index} class="percent py-2 bg-very-dark-cyan rounded-md text-white-custom">{percent}%</label>
          {/each}
          <label class="hidden">
              <input type="radio" name="percent_group" id="radioWithInput" bind:this={radioWithInput} bind:group={percent_group}>
              Option with Input Text
          </label>
          <input type="number" id="textInput" on:input={checkRadio} on:focus={checkRadio} bind:this={inputRadio} placeholder="Custom" class="bg-very-light-grayish-cyan text-right px-2 rounded-md text-very-dark-cyan focus:outline-none focus:ring focus:ring-strong-cyan placeholder:text-dark-grayish-cyan text-2xl">
        </div>

        <div class="flex justify-between">
          <label for="nr_of_people" class="text-dark-grayish-cyan">Number of People</label>
          <span id="errorBox" class="text-red-500">{dynamicErrorText}</span>
        </div>
        <input type="number" name="nr_of_people" id="nr_of_people" bind:value={nr_of_people} placeholder="0" class="bg-no-repeat bg-scroll bg-[url('./assets/icon-person.svg')] bg-left-10 text-very-dark-cyan rounded-md pl-8 pr-4 text-right bg-very-light-grayish-cyan border-2 text-2xl
        {nr_of_people == 0? 'border-rose-500 focus-visible:outline-none': 'border-very-light-grayish-cyan focus-visible:outline-strong-cyan'}
        ">
      </div>
      <section class="flex flex-col p-6 gap-6 bg-very-dark-cyan rounded-md lg:w-1/2 lg:justify-between">
        <div class="flex flex-col gap-6">
          {#each [amount_tip_person, amount_tip_total] as amount}
          <div class="flex space-between justify-between items-center">
            <div class="flex flex-col">
              <span class="text-white-custom">Tip Amount</span>
              <span class="text-grayish-cyan text-sm">/ person</span>
            </div>
            <span class="text-strong-cyan text-3xl lg:text-4xl">${amount != "NaN" && amount != "Infinity" ? amount: "0.00"}</span>
          </div>
          {/each}
        </div>
        <button type="reset" class="bg-strong-cyan rounded-md py-2 text-very-dark-cyan disabled:bg-grayish-cyan" disabled={isDisabled} on:click={reset}>RESET</button>
      </section>
    </form>
  </section>
  
  <div class="attribution absolute bottom-0 w-full text-xs text-center">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="text-attribution-custom">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/JakubZapadka" class="text-attribution-custom">JakubZapadka</a>.
  </div>
</main>

<style>

</style>