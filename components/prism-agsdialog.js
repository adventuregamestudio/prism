Prism.languages.agsdialog = {
	'line': {
		pattern: /(\n|^).*/,
		lookbehind: true,
		inside: {
			'character-line': {
				pattern: /^\w+:[ \t]+.*/,
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
					// Don't highlight dialog lines but prevent addtional
					// matches.  The "..." pause command and commenting are not
					// considered special because commenting rules appears to be
					// inconsistent in the original parser.
					'dialog': {
						pattern: /([ \t]+).*/,
						lookbehind: true
					}
				}
			},
			'dialog-index': {
				pattern: /^@(?:[0-9]+|S)\b/,
				alias: 'variable'
			},
			'keyword': /^(?:goto-(?:dialog|previous)|option-o(?:ff(?:-forever)?|n)|r(?:eturn|un-script)|stop)\b/,
			'script-line': {
				pattern: /(^[ \t]+).*/,
				lookbehind: true,
				inside: Prism.languages.ags
			},
			'comment': /\/\/.*/
		}
	}
}
