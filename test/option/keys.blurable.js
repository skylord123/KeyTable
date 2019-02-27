describe('KeyTable - keys.blurable', function() {
	dt.libs({
		js: ['jquery', 'datatables', 'keytable'],
		css: ['datatables', 'keytable']
	});

	describe('Check the defaults', function() {
		let table;

		dt.html('basic');
		it('Is blurable by default', function() {
			table = $('#example').DataTable({
				keys: true
			});

			expect($('.focus').length).toBe(0);
		});
		it('Select a cell', function() {
			$('tbody tr:eq(2) td:eq(0)').click();
			expect($('.focus').length).toBe(1);
		});
		// NOTE: this should be 0 but isn't due to DD-779.
		// TK COLIN Will complete this test once that Jira is completed.
		it('Select a search input element', function() {
			$('div.dataTables_filter input').click().focus();
			expect($('.focus').length).toBe(1);
		});		
	});

	// describe('Test with two tables', function() {
	// 	let table1;
	// 	let table2;

	// 	dt.html('two_tables');
	// 	it('Can have it on one table but not other', function() {
	// 		table1 = $('#example_one').DataTable({
	// 			keys: {
	// 				className: 'unit_test'
	// 			}
	// 		});

	// 		table2 = $('#example_two').DataTable({
	// 			keys: true
	// 		});

	// 		$('#example_one tbody tr:eq(2) td:eq(0)').click();

	// 		expect($('.focus').length).toBe(0);
	// 		expect($('.unit_test').length).toBe(1);
	// 	});
	// 	it('Deselect', function() {
	// 		// This is clumsy but the clicks on other elements don't deselect as expected (possibly related to DD-779)
	// 		table1.search('3').draw();

	// 		expect($('.focus').length).toBe(0);
	// 		expect($('.unit_test').length).toBe(0);
	// 	});
	// 	it('Clicking other table uses default', function() {
	// 		$('#example_two tbody tr:eq(2) td:eq(0)').click();

	// 		expect($('.focus').length).toBe(1);
	// 		expect($('.unit_test').length).toBe(0);
	// 	});
	// });
});
