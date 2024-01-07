<script>
  import Icon from '@iconify/svelte';
</script>

<section class="flex justify-between">
	<!-- Logo -->
	<div class=" ml-10">
		<a href="/"><img src="logo.png" alt="Flight Logo" class="w-auto h-32" /></a>
	</div>
	<!-- Searchbar -->
	<div class="">
		<input type="text" placeholder="Search" class="mt-10 w-[20rem] mx-5 rounded-lg text-black" />
	</div>
	<!-- Buttons -->
	<div class=" flex justify-center items-center gap-3">
		<a href="/">A</a>
		<a href="/">A</a>
		<a href="/">A</a>
		<a href="/">A</a>
		<a href="/">A</a>
		<a href="/">A</a>
	</div>
	<!-- Login -->
	<div class=" mr-10 flex justify-center items-center gap-2">
		<a href="/member/login"><Icon icon="gg:profile" class="text-3xl"/></a>
		<button><Icon icon="mdi:cart-outline" class="text-3xl"/></button>
	</div>
</section>