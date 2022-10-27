import { Document, Image, Page, StyleSheet, Text } from "@react-pdf/renderer";

function SaveAsPDF({ course }) {
	const { name, details, author, rating, img } = course;

	const styles = StyleSheet.create({
		header: {
			fontSize: 32,
			marginRight: 30,
			marginLeft: 30,
			marginTop: 30,
			marginBottom: 20
		},
		details: {
			fontSize: 16,
			marginRight: 30,
			marginLeft: 30,
			marginBottom: 20
		},
		author: {
			fontSize: 12,
			marginRight: 30,
			marginLeft: 30,
		},
		rating: {
			fontSize: 12,
			marginRight: 30,
			marginLeft: 30,
		},
		picture: {
			marginLeft: 30,
			marginRight: 30,
			marginTop: 20
		}
	});

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<Text style={styles.header}>{name}</Text>
				<Text style={styles.details}>{details}</Text>
				<Text style={styles.author}>by {author}</Text>
				<Text style={styles.rating}>Ratings: {rating}</Text>
				<Image style={styles.picture} src={img}></Image>
			</Page>
		</Document>
	);
}

export default SaveAsPDF;