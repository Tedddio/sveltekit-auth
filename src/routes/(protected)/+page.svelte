<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Profile</h1>
<p>User id: {data.userId}</p>
<p>Email: {data.email}</p>
<form action="/logout" method="post">
  <button type="submit">Logout</button>
</form>
