export default function DocsPage({ params }: {
	params: { slug: string[] };
}) {
	if (params.slug?.length === 2) {
		return (
			<div>
				<h1>
					Docs page for feature: {params.slug[0]} and concept: {params.slug[1]}
				</h1>
			</div>
		)
	} else if (params.slug?.length === 1) {
		return (
			<div>
				<h1>
					Docs page for feature:{params.slug[0]}
				</h1>
			</div>
		)
	} else {
		return (
			<div>
				<h1>
					Docs home page
				</h1>
			</div>
		)
	}

}