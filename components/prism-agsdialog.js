Prism.languages.agsdialog = {
	'line': {
		pattern: /(\n|^).*/,
		lookbehind: true,
		inside: {
			'script-line': {
				pattern: /(^[ \t]+).*/,
				lookbehind: true,
				inside: Prism.languages.ags
			},
			'comment': /\/\/.*/,
			'character-line': {
				pattern: /^\w+:.*/,
				inside: {
					'character-alias': {
						pattern: /^(?:(?:narrato|playe)r)\b/,
						alias: 'builtin',
					},
					'character-name': {
						pattern: /^\w+/,
						alias: 'symbol'
					},
					'dialog-separator': {
						pattern: /^:/,
						alias: 'punctuation'
					},
					// This is documented as being "..." but any number of "."
					// characters will work (as does an empty line).
					'pause-command': {
						pattern: /^[ \t]*\.+(?:[ \t]*$|\/\/)/,
						inside: {
							'symbol': /\.+/
						}
					},
					// Don't highlight dialog lines but prevent addtional
					// non-greedy matches from occuring.
					'dialog': /.*/
				}
			},
			'dialog-index': {
				pattern: /^@(?:[0-9]+|S)\b/,
				alias: 'variable'
			},
			'keyword': /^(?:goto-(?:dialog|previous)|option-o(?:ff(?:-forever)?|n)|r(?:eturn|un-script)|stop)\b/
		}
	}
};
