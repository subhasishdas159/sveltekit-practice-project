<script lang="ts">
	import { afterNavigate, beforeNavigate, goto, preloadCode, preloadData } from '$app/navigation';

	type Todo = {
		id: string;
		text: string;
		done: boolean;
	};

	type Filter = 'all' | 'active' | 'completed';

	let todos = $state<Todo[]>([]);
	let todosCount = $state<number>(0);
	let filter = $state<Filter>('all');
	// const filteredTodos = () => {
	// 	const filteredTodosList = todos.filter((item) => {
	// 		if (filter === 'completed') {
	// 			return item.done;
	// 		} else if (filter === 'active') {
	// 			return !item.done;
	// 		}
	// 		return true;
	// 	});

	// 	return filteredTodosList;
	// };
	const filteredTodos = $derived(
		todos.filter((item) => {
			if (filter === 'completed') {
				return item.done;
			} else if (filter === 'active') {
				return !item.done;
			}
			return true;
		})
	);

	$effect(() => {
		console.log('hello');
	});

	const addTodo = (ev: KeyboardEvent) => {
		if (ev.key !== 'Enter') return;
		const el = ev.target as HTMLInputElement;

		todos = [{ id: window.crypto.randomUUID(), text: el.value, done: false }, ...todos];
		el.value = '';
	};

	const toggleTodo = (id: string) => {
		todos = todos.map((item) => {
			if (item.id === id) {
				return { ...item, done: !item.done };
			}
			return item;
		});
	};

	$effect(() => {
		console.log('todos', todos);
		console.log('todosCount', todosCount);
		console.log('filter', filter);
		console.log('filteredTodos', filteredTodos);
	});

	$effect(() => {
		todosCount = todos.length;
	});

	beforeNavigate((navigation) => {
		console.log('before', navigation);
	});

	afterNavigate((navigation) => {
		console.log('after', navigation);
	});
</script>

<button
	class="border font-bold rounded-full px-4 py-2"
	onmouseover={() => {
		preloadCode('/product/1234');
	}}
	onfocus={() => {
		preloadData('/product/1234');
	}}
	onclick={() => {
		goto('/product/1234');
	}}>goto product</button
>
<div class="max-w-7xl mx-auto">
	<div class="container mx-auto px-4">
		<div class="max-w-md py-8">
			<div class="flex gap-4 mb-4">
				{#each ['all', 'active', 'completed'] as item}
					<button
						onclick={() => {
							filter = item as Filter;
						}}
						class="border rounded-full px-4 py-1 {filter === item && 'text-blue-600 font-bold'}"
						>{item}</button
					>
				{/each}
			</div>
			<input
				type="text"
				onkeydown={addTodo}
				placeholder="Enter new todo"
				class="border shadow-inner bg-slate-50 rounded-lg px-4 py-2 w-full mb-4"
			/>
			<!-- {#each todos as todo, i (todo.id)} -->
			{#each filteredTodos as todo (todo.id)}
				<div class="border shadow rounded-lg mt-2 px-4 py-2">
					<input
						class="mr-2 scale-150"
						checked={todo.done}
						onchange={() => toggleTodo(todo.id)}
						type="checkbox"
						value={todo.done}
					/>
					<input id="todo" type="text" value={todo.text} />
				</div>
			{/each}
		</div>
	</div>
</div>
