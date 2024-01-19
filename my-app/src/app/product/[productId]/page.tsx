export default function ProductDetails({ params }: {
	params: { productId: string }
}) {
	return (
		<div>
			<h1>
				Products details page {params.productId}
			</h1>
		</div>
	)
}