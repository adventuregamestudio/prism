import markup from './prism-markup';

export default /** @type {import("../types").LanguageProto<'xml-doc'>} */ ({
	id: 'xml-doc',
	require: markup,
	grammar({ getLanguage }) {
		const tag = getLanguage('markup').tag;

		return {
			'slash': {
				pattern: /\/\/\/.*/,
				greedy: true,
				alias: 'comment',
				inside: {
					'tag': tag
				}
			},
			'tick': {
				pattern: /'''.*/,
				greedy: true,
				alias: 'comment',
				inside: {
					'tag': tag
				}
			}
		};
	}
});
