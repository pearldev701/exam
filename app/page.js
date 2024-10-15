
import Image from "next/image";

export default function Home() {
  return (
    <div>
          <header>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
     <section>
        <h2>Welcome to techstart</h2>
        <p>we help build your tech dreams</p>
        <h2>Our services</h2>
        <ul>
            <li>web development</li>
            <li>app development</li>
            <li>cyber security</li>
        </ul>
     </section>
     <footer>
        <div class="contact-info">
            <p>tonimas plaza ifite awka</p>
            <p>phone:4675599864</p>
            <p>email:dfghjk@gmail.com</p>
        </div>
     </footer>
    </div>
  );
}
