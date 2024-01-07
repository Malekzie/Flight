<script lang="ts">
	import { enhance } from "$app/forms";

	import type { ActionData } from "./$types";

	export let form: ActionData;

</script>
<div class="flex flex-col justify-center items-center h-screen align-middle">
	
	<h1>Login to your account</h1>
	<form method="post" use:enhance>
		<label for="username">Username</label>
		<input name="username" id="username" class="text-black"/><br />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" class="text-black"/><br />
		<button type="submit" class="btn variant-filled-surface rounded-lg mt-2 w-full ">Submit</button>
	</form>
	{#if form?.message}
		<p>{form.message}</p>
	{/if}
	<a href="/member/register">Create an account</a>
</div>