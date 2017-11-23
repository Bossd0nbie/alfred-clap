import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();

	const result = await alfy('ava is pretty dope at testing');

	t.deepEqual(result[0], {
		title: '👏🏻 ava 👏🏻 is 👏🏻 pretty 👏🏻 dope 👏🏻 at 👏🏻 testing 👏🏻 ',
		arg: '👏🏻 ava 👏🏻 is 👏🏻 pretty 👏🏻 dope 👏🏻 at 👏🏻 testing 👏🏻 ',
	});
});