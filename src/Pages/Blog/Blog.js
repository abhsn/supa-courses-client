import { useContext } from "react";
import { ThemeContext } from "../../Layout/Main";

function Blog() {
	const { darkTheme } = useContext(ThemeContext);
	const headerClassName = `text-2xl mb-2 font-bold ${(darkTheme) ? 'text-white' : 'text-blue-500'}`;
	return (
		<div className="flex flex-col gap-8">
			<div className="w-9/12 mx-auto">
				<h3 className={headerClassName}>What is CORS?</h3>
				<p>CORS is the short form of Cross-Origin Resource Sharing. CORS is an HTTP-header based mechanism that allows a server to indicate any origins other than its own from which a browser should permit loading resources. For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
			</div>

			<div className="w-9/12 mx-auto">
				<h3 className={headerClassName}>Why are you using firebase? What other options do you have to implement authentication?</h3>
				<p>Firebase is a set of hosting services for any type of applications. It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services, such as a real-time communication server. Firebase handles the backend. It's not easy to handle all of the backend(databases, client SDK) at the same time for a small company, team. So, to decrease the work of backend, you might use firebase. Firebase is popular and exists for a long time. Firebase offers a lot of features like Google Analytics, Crashlatics, Performace Monitoring, User Authentication, Database, Cloud Funtion out of the box. Firebase has client side SDKs like, android, JavaScript, iOS, flutter, unity, c++, so that developers don't need to worry about backend too much. Firebase has a lot of features in it's free tier option like, auth, database.</p><br />
				<ul className="list-disc list-inside">
					<p>Other than firebase there are few options available like,</p>
					<li className="ml-4"><a className="btn-link" href="https://aws.amazon.com/amplify/">Amplify</a></li>
					<li className="ml-4"><a className="btn-link" href="https://www.mongodb.com/developer/products/realm/">realm</a></li>
					<li className="ml-4"><a className="btn-link" href="https://supabase.com/">supabase</a></li>
					<li className="ml-4"><a className="btn-link" href="https://nhost.io/">Nhost</a></li>
					<li className="ml-4"><a className="btn-link" href="https://appwrite.io/">Appwrite</a></li>
				</ul>
			</div>

			<div className="w-9/12 mx-auto">
				<h3 className={headerClassName}>How does the private route work?</h3>
				<p>Private router simply doesn't let user access the route that aren't supposed to. To get a working private route, first, we need to check if the user is logged in or not. To change user log in state we can use useState. We can use the element that we want to hide in a child in another element that shows the child if the user is logged in. And we can set route to that parent element. When a user is not logged we can send the user to login page. But, theres a problem when a logged in user reload the page. When they reload the page private route will send the user to login page. This happens because of JavaScript asynchronous behaviour. To prevent that we can use a state that prevent redirecting until user information is retrived.</p>
			</div>

			<div className="w-9/12 mx-auto">
				<h3 className={headerClassName}>What is Node? How does Node work?</h3>
				<p>Node.js is a JavaScript runtime, not a programming language itself. It lets developer use JavaScript at the backend. So that the developer don't need to worry about multiple language. Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionalities. Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions. Node.js's modules use an API designed to reduce the complexity of writing server applications. JavaScript is the only language that Node.js supports natively, but many compile-to-JS languages are available. As a result, Node.js applications can be written in CoffeeScript, Dart, TypeScript, ClojureScript and others. </p>
			</div>
		</div>
	);
}

export default Blog;